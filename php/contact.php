<?php
$mailTo = 'louisanyau@gmail.com';
$name = htmlspecialchars($_POST['idi_name']);
$mailFrom = htmlspecialchars($_POST['idi_mail']);
$subject = 'Website Feedback';
$message_text = htmlspecialchars($_POST['idi_text']);
$message =  'From: '.$name.'

Email: '.$mailFrom.'

Message: '.$message_text;

mail($mailTo, $subject, $message, $headers);
?>