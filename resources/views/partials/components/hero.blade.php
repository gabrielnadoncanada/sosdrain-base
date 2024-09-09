@php
  $placeholder = get_template_directory_uri() . '/assets/images/placeholder.jpg';

@endphp
<section class="hero section">
  <div class="container d-flex flex-wrap flex-xl-nowrap align-items-xl-center justify-content-between">
    <div class="hero_header section_header col-xl-auto">
      <span class="subtitle" data-aos="fade-down">Qui nous sommes</span>
      <h2 class="title" data-aos="fade-right">
        La référence en<br>
        <span class="highlight">drain français</span><br>
        dans les Laurentides
      </h2>
      <p class="text" data-aos="fade-up" data-aos-delay="20">
        Notre équipe est spécialisé dans l’inspection, l’entretien, la réparation et le remplacement de drain français.
        Nos équipements nous permettre d’effectuer des travaux d’excavation même dans les coins les plus difficiles
        d’accès.
      </p>

      <a class="btn" href="#" data-aos="fade-up">Obtenir une soumission</a>
    </div>
    <div class="hero_img" data-aos="zoom-in" data-aos-duration="700">
      <picture>
        <source data-srcset="{{$placeholder}}" srcset="{{$placeholder}}" type="image/webp"/>
        <img
          class="hero_img-img lazy"
          data-src="img/placeholder.jpg"
          src="{{$placeholder}}"
          alt="media"
        />
      </picture>
    </div>
  </div>
</section>
