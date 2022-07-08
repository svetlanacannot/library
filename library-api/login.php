<?php

require 'dbconnect.php';
require 'headers.php';

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$login = $_POST['login'];
$pass = $_POST['pass'];

if($login != null && $pass != null){
    $sql = "SELECT * FROM users WHERE (password = '$pass' AND phone = '$login' OR email = '$login')";
    $result = mysqli_query($conn, $sql);
    while($row = mysqli_fetch_array($result)) {
        echo json_encode([
            'id' => $row['id'],
            'name' => $row['name'],
            'surname' => $row['surname'],
            'patronymic' => $row['patronymic'],
            'role' => $row['role'],
            'photo' => $row['photo'],
            'date' => $row['date'],
            'email' => $row['email'],
            'phone' => $row['phone']
        ]);
    }
}

mysqli_close($conn);