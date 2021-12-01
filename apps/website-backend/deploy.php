<?php
namespace Deployer;

use Deployer\Task\Context;

require 'recipe/common.php';
require 'deployer/rsync.php';

inventory('deployer/inventory.yml');

set('application', 'website-backend');
set('ssh_multiplexing', true);
set('repository', 'https://github.com/mint-vernetzt/mint-vernetzt.git');
//set('repository', '/git/');
set('build_path', '/tmp/build');
set('allow_anonymous_stats', false);
set('git_tty', true);
set('use_relative_symlink', true);
set('app_path', 'apps/website-backend/');

set('docroot', 'web');
set('shared_dirs', ['{{docroot}}/app/uploads',]);
set('shared_files', [
  '.env',
  '{{docroot}}/.htaccess',
  '{{docroot}}/robots.txt',
]);

set('writable_dirs', [
  '{{docroot}}/app/uploads',
]);

set('copy_dirs', [
  'vendor',
  '{{docroot}}',
]);

set('rsync_src', '{{build_path}}/current/{{app_path}}');
set('rsync', [
  'exclude'       => [],
  'exclude-file'  => 'deployer/rsync-exclude.txt',
  'include'       => [],
  'include-file'  => false,
  'filter'        => [],
  'filter-file'   => false,
  'filter-perdir' => false,
  'flags'         => 'azchEv',
  'options'       => ['stats', 'links', 'delete', 'delete-after', 'force'],
  'timeout'       => 3600,
]);


desc('Installing vendors - in {{app_path}}');
task('my:vendors', function () {
    $actualReleasePath = get('release_path');
    set('release_path', $actualReleasePath.'/{{app_path}}');
    invoke('deploy:vendors');
    set('release_path', $actualReleasePath);
});

task('deploy:copy_dirs', function () {
    if (has('previous_release')) {
        foreach (get('copy_dirs') as $dir) {
            if (test("[ -d {{previous_release}}/$dir ]")) {
                run("mkdir -p {{release_path}}/$dir");
                run("cp -a {{previous_release}}/$dir {{release_path}}");
            }
        }
    }
});

task('pull:db', function () {
  // set('wp_cli', run('which wp'));
  set('wp_cli', './vendor/bin/wp');
  set('dump_file_name', 'dump.sql.gz');
  cd('{{release_path}}');
  $exportOutput = run('{{wp_cli}} db export - |gzip -9 > {{dump_file_name}}');
  download('{{release_path}}/{{dump_file_name}}', '{{dump_file_name}}');
  run('rm {{dump_file_name}}');
});

task('pull:uploads', function () {
  $server = Context::get()->getHost();
  $host = $server->getRealHostname();
  $port = $server->getPort() ? ' -p' . $server->getPort() : '';
  $sshArguments = $server->getSshArguments();
  $user = !$server->getUser() ? '' : $server->getUser() . '@';
  set('upload_dir', '{{deploy_path}}/shared/web/app/uploads');
  runLocally("rsync -e 'ssh$port $sshArguments' -avc '$user$host:{{upload_dir}}' web/app/");
});

task('wp:plugin:activate:all', function () {
    cd('{{deploy_path}}/current');
    $result = run("{{deploy_path}}/current/vendor/bin/wp plugin activate --all");
    writeln($result);
});

// Tasks
desc('Build website-backend');
task('build', function () {

    set('keep_releases', 1);
    set('deploy_path', get('build_path'));
    invoke('deploy:prepare');
    invoke('deploy:release');
    invoke('deploy:update_code');
    invoke('my:vendors');
    invoke('deploy:symlink');
    invoke('cleanup');
})->local();


task('release', [
  'deploy:prepare',
  'deploy:release',
  'deploy:copy_dirs',
  'rsync',
  'deploy:shared',
  'deploy:symlink',
  'wp:plugin:activate:all'
//  'deploy:opcode',
]);

task('firstrelease', [
  'deploy:prepare',
  'deploy:release',
  'rsync',
  'deploy:shared',
  'deploy:symlink',
]);

task('deploy', [
  'build',
  'release',
  'cleanup',
  'success'
]);

task('firstdeploy', [
  'build',
  'firstrelease',
  'cleanup',
  'success'
]);

after('deploy:failed', 'deploy:unlock');
