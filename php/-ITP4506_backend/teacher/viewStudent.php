<?php
require_once('../conn.php');

$sql = "SELECT * FROM studentclass, user WHERE classID = '123456789' AND studentclass.studentID = user.id";
$rs = mysqli_query($conn, $sql);
$myArr = array();
while($rc = mysqli_fetch_assoc($rs))
{
  $data["studentID"] = $rc["studentID"];
  $data["firstName"] = $rc["firstName"];
  $data["lastName"] = $rc["lastName"];
  $data["classID"] = $rc["classID"];
  $myArr[] = $data;
 }
 echo json_encode($myArr); 
 mysqli_free_result($rs);
 mysqli_close($conn);
?>