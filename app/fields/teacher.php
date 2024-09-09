<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$teacher = new FieldsBuilder('teacher');
//dd(get_class_methods($teacher));
$teacher
    ->setLocation('post_type', '==', 'teacher');

$teacher
    ->addImage('image', ['return_format' => 'url'])
    ->addTab('certifications')
    ->addRepeater('certifications', ['min' => 1, 'layout' => 'block'])
    ->addText('value')
    ->endRepeater()
    ->addTab('formations')
    ->addRepeater('formations', ['min' => 1, 'layout' => 'block'])
    ->addText('value')
    ->endRepeater()
    ->addTab('experiences')
    ->addRepeater('experiences', ['min' => 1, 'layout' => 'block'])
    ->addText('value')
    ->endRepeater()
    ->addTab('technologies')
    ->addRepeater('technologies', ['min' => 1, 'layout' => 'block'])
    ->addText('value')
    ->endRepeater()
    ->addTab('services')
    ->addRepeater('services', ['min' => 1, 'layout' => 'block'])
    ->addText('value')
    ->endRepeater()
    ->addTab('videos')
    ->addRepeater('videos', ['min' => 1, 'layout' => 'block'])
    ->addText('value')
    ->endRepeater();

return $teacher;
