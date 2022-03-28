<?php
	//include correct config
	include_once('dbhmsconfig.php');
	//get data from query
	$ApptID = isset($_POST['ApptID']) ? mysqli_real_escape_string($conn, $_POST['ApptID']) :  "";
	//select from appointment all appointments matching the input patient ID
	$sql = "delete from appointment where id = ".$ApptID;
	if (mysqli_query($conn, $sql)) {
        $json = "Appointment Deleted.";
    }
	else {
        $json = $conn-> connect_errno;

    }
@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);
