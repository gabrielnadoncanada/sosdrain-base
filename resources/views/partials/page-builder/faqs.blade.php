@php
  $args = array('post_type' => 'faq','posts_per_page' => -1);
  $query = new WP_Query($args);
  $ctn = 1;
@endphp


@if($query->have_posts())
  <section class="faq section {{ $block['section_class'] }}" id="{{ $block['section_id'] }}">
    <div class="container d-lg-flex flex-wrap flex-xl-nowrap justify-content-start align-items-start justify-content-xl-between">
        <div class="faq_header section_header col-lg-12 col-xl-auto">
          <span class="subtitle"><?= __('Faire face à vos soucis', 'sosdrain') ?></span>

            <h2 class="title">
                <?= __('Si votre question n\'est pas ici,', 'sosdrain') ?>
              <span class="highlight"><?= __('contactez-nous', 'sosdrain') ?></span>
            </h2>

            <p class="text"> <?= __('Notre priorité est de vous offrir un service à la clientèle hors pair en répondant à tous vos questions.', 'sosdrain')?></p>

          <div class="wrapper">
            <a class="btn" href="/nous-joindre"><?= __('Nous joindre', 'sosdrain') ?></a>
          </div>
        </div>
        <div class="accordion faq_accordion col-12 col-lg-12 col-xl-auto">
          @while($query->have_posts())
            @php
              $query->the_post();
            @endphp
            <div class="faq_accordion accordion-wrapper">
              <button class="faq_accordion-trigger accordion-trigger" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapse_{{$ctn}}" aria-expanded="false" aria-controls="collapse_{{$ctn}}">
                <span class="question">{!! get_the_title() !!}  </span>
                <span class="faq_accordion-trigger_icon accordion-trigger_icon icon-plus"></span>
              </button>

              <div id="collapse_{{$ctn}}" class="faq_accordion-content accordion-content collapse">
                <p class="text"> {!! get_field('content') !!}</p>
              </div>
            </div>
            @php $ctn++; @endphp
          @endwhile
          {{ wp_reset_postdata() }}
        </div>
    </div>
  </section>
@endif










