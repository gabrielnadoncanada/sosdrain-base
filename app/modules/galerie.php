<?php

namespace App;

class galerie
{

    public function __construct()
    {
        add_action("init", [$this, "init"]);
    }

    public function init()
    {

        $labels = array(
            'name' => __('Galeries', 'galerie'),
            'singular_name' => __('Galerie', 'galerie'),
            'menu_name' => __('Galeries', 'galerie'),
            'all_items' => __('Tout les Galeries', 'galerie'),
            'view_item' => __('Voir tout les Galeries', 'galerie'),
            'add_new_item' => __('Ajouter un nouveau Galerie', 'galerie'),
            'add_new' => __('Ajouter', 'galerie'),
            'edit_item' => __('Éditer', 'galerie'),
            'update_item' => __('Modifier', 'galerie'),
            'search_items' => __('Rechercher', 'galerie'),
            'not_found' => __('Aucun résultat', 'galerie'),
            'not_found_in_trash' => __('Introuvable dans la poubelle', 'galerie'),
        );

        $args = array(
            'label' => __('Galerie', 'galerie'),
            'description' => __('Galeries', 'galerie'),
            'labels' => $labels,
            'rewrite' => ['slug' => __('galeries', 'galerie')],
            'supports' => array('title', 'excerpt'),
            'show_in_rest' => true,
            'hierarchical' => false,
            'public' => true,
            'has_archive' => false,
        );
        register_post_type('galerie', $args);
    }


}
new galerie();
