# Simple Accessibility Tools

A lightweight WordPress plugin that adds an accessibility toolbar to your website. The toolbar provides various accessibility options like font resizing, high contrast, grayscale, and more.

## Features

- Font size adjustment
- High contrast mode
- Grayscale mode
- Underlined links
- Readable font
- Settings persistence using localStorage
- Multilingual support (English and Polish included)
- Lightweight and performant
- No external dependencies

## Installation

1. Upload the `simple-accessibility-wp-tools` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

## Usage

### Method 1: Using Shortcode

Add the accessibility toolbar to any post, page, or widget using the shortcode:

```php
[accessibility_toolbar]
```

### Method 2: Using PHP Function

Add the accessibility toolbar directly in your theme files using the PHP function:

```php
<?php
if (function_exists('sat_display_toolbar')) {
    sat_display_toolbar();
}
?>
```

Common places to add the toolbar:

- Header (`header.php`)
- Navigation menu
- Footer (`footer.php`)
- Sidebar

## Customization

### CSS Classes

The plugin adds the following CSS classes to the `<body>` tag based on user preferences:

- `a11y-grayscale` - Grayscale mode
- `a11y-high-contrast` - High contrast mode
- `a11y-links-underline` - Underlined links
- `a11y-readable-font` - Readable font
- `a11y-resize-font-{size}` - Font size (120-200%)

### Translations

The plugin comes with English and Polish translations. To add more languages:

1. Copy `languages/simple-accessibility-wp-tools.pot`
2. Create new .po and .mo files for your language
3. Place them in the `languages` folder using the format: `simple-accessibility-wp-tools-{locale}.po`

## Credits

Created by Adam Sarba @ Foundation Studio (https://foundationstudio.pl)

## License

This plugin is licensed under the GPL v2 or later.

## Support

For support, please visit: https://foundationstudio.pl
