<?php
	//include correct config
	include_once('dbhmsconfig.php');
	//select from appointment all appointments matching the input doctor ID
	$sql = "select appointment.id,PatientID, Date, VisitTime, patient.FirstName as 'pFirstName', patient.MiddleName as 'pMiddleName', patient.LastName as 'pLastName' ,";
	$sql = $sql . "doctor.FirstName as 'dFirstName', doctor.MiddleName  as 'dMiddleName', doctor.LastName as 'dLastName',";
	$sql = $sql . "patient.Email, Status, patient.Gender, MedicationHistory, Conditions, Medication from appointment, patient, doctor ";
	$sql = $sql . "where appointment.PatientID = patient.id and appointment.DoctorID=doctor.id";

	$get_data_query = mysqli_query($conn, $sql) or die(mysqli_error($conn));
	

	if(mysqli_num_rows($get_data_query)!=0){
		$result = array();
		
		while($r = mysqli_fetch_array($get_data_query)){
			extract($r);
			
			$appointment = array("ApptID" => $r["id"], 
			'Date' => $r["Date"],
			'Visit Time' => $r["VisitTime"],
			'pFirst Name' => $r["pFirstName"],
			'pLast Name' => $r["pLastName"],
			'pMiddle Name' => $r["pMiddleName"],
			'Gender'=>$r["Gender"],

			'dFirst Name' => $r["dFirstName"],
			'dLast Name' => $r["dLastName"],
			'dMiddle Name' => $r["dMiddleName"],
			
			
			'Status'=>$r["Status"],
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
