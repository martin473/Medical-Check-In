<?php	
	include_once('dbhmsconfig.php');
	$DID = isset($_POST['DoctorID']) ? mysqli_real_escape_string($conn, $_POST['DoctorID']) :  "";
	$sql = "select * from doctor where id=$DID;";
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
			'Department' => $r["Department"],
			
			'Specialization' => $r["Specialization"]);
			
			array_push($result,$appointment);
			
		}
		$json = array("status" => 1, "info" => $result);
	}
	else{
		$json = array("status" => 0, "error" => "Doctors not found!");
	}
@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);
