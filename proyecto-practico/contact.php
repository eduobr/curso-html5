<?php

//con esta variable lo enviamos a dos correos
$para = 'eduardobrequeh@hotmail.com, the_edd88@hotmail.com';

$asunto = "Mensaje desde Proyecto Práctico";

//en window \r\n es un salto de línea, en linux solamente se utiliza \n
$mailheader = "From: ".$_POST["email"]."\r\n";
$mailheader .= "Reply-To: ".$_POST["email"]."\r\n";
$mailheader .= "Content-type: text/html; charset=utf-8\r\n";

$MESSAGE_BODY = "Nombre: ".$_POST["name"]."\n";
$MESSAGE_BODY = "\n<br>Email: ".$_POST["email"]."\n";
//nl2br('palabra\npalabra2') es para reemplazar los saltos de linea \n
//por saltos de linea de HTML
$MESSAGE_BODY = "\n<br>Mensaje: ".nl2br($_POST["message"])."\n";
//Si no se puede enviar envia un mensaje de error
mail($para, $asunto, $MESSAGE_BODY, $mailheader) or die("Error al enviar email");

header('Location: http://localhost/eduardo')

?>