<?php

$seconds = readline('Enter the number of seconds: ');
$hours = (int) ($seconds / 3600);
$minutes = (int) (($seconds % 3600) / 60);
$seconds = (int) ($seconds % 60);

echo "Actual time is: $hours:$minutes:$seconds";

echo "\n";

?>