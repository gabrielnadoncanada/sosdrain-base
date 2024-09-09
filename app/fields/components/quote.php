<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$config = (object)[
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$component = new FieldsBuilder('quote');

$component
    ->addTab('subtitle')
    ->addText('subtitle')
    ->addTab('text')
    ->addTextarea('text')
    ->addTab('author')
    ->addText('author')
    ->addTab('general')
    ->addTrueFalse('hidden')
    ->addText('section_class', ['wrapper' => $config->wrapper])
    ->addText('section_id', ['wrapper' => $config->wrapper]);

return $component;
