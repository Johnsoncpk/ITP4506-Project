<?php
    require_once('../conn.php');
    
    if(isset($_POST["update"]))
    {
     extract($_POST);
     $sql = "UPDATE class SET name = '$name'， description='$description' WHERE id = '$classID' AND teacherID = '$teacherID'" ;
     mysqli_query($conn, $sql);
     if(mysqli_affected_rows($conn) > 0)
        header("location:***.php");
     else
        echo "Update unsuccessfully";
    }
?>