<?php

namespace App;

class teacher
{

    public function __construct()
    {
        add_action("init", [$this, "init"]);
    }

    public function init()
    {

        $labels = array(
            'name' => __('Enseignants', 'teacher'),
            'singular_name' => __('Enseignant', 'teacher'),
            'menu_name' => __('Enseignants', 'teacher'),
            'all_items' => __('Tout les Enseignants', 'teacher'),
            'view_item' => __('Voir tout les Enseignants', 'teacher'),
            'add_new_item' => __('Ajouter un nouveau Enseignant', 'teacher'),
            'add_new' => __('Ajouter', 'teacher'),
            'edit_item' => __('Éditer', 'teacher'),
            'update_item' => __('Modifier', 'teacher'),
            'search_items' => __('Rechercher', 'teacher'),
            'not_found' => __('Aucun résultat', 'teacher'),
            'not_found_in_trash' => __('Introuvable dans la poubelle', 'teacher'),
        );

        $args = array(
            'label' => __('Enseignant', 'teacher'),
            'description' => __('Enseignants', 'teacher'),
            'labels' => $labels,
            'rewrite' => ['slug' => __('enseignants', 'teacher')],
            'supports' => array('title', 'excerpt'),
            'show_in_rest' => true,
            'hierarchical' => false,
            'public' => true,
            'has_archive' => false,
        );
        register_post_type('teacher', $args);
    }


}
new teacher();
