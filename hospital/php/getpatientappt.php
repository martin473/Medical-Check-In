<?php
	//include correct config
	include_once('dbhmsconfig.php');
	//get data from query
	$PID = isset($_POST['PatientID']) ? mysqli_real_escape_string($conn, $_POST['PatientID']) :  "";
	//select from appointment all appointments matching the input patient ID
	$sql = "select appointment.id,PatientID, DoctorID, Date, Department, VisitTime, FirstName, MiddleName, LastName,";
	$sql = $sql . "Address, Email, Gender, Specialization from appointment, doctor where appointment.DoctorID = doctor.id";
	$sql = $sql . " and PatientID='".$PID."';";
	$get_data_query = mysqli_query($conn, $sql) or die(mysqli_error($conn));
	

	if(mysqli_num_rows($get_data_query)!=0){
		$result = array();
		
		while($r = mysqli_fetch_array($get_data_query)){
			extract($r);
			//correct this to correct values

			$appointment = array("ApptID" => $r["id"], 'Gender'=>$r["Gender"], "DoctorID" => $r["DoctorID"], "Specialization" => $r["Specialization"], 'PatientID' => $r["PatientID"],
			'Date' => $r ["Date"], 'Visit Time' => $r["VisitTime"], 'Department' => $r["Department"], 'First Name' => $r["FirstName"],
			'Last Name' => $r["LastName"],'Middle Name' => $r["MiddleName"], 'Address' => $r["Address"]);
			array_push($result,$appointment);
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
