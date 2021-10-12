<?php
require_once('../conn.php');

if(isset($_POST['userID'])){
extract($_POST);
if ($suspended == 0){
    $disable = "UPDATE user SET suspended = 0 WHERE id = $userID";
    mysqli_query($conn, $disable);
} else {
    $enable = "UPDATE user SET suspended = 1 WHERE id = $userID";
    mysqli_query($conn, $enable);
}
}

?>