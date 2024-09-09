<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$config = (object)[
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$component = new FieldsBuilder('services');

$component
    ->addTab('general')
        ->addTrueFalse('hidden')
        ->addText('section_class', ['wrapper' => $config->wrapper])
        ->addText('section_id', ['wrapper' => $config->wrapper]);

return $component;
