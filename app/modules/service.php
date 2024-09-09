<?php

namespace App;

class service
{

    public function __construct()
    {
        add_action("init", [$this, "init"]);
    }

    public function init()
    {

        $labels = array(
            'name' => __('Services', 'service'),
            'singular_name' => __('Service', 'service'),
            'menu_name' => __('Services', 'service'),
            'all_items' => __('Tout les Services', 'service'),
            'view_item' => __('Voir tout les Services', 'service'),
            'add_new_item' => __('Ajouter un nouveau Service', 'service'),
            'add_new' => __('Ajouter', 'service'),
            'edit_item' => __('Éditer', 'service'),
            'update_item' => __('Modifier', 'service'),
            'search_items' => __('Rechercher', 'service'),
            'not_found' => __('Aucun résultat', 'service'),
            'not_found_in_trash' => __('Introuvable dans la poubelle', 'service'),
        );

        $args = array(
            'label' => __('Service', 'service'),
            'description' => __('Services', 'service'),
            'rewrite' => ['slug' => __('services', 'service')],
            'labels' => $labels,
            'supports' => array('title', 'excerpt', 'thumbnail'),
            'show_in_rest' => true,
            'hierarchical' => false,
            'public' => true,
            'has_archive' => false,
        );
        register_post_type('service', $args);
    }


}
new service();
