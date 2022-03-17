<?php
include_once('dbhmsconfig.php');

if($_SERVER['REQUEST_METHOD'] == "POST"){
	
	// Get data from the REST client
	$ApptID = isset($_POST['ApptID']) ? mysqli_real_escape_string($conn, $_POST['ApptID']) : "";
	$PatientID = isset($_POST['PatientID']) ? mysqli_real_escape_string($conn, $_POST['PatientID']) : "";
	$DoctorID = isset($_POST['DoctorID']) ? mysqli_real_escape_string($conn, $_POST['DoctorID']) : "";

	// Insert data into database
	$sql = "INSERT INTO appointment (`ApptID`, `PatientID`, `DoctorID`) VALUES ('$ApptID', '$DoctorID', '$PatientID');";
	$post_data_query = mysqli_query($conn, $sql);
	if($post_data_query){
		$json = array("status" => 1, "Success" => "Appointment added.");
	}
	else{
		$json = array("status" => 0, "Error" => "Error adding appointment! Please try again!");
	}
}
else{
	$json = array("status" => 0, "Info" => "Request method not accepted!");
}

@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);
