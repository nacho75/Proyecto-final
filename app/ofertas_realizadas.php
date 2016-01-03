<?php
require("php/sesiones.php");
require("php/datos.php");
?>
    <!doctype html>
    <html lang="es">

    <head>
        <meta charset="utf-8">
        <title>Comunio</title>
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
            <ul class="nav navbar-nav">
                <li>
                    <a href="alineacion.php">Alineación</a>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Clasificación
                            <b class="caret"></b>
                        </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="clasificacion_ultjor.php">Ultima jornada</a>
                        </li>
                        <li>
                            <a href="clasificacion_total.php">Total</a>
                        </li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="mercado.php" class="dropdown-toggle" data-toggle="dropdown">Mercado de fichajes
                        <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                    <li>
                            <a href="mercado.php">Mercado</a>
                        </li>
                        <li>
                            <a href="ofertas_recibidas.php">Ofertas recibidas</a>
                        </li>
                        <li>
                            <a href="ofertas_realizadas.php">Ofertas realizadas</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="php/salir.php">Salir</a>
                    </li>
                </ul>
        </div>
        <div class="navbar-collapse collapse header datos">
        <div class="datos1">
            <p>Usuario: 
            <?php 
                echo "$usuario";
            ?></p>
             <p>Saldo: 
            <?php 
                echo "$saldo";
            ?></p>
        </div>
            <div class="datos2">
            <p>Nombre equipo: 
            <?php 
                echo "$nombreeq";
            ?></p>
            <p>Valor del equipo: 
            <?php 
                echo "$valor";
            ?></p> 
            </div>
        </div>
            <div class="container-fluid">
            <div id="tabla" class="row">
                <div class="col-md-12">
                    <table id="ofertas" class="table stripe">
                        <thead>
                            <th>Nombre</th>
                            <th>Posicion</th>
                            <th>Equipo</th>
                            <th>Valor</th>
                            <th>Precio</th>
                            <th>Puntos totales</th>
                            <th>Usuario</th>
                            <th>idjug</th>
                            <th>Propietario</th>
                            <th>Puja</th>
                            <th>Opciones</th>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="modal fade" id="basicModal" name="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel">Puja:</h4>
                        </div>
                        <div class="modal-body">
                            <input type="text" id="preciopuja" data-tabindex="1">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                            <button type="submit" id="confmodificar" name="confmodificar" data-dismiss="modal" class="btn btn-primary">Modificar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="basicModal2" name="basicModal2" tabindex="-1" role="dialog" aria-labelledby="basicModal2" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel">Eliminar puja</h4>
                    </div>
                    <div class="modal-body">
                        <h3>¿Desea eliminar la puja?</h3>
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
        <script src="scripts/ofertas_realizadas.js"></script>
        <!-- endbuild -->
        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
        (function(b, o, i, l, e, r) {
            b.GoogleAnalyticsObject = l;
            b[l] || (b[l] =
                function() {
                    (b[l].q = b[l].q || []).push(arguments)
                });
            b[l].l = +new Date;
            e = o.createElement(i);
            r = o.getElementsByTagName(i)[0];
            e.src = 'https://www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e, r)
        }(window, document, 'script', 'ga'));
        ga('create', 'UA-XXXXX-X');
        ga('send', 'pageview');
        </script>
    </body>

    </html>
