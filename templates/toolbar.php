<?php
/**
 * Template for the accessibility toolbar
 */
?>
<li class="menu-item menu-item-has-children sat-toolbar-wrapper">
    <a href="#" aria-role="button" aria-label="<?php esc_attr_e('Accessibility tools', 'simple-accessibility-wp-tools'); ?>">
        <img src="<?php echo esc_url(SAT_PLUGIN_URL . 'assets/img/icon-accessibility.svg'); ?>" width="20" height="20" alt="" />
        <span class="screen-reader-text"><?php esc_html_e('Accessibility', 'simple-accessibility-wp-tools'); ?></span>
    </a>
    <span class="icon"></span>
    <ul class="sub-menu" role="navigation">
        <li class="menu-item a11y-item">
            <a href="#" aria-role="button" data-action="resize-plus" aria-label="<?php esc_attr_e('Increase text', 'simple-accessibility-wp-tools'); ?>">
                <span><?php esc_html_e('Increase text size', 'simple-accessibility-wp-tools'); ?></span>
                <img src="<?php echo esc_url(SAT_PLUGIN_URL . 'assets/img/a11y-resize-plus.svg'); ?>" alt="" width="16" height="16" />
            </a>
        </li>
        <li class="menu-item a11y-item">
            <a href="#" aria-role="button" data-action="resize-minus" aria-label="<?php esc_attr_e('Decrease text', 'simple-accessibility-wp-tools'); ?>">
                <span><?php esc_html_e('Decrease text size', 'simple-accessibility-wp-tools'); ?></span>
                <img src="<?php echo esc_url(SAT_PLUGIN_URL . 'assets/img/a11y-resize-minus.svg'); ?>" alt="" width="16" height="16" />
            </a>
        </li>
        <li class="menu-item a11y-item">
            <a href="#" aria-role="button" data-action="grayscale" aria-label="<?php esc_attr_e('Toggle grayscale', 'simple-accessibility-wp-tools'); ?>">
                <span><?php esc_html_e('Grayscale', 'simple-accessibility-wp-tools'); ?></span>
                <img src="<?php echo esc_url(SAT_PLUGIN_URL . 'assets/img/a11y-grayscale.svg'); ?>" alt="" width="16" height="16" />
            </a>
        </li>
        <li class="menu-item a11y-item">
            <a href="#" aria-role="button" data-action="high-contrast" aria-label="<?php esc_attr_e('Toggle high contrast', 'simple-accessibility-wp-tools'); ?>">
                <span><?php esc_html_e('High contrast', 'simple-accessibility-wp-tools'); ?></span>
                <img src="<?php echo esc_url(SAT_PLUGIN_URL . 'assets/img/a11y-contrast.svg'); ?>" alt="" width="16" height="16" />
            </a>
        </li>
        <li class="menu-item a11y-item">
            <a href="#" aria-role="button" data-action="links-underline" aria-label="<?php esc_attr_e('Toggle underlined links', 'simple-accessibility-wp-tools'); ?>">
                <span><?php esc_html_e('Underlined links', 'simple-accessibility-wp-tools'); ?></span>
                <img src="<?php echo esc_url(SAT_PLUGIN_URL . 'assets/img/a11y-link.svg'); ?>" alt="" width="16" height="16" />
            </a>
        </li>
        <li class="menu-item a11y-item">
            <a href="#" aria-role="button" data-action="readable-font" aria-label="<?php esc_attr_e('Toggle readable font', 'simple-accessibility-wp-tools'); ?>">
                <span><?php esc_html_e('Readable text', 'simple-accessibility-wp-tools'); ?></span>
                <img src="<?php echo esc_url(SAT_PLUGIN_URL . 'assets/img/a11y-font.svg'); ?>" alt="" width="16" height="16" />
            </a>
        </li>
        <li class="menu-item a11y-item">
            <a href="#" aria-role="button" data-action="reset" aria-label="<?php esc_attr_e('Reset accessibility settings', 'simple-accessibility-wp-tools'); ?>">
                <span><?php esc_html_e('Reset', 'simple-accessibility-wp-tools'); ?></span>
                <img src="<?php echo esc_url(SAT_PLUGIN_URL . 'assets/img/a11y-reset.svg'); ?>" alt="" width="16" height="16" />
            </a>
        </li>
    </ul>
</li>