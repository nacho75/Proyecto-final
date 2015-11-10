<?php
header('Content-Type: text/html; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$dbinfo = "mysql:dbname=Comunio;host=localhost";
$user = "root";
$pass = "1234";

try {
    $db = new PDO($dbinfo, $user, $pass);
    $db->exec('SET CHARACTER SET utf8');
} catch (Exception $e) {
    echo "La conexión ha fallado: " . $e->getMessage();
}

if (isset($_REQUEST['password'])) {
    $usuario = $_REQUEST['usuario'];
    $password = $_REQUEST['password'];
    /*$sql = $db->prepare("SELECT * FROM EquiposUsuarios WHERE Password=?");
    $sql->bindParam(1, $password, PDO::PARAM_STR);
    $sql->execute();*/
    $consulta2 = "SELECT * FROM `EquiposUsuarios` WHERE `NombreUsuario`=\"$usuario\" and `Password`=\"$password\"";
    //echo "$consulta2";
    $query2 = $db->prepare($consulta2);
    $query2->bindParam(":usuario", $usuario);
    $query2->bindParam(":password", $password);
    $query2->execute();

    if ($query2->fetch()) {
        $valid2= 'true';
    } else {
        $valid2='false';
    }
}

$query2=null;
$db = null;
echo $valid2;
?>