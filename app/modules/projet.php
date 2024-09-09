<?php

namespace App;

class projet
{

    public function __construct()
    {
        add_action("init", [$this, "init"]);
    }

    public function init()
    {

        $labels = array(
            'name' => __('Projets', 'projet'),
            'singular_name' => __('Projet', 'projet'),
            'menu_name' => __('Projets', 'projet'),
            'all_items' => __('Tout les Projets', 'projet'),
            'view_item' => __('Voir tout les Projets', 'projet'),
            'add_new_item' => __('Ajouter un nouveau Projet', 'projet'),
            'add_new' => __('Ajouter', 'projet'),
            'edit_item' => __('Éditer', 'projet'),
            'update_item' => __('Modifier', 'projet'),
            'search_items' => __('Rechercher', 'projet'),
            'not_found' => __('Aucun résultat', 'projet'),
            'not_found_in_trash' => __('Introuvable dans la poubelle', 'projet'),
        );

        $args = array(
            'label' => __('Projet', 'projet'),
            'description' => __('Projets', 'projet'),
            'labels' => $labels,
            'rewrite' => ['slug' => __('projets', 'projet')],
            'supports' => array('title', 'excerpt'),
            'show_in_rest' => true,
            'hierarchical' => false,
            'public' => true,
            'has_archive' => false,
        );
        register_post_type('projet', $args);
    }


}
new projet();
