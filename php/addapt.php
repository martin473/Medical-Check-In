<?php
include_once('dbhmsconfig.php');

if($_SERVER['REQUEST_METHOD'] == "POST"){
	
	// Get data from the REST client
	
	$PatientID = isset($_POST['PATIENTID']) ? mysqli_real_escape_string($conn, $_POST['PATIENTID']) : "";
	$DoctorID = isset($_POST['DOCTORID']) ? mysqli_real_escape_string($conn, $_POST['DOCTORID']) : "";
	$Date = isset($_POST['DATE']) ? mysqli_real_escape_string($conn, $_POST['DATE']) : "";
	$VisitTime = isset($_POST['VISITTIME']) ? mysqli_real_escape_string($conn, $_POST['VISITTIME']) : "";
	$Status = isset($_POST['STATUS']) ? mysqli_real_escape_string($conn, $_POST['STATUS']) : "";

	// Insert data into database
	$sql = "INSERT INTO appointment (Date, PatientID, DoctorID, VisitTime, Status) VALUES ('$Date', '$PatientID', '$DoctorID','$VisitTime','$Status');";
	$json = array("status" => 0, "Error" => "$sql");
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
