<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$fields = new FieldsBuilder('temoignage');

$fields
    ->setLocation('post_type', '==', 'temoignage');

$fields
    ->addTab('content')
        ->addText('region')
        ->addTextarea('content')
            ->setConfig('new_lines', 'br')
        ->addRange('notation', array(
            'default_value' => '5',
            'min' => '1',
            'max' => '5',
            'step' => '1',
        ));

return $fields;
