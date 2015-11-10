<?php
 header('Access-Control-Allow-Origin: *');

$table = 'Jugadores';
 
// Table's primary key
$primaryKey = 'idJugadores';
 
// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes
$columns = array(
    array( 'db' => 'idJugadores', 'dt' => 'idJugadores' ),
    array( 'db' => 'Nombre',  'dt' => 'Nombre' ),
    array( 'db' => 'Valor',   'dt' => 'Valor' ),
    array( 'db' => 'EquipoReal',     'dt' => 'Equipo' ),
    array( 'db' => 'Posicion',     'dt' => 'Posicion' ),
    array( 'db' => 'PuntosJornada',  'dt' => 'Puntos jornada' ),
    array( 'db' => 'PuntosTotales',   'dt' => 'Puntos totales' )
);
 
// SQL server connection information
$sql_details = array(
    'user' => 'root',
    'pass' => '1234',
    'db'   => 'Comunio',
    'host' => 'localhost'
);
 
 
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * If you just want to use the basic configuration for DataTables with PHP
 * server-side, there is no need to edit below this line.
 */
 
require( 'ssp.class.php' );
 
echo json_encode(
    SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns )
);
