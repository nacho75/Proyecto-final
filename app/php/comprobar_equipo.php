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
$nombreusuario=$_SESSION['usuarios'];

$sQuery = "SELECT idJugadores,Alineacion FROM EquiposUsuarios,Jugadores WHERE EquiposUsuarios.idEquiposUsuarios=Jugadores.idEquiposUsuarios AND NombreUsuario = '" . $nombreusuario."' AND Alineado='Si'";
$rResult = mysql_query($sQuery, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila = mysql_fetch_array($rResult)) {
    $resultado[] = array(
      $numjugali[] = $fila['idJugadores'],
      $tactica = $fila['Alineacion']
   );
}

if ($tactica=="4-4-2") {
    $defensa=4;
    $medio=4;
    $delantera=2;
} elseif ($tactica=="4-3-3") {
    $defensa=4;
    $medio=3;
    $delantera=3;
} elseif ($tactica=="3-4-3") {
    $defensa=3;
    $medio=4;
    $delantera=3;
} elseif ($tactica=="3-5-2") {
    $defensa=3;
    $medio=5;
    $delantera=2;
} elseif ($tactica=="4-5-1") {
    $defensa=4;
    $medio=5;
    $delantera=1;
} elseif ($tactica=="5-3-2") {
    $defensa=5;
    $medio=3;
    $delantera=2;
} elseif ($tactica=="5-4-1") {
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
    
    if (count($defensas) > $defensa) {
        $dif2=count($defensas) - $defensa;
        $aleatorio3=array_rand($defensas,$dif2);
        if ($dif2 > 1) {
          foreach ($aleatorio3 as $var) {
            $query3 = "UPDATE Jugadores SET Alineado = 'No' WHERE idJugadores = '" . $defensas[$var] . "'";
            $query_res3 = mysql_query($query3);
          }
        } else {
            $query3 = "UPDATE Jugadores SET Alineado = 'No' WHERE idJugadores = '" . $defensas[$aleatorio3] . "'";
            $query_res3 = mysql_query($query3);       
        }   
    }
    if (count($medios) > $medio) {
        $dif3=count($medios) - $medio;
        $aleatorio4=array_rand($medios,$dif3);
        if ($dif3 > 1) {
          foreach ($aleatorio4 as $var) {
            $query4 = "UPDATE Jugadores SET Alineado = 'No' WHERE idJugadores = '" . $medios[$var] . "'";
            $query_res4 = mysql_query($query4);
          }
        } else {
          $query4 = "UPDATE Jugadores SET Alineado = 'No' WHERE idJugadores = '" . $medios[$aleatorio4] . "'";
          $query_res4 = mysql_query($query4);
        }
    }
    if (count($delanteros) > $delantera) {
        $dif4=count($delanteros) - $delantera;
        $aleatorio5=array_rand($delanteros,$dif4);
        if ($dif4 > 1) {
          foreach ($aleatorio5 as $var) {
            $query5 = "UPDATE Jugadores SET Alineado = 'No' WHERE idJugadores = '" . $delanteros[$var] . "'";
            $query_res5 = mysql_query($query5);
          }
        } else {
          $query5 = "UPDATE Jugadores SET Alineado = 'No' WHERE idJugadores = '" . $delanteros[$aleatorio5] . "'";
            $query_res5 = mysql_query($query5);
        }
    }

?>