@php
  $placeholder = !empty(get_the_post_thumbnail_url(get_the_ID())) ? get_the_post_thumbnail_url(get_the_ID()) : get_template_directory_uri() . '/assets/images/placeholder.jpg';
@endphp




<section class="gallery">
  <div class="container-fluid p-0">
    <ul class="gallery_list d-flex flex-wrap">

      @php
      $ctn = 0;
      @endphp


      @for ($i = 0; $i < 4; $i++)
          @php
          $photo = get_field('photos')[$i];
          @endphp

          <li class="gallery_list-item col-12 col-sm-6 col-xl-3">
          <a
            class="gallery_list-item_trigger"
            href="@php echo get_page_link(351) . '?service_type='.get_the_ID() .'' @endphp"
            data-caption="Fresh Concept Construction Renovation"
            data-role="gallery-link"
          >
            <div class="img-wrapper">
              <picture>
                <source
                  data-srcset="{{$photo['url']}}"
                  srcset="{{$photo['url']}}"
                  type="image/webp"
                />
                <img
                  class="lazy"
                  data-src="{{$photo['url']}}"
                  src="{{$photo['url']}}"
                  alt="Fresh Concept Construction Renovation"
                />
              </picture>
            </div>
            <div class="text-wrapper d-flex flex-column justify-content-end">
              <span class="subtitle"></span>
              <h4 class="title">{{get_the_title()}}</h4>
            </div>
          </a>
        </li>

      @endfor


    </ul>
  </div>
</section>
@include('partials.page-builder.faqs', [ 'block'=> ['section_class'=> 'primary-bg']])


@include('partials.page-builder.reviews')


