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

$sQuery = "SELECT NombreEquipo,Saldo,Valor FROM EquiposUsuarios WHERE NombreUsuario = '" . $usuario."'";
$rResult = mysql_query($sQuery, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila = mysql_fetch_array($rResult)) {
    $resultado1[] = array(
      $nombreeq = $fila['NombreEquipo'],
      $saldo = $fila['Saldo'],
      $valor = $fila['Valor']
   );
}

?>