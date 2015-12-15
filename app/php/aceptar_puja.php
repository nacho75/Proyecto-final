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

//sesiones
$vendedor = "Josemi";

$idjugador = $_POST["idjugador"];
$comprador = $_POST["usuario"];
$puja = $_POST["puja"];

    $sQuery2 = "SELECT Saldo FROM EquiposUsuarios WHERE NombreUsuario='" . $vendedor . "'";
    $rResult2 = mysql_query($sQuery2, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

    while ($fila2 = mysql_fetch_array($rResult2)) {
      $resultado2[] = array(
        $saldoven = $fila2['Saldo']
      );
    }
//echo "$saldoven <br>";
    $saldonuevoven= $saldoven + $puja;
//echo "$saldonuevoven <br>";

    $sQuery3 = "SELECT idEquiposUsuarios,Saldo FROM EquiposUsuarios WHERE NombreUsuario='" . $comprador . "'";
    $rResult3 = mysql_query($sQuery3, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

    while ($fila3 = mysql_fetch_array($rResult3)) {
      $resultado3[] = array(
        $idcomprador = $fila3['idEquiposUsuarios'],
        $saldocom = $fila3['Saldo']
      );
    }

    $saldonuevocom= $saldocom - $puja;

//echo "$idcomprador <br>";
//echo "$saldonuevocom <br>";
$query1 = "UPDATE EquiposUsuarios SET Saldo = '" . $saldonuevoven . "' WHERE NombreUsuario = '" . $vendedor ."'";
$query_res1 = mysql_query($query1);

$query2 = "UPDATE EquiposUsuarios SET Saldo = '" . $saldonuevocom . "' WHERE NombreUsuario = '" . $comprador ."'";
$query_res2 = mysql_query($query2);

$query = "UPDATE Jugadores SET idEquiposUsuarios = " . $idcomprador . ", Vendible = 'No' WHERE idJugadores = " . $idjugador ."";
$query_res = mysql_query($query);

$query3 = "delete from Pujas where idJugadores=" . $idjugador;
$query_res3 = mysql_query($query3);


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