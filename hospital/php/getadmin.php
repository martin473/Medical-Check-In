<?php
    //This gets one admin
    
	//include correct config
	include_once('dbhmsconfig.php');
    $AID = isset($_POST['AdminID']) ? mysqli_real_escape_string($conn, $_POST['AdminID']) :  "";
	$sql = "select * from admin WHERE admin.id = $AID;";
	$get_data_query = mysqli_query($conn, $sql) or die(mysqli_error($conn));
	

	if(mysqli_num_rows($get_data_query)!=0){
		$result = array();
		
		while($r = mysqli_fetch_array($get_data_query)){
			extract($r);
			
			$admin = array("ID" => $r["id"], 
			'First Name' => $r["FirstName"],
			'Middle Name' => $r["MiddleName"],
			'Last Name' => $r["LastName"],
			'DOB' => $r["DOB"],
			'Gender' => $r["Gender"],
			'Address'=>$r["Address"],

			'Email' => $r["Email"],
			'Password' => $r["Password"]);
			
			array_push($result, $admin);
			
		}
		$json = array("status" => 1, "info" => $result);
	}
	else{
		$json = array("status" => 0, "error" => "Admins not found!", "Admin" => $AID);
	}
@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);
