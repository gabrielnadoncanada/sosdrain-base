<?php

namespace App;

class temoignage
{

    public function __construct()
    {
        add_action("init", [$this, "init"]);
    }

    public function init()
    {

        $labels = array(
            'name' => __('Témoignages', 'temoignage'),
            'singular_name' => __('Témoignage', 'temoignage'),
            'menu_name' => __('Témoignages', 'temoignage'),
            'all_items' => __('Tout les Témoignages', 'temoignage'),
            'view_item' => __('Voir tout les Témoignages', 'temoignage'),
            'add_new_item' => __('Ajouter un nouveau Témoignage', 'temoignage'),
            'add_new' => __('Ajouter', 'temoignage'),
            'edit_item' => __('Éditer', 'temoignage'),
            'update_item' => __('Modifier', 'temoignage'),
            'search_items' => __('Rechercher', 'temoignage'),
            'not_found' => __('Aucun résultat', 'temoignage'),
            'not_found_in_trash' => __('Introuvable dans la poubelle', 'temoignage'),
        );

        $args = array(
            'label' => __('Témoignage', 'temoignage'),
            'description' => __('Témoignages', 'temoignage'),
            'labels' => $labels,
            'rewrite' => ['slug' => __('temoignages', 'temoignage')],
            'supports' => array('title', 'excerpt', 'thumbnail'),
            'show_in_rest' => true,
            'hierarchical' => false,
            'public' => true,
            'has_archive' => false,
        );
        register_post_type('temoignage', $args);
    }


}
new temoignage();
