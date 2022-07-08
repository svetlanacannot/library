<?php

require 'dbconnect.php';
require 'headers.php';

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$book_id = $_POST['bookId'];
$user_id = $_POST['userId'];

echo 'book';

if($book_id != null && $user_id != null){
    $date = date('Y-m-d', strtotime('+2 days'));
    $sql = "INSERT INTO operations (id_user, id_book, date, type) values ('$user_id', '$book_id', '$date', 'hold')";
    mysqli_query($conn, $sql);
    $sql = "UPDATE books SET num = num-1 where (id='$book_id')";
    mysqli_query($conn, $sql);
}

mysqli_close($conn);