<?php
/**
 * Plugin Name:       MINTvernetzt Sidebar
 * Text Domain:       mint-vernetzt-sidebar
 */

function register_mint_vernetzt_sidebar() {
    wp_register_script(
        'mint_vernetzt-sidebar-js',
        plugins_url( 'build/index.js', __FILE__ ),
        array(
            'wp-plugins',
            'wp-edit-post',
            'wp-element',
            'wp-components'
        )
    );
}
add_action( 'init', 'register_mint_vernetzt_sidebar' );

function sidebar_plugin_script_enqueue() {
  wp_enqueue_script( 'mint_vernetzt-sidebar-js' );
}
add_action( 'enqueue_block_editor_assets', 'sidebar_plugin_script_enqueue' );

register_post_meta("news", 'test', array(
  'show_in_rest' => true,
  'single' => true,
  'type' => 'string',
) );

register_post_meta('news', 'attachments', array(
  'single' => true,
  'type' => 'array',
  'show_in_rest' => array('schema' => array(
    "items" => array(
      'type' => 'object',
      'properties' => array(
        'id' => array('type' => 'integer'),
        'title' => array('type' => 'string'),
        'filename' => array('type' => 'string'),
        'fileSizeHumanReadable' => array('type' => 'string'),
        'icon' => array('type' => 'string'),
        'url' => array('type' => 'string')
      ))
  )),
) );

add_action( 'graphql_register_types', function() {
  register_graphql_field( 'NewsItem', 'test', [
     'type' => 'string',
     'description' => __( 'Foobar', 'wp-graphql' ),
     'resolve' => function( $post ) {
       $test = get_post_meta( $post->ID, 'test', true );
       return ! empty( $test ) ? $test : "";
     }
  ] );
} );
