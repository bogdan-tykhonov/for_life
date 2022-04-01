<?php 
  $data = json_decode(file_get_contents("php://input"), TRUE);
  
  $name = $data['name'];
  $email = $data['email'];
  $phone = $data['[home'];
  $message = $data['message'];

  $to = 'johny@example.com'; 

  $subject = 'Нова заявка на допомогу';
  
  $mail_message = '
    <html>
    <head>
      <title>Нова заявка на допомогу</title>
    </head>
    <body>
      <p>Ім\'я: <strong>'. $name .' <strong></p>
      <p>Email: <strong>'. $email .' <strong></p>
      <p>Телефон: <strong>'. $phone .' <strong></p>
      <p>Повідомлення: <strong>'. $message .' <strong></p>
    </body>
    </html>
  ';

  $headers[] = 'To: Mary <mary@example.com>';
  $headers[] = 'From: Birthday Reminder <birthday@example.com>';

  $result = mail($to, $subject, $message, implode("\r\n", $headers));

  if ($result) {
    echo 'success';
    exit;
  } else {
    echo 'failed';
    exit;
  };
