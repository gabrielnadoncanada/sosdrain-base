<?php

namespace App;

class partenaire
{

    public function __construct()
    {
        add_action("init", [$this, "init"]);
    }

    public function init()
    {

        $labels = array(
            'name' => __('Partenaires', 'partenaire'),
            'singular_name' => __('Partenaire', 'partenaire'),
            'menu_name' => __('Partenaires', 'partenaire'),
            'all_items' => __('Tout les Partenaires', 'partenaire'),
            'view_item' => __('Voir tout les Partenaires', 'partenaire'),
            'add_new_item' => __('Ajouter un nouveau Partenaire', 'partenaire'),
            'add_new' => __('Ajouter', 'partenaire'),
            'edit_item' => __('Éditer', 'partenaire'),
            'update_item' => __('Modifier', 'partenaire'),
            'search_items' => __('Rechercher', 'partenaire'),
            'not_found' => __('Aucun résultat', 'partenaire'),
            'not_found_in_trash' => __('Introuvable dans la poubelle', 'partenaire'),
        );

        $args = array(
            'label' => __('Partenaire', 'partenaire'),
            'description' => __('Partenaires', 'partenaire'),
            'labels' => $labels,
            'rewrite' => ['slug' => __('partenaires', 'partenaire')],
            'supports' => array('title', 'thumbnail'),
            'show_in_rest' => true,
            'hierarchical' => false,
            'public' => true,
            'has_archive' => false,
        );
        register_post_type('partenaire', $args);
    }


}
new partenaire();
