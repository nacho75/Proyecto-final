<?php
 header('Access-Control-Allow-Origin: *');

$table = 'alineacion';
 

$primaryKey = 'NombreUsuario';
 

$columns = array(
    array( 'db' => 'idJugadores', 'dt' => 'idJugadores' ),
    array( 'db' => 'Posicion',  'dt' => 'Posicion' ),
    array( 'db' => 'EquipoReal',     'dt' => 'EquipoReal' ),
    array( 'db' => 'Nombre',     'dt' => 'Nombre' ),
    array( 'db' => 'PuntosTotales',   'dt' => 'PuntosTotales' ),
    array( 'db' => 'Valor',   'dt' => 'Valor' ),
    array( 'db' => 'Alineado',     'dt' => 'Alineado' ),
    array( 'db' => 'Vendible',   'dt' => 'Vendible' ),
    array( 'db' => 'NombreUsuario',   'dt' => 'NombreUsuario' )
);

$usuario="Nacho";


$sql_details = array(
    'user' => 'root',
    'pass' => '1234',
    'db'   => 'Comunio',
    'host' => 'localhost'
);

 
require( 'ssp.class.php' );
 
$where="NombreUsuario='" . $usuario . "'";

echo json_encode(
    SSP::complex( $_GET, $sql_details, $table, $primaryKey, $columns,$where )
);

?>