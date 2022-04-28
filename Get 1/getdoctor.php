<?php
    //This gets all doctors for admin view
    
	//include correct config
	include_once('dbhmsconfig.php');
	$DID = isset($_POST['DoctorID']) ? mysqli_real_escape_string($conn, $_POST['DoctorID']) :  "";
	$sql = "select * from doctor WHERE doctor.id = $DID;";
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
			'Email' => $r["Email"],
			'Password' => $r["Password"],
			'Department' => $r["Department"],
			'Specialization' => $r["Specialization"]);
			
			array_push($result,$appointment);
			
		}
		$json = array("status" => 1, "info" => $result);
	}
	else{
		$json = array("status" => 0, "error" => "Doctor not found!", "DoctorID" => $DID);
	}
@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);
