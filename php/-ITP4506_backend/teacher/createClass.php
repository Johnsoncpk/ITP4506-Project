<?php
require_once('../conn.php');

if(isset($_POST['create'])){
extract($_POST);
$id = rand(200000000,219999999);
$rs = mysqli_query($conn, $sql);
$sql = "INSERT INTO class (id, name, description, teacherID, academicYear)
    VALUES ($id, $name, $description, $id, $academicYear)";
mysqli_query($conn, $sql);
}

?>