<?php
	//include correct config
	include_once('dbhmsconfig.php');

	//shouldnt need this line
	//$DID = isset($_GET['DoctorID']) ? mysqli_real_escape_string($conn, $_GET['DoctorID']) :  "";

	//select from appointment all appointments
	$sql = "SELECT * FROM appointment;";
	$get_data_query = mysqli_query($conn, $sql) or die(mysqli_error($conn));
	echo json_encode($conn);

	if(mysqli_num_rows($get_data_query)!=0){
		$result = array();
		
		while($r = mysqli_fetch_array($get_data_query)){
			extract($r);
			//correct this to correct values
			$result[] = array("ApptID" => $ApptID, "DoctorID" => $DoctorID, 'PatientID' => $PatientID);
		}
		$json = array("status" => 1, "info" => $result);
	}
	else{
		$json = array("status" => 0, "error" => "Appointments not found!");
	}
@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);
