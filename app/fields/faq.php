<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$fields = new FieldsBuilder('faq');

$fields
    ->setLocation('post_type', '==', 'faq');

$fields
    ->addWysiwyg('content');

return $fields;
