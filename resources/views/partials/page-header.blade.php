@if(!is_front_page())
  @php
    global $post;

    $post_id = $post->ID;
  @endphp
  <div class="header_extension">
    <div class="container">
      <div class="section_header">
        @php
          $quotes = array(
            __('Une entreprise de professionnel', 'sosdrain'),
            __('Notre priorité c\'est que vous soyez satisfait', 'sosdrain'),
            __('Votre projet sera clé en main et sans surprise', 'sosdrain'),
            __('Évaluation claire et sans ambiguïté', 'sosdrain'),
          );

        @endphp
        <span class="subtitle subtitle--extended">
            @php
              echo $quotes[rand(0, count($quotes) - 1)];
            @endphp
          </span>

        <h1 class="title">
          @if(is_archive())
            {!! post_type_archive_title( '', false ) !!}
          @else
            {!! $post->post_title  !!}
          @endif

        </h1>

        {{ yoast_breadcrumb( '<p class="breadcrumbs d-flex align-items-center">','</p>' ) }}

      </div>
    </div>
    <picture>
      <source data-srcset="/wp-content/uploads/2022/03/plan-resize.png"
              srcset="/wp-content/uploads/2022/03/plan-resize.png" type="image/webp" data-role="deco">
      <img class="lazy plan entered loaded" data-src="/wp-content/uploads/2022/03/plan-resize.png"
           src="/wp-content/uploads/2022/03/plan-resize.png" alt="media"
           data-role="deco" data-ll-status="loaded">
    </picture>
  </div>
@endif
