<?php
header('Access-Control-Allow-Origin: *');
/* Database connection information */
include("BD.php" );
/*
 * Local functions
 */
function fatal_error($sErrorMessage = '') {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error');
    die($sErrorMessage);
}
/*
 * MySQL connection
 */
if (!$gaSql['link'] = mysql_pconnect($gaSql['server'], $gaSql['user'], $gaSql['password'])) {
    fatal_error('Could not open connection to server');
}
if (!mysql_select_db($gaSql['db'], $gaSql['link'])) {
    fatal_error('Could not select database ');
}
mysql_query('SET names utf8');
//$_REQUEST['id_doctor'] = 1;
if (isset($_REQUEST['idJugador'])) {
    // param was set in the query string
    if (empty($_REQUEST['idJugador'])) {
        return "El parámetro idJugadores viene vacio!";
    }
    $idJugador = $_REQUEST['idJugador'];
}
/*
 * SQL queries
 * Get data to display
 */
$query = "delete from Jugadores where idJugadores=" . $idJugador;
$query_res = mysql_query($query);
// Comprobar el resultado
if (!$query_res) {
    if (mysql_errno() == 1451) {
        $mensaje = "Imposible borrar el jugador";
        $estado = mysql_errno();
    } else {
        $mensaje = 'Error en la consulta: ' . mysql_error() . "\n";
        $estado = mysql_errno();
    }
} else {
    $mensaje = "Borrado correcto";
    $estado = 0;
}
$resultado = array();
$resultado[] = array(
    'mensaje' => $mensaje,
    'estado' => $estado
);
echo json_encode($resultado);
?>