<?php
header('Access-Control-Allow-Origin: *');


include_once"BDpdo.php";


$conexion=conectar();


$nombre=$_POST['usuario'];
$pass=$_POST['password'];
$email=$_POST['email'];
$equipo=$_POST['equipo'];
$saldo=20000000;



$consulta2 = "INSERT INTO `EquiposUsuarios`(`NombreUsuario`, `Password`, `Email`,`NombreEquipo`,`saldo`) VALUES (\"$nombre\",\"$pass\",\"$email\",\"$equipo\",\"$saldo\")";
$query2 = $conexion->prepare($consulta2);
$query2->bindParam(":usuario", $nombre);
$query2->bindParam(":password", $pass);
$query2->bindParam(":email", $email);
$query2->bindParam(":equipo", $equipo);
$query2->bindParam(":saldo", $saldo);
$query2->execute();
echo "<script type=\"text/javascript\">alert(\"El usuario se registro correctamente\");window.location.href=\"../inicio.html\"</script>";


?>