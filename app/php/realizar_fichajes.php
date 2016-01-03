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

$sQuery2 = "SELECT idJugadores FROM Jugadores WHERE idEquiposUsuarios=1 AND Vendible='Si'";
$rResult2 = mysql_query($sQuery2, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila2 = mysql_fetch_array($rResult2)) {
    $resultado2[] = array(
      $idmercado[] = $fila2['idJugadores']
   );
}

foreach ($idmercado as $var2) {
    $puja="";
    $equipofic="";
    $sQuery3 = "SELECT Puja,idEquiposUsuarios FROM Pujas WHERE idJugadores=" . $var2 . " ORDER BY Puja DESC LIMIT 1";
    $rResult3 = mysql_query($sQuery3, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

    while ($fila3 = mysql_fetch_array($rResult3)) {
        $resultado3[] = array(
          $puja = $fila3['Puja'],
          $equipofic = $fila3['idEquiposUsuarios']
       );
    }
    
    if ($puja == "") {
        $query4 = "UPDATE Jugadores SET Vendible = 'No' WHERE idJugadores = '" . $var2 ."'";
        $query_res4 = mysql_query($query4);
    } else {
        $query2 = "UPDATE Jugadores SET Vendible = 'No', idEquiposUsuarios = '" . $equipofic . "' WHERE idJugadores = '" . $var2 ."'";
        $query_res2 = mysql_query($query2);

        $saldo="";
        $saldonuevo="";

        $sQuery4a = "SELECT Valor FROM Jugadores WHERE idJugadores = '" . $var2 ."'";
        $rResult4a = mysql_query($sQuery4a, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

        while ($fila4a = mysql_fetch_array($rResult4a)) {
            $resultado4a[] = array(
              $valorjug = $fila4a['Valor']
           );
        }

        $sQuery4 = "SELECT Saldo,Valor FROM EquiposUsuarios WHERE idEquiposUsuarios = '" . $equipofic . "'";
        $rResult4 = mysql_query($sQuery4, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

        while ($fila4 = mysql_fetch_array($rResult4)) {
            $resultado4[] = array(
              $saldo = $fila4['Saldo'],
              $valoreq = $fila4['Valor'],
           );
        }
        $saldonuevo=$saldo-$puja;
        $valornuevo=$valoreq+$valorjug;

        $query3 = "UPDATE EquiposUsuarios SET Saldo = '" . $saldonuevo . "', Valor = '" . $valornuevo . "' WHERE idEquiposUsuarios = '" . $equipofic . "'";
        $query_res3 = mysql_query($query3);

        $query5 = "delete from Pujas where idJugadores=" . $var2;
        $query_res5 = mysql_query($query5);
    }
}

$sQuery5 = "SELECT idJugadores,Valor FROM Jugadores WHERE idEquiposUsuarios>1 AND Vendible='Si'";
$rResult5 = mysql_query($sQuery5, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila5 = mysql_fetch_array($rResult5)) {
    $resultado5[] = array(
      $idjug[] = $fila5['idJugadores'],
      $pujaadmin[] = $fila5['Valor']
   );
}

$i=count($idjug);

for ($x=0; $x < $i; $x++) { 
  $j=0;
  $idpuja="";

  $sQuery5a = "SELECT idpuja FROM Pujas WHERE idEquiposUsuarios=1 AND idJugadores = " . $idjug[$x];
  $rResult5a = mysql_query($sQuery5a, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

  while ($fila5a = mysql_fetch_array($rResult5a)) {
    $resultado5a[] = array(
      $idpuja[] = $fila5a['idpuja']
    );
  }

  if (is_array($idpuja) || is_object($idpuja)){
      $j=count($idpuja);
  } else {
      $j=0;
  }

  if ($j>0) {
    echo "Ya hay puja";
  } else {
    $query4 = "INSERT INTO `Pujas`(`Puja`, `idEquiposUsuarios`, `idJugadores`) VALUES ('". $pujaadmin[$x] . "', 1, " . $idjug[$x] . ")" ;
    $query_res4 = mysql_query($query4);
  }
    
}

$sQuery = "SELECT idJugadores,Valor FROM Jugadores WHERE idEquiposUsuarios=1";
$rResult = mysql_query($sQuery, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila = mysql_fetch_array($rResult)) {
    $resultado[] = array(
      $id[] = $fila['idJugadores'],
      $valor[] = $fila['Valor']
   );
}

$rand=array_rand($id,10);

foreach ($rand as $var) {
    $query = "UPDATE Jugadores SET Vendible = 'Si', ValorMercado = '" . $valor[$var] . "' WHERE idJugadores = '" . $id[$var]."'";
    $query_res = mysql_query($query);
}




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