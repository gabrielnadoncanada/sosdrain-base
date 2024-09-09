@php
  $args = array('post_type' => 'temoignage','posts_per_page' => -1, 'order_by' => 'menu_order');
   $query = new WP_Query($args);
   $placeholder = get_template_directory_uri() . '/assets/images/placeholder.jpg';

@endphp

<section class="reviews section {{ $block['section_class'] }}" id="{{ $block['section_id'] }}">
  <div class="container">
    <div class="reviews_header section_header">
      <span class="subtitle"><?= __('Nos témoignages', 'sosdrain') ?> </span>
      <h2 class="title">
          <?= __('Ce que disent', 'sosdrain') ?>

        <span class="highlight"> <?= __('nos clients', 'sosdrain') ?></span>
      </h2>
    </div>
    <div class="wrapper--slider">
      <ul class="reviews_slider">
        @while($query->have_posts())
          @php
            $query->the_post();
            $id = get_the_ID();
            $title = get_the_title();
            $region = get_field('region');
            $content = get_field('content');
            $image = get_the_post_thumbnail_url($id, 'full');
            $rating = get_field('notation');
          @endphp
          <li class="reviews_slider-slide">
            <div class="reviews_slider-slide_wrapper d-flex flex-column justify-content-between align-items-start">
              <ul class="stars d-flex align-items-center">

                @for ($i = 0; $i < $rating; $i++)
                  <li class="stars_star">
                    <i class="icon-star"></i>
                  </li>
                @endfor



              </ul>
              <p class="text">
                {!! $content  !!}
              </p>
              <div class="author d-flex align-items-center">
                <picture>
                  <source
                    data-srcset="{{ $image }}"
                    srcset="{{ $image }}"
                    type="image/webp"
                    width="80"
                    height="80"
                  />
                  <img
                    class="avatar lazy"
                    data-src="{{ $image }}"
                    src="{{ $image }}"
                    alt=""
                    width="80"
                    height="80"
                  />
                </picture>
                <div class="wrapper">
                  <span class="name">{{ $title }}</span>
                  <span class="profession">{{$region}}</span>
                </div>
              </div>
            </div>
          </li>

        @endwhile
        {{ wp_reset_postdata() }}


      </ul>
      <div class="tns-arrows reviews_slider-controls">
        <a class="tns-arrows_arrow tns-arrows_arrow--prev" href="#">
          <i class="icon-arrow_left icon"></i>
        </a>
        <a class="tns-arrows_arrow tns-arrows_arrow--next" href="#">
          <i class="icon-arrow_right icon"></i>
        </a>
      </div>
    </div>
  </div>
</section>
