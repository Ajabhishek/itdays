<?php
    $from_name 	 = $_POST["from_name"];
    $from_email  = $_POST["from_email"];
    $subject 	 = $_POST["subject"];
	$message 	 = $_POST["message"];
    $headers  	 = 'MIME-Version: 1.0' . "\r\n";
    $headers 	.= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers 	.= "From: $from_name <$from_email>\r\n";
    $headers 	.= "Reply-To: $from_email\r\n";

    if(mail("nihaeaaa@gmail.com", $subject, $message, $headers)){
		$msg = "Success";
	}
	else{
		$msg = "Failed";
	}
	echo json_encode(array("msg" => $msg));
?>



