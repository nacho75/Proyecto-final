<?php
header('Access-Control-Allow-Origin: *');

include_once"BDpdo.php";
$conexion=conectar();

$nombre=$_POST['usuario'];
$pass=$_POST['password'];
        
$consulta="select Nombre from Usuarios where Nombre = \"$nombre\" and Password = \"$pass\" ";
$query = $conexion->prepare($consulta);
$query->bindParam(":usuario", $nombre);
$query->bindParam(":password", $pass);
$query->execute();
if($res = $query->fetch()){
	if($res[0]=="Admin"){
		echo "Hola Admin";
	} else {
		echo "Hola jugador";
	}
} else {
	echo "Usuario o contraseña incorrecto";
}
?>