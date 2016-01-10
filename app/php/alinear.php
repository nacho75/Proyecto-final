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

session_start();
$nombreusuario=$_SESSION['usuarios'];
$id = $_POST["idJugador"];
$posicion = $_POST["Posicion"];


if ($idjornada > 0) {
	$mensaje  = 'Error jornada';
} else {
	$sQuery1 = "SELECT Alineacion FROM EquiposUsuarios WHERE NombreUsuario = '" . $nombreusuario."'";
$rResult1 = mysql_query($sQuery1, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila1 = mysql_fetch_array($rResult1)) {
    $resultado1[] = array(
      $alineacion = $fila1['Alineacion']
   );
}

$portero=1;
if ($alineacion=="4-4-2") {
	$defensa=4;
	$medio=4;
	$delantera=2;
} elseif ($alineacion=="4-3-3") {
	$defensa=4;
	$medio=3;
	$delantera=3;
} elseif ($alineacion=="3-4-3") {
	$defensa=3;
	$medio=4;
	$delantera=3;
} elseif ($alineacion=="3-5-2") {
	$defensa=3;
	$medio=5;
	$delantera=2;
} elseif ($alineacion=="4-5-1") {
	$defensa=4;
	$medio=5;
	$delantera=1;
} elseif ($alineacion=="5-3-2") {
	$defensa=5;
	$medio=3;
	$delantera=2;
} elseif ($alineacion=="5-4-1") {
	$defensa=5;
	$medio=4;
	$delantera=1;
}

$sQuery2 = "SELECT idJugadores FROM EquiposUsuarios,Jugadores WHERE EquiposUsuarios.idEquiposUsuarios=Jugadores.idEquiposUsuarios AND NombreUsuario = '" . $nombreusuario."' AND Posicion = 'Portero' AND Alineado='Si'";
$rResult2 = mysql_query($sQuery2, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila2 = mysql_fetch_array($rResult2)) {
    $resultado2[] = array(
      $porteros[] = $fila2['idJugadores']
   );
}

$sQuery3 = "SELECT idJugadores FROM EquiposUsuarios,Jugadores WHERE EquiposUsuarios.idEquiposUsuarios=Jugadores.idEquiposUsuarios AND NombreUsuario = '" . $nombreusuario."' AND Posicion = 'Defensa' AND Alineado='Si'";
$rResult3 = mysql_query($sQuery3, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila3 = mysql_fetch_array($rResult3)) {
    $resultado3[] = array(
      $defensas[] = $fila3['idJugadores']
   );
}

$sQuery4 = "SELECT idJugadores FROM EquiposUsuarios,Jugadores WHERE EquiposUsuarios.idEquiposUsuarios=Jugadores.idEquiposUsuarios AND NombreUsuario = '" . $nombreusuario."' AND Posicion = 'Centrocampista' AND Alineado='Si'";
$rResult4 = mysql_query($sQuery4, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila4 = mysql_fetch_array($rResult4)) {
    $resultado4[] = array(
      $medios[] = $fila4['idJugadores']
   );
}

$sQuery5 = "SELECT idJugadores FROM EquiposUsuarios,Jugadores WHERE EquiposUsuarios.idEquiposUsuarios=Jugadores.idEquiposUsuarios AND NombreUsuario = '" . $nombreusuario."' AND Posicion = 'Delantero' AND Alineado='Si'";
$rResult5 = mysql_query($sQuery5, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila5 = mysql_fetch_array($rResult5)) {
    $resultado5[] = array(
      $delanteros[] = $fila5['idJugadores']
   );
}

if ($posicion == "Portero") {
	if (count($porteros) < $portero) {
		$query = "UPDATE Jugadores SET Alineado = 'Si' WHERE idJugadores = '" . $id . "'";
	}
} elseif ($posicion == "Defensa") {
	if (count($defensas) < $defensa) {
		$query = "UPDATE Jugadores SET Alineado = 'Si' WHERE idJugadores = '" . $id . "'";
	}
} elseif ($posicion == "Centrocampista") {
	if (count($medios) < $medio) {
		$query = "UPDATE Jugadores SET Alineado = 'Si' WHERE idJugadores = '" . $id . "'";
	}
} elseif ($posicion == "Delantero") {
	if (count($delanteros) < $delantera) {
		$query = "UPDATE Jugadores SET Alineado = 'Si' WHERE idJugadores = '" . $id . "'";
	}
}

$query_res = mysql_query($query);

if (!$query_res) {
    $mensaje  = 'Error posicion';
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