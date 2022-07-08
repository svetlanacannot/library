<?php


require 'dbconnect.php';
require 'headers.php';

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$name = $_POST['name'];
$author = $_POST['author'];
$descr = $_POST['descr'];
$photo = $_POST['photo'];
$num = $_POST['num'];

if($name != null && $descr != null && $author != null && $photo != null && $num != null){
    $sql = "INSERT INTO books (name, author, description, photo, num) VALUES ('$name', '$author', '$descr', '$photo', '$num')";
  
  mysqli_query($conn, $sql);
}

mysqli_close($conn);