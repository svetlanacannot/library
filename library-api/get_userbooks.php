<?php

require 'dbconnect.php';
require 'headers.php';

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$user_id = $_POST['userId'];


$holdArr = array();
$givenArr = array();

if($user_id != null){

    $sql = "SELECT * FROM operations WHERE (id_user = '$user_id')";
    $result = mysqli_query($conn, $sql);

    while($row = mysqli_fetch_array($result)) {

        $bookid = $row['id_book'];
        $bookSql = "SELECT * FROM books WHERE (id = '$bookid')";
        $bookResult = mysqli_query($conn, $bookSql);

        while($bookRow = mysqli_fetch_array($bookResult)) {
            
            if($row['type'] == 'hold'){
                $holdArr[] = [
                    'name' => $bookRow['name'],
                    'author' => $bookRow['author'],
                    'date' => $row['date'],
                    'opId' => $row['id']
                ];
            }
            if($row['type'] == 'given'){
                $givenArr[] = [
                    'name' => $bookRow['name'],
                    'author' => $bookRow['author'],
                    'date' => $row['date'],
                    'opId' => $row['id']
                ];
            }
        }
     
    }

    $arr = [
        'hold' => $holdArr,
        'given' => $givenArr
    ];
    
    echo json_encode($arr, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
}


mysqli_close($conn);