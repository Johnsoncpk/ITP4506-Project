<?php
require_once('../conn.php');

$sql = "SELECT * FROM class WHERE teacherID = '201116523'";
$rs = mysqli_query($conn, $sql);
$myArr = array();
while($rc = mysqli_fetch_assoc($rs))
{
  $data["name"] = $rc["name"];
  $data["description"] = $rc["description"];
  $data["academicYear"] = $rc["academicYear"];
  $myArr[] = $data;
 }
 echo json_encode($myArr); 
 mysqli_free_result($rs);
 mysqli_close($conn);
?>