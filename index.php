<?php
$message = $_POST['message'];
$sms = strlen($message);
$file = fopen("file.txt","at");
fwrite($file,"\n $message:$sms \n");
fclose($file);
?>