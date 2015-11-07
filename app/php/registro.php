<?php
header('Access-Control-Allow-Origin: *');

include_once"BDpdo.php";
$conexion=conectar();

$nombre=$_POST['usuario'];
$pass=$_POST['password'];
$email=$_POST['email'];

/*$consulta="select * from Usuarios where Email = \"$email\"";
$query = $conexion->prepare($consulta);
$query->bindParam(":email", $email);
$query->execute();
if($res = $query->fetch()){
	echo "Ya hay un usuario dado de alta con ese correo";
} else {*/
	$consulta2 = "INSERT INTO `Usuarios`(`Nombre`, `Password`, `Email`) VALUES (\"$nombre\",\"$pass\",\"$email\")";
	$query2 = $conexion->prepare($consulta2);
	$query2->bindParam(":usuario", $nombre);
	$query2->bindParam(":password", $pass);
	$query2->bindParam(":email", $email);
	$query2->execute();
	echo "<script type=\"text/javascript\">alert(\"El usuario se registro correctamente\");</script>";
//}
?>