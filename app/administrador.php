<?php
require("php/sesionesadmin.php");
?>
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Football Fantasy .::. Administrador</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <!-- build:css(.) styles/vendor.css -->
    <!-- bower:css -->
    <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.css" />
    <!-- endbower -->
    <!-- endbuild -->
    <!-- build:css(.tmp) styles/main.css -->
    <link rel="stylesheet" href="styles/dataTables.bootstrap.css">
    <link rel="stylesheet" href="styles/main.css">
    <!-- endbuild -->
  </head>
  <body>
    <!--[if lt IE 10]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    

            <div class="navbar-header header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="alineacion.php"><img class="navbar-brand logo" src="images/logo.png" alt="logo Football Fantasy">
                </a>
            <a class="navbar-brand logolet" href="alineacion.php">
                Football Fantasy
            </a>
        </div>
        <div class="navbar-collapse collapse header">
            <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="php/salir.php">Salir</a>
                    </li>
                </ul>
        </div>
        <div class="navbar-collapse collapse header titulos">
        <h1>Administrador</h1>
        </div>
    <div class="container-fluid">
      <div id="tabla" class="row">
            <div class="col-md-12">
                <table id="miTabla" class="table stripe">
                    <button id="creajugador" type="button" class="btn btn-success navbar-btn">Añadir Jugador</button>
                    <thead>
                        <th>Nombre</th>
                        <th>Valor</th>
                        <th>Equipo</th>
                        <th>Posicion</th>
                        <th>Puntos jornada</th>
                        <th>Puntos totales</th>
                        <th>Opciones</th>
                    </thead>
                    <tbody>
                    </tbody>
                    <tfoot>
                        <th>Nombre</th>
                        <th>Valor</th>
                        <th>Equipo</th>
                        <th>Posicion</th>
                        <th>Puntos jornada</th>
                        <th>Puntos totales</th>
                        <th>Opciones</th>
                    </tfoot>
                </table>
                <button id="reafic" type="button" class="btn btn-info">Realizar fichajes</button>
                <button id="calclasif" type="button" class="btn btn-info">Calcular clasificaciones</button>
                <button id="resetearpuntos" type="button" class="btn btn-warning">Resetear puntos jornada</button>
            </div>

        </div>
        <!-- Añadir -->
        <div id="formularioCrear" class="row">
            <div class="col-md-4 col-md-offset-3">
                <form class="form-horizontal" id="formCrear" name="formCrear" method="post" action="#">
                    <div>
                        <h2>Añadir nuevo jugador</h2>

                        <div class="form-group">
                            <label for="nombreNuevo" class="col-sm-2 control-label">Nombre del jugador:*</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="nombreNuevo" name="nombreNuevo" placeholder="Nombre del jugador">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="equipoNuevo" class="col-sm-2 control-label">Equipo real:*</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="equipoNuevo" name="equipoNuevo" placeholder="Nombre del equipo">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="valorNuevo" class="col-sm-2 control-label">Valor del jugador:*</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="valorNuevo" name="valorNuevo" placeholder="Valor del jugador">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="posicionNuevo" class="col-sm-2 control-label">Posicion del jugador:*</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="posicionNuevo" name="posicionNuevo" placeholder="Posición del jugador">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-10 col-sm-offset-2">
                                <button id="enviarDoc" type="submit" class="btn btn-primary">Enviar</button>

                                <a class="btn btn-danger" href="administrador.php" role="button">Cancelar</a>
                            </div>
                        </div>

                    </div>
                </form>

            </div>
        </div>
        <!-- Editar -->
        <div id="formulario" class="row">
            <div class="col-md-8 col-md-offset-3">
                <form class="form-horizontal" id="formEditar" action="" method="post">
                    <div>
                        <h2>Editar Jugador</h2>
                        <div class="form-group">
                            <label for="idJugador" class="col-sm-2 control-label">Identificador Jugador</label>
                            <div class="col-sm-10">
                                <input disabled="true" type="text" class="form-control" id="idJugador">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="nombre" class="col-sm-2 control-label">Nombre</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="nombre" placeholder="Nombre del jugador">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="valor" class="col-sm-2 control-label">Valor del jugador</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="valor" placeholder="Valor del jugador">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="puntosjornada" class="col-sm-2 control-label">Puntos de la última jornada:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="puntosjornada" placeholder="Puntos de la última jornada">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="puntostotales" class="col-sm-2 control-label">Puntos totales:</label>
                            <div class="col-sm-10">
                                <input disabled="true" type="text" class="form-control" id="puntostotales" placeholder="Puntos totales">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-10 col-sm-offset-2">
                                <button id="enviar" type="submit" class="btn btn-primary">Enviar</button>
                                <a class="btn btn-danger" href="administrador.php" role="button">Cancelar</a>
                            </div>
                        </div>

                    </div>
                </form>

            </div>
        </div>
        <!-- Borrar -->

        <div class="modal fade" id="basicModal" name="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel">Borrar jugador</h4>
                    </div>
                    <div class="modal-body">
                        <h3>¿Desea borrar el jugador?</h3>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                        <button type="submit" id="confBorrar" name="confBorrar" data-dismiss="modal" class="btn btn-primary aceptarBorrado">Si</button>
                    </div>

                </div>
            </div>
</div>

      <div class="footer pie">
        <div id="izq">
            Ignacio Martínez de Zabarte © 2015
        </div>
            <!--<div id="der">
                Av. de Movera, nº 352 · imartinezdezabarte@gmail.com
            </div>-->
        </div>
    </div>
    

    <!-- build:js(.) scripts/vendor.js -->
    <!-- bower:js -->
    <script src="../bower_components/jquery/dist/jquery.js"></script>
    <script src="../bower_components/jquery-validation/dist/jquery.validate.js"></script>
    <!-- endbower -->
    <!-- endbuild -->

    
    <!-- build:js(.) scripts/plugins.js -->
    <script src="../bower_components/bootstrap/js/affix.js"></script>
    <script src="../bower_components/bootstrap/js/alert.js"></script>
    <script src="../bower_components/bootstrap/js/dropdown.js"></script>
    <script src="../bower_components/bootstrap/js/tooltip.js"></script>
    <script src="../bower_components/bootstrap/js/modal.js"></script>
    <script src="../bower_components/bootstrap/js/transition.js"></script>
    <script src="../bower_components/bootstrap/js/button.js"></script>
    <script src="../bower_components/bootstrap/js/popover.js"></script>
    <script src="../bower_components/bootstrap/js/carousel.js"></script>
    <script src="../bower_components/bootstrap/js/scrollspy.js"></script>
    <script src="../bower_components/bootstrap/js/collapse.js"></script>
    <script src="../bower_components/bootstrap/js/tab.js"></script>
    <script src="../bower_components/bootstrap.growl/bootstrap-growl.js"></script>
    <script src="scripts/messages_es.js"></script>
    <!-- endbuild -->
    

    <!-- build:js scripts/main.js -->
    <script src="scripts/jquery.dataTables.js"></script>
    <script src="scripts/dataTables.bootstrap.js"></script>
    <script src="scripts/main.js"></script>
    <!-- endbuild -->

    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <script>
      (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
      function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
      e=o.createElement(i);r=o.getElementsByTagName(i)[0];
      e.src='https://www.google-analytics.com/analytics.js';
      r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
      ga('create','UA-XXXXX-X');ga('send','pageview');
    </script>
  </body>
</html>
