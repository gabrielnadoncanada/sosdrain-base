<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$fields = new FieldsBuilder('service');

$fields
    ->setLocation('post_type', '==', 'service');

$fields
    ->addFields(get_field_partial('partials.builder'))
    ->addTab('photos')
    ->addGallery('photos');

return $fields;
