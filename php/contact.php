<?php error_reporting();
$name = $_POST['name'];
$email = $_POST['email'];
$contact = $_POST['contact'];
$message = $_POST['message'];

	$dbhost = "localhost";
	$dbuser = "";
	$dbpass = "";
	$db = "portfolio";
	$conn = new mysqli($dbhost, $dbuser, $dbpass,$db,"3306") or die("Connect failed: %s\n". $conn -> error);
	
	if($conn->connect_error){
		die('connection failed :'.$conn->connect_error);
	} else{
		if(isset($_POST['submit'])){
			if(empty($name)||empty($email)||empty($contact)||empty($message)){
				echo"<script>alert('Enter all the fields!'); window.location='../index.html'</script>";
				exit();
			}else{
				if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
					echo"<script>alert('Please enter the valid email.'); window.location='../index.html'</script>";
			        exit();
			    }else{
					$stmt=$conn->prepare("insert into contact(name,email,contact,message) values(?,?,?,?)");
                    $stmt->bind_param("ssis",$name,$email,$contact,$message);
                    $stmt->execute();
					echo"<script>alert('Thankyou! For visiting my website.'); window.location='../index.html'</script>";
			        exit();
			    }
			}
		}
	}
?>