<?php


/**
 * Create a nav menu with very basic markup.
 *
 * @author Thomas Scholz http://toscho.de
 * @version 1.0
 */
class Custom_Nav_Menu_Walker extends Walker_Nav_Menu
{
    /**
     * Start the element output.
     *
     * @param string $output Passed by reference. Used to append additional content.
     * @param object $item Menu item data object.
     * @param int $depth Depth of menu item. May be used for padding.
     * @param array $args Additional strings.
     * @return void
     */
    public function start_el(&$output, $data_object, $depth = 0, $args = null, $current_object_id = 0)
    {
        if(!$depth){
            $output .= '<li class="list-item">';
        }

        $attributes = '';

        !empty ($data_object->attr_title)
        // Avoid redundant titles
        and $data_object->attr_title !== $data_object->title
        and $attributes .= ' title="' . esc_attr($data_object->attr_title) . '"';

        !empty ($data_object->url)
        and $attributes .= ' href="' . esc_attr($data_object->url) . '"';

        $attributes = trim($attributes);
        $title = apply_filters('the_title', $data_object->title, $data_object->ID);

        if ($args->walker->has_children) {
            $item_output = "$args->before<button class='dropdown-trigger d-inline-flex align-items-center'>
                        $args->link_before$title <i class=\"icon-chevron_right icon\"></i></button>"
                . "$args->link_after$args->after";
        } else {
            $item_output = "$args->before<a $attributes class='link link--single'>$args->link_before$title</a>"
                . "$args->link_after$args->after";
        }


        // Since $output is called by reference we don't need to return anything.
        $output .= apply_filters(
            'walker_nav_menu_start_el'
            , $item_output
            , $data_object
            , $depth
            , $args
        );
    }

    /**
     * @param string $output Passed by reference. Used to append additional content.
     * @return void
     * @see Walker::start_lvl()
     *
     */
    public function start_lvl(&$output, $depth = 0, $args = null)
    {
        $output .= '<ul class="dropdown-content">';
    }

    /**
     * @param string $output Passed by reference. Used to append additional content.
     * @return void
     * @see Walker::end_lvl()
     *
     */
    public function end_lvl(&$output, $depth = 0, $args = null)
    {
        $output .= '</ul>';
    }

    /**
     * @param string $output Passed by reference. Used to append additional content.
     * @return void
     * @see Walker::end_el()
     *
     */
    function end_el(&$output, $data_object, $depth = 0, $args = null)
    {

        $output .= '</li>';
    }
}
