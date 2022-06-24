<?php

require 'dbconnect.php';
require 'headers.php';

$sql = "SELECT * FROM books WHERE (num > 0)";
$result = mysqli_query($conn, $sql);
$arr = array();
while($row = mysqli_fetch_array($result)) {
 $arr[] = [
    'name' => $row['name'],
    'author' => $row['author'],
    'descr' => $row['description'],
    'photo' => $row['photo'],
    'num' => $row['num'],
    'ebook' => $row['ebook']
 ];
}

echo json_encode($arr, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);