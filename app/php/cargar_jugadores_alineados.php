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
$usuario=$_SESSION['usuarios'];

$sQuery1 = "SELECT idEquiposUsuarios,Alineacion FROM EquiposUsuarios WHERE NombreUsuario = '" . $usuario."'";
$rResult1 = mysql_query($sQuery1, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila1 = mysql_fetch_array($rResult1)) {
    $resultado1[] = array(
      $id = $fila1['idEquiposUsuarios'],
      $alineacion = $fila1['Alineacion']
   );
}

$sQuery1aa = "SELECT Nombre,EquipoReal,Posicion FROM Jugadores WHERE idEquiposUsuarios = '" . $id . "' AND Alineado = 'Si'";
$rResult1aa = mysql_query($sQuery1aa, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila1aa = mysql_fetch_array($rResult1aa)) {
    $resultado1aa[] = array(
      $nombre[] = $fila1aa['Nombre'],
      $equipo[] = $fila1aa['EquipoReal'],
      $posicion[] = $fila1aa['Posicion']
   );
}




$resultado = array();
 $resultado[] = array(
      'nombre' => $nombre,
      'alineacion' => $alineacion,
      'equipo' => $equipo,
      'posicion' => $posicion
   );
echo json_encode($resultado);
?>