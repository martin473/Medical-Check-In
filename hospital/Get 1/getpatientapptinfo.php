<?php
    //This gets all patients of a doctor
    
	//include correct config
	include_once('dbhmsconfig.php');
	$AID = isset($_POST['ApptID']) ? mysqli_real_escape_string($conn, $_POST['ApptID']) :  "";
	$sql = "SELECT patient.id as PatientID, patient.FirstName AS PatientFirstName, patient.MiddleName AS PatientMiddleName, patient.LastName AS PatientLastName, patient.email AS Email, patient.DOB as DOB, patient.MedicationHistory as MedicationHistory, patient.Medication as Medication, patient.Conditions as Conditions, appointment.Date AS Date, appointment.VisitTime as Time, appointment.id as AppointmentID, appointment.status as AppointmentStatus, doctor.FirstName AS DoctorFirstName, doctor.MiddleName AS DoctorMiddleName, doctor.LastName AS DoctorLastName, doctor.id AS DoctorID FROM patient INNER JOIN appointment ON appointment.PatientID = patient.id INNER JOIN doctor ON doctor.id = appointment.DoctorID WHERE appointment.id = $AID;";
	$get_data_query = mysqli_query($conn, $sql) or die(mysqli_error($conn));
	

	if(mysqli_num_rows($get_data_query)!=0){
		$result = array();
		
		while($r = mysqli_fetch_array($get_data_query)){
			extract($r);
			
			$appointment = array("PatientID" => $r["PatientID"], 
			'PatientFirstName' => $r["PatientFirstName"],
			'PatientMiddleName' => $r["PatientMiddleName"],
			'PatientLastName' => $r["PatientLastName"],
			'Email' => $r["Email"],
			'DOB' => $r["DOB"],
			'MedicationHistory'=>$r["MedicationHistory"],
			'Medication' => $r["Medication"],
			'Conditions' => $r["Conditions"],
            'Date' => $r["Date"],
			'AppointmentID' => $r["AppointmentID"],
			'AppointmentStatus' => $r["AppointmentStatus"],
            'DoctorFirstName' => $r["DoctorFirstName"],
			'DoctorMiddleName' => $r["DoctorMiddleName"],
			'DoctorLastName' => $r["DoctorLastName"],
            'DoctorID' => $r["DoctorID"]);
			
			array_push($result,$appointment);
			
		}
		$json = array("status" => 1, "info" => $result);
	}
	else{
		$json = array("status" => 0, "error" => "Appointment not found!", "ApptID" => $AID);
	}
@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);
