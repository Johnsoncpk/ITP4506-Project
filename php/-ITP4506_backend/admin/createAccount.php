<?php
require_once('../conn.php');

if(isset($_POST['userID'])){
extract($_POST);
$id = rand(200000000,219999999);
$rs = mysqli_query($conn, $sql);
$sql = "INSERT INTO user (id, firstname, lastname, email, role)
    VALUES ($id, $firstname, $lastname, $email, $role)";
mysqli_query($conn, $sql);
}

?>