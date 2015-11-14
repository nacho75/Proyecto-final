<?php
header('Content-Type: text/html; charset=utf-8');
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


$sQuery = "SELECT idEquiposUsuarios FROM EquiposUsuarios";
$rResult = mysql_query($sQuery, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila = mysql_fetch_array($rResult)) {
    $resultado[] = array(
      $id[] = $fila['idEquiposUsuarios']
   );
}


foreach ($id as $var) {

  if ($var!=="1") {

    $sQuery2 = "SELECT PuntosJornada FROM Jugadores WHERE Alineado=true AND idEquiposUsuarios=" . $var;
    $rResult2 = mysql_query($sQuery2, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

    while ($fila2 = mysql_fetch_array($rResult2)) {
      $resultado2[] = array(
        $punjor[] = $fila2['PuntosJornada']
      );
    }

    $puntos=0;

    foreach ($punjor as $pun) {
      $puntos += $pun;
    }

    $sQuery3 = "SELECT PuntosTotales FROM EquiposUsuarios WHERE idEquiposUsuarios=" . $var;
    $rResult3 = mysql_query($sQuery3, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

    while ($fila3 = mysql_fetch_array($rResult3)) {
      $resultado3[] = array(
        $puntot[] = $fila3['PuntosTotales']
      );
    }

    $puntostotales=0;

    foreach ($puntot as $puntostotales) {
      $puntostotales += $puntos;
    }

    $puntot="";
    $punjor="";

    $sQuery3 = "UPDATE EquiposUsuarios SET PuntosJornada= '" . $puntos . "', PuntosTotales = '" . $puntostotales . "' WHERE idEquiposUsuarios = '" . $var."'";
    $query_res = mysql_query($sQuery3);

  }

}

if (!$query_res) {

  if (mysql_errno() == 1451) {
    $mensaje = "Imposible calcular las clasificaciones";
    $estado = mysql_errno();
  } else {
    $mensaje = 'Error en la consulta: ' . mysql_error() . "\n";
    $estado = mysql_errno();
  }

} else {
  $mensaje = "Cálculo de clasificaciones correcto";
  $estado = 0;
}



$resultado = array();
$resultado[] = array(
    'mensaje' => $mensaje,
    'estado' => $estado
);


echo json_encode($resultado);
?>