<?php
    //Deletes patient

	//include correct config
	include_once('dbhmsconfig.php');
	//get data from query
	$PatientID = isset($_POST['PatientID']) ? mysqli_real_escape_string($conn, $_POST['PatientID']) :  "";
	$sql = "delete from patient where id = ".$PatientID;
	if (mysqli_query($conn, $sql)) {
        $json = "Patient Deleted.";
		$sql = "delete from appointment where PatientID = ".$PatientID;
		mysqli_query($conn, $sql);
    }
	else {
        $json = $conn-> connect_errno;

    }
@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);
