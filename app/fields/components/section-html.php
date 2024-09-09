<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$config = (object)[
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$component = new FieldsBuilder('section-html');

$component
    ->addTab('content')
        ->addWysiwyg('content')
        ->setConfig('new_lines', 'br')
        ->addText('section_class', ['wrapper' => $config->wrapper])
        ->addText('section_id', ['wrapper' => $config->wrapper])
    ->addTab('general')
        ->addTrueFalse('hidden');



return $component;
