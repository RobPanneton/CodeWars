<?php

function generatePairs($m,$n){
    $pairs = [];
    $i = $m;
    
    $counter = 0;
    $cycle = 0;
    
    while ($i + $cycle < $n + 1) {
      array_push($pairs, [$i+$cycle, $i+$counter+$cycle]);
      $counter++;
      
      if ($i + $counter +$cycle > $n){
        $counter = 0;
        $cycle++;
      }
    }
    
    return $pairs;
  }

  // Implement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n.

  // Example:
  
  // m = 2
  // n = 4
  
  // result = [(2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (4, 4)]



?>