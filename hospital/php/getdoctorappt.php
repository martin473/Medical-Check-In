<?php
	//include correct config
	include_once('dbhmsconfig.php');
	//get data from query
	$DID = isset($_POST['DoctorID']) ? mysqli_real_escape_string($conn, $_POST['DoctorID']) :  "";
	//select from appointment all appointments matching the input doctor ID
	$sql = "select appointment.id,PatientID, Date, VisitTime, FirstName, MiddleName, LastName,";
	$sql = $sql . "Email, Gender, MedicationHistory, Conditions, Medication from appointment, patient where appointment.PatientID = patient.id";
	$sql = $sql . " and DoctorID='".$DID."';";
	$get_data_query = mysqli_query($conn, $sql) or die(mysqli_error($conn));
	

	if(mysqli_num_rows($get_data_query)!=0){
		$result = array();
		
		while($r = mysqli_fetch_array($get_data_query)){
			extract($r);
			
			$appointment = array("ApptID" => $r["id"], 
			'Date' => $r["Date"],
			'Visit Time' => $r["VisitTime"],
			'First Name' => $r["FirstName"],
			'Last Name' => $r["LastName"],
			'Middle Name' => $r["MiddleName"],
			'Medication History' => $r["MedicationHistory"], 
			'Medication' => $r["Medication"],
			'Gender'=>$r["Gender"],
			'Email'=>$r["Email"],
			'Conditions' => $r["Conditions"]);
			
			array_push($result,$appointment);
			
		}
		$json = array("status" => 1, "info" => $result);
	}
	else{
		$json = array("status" => 0, "error" => "Appointments or Patients not found!", "DoctorID" => $DID);
	}
@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);
