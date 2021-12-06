<?php
/**
 * Plugin Name:       MINTvernetzt Sidebar
 * Text Domain:       mint-vernetzt-sidebar
 */

$defaultFields = [
  'id' => ['type' => 'integer'],
  'title' => ['type' => 'string'],
  'filename' => ['type' => 'string'],
  'fileSizeHumanReadable' => ['type' => 'string'],
  'icon' => ['type' => 'string'],
  'url' => ['type' => 'string'],
  'subtype' => ['type' => 'string'],
];

function register_mint_vernetzt_sidebar()
{
  wp_register_script(
    'mint_vernetzt-sidebar-js',
    plugins_url('build/index.js', __FILE__),
    [
      'wp-plugins',
      'wp-edit-post',
      'wp-element',
      'wp-components'
    ]
  );
}

add_action('init', 'register_mint_vernetzt_sidebar');

function sidebar_plugin_script_enqueue()
{
  wp_enqueue_script('mint_vernetzt-sidebar-js');
}

add_action('enqueue_block_editor_assets', 'sidebar_plugin_script_enqueue');

register_post_meta('news', 'attachments', [
  'single' => true,
  'type' => 'array',
  'show_in_rest' => ['schema' => [
    "items" => [
      'type' => 'object',
      'properties' => $defaultFields
    ]
  ]],
]);

add_action('graphql_register_types', function () use ($defaultFields) {
  register_graphql_object_type(
    "attachment",
    [
      "fields" => $defaultFields
    ]
  );

  register_graphql_field('NewsItem', 'attachments', [
    'type' => ['list_of' => 'attachment'],
    'description' => __('News Attachments', 'wp-graphql'),
    'resolve' => function ($post) {
      $attachments = get_post_meta($post->ID, 'attachments', true);
      return !empty($attachments) ? $attachments : [];
    }
  ]);
});
