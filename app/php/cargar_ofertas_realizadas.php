<?php
 header('Access-Control-Allow-Origin: *');

$table = 'ofertas';
 

$primaryKey = 'idJugadores';
 

$columns = array(
    array( 'db' => 'idJugadores', 'dt' => 'idJugadores' ),
    array( 'db' => 'Nombre',  'dt' => 'Nombre' ),
    array( 'db' => 'Valor',   'dt' => 'Valor' ),
    array( 'db' => 'EquipoReal',     'dt' => 'Equipo' ),
    array( 'db' => 'Posicion',     'dt' => 'Posicion' ),
    array( 'db' => 'NombreUsuario',  'dt' => 'Usuario' ),
    array( 'db' => 'PuntosTotales',   'dt' => 'Puntostotales' ),
    array( 'db' => 'Puja',  'dt' => 'Puja' ),
    array( 'db' => 'idpuja',   'dt' => 'idpuja' ),
    array( 'db' => 'ValorMercado',   'dt' => 'Precio' ),
    array( 'db' => 'Propietarios',   'dt' => 'Propietarios' )
);
 
$usuario="pepe";


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