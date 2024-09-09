<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$config = (object)[
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$component = new FieldsBuilder('text-img');

$component
    ->addTab('subtitle')
        ->addText('subtitle')
    ->addTab('title')
        ->addWysiwyg('title')
        ->setConfig('new_lines', 'br')
    ->addTab('text')
        ->addWysiwyg('text')
        ->setConfig('new_lines', 'br')
    ->addTab('button')
        ->addText('button_label', ['wrapper' => $config->wrapper])
        ->addText('button_url', ['label' => 'URL', 'wrapper' => $config->wrapper])
    ->addTab('image')
        ->addImage('image')
        ->addTrueFalse('image_left')
    ->addTab('general')
        ->addTrueFalse('hidden')
        ->addText('section_class', ['wrapper' => $config->wrapper])
        ->addText('section_id', ['wrapper' => $config->wrapper]);

return $component;
