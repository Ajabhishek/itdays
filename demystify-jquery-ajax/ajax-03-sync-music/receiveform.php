<?php
	sleep(3);
	$msg = ($_POST["search"] != "") ? $_POST["search"]  . "+was+your+query": ""; 
	header("Location: index.php?msg=$msg");
?>