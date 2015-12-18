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
            <!--<a href="administrador.html"><img class="navbar-brand" src="images/logo.png" alt="logo Football Fantasy">
                </a>-->
            <a class="navbar-brand" href="alineacion.php">
                <span id="logo">Football Fantasy</span>
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

      <div id="tabla" class="row">
            <div class="col-md-12">
                <table id="Tablaclatot" class="table table-striped table-bordered">
                    <a class="btn btn-info" href="clasificacion_ultjor.php" role="button">Ver clasificación última jornada</a>
                    <thead>
                        <th>id</th>
                        <th>Usuario</th>
                        <th>Equipo</th>
                        <th>Valor</th>
                        <th>Puntos</th>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>

        </div>

      <div class="footer">
        
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
    <!-- endbuild -->
    

    <!-- build:js scripts/main.js -->
    <script src="scripts/jquery.dataTables.js"></script>
    <script src="scripts/dataTables.bootstrap.js"></script>
    <script src="scripts/clasificacion_total.js"></script>
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