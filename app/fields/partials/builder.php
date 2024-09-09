<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$builder = new FieldsBuilder('builder');


$builder
    ->addTab('builder')
    ->addFlexibleContent('page_builder', ['button_label' => 'Add Component'])
    ->addLayout(get_field_partial('components.section-html'))
    ->addLayout(get_field_partial('components.faqs'))
    ->addLayout(get_field_partial('components.services'))
    ->addLayout(get_field_partial('components.text-img'))
    ->addLayout(get_field_partial('components.reviews'))
    ->addLayout(get_field_partial('components.quote'));

return $builder;
