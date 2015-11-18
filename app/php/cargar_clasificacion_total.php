<?php
 header('Access-Control-Allow-Origin: *');

$table = 'EquiposUsuarios';
 

$primaryKey = 'idEquiposUsuarios';
 

$columns = array(
    array( 'db' => 'idEquiposUsuarios', 'dt' => 'idEquiposUsuarios' ),
    array( 'db' => 'NombreUsuario', 'dt' => 'NombreUsuario' ),
    array( 'db' => 'NombreEquipo',  'dt' => 'NombreEquipo' ),
    array( 'db' => 'Valor',   'dt' => 'Valor' ),
    array( 'db' => 'PuntosTotales',     'dt' => 'PuntosTotales' )
);
 

$sql_details = array(
    'user' => 'root',
    'pass' => '1234',
    'db'   => 'Comunio',
    'host' => 'localhost'
);

 
require( 'ssp.class.php' );
 
echo json_encode(
    SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns )
);
