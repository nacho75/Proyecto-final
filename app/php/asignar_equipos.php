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

//iniciar sesiones
$nombre="pepe";

$sQuery = "SELECT idEquiposUsuarios FROM EquiposUsuarios WHERE NombreUsuario = '" . $nombre."'";
$rResult = mysql_query($sQuery, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila = mysql_fetch_array($rResult)) {
    $resultado[] = array(
      $id = $fila['idEquiposUsuarios']
   );
}

$sQuery2 = "SELECT idJugadores FROM Jugadores WHERE idEquiposUsuarios = 1 AND Posicion = 'Portero' AND Valor<5000000";
$rResult2 = mysql_query($sQuery2, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila2 = mysql_fetch_array($rResult2)) {
    $resultado2[] = array(
      $porteros[] = $fila2['idJugadores']
   );
}

$sQuery3 = "SELECT idJugadores FROM Jugadores WHERE idEquiposUsuarios = 1 AND Posicion = 'Defensa' AND Valor<4000000";
$rResult3 = mysql_query($sQuery3, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila3 = mysql_fetch_array($rResult3)) {
    $resultado3[] = array(
      $defensas[] = $fila3['idJugadores']
   );
}

$sQuery4 = "SELECT idJugadores FROM Jugadores WHERE idEquiposUsuarios = 1 AND Posicion = 'Centrocampista' AND Valor<4000000";
$rResult4 = mysql_query($sQuery4, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila4 = mysql_fetch_array($rResult4)) {
    $resultado4[] = array(
      $medios[] = $fila4['idJugadores']
   );
}

$sQuery5 = "SELECT idJugadores FROM Jugadores WHERE idEquiposUsuarios = 1 AND Posicion = 'Delantero' AND Valor<5000000";
$rResult5 = mysql_query($sQuery5, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila5 = mysql_fetch_array($rResult5)) {
    $resultado5[] = array(
      $delanteros[] = $fila5['idJugadores']
   );
 }

$porterosrand=array_rand($porteros,2);

foreach ($porterosrand as $var) {
	$query = "UPDATE Jugadores SET idEquiposUsuarios = '" . $id . "' WHERE idJugadores = '" . $porteros[$var]."'";
	$query_res = mysql_query($query);
}

$defensasrand=array_rand($defensas,5);

foreach ($defensasrand as $var2) {
	$query2 = "UPDATE Jugadores SET idEquiposUsuarios = '" . $id . "' WHERE idJugadores = '" . $defensas[$var2]."'";
	$query_res2 = mysql_query($query2);
}

$mediosrand=array_rand($medios,5);

foreach ($mediosrand as $var3) {
	$query3 = "UPDATE Jugadores SET idEquiposUsuarios = '" . $id . "' WHERE idJugadores = '" . $medios[$var3]."'";
	$query_res3 = mysql_query($query3); 
}

$delanterosrand=array_rand($delanteros,3);

foreach ($delanterosrand as $var4) {
	$query4 = "UPDATE Jugadores SET idEquiposUsuarios = '" . $id . "' WHERE idJugadores = '" . $delanteros[$var4]."'";
	echo "$query4";
	$query_res4 = mysql_query($query4);  
}

if ($query_res4) {
    
    $mensaje = "Actualización correcta";
    $estado = 0;
} else {
    $mensaje  = 'Error en la consulta: ' . mysql_error() ;
    $estado = mysql_errno();
}


$resultado = array();
 $resultado[] = array(
      'mensaje' => $mensaje,
      'estado' => $estado
);

 
echo json_encode($resultado);
?>