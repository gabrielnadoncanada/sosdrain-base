{{--
  Template Name: Contact Template
--}}
@extends('layouts.app')

@section('content')
    <section class="section-nopb">
        <div class="container d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center">
            <div class="wrapper wrapper--form col-12 col-lg-6">
                <div class="contact_header section_header">
                    <span class="subtitle">Nous joindre</span>
                    <h2 class="title">Formulaire <span class="highlight">de Contact</span></h2>
                    <p class="text">Pour toutes autres informations relatives à nos services,
                        <br>nous vous invitons à communiquer avec nous.</p>
                </div>

                @php
                    echo do_shortcode('[contact-form-7 id="52" title="Formulaire de contact"]')
                @endphp

            </div>
            <div class="wrapper wrapper--bg col-12 col-lg-5">
                <div class="info_map mt-lg-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.7109201141598!2d-74.06306944817123!3d45.837069479004455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccf2e7488fc2f35%3A0x721bb8e6de77110d!2s2602%20Bd%20du%20Cur%C3%A9-Labelle%2C%20Pr%C3%A9vost%2C%20QC%20J5L%202S2!5e0!3m2!1sfr!2sca!4v1646856661245!5m2!1sfr!2sca"
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
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
                <div class="info_data-card d-flex col-md-6 col-xxl-3" data-aos="fade-left" data-aos-delay="20"
                     data-order="2">
                    <div class="wrapper flex-grow-1 d-flex flex-column justify-content-between">
                        <i class="icon-inbox icon"></i>
                        <h4 class="title">Courriel</h4>
                        <span class="content d-flex flex-column mb-auto">
                                    <a href="mailto:<?= get_field('mail', 'option') ?>"
                                       class=" link"><?= get_field('mail', 'option') ?></a>

                                </span>
                    </div>
                </div>
                <div class="info_data-card d-flex col-md-6 col-xxl-3" data-aos="fade-left" data-aos-delay="40"
                     data-order="3">
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
