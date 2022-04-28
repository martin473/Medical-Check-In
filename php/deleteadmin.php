<?php
    //Deletes administrators

	//include correct config
	include_once('dbhmsconfig.php');
	//get data from query
	$AdminID = isset($_POST['AdminID']) ? mysqli_real_escape_string($conn, $_POST['AdminID']) :  "";
	$sql = "delete from admin where id = ".$AdminID;
	if (mysqli_query($conn, $sql)) {
        $json = "Admin Deleted.";
    }
	else {
        $json = $conn-> connect_errno;

    }
@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);
