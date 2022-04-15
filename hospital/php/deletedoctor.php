<?php
    //Deletes doctors

	//include correct config
	include_once('dbhmsconfig.php');
	//get data from query
	$DoctorID = isset($_POST['DoctorID']) ? mysqli_real_escape_string($conn, $_POST['DoctorID']) :  "";
	$sql = "delete from doctor where id = ".$DoctorID;
	if (mysqli_query($conn, $sql)) {
        $json = "Doctor Deleted.";
		$sql = "delete from appointment where DoctorID = ".$DoctorID;
		mysqli_query($conn, $sql);
    }
	else {
        $json = $conn-> connect_errno;

    }
@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);
