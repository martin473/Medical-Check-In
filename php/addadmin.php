<?php
//Creates an admin
include_once('dbhmsconfig.php');

if($_SERVER['REQUEST_METHOD'] == "POST"){
	
	// Get data from the REST client
	$FirstName = isset($_POST['FIRSTNAME']) ? mysqli_real_escape_string($conn, $_POST['FIRSTNAME']) : "";
	$MiddleName = isset($_POST['MIDDLENAME']) ? mysqli_real_escape_string($conn, $_POST['MIDDLENAME']) : "";
    $LastName = isset($_POST['LASTNAME']) ? mysqli_real_escape_string($conn, $_POST['LASTNAME']) : "";
    $DOB = isset($_POST['DOB']) ? mysqli_real_escape_string($conn, $_POST['DOB']) : "";
    $Gender = isset($_POST['GENDER']) ? mysqli_real_escape_string($conn, $_POST['GENDER']) : "";
    $Address = isset($_POST['ADDRESS']) ? mysqli_real_escape_string($conn, $_POST['ADDRESS']) : "";
    $Email = isset($_POST['EMAIL']) ? mysqli_real_escape_string($conn, $_POST['EMAIL']) : "";
    $Password = isset($_POST['PASSWORD']) ? mysqli_real_escape_string($conn, $_POST['PASSWORD']) : "";

	// Insert data into database
	$sql = "INSERT INTO admin (`FirstName`, `MiddleName`, `LastName`, `DOB`, `Gender`, `Address`, `Email`, `Password`) VALUES ('$FirstName', '$MiddleName', '$LastName', '$DOB', '$Gender', '$Address', '$Email', '$Password');";
	$post_data_query = mysqli_query($conn, $sql);
	if($post_data_query){
		$json = array("status" => 1, "Success" => "Admin added.");
	}
	else{
		$json = array("status" => 0, "Error" => "Error adding admin! Please try again!");
	}
}
else{
	$json = array("status" => 0, "Info" => "Request method not accepted!");
}

@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);