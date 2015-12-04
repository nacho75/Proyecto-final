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

$id = $_POST["idJugador"];
//$id=9;

$query = "UPDATE Jugadores SET Alineado = 'No' WHERE idJugadores = '" . $id . "'";

$query_res = mysql_query($query);

if (!$query_res) {
    $mensaje  = 'Error en la consulta: ' . mysql_error() ;
    $estado = mysql_errno();
    
} else {
    $mensaje = "Actualización correcta";
    $estado = 0;
}

$resultado = array();
$resultado[] = array(
      'mensaje' => $mensaje,
      'estado' => $estado
);
 
echo json_encode($resultado);
?>