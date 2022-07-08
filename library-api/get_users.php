<?php

require 'dbconnect.php';
require 'headers.php';

$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);
$arr = array();
while($row = mysqli_fetch_array($result)) {
 $arr[] = [
    'name' => $row['name'],
    'surname' => $row['surname'],
    'patronymic' => $row['patronymic'],
    'photo' => $row['photo'],
    'phone' => $row['phone'],
    'email' => $row['email'],
    'id' => $row['id']
 ];
}
echo json_encode($arr, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);

mysqli_close($conn);