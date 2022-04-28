<?php
    //This gets all patients of a doctor
    
	//include correct config
	include_once('dbhmsconfig.php');
	$DID = isset($_POST['DoctorID']) ? mysqli_real_escape_string($conn, $_POST['DoctorID']) :  "";
	$sql = "SELECT DISTINCT patient.id, patient.FirstName, patient.MiddleName, patient.LastName, patient.DOB, patient.Gender, patient.Address, patient.MedicationHistory, patient.Medication, patient.Conditions FROM patient INNER JOIN appointment ON appointment.PatientID = patient.id INNER JOIN doctor ON doctor.id = appointment.DoctorID WHERE doctor.id = $DID;";
	$get_data_query = mysqli_query($conn, $sql) or die(mysqli_error($conn));
	

	if(mysqli_num_rows($get_data_query)!=0){
		$result = array();
		
		while($r = mysqli_fetch_array($get_data_query)){
			extract($r);
			
			$appointment = array("ID" => $r["id"], 
			'FirstName' => $r["FirstName"],
			'MiddleName' => $r["MiddleName"],
			'LastName' => $r["LastName"],
			'DOB' => $r["DOB"],
			'Gender' => $r["Gender"],
			'Address'=>$r["Address"],
			'MedicationHistory' => $r["MedicationHistory"],
			'Medication' => $r["Medication"],
            'Conditions' => $r["Conditions"]);
			
			array_push($result,$appointment);
			
		}
		$json = array("status" => 1, "info" => $result);
	}
	else{
		$json = array("status" => 0, "error" => "Doctor or patients not found!", "Doctor" => $DID);
	}
@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);
