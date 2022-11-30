<?php

$counter = 0;
$result = $counter++;

echo $result; // 0

// Every operator has left asociativity except for the assignment operator
// Left asociativity means that the operator is applied to the left operand first
// Example:

$counter = 0;
$result = $counter + 1;

echo $result; // 1

// Right asociativity
// Example:

$counter = 0;
$result = $counter = $counter + 1;

echo $result; // 1

echo "\n";

?>