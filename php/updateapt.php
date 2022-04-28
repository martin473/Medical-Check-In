<?php
//Updates an appointment
include_once('dbhmsconfig.php');

if($_SERVER['REQUEST_METHOD'] == "POST"){
	
	// Get data from the REST client
    $ApptID = isset($_POST['ApptID']) ? mysqli_real_escape_string($conn, $_POST['ApptID']) : "";
	$PatientID = isset($_POST['PatientID']) ? mysqli_real_escape_string($conn, $_POST['PatientID']) : "";
	$DoctorID = isset($_POST['DoctorID']) ? mysqli_real_escape_string($conn, $_POST['DoctorID']) : "";
    $Date = isset($_POST['Date']) ? mysqli_real_escape_string($conn, $_POST['Date']) : "";
    $Time = isset($_POST['VisitTime']) ? mysqli_real_escape_string($conn, $_POST['VisitTime']) : "";
    $Status = isset($_POST['Status']) ? mysqli_real_escape_string($conn, $_POST['Status']) : "";

	// Insert data into database
	$sql = "UPDATE appointment SET DoctorID = '$DoctorID', Date = '$Date', VisitTime = '$Time', Status = '$Status' WHERE appointment.id = $ApptID;";
	$post_data_query = mysqli_query($conn, $sql);
	if($post_data_query){
		$json = array("status" => 1, "Success" => "Appointment updated.");
	}
	else{
		$json = array("status" => 0, "Error" => "Error updating appointment! Please try again!");
	}
}
else{
	$json = array("status" => 0, "Info" => "Request method not accepted!");
}

@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);
