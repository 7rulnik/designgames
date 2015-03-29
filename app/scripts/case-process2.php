<?php

$to      = 'v7rulnik@gmail.com';
$subject = 'Новая работа загружена';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'From: Сайт «Игры дизайнеров» <bot@designgames.ru>' . "\r\n";
"Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();;

$team = $_POST['team'];
$email = $_POST['email'];
$link = $_POST['link'];
$title = $_POST['title'];

$email_message = "Загружена новая работа!\n\n" .  "Секция: " . $title . "\n\n" . "Команда: " . $team . "\n\n" . "Email: " . $email . "\n\n" . "Ссылка: " . $link;
$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

// return a response ===========================================================
	// if there are any errors in our errors array, return a success boolean of false
if ( ! empty($errors)) {
		// if there are items in our errors array, return those errors
	$data['success'] = false;
	$data['errors']  = $errors;
} else {
		// if there are no errors process our form, then return a message
		// DO ALL YOUR FORM PROCESSING HERE
		// THIS CAN BE WHATEVER YOU WANT TO DO (LOGIN, SAVE, UPDATE, WHATEVER)
		// show a message of success and provide a true success variable
	mail($to, $subject, $email_message, $headers);
	$data['success'] = true;
	$data['message'] = 'Успешно отправлено!';
}
	// return all our data to an AJAX call
echo json_encode($data);
