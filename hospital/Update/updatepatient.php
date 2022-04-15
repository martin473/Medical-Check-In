<?php
//updates a patient
include_once('dbhmsconfig.php');

if($_SERVER['REQUEST_METHOD'] == "POST"){
	
	// Get data from the REST client
    $PatientID = isset($_POST['PatientID']) ? mysqli_real_escape_string($conn, $_POST['PatientID']) : "";
	$FirstName = isset($_POST['FirstName']) ? mysqli_real_escape_string($conn, $_POST['FirstName']) : "";
	$MiddleName = isset($_POST['MiddleName']) ? mysqli_real_escape_string($conn, $_POST['MiddleName']) : "";
    $LastName = isset($_POST['LastName']) ? mysqli_real_escape_string($conn, $_POST['LastName']) : "";
    $DOB = isset($_POST['DOB']) ? mysqli_real_escape_string($conn, $_POST['DOB']) : "";
    $Gender = isset($_POST['Gender']) ? mysqli_real_escape_string($conn, $_POST['Gender']) : "";
    $Address = isset($_POST['Address']) ? mysqli_real_escape_string($conn, $_POST['Address']) : "";
    $Email = isset($_POST['Email']) ? mysqli_real_escape_string($conn, $_POST['Email']) : "";
    $Password = isset($_POST['Password']) ? mysqli_real_escape_string($conn, $_POST['Password']) : "";
    $MedicationHistory = isset($_POST['MedicationHistory']) ? mysqli_real_escape_string($conn, $_POST['MedicationHistory']) : "";
    $Medication = isset($_POST['Medication']) ? mysqli_real_escape_string($conn, $_POST['Medication']) : "";
    $Conditions = isset($_POST['Conditions']) ? mysqli_real_escape_string($conn, $_POST['Conditions']) : "";

	// Insert data into database
	$sql = "UPDATE patient SET FirstName = '$FirstName', MiddleName = '$MiddleName', LastName = '$LastName', DOB = '$DOB', Gender= '$Gender', Address = '$Address', Email = '$Email', Password = '$Password', MedicationHistory = '$MedicationHistory', Medication = '$Medication', Conditions = '$Conditions' WHERE id = $PatientID;";
	$post_data_query = mysqli_query($conn, $sql);
	if($post_data_query){
		$json = array("status" => 1, "Success" => "Patient updated.");
	}
	else{
		$json = array("status" => 0, "Error" => "Error updating patient! Please try again!");
	}
}
else{
	$json = array("status" => 0, "Info" => "Request method not accepted!");
}

@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);