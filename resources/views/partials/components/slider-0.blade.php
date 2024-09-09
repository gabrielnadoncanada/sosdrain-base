@php
    $placeholder = get_template_directory_uri() . '/assets/images/placeholder.jpg';

@endphp

<section class="hero primary-bg">
    <picture>
        <source
            data-srcset="/wp-content/uploads/2022/03/plan-resize.png"
            srcset="/wp-content/uploads/2022/03/plan-resize.png"
            type="image/webp"
            data-role="deco"/>
        <img
            class="plan lazy"
            data-src="/wp-content/uploads/2022/03/plan-resize.png"
            src="/wp-content/uploads/2022/03/plan-resize.png"
            alt="media"
            data-role="deco"/>
    </picture>

    <div class="container hero_container d-md-flex flex-wrap justify-content-between">

        <div class="hero_header section_header col-md-7 col-xl-auto">
            <span class="subtitle subtitle--extended"> <?= __('Professionnel. Innovant. Fiable.', 'sosdrain') ?> </span>
            <h1 class="title"><?= __('Nous sommes la référence en drain français dans les Laurentides.', 'sosdrain') ?></h1>
            <p class="text">
                Gardez votre maison au sec avec SOS Drain.<br>
                Votre tranquillité, notre priorité.


            </p>
            <a class="btn" href="/demande-de-soumission"><?= __('Obtenir une soumission', 'sosdrain')?></a>
        </div>
        <div class="hero_info d-flex flex-column col-md-5 col-xl-auto align-items-md-end">


        </div>
    </div>
</section>
