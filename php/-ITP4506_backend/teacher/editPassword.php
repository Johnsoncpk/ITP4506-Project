<?php

if(count($_POST)>0) {
    $sql = "SELECT * from user WHERE id ='" . $id . "'"
    $rs = mysqli_query($conn,$sql;
    $row = mysqli_fetch_array($result);
    if($_POST["currentPassword"] == $row["password"] && $_POST["newPassword"] == $_POST["confirmPassword"] ) {
    mysqli_query($con,"UPDATE user set password='" . $_POST["newPassword"] . "' WHERE id='" . $id . "'");
        $message = "Password Changed Sucessfully";
    } else{
        $message = "Password is not correct";
    }
}
?>