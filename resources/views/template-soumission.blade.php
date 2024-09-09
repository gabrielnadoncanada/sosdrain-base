{{--
  Template Name: Soumission Template
--}}

@extends('layouts.app')

@section('content')
  <section class="section-nopb contact">
    <div class="container d-flex flex-wrap justify-content-center justify-content-lg-between align-items-end">
      <div class="wrapper wrapper--form col-12 ">
        <div class="contact_header section_header">
        
          <p class="text">Nos soumissions sont toujours gratuite. <br> Ce que nous offrons avant tout c’est un service
            clé en main, sans surprise.</p>
        </div>

        @php
          echo do_shortcode('[contact-form-7 id="347" title="Formulaire de demande de soumission"]')
        @endphp
      </div>

    </div>

  </section>
  <section class="info section ">
    <div class="container">
      <div class="info_data row g-0">
        <div class="info_header section_header col-md-6 col-xxl-3" data-order="1">
          <span class="subtitle" data-aos="fade-right">Nous joindre</span>
          <h2 class="title" data-aos="fade-right" data-aos-delay="30">
            <span class="highlight">Informations</span>
            de contact
          </h2>
        </div>
        <div class="info_data-card d-flex col-md-6 col-xxl-3" data-aos="fade-left" data-order="1">
          <div class="wrapper flex-grow-1 d-flex flex-column justify-content-between">
            <i class="icon-location icon"></i>
            <h4 class="title">Addresse</h4>
            <span class="content"> <?= get_field('address', 'option') ?></span>
          </div>
        </div>
        <div class="info_data-card d-flex col-md-6 col-xxl-3" data-aos="fade-left" data-aos-delay="20" data-order="2">
          <div class="wrapper flex-grow-1 d-flex flex-column justify-content-between">
            <i class="icon-inbox icon"></i>
            <h4 class="title">Courriel</h4>
            <span class="content d-flex flex-column mb-auto">
                                    <a href="mailto:<?= get_field('mail', 'option') ?>"
                                       class=" link"><?= get_field('mail', 'option') ?></a>

                                </span>
          </div>
        </div>
        <div class="info_data-card d-flex col-md-6 col-xxl-3" data-aos="fade-left" data-aos-delay="40" data-order="3">
          <div class="wrapper flex-grow-1  d-flex flex-column justify-content-between">
            <i class="icon-call icon"></i>
            <h4 class="title">Téléphone</h4>
            <span class="content d-flex flex-column mb-auto">
                                    <a href="tel:<?= get_field('phone', 'option') ?>"
                                       class=" link"><?= get_field('phone', 'option') ?></a>

                                </span>
          </div>
        </div>
      </div>


    </div>
  </section>
@endsection

