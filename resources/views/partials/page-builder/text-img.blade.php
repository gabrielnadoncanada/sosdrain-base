

  @php
      $class = '';
      if($block['image_left']){
        $class = 'flex-row-reverse';
      }

    if(!$block['image']){
        $class .= ' no_img';
    }
  @endphp



<section class="hero section {{ $block['section_class'] }}" id="{{ $block['section_id'] }}">
    <div class="container d-flex flex-wrap flex-xl-nowrap align-items-xl-center justify-content-between {{$class}}">
        <div class="hero_header section_header col-xl-auto">

            @if($block['subtitle'])
                <span class="subtitle" data-aos="fade-down">{{$block['subtitle']}}</span>
            @endif

            @if($block['title'])
                {!! $block['title'] !!}
            @endif
            @if($block['text'])
                <p class="text" data-aos="fade-up" data-aos-delay="20">
                    {!! $block['text'] !!}
                </p>
            @endif

            @if($block['button_url'] && $block['button_label'])
                <a class="btn" href="{{ $block['button_url'] }}" data-aos="fade-up">{{ $block['button_label'] }}</a>
            @endif

        </div>
        <div class="hero_img" data-aos="zoom-in" data-aos-duration="700">
            @if($block['image'])
                <picture>
                    <source data-srcset="{{$block['image']['sizes']['featured-service']}}" srcset="{{$block['image']['sizes']['featured-service']}}" type="image/webp"/>
                    <img
                        class="hero_img-img lazy"
                        data-src="{{$block['image']['sizes']['featured-service']}}"
                        src="{{$block['image']['sizes']['featured-service']}}"
                        alt="media"
                    />
                </picture>
            @endif

        </div>
    </div>
</section>
