<?php
header('Access-Control-Allow-Origin: *');


$dbinfo = "mysql:dbname=Comunio;host=localhost";
$user = "root";
$pass = "1234";


try {
    $db = new PDO($dbinfo, $user, $pass);
    $db->exec('SET CHARACTER SET utf8');
} catch (Exception $e) {
    echo "La conexi&oacute;n ha fallado: " . $e->getMessage();
}


if (isset($_REQUEST['usuario'])) {
    $usuario = $_REQUEST['usuario'];
    $sql = $db->prepare("SELECT * FROM EquiposUsuarios WHERE NombreUsuario=?");
    $sql->bindParam(1, $usuario, PDO::PARAM_STR);
    $sql->execute();
    $valid = 'true';
    if ($sql->rowCount() > 0) {
        $valid= 'false';
    } else {
       $valid='true';
    }
}


$sql=null;
$db = null;
echo $valid;
?>