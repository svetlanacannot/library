<?php

require 'dbconnect.php';
require 'headers.php';

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$name = $_POST['name'];
$surname = $_POST['surname'];
$patronymic = $_POST['patronymic'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$pass = $_POST['pass'];

if($name != null && $surname != null && $email != null && $phone != null && $pass != null){
  if($patronymic != null){
    $sql = "INSERT INTO users (name, surname, patronymic, email, phone, password) VALUES ('$name', '$surname', '$patronymic', '$email', '$phone', '$pass')";
  } else {
    $sql = "INSERT INTO users (name, surname, email, phone, password) VALUES ('$name', '$surname', '$email', '$phone', '$pass')";
  }
  
  mysqli_query($conn, $sql);
}

mysqli_close($conn);