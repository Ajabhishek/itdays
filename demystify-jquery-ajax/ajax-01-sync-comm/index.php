<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />

<title>Synchronous communication</title>
</head>

<body>
	<div class="container">
    	<h1>Synchronous communication</h1>
        <form class="form-search" action="receiveform.php" method="post">
        	<input type="text" class="input-medium search-query" name="search">
        	<button type="submit" class="btn">Search</button>
        </form>    
    	<?php
			if(isset($_GET["msg"])){
				echo ($_GET["msg"] != "") ? "<div class='alert'>{$_GET['msg']}</div>" : "";	
			}
		?>
    </div>
</body>
</html>
