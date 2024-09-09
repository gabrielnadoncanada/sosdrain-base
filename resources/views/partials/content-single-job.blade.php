<div class="container-fluid container">
  <div class="row">
    <div class="col-sm-12 col-md-4">
      <h4>{{ __('Postes ouverts', 'job') }}</h4>
      @php
        $args = array('numberposts' => -1, 'post_type' => 'job');
        $jobs = get_posts( $args );
      @endphp

      <ul class="list-group">
        @foreach ($jobs as $key => $job)
          <li class="list-group-item">
            <a href="{{$job->post_name }}">{{$job->post_title}}</a>
          </li>
        @endforeach
      </ul>

    </div>
    <div class="col-sm-12 col-md-8">
      <article @php post_class() @endphp>
        <header>
          <h1 class="entry-title">{!! get_the_title() !!}</h1>
        </header>
        <div class="entry-content">
          @foreach(get_fields() as $key => $field)
            <h4>{{ __($key, 'job') }}</h4>
            @if(is_array($field))
              <ul>
                  @foreach($field as $item)
                  <li>
                    {{ $item['responsabilite'] }}
                  </li>
                @endforeach
              </ul>
            @else
            @endif
            <p>{{$field}}</p>
          @endforeach
        </div>
      </article>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      @php
      echo do_shortcode('[contact-form-7 id="146" title="Formulaire emploi"]');
      @endphp
    </div>
  </div>
</div>

