{{--
  Template Name: Galerie Template
--}}

@extends('layouts.app')

@section('content')
  @php
    $args = array('post_type' => 'service','posts_per_page' => -1);
    $query = new WP_Query($args);
  @endphp

  @if($query->have_posts())
    <main class="gallery section">
      <div class="container">
        <ul class="gallery_filters d-flex flex-wrap align-items-baseline justify-content-md-between">
          <li class="list-item">
            <a data-target="all" class="gallery_filters-filter current" href="#">All</a>
          </li>

          @while($query->have_posts())
            @php
              $query->the_post();
            @endphp
            <li class="list-item">
              <a data-target="{{ get_the_ID() }}" class="gallery_filters-filter" href="#">{!! get_the_title() !!}</a>
            </li>
          @endwhile

        </ul>

        <div class="gallery_masonry row g-0">

          @while($query->have_posts())
            @php
              $query->the_post();
              $images = get_field('photos');
            @endphp


            @foreach($images as $key => $image)

              @php
                $img_url = esc_url($image['url']);
                $img_src = esc_url($image['sizes']['large']);
                $img_alt = esc_attr($image['alt']);
              @endphp

              <a href="">
                <img src="" alt=""/>
              </a>
              <figure class="gallery_masonry-item col-md-4" data-groups='["{{ get_the_ID() }}"]'>


                <a
                  class="aspect aspect--1x1"
                  href="{{ $img_url }}"
                  data-caption="{{ $img_alt }}"
                  data-role="gallery-link"
                >
                  <div class="aspect__inner">
                    <picture>
                      <source
                        data-srcset="{{$img_src}}"
                        srcset="{{$img_src}}"
                      />
                      <img
                        class="gallery_masonry-item_img lazy"
                        data-src="{{$img_src}}"
                        src="{{$img_src}}"
                        alt="media"
                      />
                    </picture>
                  </div>
                  <div class="overlay d-flex flex-column justify-content-end">
                    <h4 class="overlay_caption">{{get_the_title()}}</h4>
                  </div>
                </a>
              </figure>

            @endforeach

          @endwhile
        </div>
        {{ wp_reset_postdata() }}

      </div>
    </main>
  @endif












  @while(have_posts()) @php the_post() @endphp
  @include('partials.page-builder')
  @endwhile
@endsection
