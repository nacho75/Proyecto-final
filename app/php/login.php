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


$usuario = $_POST['usuario'];
$password = md5($_POST['password']);


$consulta2 = 'SELECT NombreUsuario FROM EquiposUsuarios WHERE NombreUsuario = ? and Password = ?';


$query2 = $db->prepare($consulta2);
$query2->bindParam(1, $usuario,PDO::PARAM_STR);
$query2->bindParam(2, $password,PDO::PARAM_STR);
$query2->execute();


if ($b = $query2->fetch()) {
    if ($b[0] == "admin"){
    	session_start();
    	$_SESSION['usuarios']= $usuario;
        header("refresh:0.1;url=../administrador.php");
    } else {
    	session_start();
    	$_SESSION['usuarios']= $usuario;
        header("refresh:0.1;url=../alineacion.php");
    }
        
} else {
    echo "<script type=\"text/javascript\">alert(\"Error en la identificación\");window.location.href=\"../index.html\"</script>";
}


$query2=null;
$db = null;
?>