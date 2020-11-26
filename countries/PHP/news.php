<?php
  include "get-data.php";

  $apiURL = 'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=489383a1f0a647bc876947861625fa60';
  echo getData($apiURL); // JSON data
?>