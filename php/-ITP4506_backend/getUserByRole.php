<?php
require_once('conn.php');

if(isset($_POST["role"]))
{
    $sql = "SELECT * FROM user WHERE role ='" . $_POST['role'] . "'";
    $rs = mysqli_query($conn, $sql);
    $myArr = array();
    while($rc = mysqli_fetch_assoc($rs))
    {
    $data["id"] = $rc["id"];
    $data["firstName"] = $rc["firstName"];
    $data["lastName"] = $rc["lastName"];
    $data["password"] = $rc["password"];
    $data["role"] = $rc["role"];
    $data["suspended"] = $rc["suspended"];
    $myArr[] = $data;
    }
    echo json_encode($myArr); 
}
 mysqli_free_result($rs);
 mysqli_close($conn);
?>