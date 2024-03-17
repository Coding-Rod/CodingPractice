<?php

echo "Hello, world!\n";

$name = "Rodrigo";
$lastName = "Fernandez";

echo 'Hello, $name $lastname!\n';
echo "7Hello, my name is " . $name . " " . $lastname . "!\n";

echo "The product of 2 and 3 is " . (2 * 3) . "!\n";

$people = [
    "Rodrigo" => 22,
    "Juan" => 23,
    "Pedro" => 24,
];

var_dump($people); // var_dump is a function that prints the type and value of a variable
print_r($people); // print_r is a function that prints the value of a variable

echo "\n";
?>