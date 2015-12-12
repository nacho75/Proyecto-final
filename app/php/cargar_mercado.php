<?php
 header('Access-Control-Allow-Origin: *');

$table = 'mercado';
 

$primaryKey = 'idJugadores';
 

$columns = array(
    array( 'db' => 'idJugadores', 'dt' => 'idJugadores' ),
    array( 'db' => 'Nombre',  'dt' => 'Nombre' ),
    array( 'db' => 'Valor',   'dt' => 'Valor' ),
    array( 'db' => 'EquipoReal',     'dt' => 'Equipo' ),
    array( 'db' => 'Posicion',     'dt' => 'Posicion' ),
    array( 'db' => 'NombreUsuario',  'dt' => 'Usuario' ),
    array( 'db' => 'PuntosTotales',   'dt' => 'Puntostotales' ),
    array( 'db' => 'ValorMercado',   'dt' => 'Precio' )
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
