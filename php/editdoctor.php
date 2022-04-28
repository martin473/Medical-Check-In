<?php
//updates a patient
include_once('dbhmsconfig.php');

if($_SERVER['REQUEST_METHOD'] == "POST"){
	
	// Get data from the REST client
    $DoctorID = isset($_POST['DOCTORID']) ? mysqli_real_escape_string($conn, $_POST['DOCTORID']) : "";
	$FirstName = isset($_POST['FIRSTNAME']) ? mysqli_real_escape_string($conn, $_POST['FIRSTNAME']) : "";
	$MiddleName = isset($_POST['MIDDLENAME']) ? mysqli_real_escape_string($conn, $_POST['MIDDLENAME']) : "";
    $LastName = isset($_POST['LASTNAME']) ? mysqli_real_escape_string($conn, $_POST['LASTNAME']) : "";
    $DOB = isset($_POST['DOB']) ? mysqli_real_escape_string($conn, $_POST['DOB']) : "";
    $Gender = isset($_POST['GENDER']) ? mysqli_real_escape_string($conn, $_POST['GENDER']) : "";
    $Address = isset($_POST['ADDRESS']) ? mysqli_real_escape_string($conn, $_POST['ADDRESS']) : "";
    
    $Specialization = isset($_POST['SPECIALIZATION']) ? mysqli_real_escape_string($conn, $_POST['SPECIALIZATION']) : "";
    $Department = isset($_POST['DEPARTMENT']) ? mysqli_real_escape_string($conn, $_POST['DEPARTMENT']) : "";
    

	// Insert data into database
	$sql = "UPDATE doctor SET FirstName = '$FirstName', MiddleName = '$MiddleName', LastName = '$LastName', DOB = '$DOB', Gender= '$Gender', Address = '$Address', Specialization = '$Specialization', Department = '$Department' WHERE id = $DoctorID;";
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