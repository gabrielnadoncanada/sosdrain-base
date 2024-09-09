

@php
    $post_id = get_the_ID();

        $page_builder = get_field('page_builder', $post_id);
        if (!$page_builder) {
            $page_builder = false;
        }
@endphp

@if($page_builder)
    @foreach($page_builder as $key => $block)
        @if(!$block['hidden'])
            @include('partials.page-builder.' . str_replace('_', '-', $block['acf_fc_layout']))
        @endif
    @endforeach
@endif
