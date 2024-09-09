<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$fields = new FieldsBuilder('partenaire');

$fields
    ->setLocation('post_type', '==', 'partenaire');

$fields
    ->addUrl('url', ['label' => 'URL']);

return $fields;
