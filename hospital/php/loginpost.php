<?php
	//include correct config
	include_once('dbhmsconfig.php');
	//get data from query
	$EMAIL = isset($_POST['Email']) ? mysqli_real_escape_string($conn, $_POST['Email']) :  "";
	$PWD = isset($_POST['Password']) ? mysqli_real_escape_string($conn, $_POST['Password']) :  "";
	$TABLE = isset($_POST['Table']) ? mysqli_real_escape_string($conn, $_POST['Table']) :  "";

	//See if user exists in correct table. Needs to be more secure. Need to make sure email and password are named properly in every table
	$sql = "SELECT * FROM {$TABLE} WHERE email='{$EMAIL}' AND password='{$PWD}';";
	$get_data_query = mysqli_query($conn, $sql) or die(mysqli_error($conn));
	echo json_encode($conn);

	if(mysqli_num_rows($get_data_query)!=0){
		$result = array();
		
		while($r = mysqli_fetch_array($get_data_query)){
			extract($r);
			//This may be written incorrectly. This is for debugging only just to make sure we're not getting multiple results
			$result[] = array("Table" => $TABLE, "Email" => $email, 'PWD' => $password);
		}
		$json = array("status" => 1, "info" => $result);
	}
	else{
		//displaying email and password attempt over http request is bad practice but is fine for debugging
		$json = array("status" => 0, "error" => "Account not found!", "Email" => $EMAIL, 'Password' => $PWD);
	}
@mysqli_close($conn);

// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);
