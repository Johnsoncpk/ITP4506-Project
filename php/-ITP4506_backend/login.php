<?php
require_once('conn.php');

if(isset($_POST["userID"]))
{
    $userID = $POST['userID'];
    $password = $POST['password'];

    $sql = "SELECT * FROM user WHERE id='$userID' AND password='$password'";
    $rs = mysqli_query($conn, $sql);
 
	if(mysqli_num_rows($rs) == 1)
	 	return true;
	else
		return false;
}
?>