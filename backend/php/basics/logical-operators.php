<?php

$cats_feline = true;
$cats_4_legs = true;
$cats_fly = false;

var_dump($cats_feline && $cats_4_legs); // true with AND operator
var_dump($cats_feline || $cats_4_legs); // true with OR operator
var_dump($cats_feline && $cats_fly); // false with AND operator
var_dump($cats_feline || $cats_fly); // true with OR operator

// && is the same as and
$result = $cats_feline and $cats_fly;

var_dump($result); // true with AND operator

// Everythins is just the same as in JavaScript except the operator spaceship
// <=> is called the spaceship operator

// It returns -1 if the left operand is less than the right operand
// It returns 0 if the left operand is equal to the right operand
// It returns 1 if the left operand is greater than the right operand

// Example:

var_dump(1 <=> 1); // 0
var_dump(1 <=> 2); // -1
var_dump(2 <=> 1); // 1

echo "\n";

?>