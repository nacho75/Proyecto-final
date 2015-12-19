<?php
require("php/sesiones.php");
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
    <div class="container-fluid">
        <div class="navbar-header">
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
        <div class="container">
            <div class="row">
                <div class="botones">
                    <div class="fila1">
                        <a class="btn btn-info" role="button" id="4-4-2">4-4-2</a>
                        <a class="btn btn-info" role="button" id="4-3-3">4-3-3</a>
                        <a class="btn btn-info" role="button" id="3-4-3">3-4-3</a>
                        <a class="btn btn-info" role="button" id="3-5-2">3-5-2</a>
                    </div>
                    <div class="fila2">
                        <a class="btn btn-info" role="button" id="4-5-1">4-5-1</a>
                        <a class="btn btn-info" role="button" id="5-3-2">5-3-2</a>
                        <a class="btn btn-info" role="button" id="5-4-1">5-4-1</a>
                    </div>
                </div>
                <div class="campo">
                    <div class="lineadel">
                        <div class="titulares del1" id="del1">
                            <img src="images/player.png" height="50" width="50" alt="">
                        </div>
                        <div class="titulares del2">
                            <img src="images/player.png" height="50" width="50" alt="">
                        </div>
                        <div class="titulares del3">
                            <img src="images/player.png" height="50" width="50" alt="">
                        </div>
                        <div class="titulares del4">
                            <img src="images/player.png" height="50" width="50" alt="">
                        </div>
                        <div class="titulares del5">
                            <img src="images/player.png" height="50" width="50" alt="">
                        </div>
                    </div>
                    <div class="lineamed">
                        <div class="titulares med1">
                            <img src="images/player.png" height="50" width="50" alt="">
                        </div>
                        <div class="titulares med2">
                            <img src="images/player.png" height="50" width="50" alt="">
                        </div>
                        <div class="titulares med3">
                            <img src="images/player.png" height="50" width="50" alt="">
                        </div>
                        <div class="titulares med4">
                            <img src="images/player.png" height="50" width="50" alt="">
                        </div>
                        <div class="titulares med5">
                            <img src="images/player.png" height="50" width="50" alt="">
                        </div>
                    </div>
                    <div class="lineadef">
                        <div class="titulares def1">
                            <img src="images/player.png" height="50" width="50" alt="">
                        </div>
                        <div class="titulares def2">
                            <img src="images/player.png" height="50" width="50" alt="">
                        </div>
                        <div class="titulares def3">
                            <img src="images/player.png" height="50" width="50" alt="">
                        </div>
                        <div class="titulares def4">
                            <img src="images/player.png" height="50" width="50" alt="">
                        </div>
                        <div class="titulares def5">
                            <img src="images/player.png" height="50" width="50" alt="">
                        </div>
                    </div>
                    <div class="lineapor">
                        <div class="titulares por">
                            <img src="images/player.png" height="50" width="50" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div id="tabla" class="row">
            <div class="col-md-12">
                <table id="Tablaali" class="table striped table-bordered">
                    <thead>
                        <th>Posicion</th>
                        <th>Equipo</th>
                        <th>Nombre</th>
                        <th>Puntos</th>
                        <th>Valor</th>
                        <th>Alineado</th>
                        <th>Vendible</th>
                        <th>Jugador</th>
                        <th>Opciones</th>
                        <th>Alineacion</th>
                        <th>Mercado</th>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>

        </div>
        </div>
                <div class="modal fade" id="basicModal" name="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel">Precio de venta:</h4>
                    </div>
                    <div class="modal-body">
                        <input type="text" id="precioventa" data-tabindex="1">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                        <button type="submit" id="confvender" name="confvender" data-dismiss="modal" class="btn btn-primary">Vender</button>
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
    <!--<script src="../bower_components/bootstrap.growl/bootstrap-growl.js"></script>
    <script src="scripts/messages_es.js"></script>-->
    <!-- endbuild -->
    <!-- build:js scripts/main.js -->
    <!--S<script src="scripts/jquery.dataTables.js"></script>
    <script src="scripts/dataTables.bootstrap.js"></script>-->

    <script src="scripts/jquery.dataTables.js"></script>
    <script src="scripts/dataTables.bootstrap.js"></script>
    <script src="scripts/alineacion.js"></script>
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
