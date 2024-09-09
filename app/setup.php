<?php

namespace App;

use Roots\Sage\Container;
use Roots\Sage\Assets\JsonManifest;
use Roots\Sage\Template\Blade;
use Roots\Sage\Template\BladeProvider;
use StoutLogic\AcfBuilder\FieldsBuilder;


/**
 * Theme assets
 */
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('sage/icomoon.css', asset_path('styles/icomoon.css'), false, null);
    wp_enqueue_style('sage/preload.css', asset_path('styles/preload.css'), false, null);
    wp_enqueue_style('sage/libs.css', asset_path('styles/libs.css'), false, null);
    wp_enqueue_style('sage/index2.css', asset_path('styles/index2.css'), false, null);
    wp_enqueue_style('sage/main.css', asset_path('styles/main.css'), false, null);


    wp_enqueue_script('sage/main.js', asset_path('scripts/main.js'), ['jquery'], null, true);
    wp_enqueue_script( 'sosdrain-theme-common', asset_path('scripts/common.js'), array(), false, true );
    wp_enqueue_script( 'sosdrain-theme-gsap-tm', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js', array(), false, true );
    wp_enqueue_script( 'sosdrain-theme-gsap-tim', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TimelineMax.min.js', array(), false, true );


//    wp_enqueue_script( 'sosdrain-theme-index2', asset_path('scripts/theme/index_alt.min.js'), array(), false, true );
//    wp_enqueue_script( 'sosdrain-theme-about', asset_path('scripts/theme/about.min.js'), array(), false, true );
//    wp_enqueue_script( 'sosdrain-theme-faq', asset_path('scripts/theme/faq.min.js'), array(), false, true );
    wp_enqueue_script( 'sosdrain-theme-single-service', asset_path('scripts/single_service.js'), array(), false, true );

    if (is_single() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}, 100);

/**
 * Theme setup
 */
add_action('after_setup_theme', function () {
    /**
     * Enable features from Soil when plugin is activated
     * @link https://roots.io/plugins/soil/
     */
    add_theme_support('soil-clean-up');
    add_theme_support('soil-jquery-cdn');
    add_theme_support('soil-nav-walker');
    add_theme_support('soil-nice-search');
    add_theme_support('soil-relative-urls');

    /**
     * Enable plugins to manage the document title
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#title-tag
     */
    add_theme_support('title-tag');

    /**
     * Register navigation menus
     * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
     */
    register_nav_menus([
        'primary_navigation' => __('Primary Navigation', 'sage'),
        'secondary_navigation' => __('Secondary Navigation', 'sage'),
        'footer_navigation' => __('Footer Navigation', 'sage'),
    ]);

    /**
     * Enable post thumbnails
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');

    add_theme_support('custom-logo');

    /**
     * Enable HTML5 markup support
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#html5
     */
    add_theme_support('html5', ['caption', 'comment-form', 'comment-list', 'gallery', 'search-form']);


    add_image_size('image_featured', 450, 750, true);
    /**
     * Enable selective refresh for widgets in customizer
     * @link https://developer.wordpress.org/themes/advanced-topics/customizer-api/#theme-support-in-sidebars
     */
    add_theme_support('customize-selective-refresh-widgets');

    /**
     * Use main stylesheet for visual editor
     * @see resources/assets/styles/layouts/_tinymce.scss
     */
    add_editor_style(asset_path('styles/main.css'));
    add_image_size( 'featured-service', 1000, 1000, true );

//    remove_theme_support('core-block-patterns');
}, 20);

/**
 * Register sidebars
 */
add_action('widgets_init', function () {
    $config = [
        'before_widget' => '<section class="widget %1$s %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ];
    register_sidebar([
            'name' => __('Primary', 'sage'),
            'id' => 'sidebar-primary'
        ] + $config);
    register_sidebar([
            'name' => __('Footer', 'sage'),
            'id' => 'sidebar-footer'
        ] + $config);
});

/**
 * Updates the `$post` variable on each iteration of the loop.
 * Note: updated value is only available for subsequently loaded views, such as partials
 */
add_action('the_post', function ($post) {
    sage('blade')->share('post', $post);
});

/**
 * Setup Sage options
 */
add_action('after_setup_theme', function () {


    /**
     * Add JsonManifest to Sage container
     */
    sage()->singleton('sage.assets', function () {
        return new JsonManifest(config('assets.manifest'), config('assets.uri'));
    });

    /**
     * Add Blade to Sage container
     */
    sage()->singleton('sage.blade', function (Container $app) {
        $cachePath = config('view.compiled');
        if (!file_exists($cachePath)) {
            wp_mkdir_p($cachePath);
        }
        (new BladeProvider($app))->register();
        return new Blade($app['view']);
    });

    /**
     * Create @asset() Blade directive
     */
    sage('blade')->compiler()->directive('asset', function ($asset) {
        return "<?= " . __NAMESPACE__ . "\\asset_path({$asset}); ?>";
    });

    /**
     * Initialize ACF Builder
     */
    add_action('init', function () {
        collect(glob(config('theme.dir') . '/app/fields/*.php'))->map(function ($field) {
            return require_once($field);
        })->map(function ($field) {
            if ($field instanceof FieldsBuilder) {
                acf_add_local_field_group($field->build());
            }
        });

        $post_supports = array('comments', 'editor', 'author');
        $post_types = array('page', 'post');

        foreach ($post_types as $type) {
            foreach ($post_supports as $support) {
                remove_post_type_support($type, $support);
            }
        }
    });

    /**
     *  Allow add google tag manager
     */

    if (get_field('google_tag_manager', 'option')) {
        $gtm_code = get_field('google_tag_manager', 'option');
        add_action('wp_head', function ($gtm_code) {
            ?>
            <!-- Google Tag Manager -->
            <script>(function (w, d, s, l, i) {
                    w[l] = w[l] || [];
                    w[l].push({
                        'gtm.start':
                            new Date().getTime(), event: 'gtm.js'
                    });
                    var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                    j.async = true;
                    j.src =
                        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                    f.parentNode.insertBefore(j, f);
                })(window, document, 'script', 'dataLayer', '<?= $gtm_code; ?>');</script>
            <!-- End Google Tag Manager -->
            <?php
        });
        add_action('wp_body_open', function ($gtm_code) {
            ?>
            <!-- Google Tag Manager (noscript) -->
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=<?= $gtm_code; ?>"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>
            </noscript>
            <!-- End Google Tag Manager (noscript) -->
            <?php
        });
    }

    init_modules();

});


add_action('template_redirect', function () {
    if (is_404()):
        wp_safe_redirect(home_url('/'));
        exit;
    endif;
});






