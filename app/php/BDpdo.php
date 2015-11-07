<?php
function Conectar() {
	$conexion = new PDO("mysql:host=localhost;dbname=Comunio","root","1234");
	$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	if ($conexion->connect_error){
		echo "Error conectando con la base de datos: " . $conexion->connect_error;
		return null;
	}	
	return $conexion;
}
?>