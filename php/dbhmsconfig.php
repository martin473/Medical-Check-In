<?php
$config = parse_ini_file('login.ini');
$conn = mysqli_connect($config['dbhost'], $config['username'], $config['password'], $config['db']);
mysqli_select_db($conn, $config['db']);