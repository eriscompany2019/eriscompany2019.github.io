<?php

$email = $_POST['con_email'];
$name = $_POST['con_name'];
$phone = $_POST['con_phone'];
/*
$to = 'contacto@creacity.co, admin@creacity.co' ;
$subject = 'Petición Informacion Desde pagina Web';

$message = '<strong>Nombre : </strong>'.$name.'<br/><br/> <strong>Email: </strong>'.$email.'<br/><br/> <strong>Teléfono: </strong>'.$phone.'<br/><br/> <strong>Mensaje: </strong>'.$mess.'<br/><br/>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <'.$email.'>' . "\r\n";

mail($to,$subject,$message,$headers);
echo 1;
*/

// Incluimos la Librería

include_once("smtp_auth.php");

// Configure las variables del servidor SMTP

$SMTPservidor="blue73.dnsmisitio.net";
$SMTPusuario="eriscompany2019@gmail.com";
$SMTPclave="AbretuMente2017";
$SMTPpuerto="465";

// Configure las variables de envío

$destinatario = "eriscompany2019@gmail.com";
$asunto = "Se ha registrado un(a) modelo en la pagina de modeloswebcam"; 
$cuerpo="<br>Nombre del Modelo: $name <br>E-mail del modelo: $email<br> Telefono de Contacto: $phone";
$remitente="Registro del Sitio Web Latinas Studios";
$remitenteemail="$email";

//mando el correo... 

// mail($destinatario,$asunto,$cuerpo,$headers); 

$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

$smtp=new eSmtp("$SMTPservidor","$SMTPpuerto");
$smtp->setAuth("$SMTPusuario","$SMTPclave");
$smtp->setFrom("$remitente","$remitenteemail");
$smtp->isHtml=1; 
$smtp->addRecipient("gerencia@zafirostars.com","$destinatario","to");

$smtp->setSubject("$asunto");
$smtp->setBody("$cuerpo");
$smtp->isDebug=0;

if($smtp->connect()){
    $success = $smtp->send();
    $smtp->disconnect();
	echo 1;
}

?>
<script type="text/javascript">
        alert("Muchas gracias, su informacion ha sido enviada a un Asesor, responderemos en breve.");
        window.location="/index.html";
</script>
