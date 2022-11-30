<?php

$number = "5";

var_dump($number);

$number = (int) $number;

var_dump($number);

$days = 5.89;
$days = (int) $days;

var_dump($days); // When float is casted to int, the decimal part is removed

echo "\n";

?>