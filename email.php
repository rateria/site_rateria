<?php		
$emailTo = "felipe-fernandes96@hotmail.com";
$name = $_POST["nome"];
$telefone = $_POST["telefone"];
$emailFrom = $_POST["email"];
$evento = $_POST["evento"];
$data = $_POST["data"];
$message = $_POST["detalhes"];

$subject = "APRESENTAÇÃO RATERIA";

if( !empty( $_POST ) ) {
	$body  = "Nome: " . $name . "\n";
	$body .= "Email: " . $emailFrom . "\n";
	$body .= "Telefone: " . $telefone . "\n";
	$body .= "Evento: " . $evento . "\n";
	$body .= "Data: " . $data . "\n";
	$body .= "Detalhes:\n" . $message;
	$body  = wordwrap($body, 70);
	$header = "From: " . $emailFrom . "\nReply-To: " . $emailFrom. "\n";
}
	if( mail( $emailTo, $subject, $body, $header ) ) {
		echo( "</br></br></br></br></br>" );
		echo( "Obrigado por escolher a Rateria, assim que possível um dos coordenadores entrará em contato!" );
		
	} else {
		echo( "Erro no Envio" );
	}
?>
