<?php
 include("BD.php" );
$usuario="Josemi";
$sQuery1 = "SELECT idEquiposUsuarios FROM EquiposUsuarios WHERE NombreUsuario = '" . $usuario ."'";
$rResult1 = mysql_query($sQuery1, $gaSql['link']) or fatal_error('MySQL Error: ' . mysql_errno());

while ($fila1 = mysql_fetch_array($rResult1)) {
    $resultado1[] = array(
      $id = $fila1['idEquiposUsuarios']
   );
}

?>