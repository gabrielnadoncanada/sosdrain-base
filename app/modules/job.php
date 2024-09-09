<?php

namespace App;

class job
{

    public function __construct()
    {
        add_action("init", [$this, "init"]);
    }

    public function init()
    {

        $labels = array(
            'name' => __('Emplois', 'job'),
            'singular_name' => __('Emploi', 'job'),
            'menu_name' => __('Emplois', 'job'),
            'all_items' => __('Tout les Emplois', 'job'),
            'view_item' => __('Voir tout les Emplois', 'job'),
            'add_new_item' => __('Ajouter un nouveau Emploi', 'job'),
            'add_new' => __('Ajouter', 'job'),
            'edit_item' => __('Éditer', 'job'),
            'update_item' => __('Modifier', 'job'),
            'search_items' => __('Rechercher', 'job'),
            'not_found' => __('Aucun résultat', 'job'),
            'not_found_in_trash' => __('Introuvable dans la poubelle', 'job'),
        );

        $args = array(
            'label' => __('Emploi', 'job'),
            'description' => __('Emplois', 'job'),
            'rewrite' => ['slug' => __('emplois', 'job')],
            'labels' => $labels,
            'supports' => array('title', 'excerpt'),
            'show_in_rest' => true,
            'hierarchical' => false,
            'public' => true,
            'has_archive' => false,
        );
        register_post_type('job', $args);
    }


}
new job();
