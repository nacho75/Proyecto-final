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


$nombre = $_POST["nombreNuevo"];
$equipo = $_POST["equipoNuevo"];
$valor = $_POST["valorNuevo"];
$posicion = $_POST["posicionNuevo"];
$idequipo = 1;


$query1 = "insert into Jugadores (Nombre,EquipoReal,Valor,Posicion,idEquiposUsuarios) values( 
             '". $nombre . "', 
            '" . $equipo . "', 
            '" . $valor . "', 
            '" . $posicion . "', 
            '" . $idequipo . "')" ;
$query_res1 = mysql_query($query1);



if (!$query_res1) {
    if (mysql_errno() == 1062) {
        $mensaje = "Imposible añadir el jugador";
        $estado = mysql_errno();
    } else {
        $mensaje = 'Error en la consulta: ' . mysql_error() . "\n";
        $estado = mysql_errno();
    }
} else {
    $mensaje = "Insercion correcta";
    $estado = 0;
}

$resultado = array();
 $resultado[] = array(
      'mensaje' => $mensaje,
      'estado' => $estado
   );
echo json_encode($resultado);
?>