<?php
    //This gets all patients for admin view
    
	//include correct config
	include_once('dbhmsconfig.php');
	$sql = "select * from patient;";
	$get_data_query = mysqli_query($conn, $sql) or die(mysqli_error($conn));
	

	if(mysqli_num_rows($get_data_query)!=0){
		$result = array();
		
		while($r = mysqli_fetch_array($get_data_query)){
			extract($r);
			
			$appointment = array("ID" => $r["id"], 
			'First Name' => $r["FirstName"],
			'Middle Name' => $r["MiddleName"],
			'Last Name' => $r["LastName"],
			'DOB' => $r["DOB"],
			'Gender' => $r["Gender"],
			'Address'=>$r["Address"],

			'Email' => $r["Email"],
			'Password' => $r["Password"],
			'MedicationHistory' => $r["MedicationHistory"],
			
			'Medication' => $r["Medication"],
            'Conditions' => $r["Conditions"]);
			
			array_push($result,$appointment);
			
		}
		$json = array("status" => 1, "info" => $result);
	}
	else{
		$json = array("status" => 0, "error" => "Patients not found!");
	}
@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);
