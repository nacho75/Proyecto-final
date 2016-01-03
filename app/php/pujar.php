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
$pujante=$_SESSION['usuarios'];
$idjugador = $_POST["idJugador"];
$precio = $_POST["precio"];
$dueno = $_POST["usuario"];

$sQuery1 = "SELECT idEquiposUsuarios,Saldo FROM EquiposUsuarios WHERE NombreUsuario = '" . $pujante."'";
$rResult1 = mysql_query($sQuery1, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila1 = mysql_fetch_array($rResult1)) {
    $resultado1[] = array(
      $id = $fila1['idEquiposUsuarios'],
      $saldoequipo = $fila1['Saldo']
   );
}

$sQuery1aa = "SELECT idpuja FROM Pujas WHERE idEquiposUsuarios = '" . $id."' AND idJugadores = '" . $idjugador . "'";
$rResult1aa = mysql_query($sQuery1aa, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila1aa = mysql_fetch_array($rResult1aa)) {
    $resultado1aa[] = array(
      $idofertashechas = $fila1aa['idpuja']
   );
}

if ($saldoequipo<0) {
  $mensaje = "Error saldo";
  $estado = mysql_errno();
} else {
  if ($dueno==$pujante) {
      $mensaje = "Error jugador";
      $estado = mysql_errno();
  }else{
    if ($dueno == "admin") {
  $sQuery2 = "SELECT Valor FROM Jugadores WHERE idJugadores = '" . $idjugador."'";
  $rResult2 = mysql_query($sQuery2, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

  while ($fila2 = mysql_fetch_array($rResult2)) {
      $resultado2[] = array(
        $valor = $fila2['Valor']
     );
  }

  if ($precio < $valor) {
    $mensaje = "Error precio";
  } else {
    if (count($idofertashechas) > 0) {
      $query1 = "UPDATE Pujas SET Puja = '" . $precio . "' WHERE idpuja = '" . $idofertashechas ."'" ;
      $query_res1 = mysql_query($query1);
    } else {
      $query1 = "INSERT INTO `Pujas`(`Puja`, `idEquiposUsuarios`, `idJugadores`) VALUES ('". $precio . "', '" . $id . "', '" . $idjugador . "')" ;
      $query_res1 = mysql_query($query1);
    }
  }

} else {
  if (count($idofertashechas) > 0) {
      $query1 = "UPDATE Pujas SET Puja = '" . $precio . "' WHERE idpuja = '" . $idofertashechas ."'" ;
      $query_res1 = mysql_query($query1);
  } else {
    $query1 = "INSERT INTO `Pujas`(`Puja`, `idEquiposUsuarios`, `idJugadores`) VALUES ('". $precio . "', '" . $id . "', '" . $idjugador . "')" ;
    $query_res1 = mysql_query($query1);
  }
}



if (!$query_res1) {
    if (mysql_errno() == 1062) {
        $mensaje = "Imposible añadir el jugador";
        $estado = mysql_errno();
    } else {
        $mensaje = "Error precio";
        $estado = mysql_errno();
    }
} else {
  $mensaje = "Actualizacion correcta";
    $estado = 0;
}
  }
  
}


$resultado = array();
 $resultado[] = array(
      'mensaje' => $mensaje,
      'estado' => $estado
   );
echo json_encode($resultado);

?>