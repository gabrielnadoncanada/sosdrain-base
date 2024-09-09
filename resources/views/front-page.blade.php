
@extends('layouts.app')

@section('content')
  @include('partials/components/slider-0')
  @while(have_posts()) @php the_post() @endphp
  @include('partials.page-builder')
  @endwhile
@endsection
