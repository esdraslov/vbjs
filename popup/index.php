<?php
$msg = $_GET["msg"];
$title = $_GET["title"];
?>

<html>
<head>
  <title> $title </title>
  <meta charset="utf-8">
</head>
<body>
  $msg
  <button onclick="window.close">ok</button>
</body>
</html>
