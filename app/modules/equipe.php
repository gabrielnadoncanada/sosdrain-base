<?php

namespace App;

class equipe
{

    public function __construct()
    {
        add_action("init", [$this, "init"]);
    }

    public function init()
    {

        $labels = array(
            'name' => __('Equipes', 'equipe'),
            'singular_name' => __('Equipe', 'equipe'),
            'menu_name' => __('Equipes', 'equipe'),
            'all_items' => __('Tout les Equipes', 'equipe'),
            'view_item' => __('Voir tout les Equipes', 'equipe'),
            'add_new_item' => __('Ajouter un nouveau Equipe', 'equipe'),
            'add_new' => __('Ajouter', 'equipe'),
            'edit_item' => __('Éditer', 'equipe'),
            'update_item' => __('Modifier', 'equipe'),
            'search_items' => __('Rechercher', 'equipe'),
            'not_found' => __('Aucun résultat', 'equipe'),
            'not_found_in_trash' => __('Introuvable dans la poubelle', 'equipe'),
        );

        $args = array(
            'label' => __('Equipe', 'equipe'),
            'description' => __('Equipes', 'equipe'),
            'labels' => $labels,
            'rewrite' => ['slug' => __('equipes', 'equipe')],
            'supports' => array('title', 'thumbnail', 'excerpt'),
            'show_in_rest' => true,
            'hierarchical' => false,
            'public' => true,
            'has_archive' => false,
        );
        register_post_type('equipe', $args);
    }


}
new equipe();
