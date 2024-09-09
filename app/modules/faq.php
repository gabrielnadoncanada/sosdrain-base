<?php

namespace App;

class faq
{

    public function __construct()
    {
        add_action("init", [$this, "init"]);
    }

    public function init()
    {

        $labels = array(
            'name' => __('Faqs', 'faq'),
            'singular_name' => __('Faq', 'faq'),
            'menu_name' => __('Faqs', 'faq'),
            'all_items' => __('Tout les Faqs', 'faq'),
            'view_item' => __('Voir tout les Faqs', 'faq'),
            'add_new_item' => __('Ajouter un nouveau Faq', 'faq'),
            'add_new' => __('Ajouter', 'faq'),
            'edit_item' => __('Éditer', 'faq'),
            'update_item' => __('Modifier', 'faq'),
            'search_items' => __('Rechercher', 'faq'),
            'not_found' => __('Aucun résultat', 'faq'),
            'not_found_in_trash' => __('Introuvable dans la poubelle', 'faq'),
        );

        $args = array(
            'label' => __('Faq', 'faq'),
            'description' => __('Faqs', 'faq'),
            'rewrite' => ['slug' => __('faqs', 'faq')],
            'labels' => $labels,
            'supports' => array('title'),
            'show_in_rest' => true,
            'hierarchical' => false,
            'public' => true,
            'has_archive' => false,
        );
        register_post_type('faq', $args);
    }


}
new faq();
