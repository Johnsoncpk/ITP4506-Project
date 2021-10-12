<?php
require_once('../conn.php');

$sql = "SELECT * FROM user";
$rs = mysqli_query($conn, $sql);
$myArr = array();
while($rc = mysqli_fetch_assoc($rs))
{
  $data["id"] = $rc["id"];
  $data["firstName"] = $rc["firstName"];
  $data["lastName"] = $rc["lastName"];
  $data["mobile"] = $rc["mobile"];
  $data["role"] = $rc["role"];
  $data["suspended"] = $rc["suspended"];
  $myArr[] = $data;
 }
 echo json_encode($myArr);
 mysqli_free_result($rs);
 mysqli_close($conn);
?>