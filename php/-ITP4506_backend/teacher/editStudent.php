<?php
require_once('../conn.php');

if(isset($_POST["update"]))
{
 extract($_POST);
 $sql = "UPDATE user SET firstName = '$firstName'， lastName='$lastName' WHERE id = '$studentID'";
 mysqli_query($conn, $sql);
 if(mysqli_affected_rows($conn) > 0)
    header("location:***.php");
 else
    echo "Update unsuccessfully";
}
?>