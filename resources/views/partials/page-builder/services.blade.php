@php
  $args = array('post_type' => 'service','posts_per_page' => -1, 'order_by' => 'menu_order');
  $query = new WP_Query($args);
  $ctn = 1;
        $placeholder = get_template_directory_uri() . '/assets/images/placeholder.jpg';

@endphp

<section class="services section {{ $block['section_class'] }}" id="{{ $block['section_id'] }}">
  <div class="container">
    <div class="services_header section_header">
      <span class="subtitle"><?= __('Ce que nous faisons', 'sosdrain')?></span>
      <h2 class="title" data-aos="fade-right" data-aos-duration="500"><?= __('Services', 'sosdrain')?></h2>
    </div>

    <ul class="services_list row g-0">
      @while($query->have_posts())
        @php
          $query->the_post();
          $id = get_the_ID();
          $title = get_the_title();
          $excerpt = get_the_excerpt();
        @endphp
        <li class="services_list-item col-12 col-md-6 col-xxl-4" data-aos="fade-up" data-order="{{$ctn}}">
          <div class="wrapper d-flex flex-column align-items-start justify-content-between">
            <span class="number">0{{$ctn}}</span>
            <h4 class="title">{{$title}}</h4>
            <p class="description">
              {!! $excerpt !!}
            </p>
            <a class="link link-arrow" href="<?= get_the_permalink() ?>">
                <?=  __('Détails', 'sosdrain') ?>
              <i class="icon-arrow_right"></i>
            </a>
          </div>
        </li>
        @php
          $ctn++;
        @endphp
      @endwhile
      {{ wp_reset_postdata() }}


    </ul>
  </div>
</section>
