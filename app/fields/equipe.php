<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$fields = new FieldsBuilder('equipe');

$fields
    ->setLocation('post_type', '==', 'equipe');

$fields
    ->addText('poste')
    ->addRepeater('social')
        ->addText('name')
        ->addUrl('url')
        ->addText('icon')
    ->endRepeater();

return $fields;
