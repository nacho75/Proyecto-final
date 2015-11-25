<?php
 header('Access-Control-Allow-Origin: *');

$table = 'clasjor';
 

$primaryKey = 'idEquiposUsuarios';
 

$columns = array(
    array( 'db' => 'idEquiposUsuarios', 'dt' => 'idEquiposUsuarios' ),
    array( 'db' => 'NombreUsuario', 'dt' => 'NombreUsuario' ),
    array( 'db' => 'NombreEquipo',  'dt' => 'NombreEquipo' ),
    array( 'db' => 'Valor',   'dt' => 'Valor' ),
    array( 'db' => 'PuntosJornada',     'dt' => 'PuntosJornada' )
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
