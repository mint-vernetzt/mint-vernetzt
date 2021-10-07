<?php
namespace Deployer;

require 'recipe/common.php';
require 'deployer/rsync.php';

inventory('deployer/inventory.yml');

set('application', 'website-backend');
set('ssh_multiplexing', true);
//set('repository', 'https://github.com/mint-vernetzt/mint-vernetzt.git');
set('repository', '/git/');
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
//  'deploy:opcode',
]);


task('deploy', [
  'build',
  'release',
  'cleanup',
  'success'
]);


after('deploy:failed', 'deploy:unlock');
