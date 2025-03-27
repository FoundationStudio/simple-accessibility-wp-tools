<?php
/**
 * Plugin Name: Simple Accessibility Tools
 * Plugin URI: https://foundationstudio.pl
 * Description: A lightweight accessibility toolbar that provides various accessibility options like font resizing, high contrast, grayscale, and more.
 * Version: 1.0.0
 * Author: Adam Sarba
 * Author URI: https://instagram.com/adamsarba
 * Text Domain: simple-accessibility-wp-tools
 * Domain Path: /languages
 * License: GPL v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

// Define plugin constants
define('SAT_VERSION', '1.0.0');
define('SAT_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('SAT_PLUGIN_URL', plugin_dir_url(__FILE__));

/**
 * Load plugin textdomain for translations
 */
function sat_load_textdomain() {
    load_plugin_textdomain(
        'simple-accessibility-wp-tools',
        false,
        dirname(plugin_basename(__FILE__)) . '/languages'
    );
}
add_action('plugins_loaded', 'sat_load_textdomain');

/**
 * Enqueue plugin styles and scripts
 */
function sat_enqueue_assets() {
    // Enqueue CSS
    wp_enqueue_style(
        'sat-styles',
        SAT_PLUGIN_URL . 'assets/css/a11y.css',
        array(),
        SAT_VERSION
    );

    // Enqueue JavaScript
    wp_enqueue_script(
        'sat-scripts',
        SAT_PLUGIN_URL . 'assets/js/a11y.js',
        array(),
        SAT_VERSION,
        true
    );
}
add_action('wp_enqueue_scripts', 'sat_enqueue_assets');

/**
 * Register shortcode for the accessibility toolbar
 */
function sat_toolbar_shortcode() {
    ob_start();
    include SAT_PLUGIN_DIR . 'templates/toolbar.php';
    return ob_get_clean();
}
add_shortcode('accessibility_toolbar', 'sat_toolbar_shortcode');

/**
 * Function to output the accessibility toolbar directly in PHP
 */
function sat_display_toolbar() {
    echo do_shortcode('[accessibility_toolbar]');
}