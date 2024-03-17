<?php

$string_number = '10';
$number = 10;
$float_number = 10.5;
$potatoes ="10 potatoes";

var_dump($string_number);
var_dump($number);
var_dump($float_number);

echo "\n";

var_dump($string_number + $number);
var_dump($string_number + $float_number);

// Adding 5 potatoes to 10 potatoes

$potatoes = $potatoes + 5; // PHP will try to convert the string to a number extracting the number from the string
echo $potatoes;

echo "\n";

$number = 20;