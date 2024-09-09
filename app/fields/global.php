<?php
/**
 * Global Settings Page
 */

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title' => 'Theme Settings',
        'menu_title' => 'Theme Settings',
        'menu_slug' => 'theme-settings',
        'capability' => 'edit_posts',
        'redirect' => false
    ));
}

$config = (object)[
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$menus = get_terms( 'nav_menu' );
$menus = array_combine( wp_list_pluck( $menus, 'term_id' ), wp_list_pluck( $menus, 'name' ) );



$theme = new FieldsBuilder('Theme');

$theme
    ->setLocation('options_page', '==', 'theme-settings');

$theme
    ->addTab('header', [
        'placement' => 'left'
    ])
    ->addImage('header_logo')
    ->addSelect('header_nav', [
        'label' => 'Header nav',
        'wrapper' => $config->wrapper,
        'choices' => $menus,
    ])
    ->addTab('footer', [
        'placement' => 'left'
    ])
    ->addImage('footer_logo', [
        'label' => 'Logo',
        'wrapper' => $config->wrapper
    ])
    ->addTextarea('footer_text', [
        'label' => 'Text',
        'wrapper' => ['width' => 50]
    ])
    ->setConfig('new_lines', 'br')
    ->addSelect('menu_1', [
        'label' => 'Menu 1',
        'wrapper' => $config->wrapper,
        'choices' => $menus,
    ])
    ->addTextarea('copyright')
    ->setConfig('new_lines', 'br')
    ->addTab('social', [
        'placement' => 'left'
    ])
    ->addRepeater('social')
        ->addText('name')
        ->addUrl('url')
        ->addText('icon')
    ->endRepeater()
    ->addText('mail')
    ->addText('phone')
    ->addText('address')
    ->addText('google_tag_manager');


if(get_modules()){
    $modules = get_modules();
    $theme->addTab('modules', [
        'placement' => 'left'
    ]);

    foreach ($modules as $key => $module){
        $theme->addTrueFalse($module['name'], ['ui' => 1, 'wrapper' => $config->wrapper]);
    }
}

return $theme;

