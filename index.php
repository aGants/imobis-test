<?php
$message = $_POST['name'];
$symbols = strlen($message);
$file = fopen("file.txt","at");
fwrite($file,"\n $message:$symbols \n");
fclose($file);
?>