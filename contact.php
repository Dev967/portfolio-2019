<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['message'];

$from = 'Devparmar967@gmail.com';
$subj = "new form submission";
$body = "From: $name \r\n"."Email-ID: $email\r\n"."With Message: $msg \r\n";

$to = "anandparmar967@gmail.com";
$headers = "from: $from \r\n";
$headers .= "reply-to $email \r\n";

mail($to,$subj,$body,$headers);
header("Location: index.html");
?>
