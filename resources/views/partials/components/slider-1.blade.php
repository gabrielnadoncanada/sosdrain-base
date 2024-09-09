@php
  $args = array('post_type' => 'service','posts_per_page' => -1, 'order_by' => 'menu_order');
  $query = new WP_Query($args);
@endphp

@if($query->have_posts())
  <section class="hero primary-bg">
    <span class="hero_overlay"></span>

    <div class="container container--slider d-flex flex-wrap justify-content-center">
      <div class="wrapper col-lg-11">
        <ul class="hero_slider d-flex">
          @php
            $ctn = 0;
            $placeholder = get_template_directory_uri() . '/assets/images/placeholder.jpg';
          @endphp

          @while($query->have_posts())
            @php
              $query->the_post();
              $id = get_the_ID();
              $title = get_the_title();
              $excerpt = get_the_excerpt();
              $image = get_the_post_thumbnail_url($id, 'full');
            @endphp

            @if(!$ctn && $image)
              @php
                $bg_placeholder = $image;
              @endphp
            @endif

            <li class="hero_slider-slide hero_slider-slide--{{ $ctn }}"
                data-bg="{{ $image ?: $placeholder }}">
              <div class="hero_slider-slide_content section_header">
                <span class="subtitle subtitle--extended">{{ __('Nos services', 'sosdrain') }}</span>
                @if($title) <h2 class="title">{{ $title }}</h2> @endif
                @if($excerpt)<p class="text">{{ $excerpt }}</p>@endif
                <a class="btn" href=" {{ the_permalink() }}">{{ __('Plus de détails', 'sosdrain') }}</a>
              </div>
            </li>
            @php $ctn++ @endphp

          @endwhile
          {{ wp_reset_postdata() }}
        </ul>
      </div>
      <div
        class="hero_slider-nav hero_slider-nav--alt col-lg-1 d-flex align-items-center justify-content-center flex-lg-column align-items-md-end">
        @for ($i = 0; $i < $ctn; $i++)
          @if(!$i)
            <button class="hero_slider-nav_dot tns-nav-active"></button>
          @else
            <button class="hero_slider-nav_dot"></button>
          @endif
        @endfor
      </div>
    </div>

    <div class="container-fluid container--thumbs">
      <ul class="hero_thumbs">
        @php $ctn = 0; @endphp
        @while($query->have_posts())
          @php
            $query->the_post();
            $id = get_the_ID();
            $title = get_the_title();
            $excerpt = get_the_excerpt();
            $image = get_the_post_thumbnail_url($id, array( 410, 233));
          @endphp

          <li class="hero_thumbs-thumb {{ $ctn ?:  'is-current' }}"
              data-bg="{{ $image ?: $placeholder }}">
            <div class="hero_thumbs-thumb_inner d-flex flex-column justify-content-end">
              <span class="overlay"></span>
              @if($title) <h4 class="title">{{ $title }}</h4> @endif
            </div>
          </li>

          @php $ctn++ @endphp
        @endwhile
        {{ wp_reset_postdata() }}

      </ul>
    </div>
    @if($bg_placeholder)
      <style>
        body.home .hero {
          background-image: url({{ $bg_placeholder }}) ;
        }
      </style>
    @endif
  </section>
@endif
