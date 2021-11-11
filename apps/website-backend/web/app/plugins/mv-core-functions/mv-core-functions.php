<?php
/**
 * Plugin Name:       MINTvernetzt Core Functions
 * Description:       Core Functions
 * Requires at least: 5.8
 * Requires PHP:      7.4
 * Version:           1.0
 * Author:            Manuel Portela
 * Text Domain:       mv-core
 */


if (!defined('ABSPATH')) {
  exit;
}

function mvCoreFunctionsAllowSvgs()
{
  return [
    'svg' => 'image/svg+xml',
    'svgz' => 'image/svg+xml',
  ];
}
add_filter('upload_mimes', 'mvCoreFunctionsAllowSvgs', 999);


/*
 * @see http://wordpress.org/plugins/svg-support/ by Benbodhi
 */
function mvCoreFunctionsUploadCheck($checked, $file, $filename, $mimes)
{
  if (!$checked['type']) {

    $check_filetype = wp_check_filetype($filename, $mimes);
    $ext = $check_filetype['ext'];
    $type = $check_filetype['type'];
    $proper_filename = $filename;

    if ($type && 0 === strpos($type, 'image/') && $ext !== 'svg') {
      $ext = $type = false;
    }

    $checked = compact('ext', 'type', 'proper_filename');
  }

  return $checked;
}

add_filter('wp_check_filetype_and_ext', 'mvCoreFunctionsUploadCheck', 10, 4);
