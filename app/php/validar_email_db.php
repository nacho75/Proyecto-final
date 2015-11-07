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

if (isset($_REQUEST['email'])) {
    $email = $_REQUEST['email'];
    $sql = $db->prepare("SELECT * FROM Usuarios WHERE Email=?");
    $sql->bindParam(1, $email, PDO::PARAM_STR);
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