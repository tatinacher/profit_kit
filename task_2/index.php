<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="slick.css"/>
    <link rel="stylesheet" type="text/css" href="slick-theme.css"/>
    <style type="text/css">
        body {
            background: #3498db;
        }
        .wrapper {
            width:650px;
            margin: 0 auto;
        }
        .slider_element img {
            border: 5px solid #fff;
        }
    </style>
    <title>Задание 2</title>
</head>

<body>
    <div class="wrapper">
        <div class="slider">
            <?php show_images(); ?>
        </div>
    </div>
</body>
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
  <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script type="text/javascript" src="slick.min.js"></script>
  <script src="script.js"></script>
</html>


<?php

function show_images(){
    $dir = 'images/';
    $files = scandir($dir);
    if ($files !== false) {
        foreach($files as $f) {
            if ($f == '..' || $f == '.') continue;
            echo '<div class="slider_element"><img src="' . $dir . $f . '" alt="'.$f.'"></div>';
        }
    }
}
?>