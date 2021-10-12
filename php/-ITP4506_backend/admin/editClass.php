<?php
    require_once('../conn.php');
    
    if(isset($_POST["update"]))
    {
     extract($_POST);
     $sql = "UPDATE class SET name = '$name'， description='$description', teacherID='$teacherID', academicYear='$year'" ;
     mysqli_query($conn, $sql);
     if(mysqli_affected_rows($conn) > 0)
        header("location:***.php");
     else
        echo "Update unsuccessfully";
    }
?>