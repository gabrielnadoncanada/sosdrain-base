<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$job = new FieldsBuilder('job');

$job
    ->setLocation('post_type', '==', 'job');

$job
    ->addTab('general')
    ->addText('departement')
    ->addText('lieu')
    ->addText('type de poste')
    ->addText('occasionnel')
    ->addText('salaire')
    ->addText('experience')
    ->addText('formation')
    ->addTab('responsabilites')
    ->addRepeater('responsabilites', ['min' => 1, 'layout' => 'block'])
        ->addText('responsabilite')
    ->endRepeater();




return $job;
