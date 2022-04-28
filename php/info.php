<?php
	//include correct config
	include_once('dbhmsconfig.php');
	//get data from query
	$PID = isset($_GET['PatientID']) ? mysqli_real_escape_string($conn, $_GET['PatientID']) :  "";
	//select from appointment all appointments matching the input patient ID
	$sql = "SELECT * FROM appointment WHERE PatientID='{$PID}';";
	$get_data_query = mysqli_query($conn, $sql) or die(mysqli_error($conn));
	echo json_encode($conn);

	if(mysqli_num_rows($get_data_query)!=0){
		$result = array();
		
		while($r = mysqli_fetch_array($get_data_query)){
			//know what this does
			extract($r);
			//correct this to correct values
			$result[] = array("ApptID" => $ApptID, "DoctorID" => $DoctorID, 'PatientID' => $PatientID);
		}
		$json = array("status" => 1, "info" => $result);
	}
	else{
		$json = array("status" => 0, "error" => "Appointments or Patients not found!", "PatientID" => $PID);
	}
@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);
