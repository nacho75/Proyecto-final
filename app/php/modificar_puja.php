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


$idpuja = $_POST["idpuja"];
$precio = $_POST["precio"];
$prop = $_POST["Propietarios"];
$idjugador = $_POST["idJugador"];

//if ($dueno == "admin") {
if ($prop == 1) {
	$sQuery2 = "SELECT Valor FROM Jugadores WHERE idJugadores = '" . $idjugador."'";
	$rResult2 = mysql_query($sQuery2, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

	while ($fila2 = mysql_fetch_array($rResult2)) {
	    $resultado2[] = array(
	      $valor = $fila2['Valor']
	   );
	}

	if ($precio >= $valor) {
    $query = "UPDATE Pujas SET Puja = '" . $precio . "' WHERE idpuja = '" . $idpuja ."'";
    $query_res = mysql_query($query);
	}
} else {
    $query = "UPDATE Pujas SET Puja = '" . $precio . "' WHERE idpuja = '" . $idpuja ."'";
    $query_res = mysql_query($query);
}

if (!$query_res) {
    if (mysql_errno() == 1062) {
        $mensaje = "Imposible añadir el jugador";
        $estado = mysql_errno();
    } else {
        $mensaje = "Error precio";
            //$mensaje  = 'Error en la consulta: ' . mysql_error() ;
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