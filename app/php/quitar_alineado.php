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
date_default_timezone_set('Europe/Madrid');
$fecha=date('Y/m/d h:i:s', time());

$sQuery1ab = "SELECT idJornada FROM Jornada WHERE FechaInicio <= '" . $fecha ."' AND FechaFin >= '" . $fecha ."'";
    $rResult1ab = mysql_query($sQuery1ab, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

    while ($fila1ab = mysql_fetch_array($rResult1ab)) {
      $resultado1ab[] = array(
        $idjornada = $fila1ab['idJornada']
      );
    }

$id = $_POST["idJugador"];

if ($idjornada > 0) {
    $mensaje  = 'Error jornada';
} else {
    $query = "UPDATE Jugadores SET Alineado = 'No' WHERE idJugadores = '" . $id . "'";

$query_res = mysql_query($query);

if (!$query_res) {
    $mensaje  = 'Error en la consulta: ' . mysql_error() ;
    $estado = mysql_errno();
    
} else {
    $mensaje = "Actualización correcta";
    $estado = 0;
}
}


$resultado = array();
$resultado[] = array(
      'mensaje' => $mensaje,
      'estado' => $estado
);
 
echo json_encode($resultado);
?>