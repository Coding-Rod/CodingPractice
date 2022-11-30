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

echo "\n";

?>