<?php
//Updates a Doctor
include_once('dbhmsconfig.php');

if($_SERVER['REQUEST_METHOD'] == "POST"){
	
	// Get data from the REST client
    $DoctorID = isset($_POST['DoctorID']) ? mysqli_real_escape_string($conn, $_POST['DoctorID']) : "";
	$FirstName = isset($_POST['FirstName']) ? mysqli_real_escape_string($conn, $_POST['FirstName']) : "";
	$MiddleName = isset($_POST['MiddleName']) ? mysqli_real_escape_string($conn, $_POST['MiddleName']) : "";
    $LastName = isset($_POST['LastName']) ? mysqli_real_escape_string($conn, $_POST['LastName']) : "";
    $DOB = isset($_POST['DOB']) ? mysqli_real_escape_string($conn, $_POST['DOB']) : "";
    $Gender = isset($_POST['Gender']) ? mysqli_real_escape_string($conn, $_POST['Gender']) : "";
    $Address = isset($_POST['Address']) ? mysqli_real_escape_string($conn, $_POST['Address']) : "";
    $Email = isset($_POST['Email']) ? mysqli_real_escape_string($conn, $_POST['Email']) : "";
    $Password = isset($_POST['Password']) ? mysqli_real_escape_string($conn, $_POST['Password']) : "";
    $Department = isset($_POST['Department']) ? mysqli_real_escape_string($conn, $_POST['Department']) : "";
    $Specialization = isset($_POST['Specialization']) ? mysqli_real_escape_string($conn, $_POST['Specialization']) : "";

	// Insert data into database
	$sql = "UPDATE doctor SET FirstName = '$FirstName', MiddleName = '$MiddleName', LastName = '$LastName', DOB = $DOB, Gender= '$Gender', Address = '$Address', Email = '$Email', Password = '$Password', Department = '$Department', Specialization = '$Specialization' WHERE doctor.id = $DoctorID;";
	$post_data_query = mysqli_query($conn, $sql);
	if($post_data_query){
		$json = array("status" => 1, "Success" => "Doctor updated.");
	}
	else{
		$json = array("status" => 0, "Error" => "Error updating doctor! Please try again!");
	}
}
else{
	$json = array("status" => 0, "Info" => "Request method not accepted!");
}

@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);