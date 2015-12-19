<?php
header('Access-Control-Allow-Origin: *');

include("BD.php" );

function fatal_error($sErrorMessage = '') {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error');
    die($sErrorMessage);
}

if (!$gaSql['link'] = mysql_pconnect($gaSql['server'], $gaSql['user'], $gaSql['password'])) {
    fatal_error('Could not open connection to server');
}
if (!mysql_select_db($gaSql['db'], $gaSql['link'])) {
    fatal_error('Could not select database ');
}

mysql_query('SET names utf8');


session_start();
$pujante=$_SESSION['usuarios'];
$idjugador = $_POST["idJugador"];
$precio = $_POST["precio"];
$dueno = $_POST["usuario"];

$sQuery1 = "SELECT idEquiposUsuarios FROM EquiposUsuarios WHERE NombreUsuario = '" . $pujante."'";
$rResult1 = mysql_query($sQuery1, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila1 = mysql_fetch_array($rResult1)) {
    $resultado1[] = array(
      $id = $fila1['idEquiposUsuarios']
   );
}

if ($dueno == "admin") {
	$sQuery2 = "SELECT Valor FROM Jugadores WHERE idJugadores = '" . $idjugador."'";
	$rResult2 = mysql_query($sQuery2, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

	while ($fila2 = mysql_fetch_array($rResult2)) {
	    $resultado2[] = array(
	      $valor = $fila2['Valor']
	   );
	}

	if ($precio < $valor) {
		$mensaje = "Error precio";
	} else {
		$query1 = "INSERT INTO `Pujas`(`Puja`, `idEquiposUsuarios`, `idJugadores`) VALUES ('". $precio . "', '" . $id . "', '" . $idjugador . "')" ;
		$query_res1 = mysql_query($query1);
	}

} else {
	$query1 = "INSERT INTO `Pujas`(`Puja`, `idEquiposUsuarios`, `idJugadores`) VALUES ('". $precio . "', '" . $id . "', '" . $idjugador . "')" ;
	$query_res1 = mysql_query($query1);
}



if (!$query_res1) {
    if (mysql_errno() == 1062) {
        $mensaje = "Imposible añadir el jugador";
        $estado = mysql_errno();
    } else {
        $mensaje = "Error precio";
        $estado = mysql_errno();
    }
} else {
	$mensaje = "Actualizacion correcta";
    $estado = 0;
}

$resultado = array();
 $resultado[] = array(
      'mensaje' => $mensaje,
      'estado' => $estado
   );
echo json_encode($resultado);

?>