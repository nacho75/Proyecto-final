$.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z\s\ñ\Ñ]+$/i.test(value);
}, "Solo letras por favor");

var idJugadores;
   $(document).ready(function() {
   		$('#formularioCrear').fadeOut(1);
   		$('#formulario').fadeOut(1);
       var miTabla = $('#miTabla').DataTable({
           'processing': true,
           'serverSide': true,
           'ajax': 'php/cargar_jugadores.php',
           'language': {
               'sProcessing': 'Procesando...',
               'sLengthMenu': 'Mostrar _MENU_ registros',
               'sZeroRecords': 'No se encontraron resultados',
               'sEmptyTable': 'Ningún dato disponible en esta tabla',
               'sInfo': 'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
               'sInfoEmpty': 'Mostrando registros del 0 al 0 de un total de 0 registros',
               'sInfoFiltered': '(filtrado de un total de _MAX_ registros)',
               'sInfoPostFix': '',
               'sSearch': 'Buscar:',
               'sUrl': '',
               'sInfoThousands': '.',
               'sLoadingRecords': 'Cargando...',
               'oPaginate': {
                   'sFirst': 'Primero',
                   'sLast': 'Último',
                   'sNext': 'Siguiente',
                   'sPrevious': 'Anterior'
               },
               'oAria': {
                   'sSortAscending': ': Activar para ordenar la columna de manera ascendente',
                   'sSortDescending': ': Activar para ordenar la columna de manera descendente'
               }
           },
           'columns': [{
               'data': 'Nombre'
           }, {
               'data': 'Valor'
           }, {
               'data': 'Equipo'
           }, {
               'data': 'Posicion'
           }, {
               'data': 'Puntosjornada'
           }, {
               'data': 'Puntostotales'
           }, {
               'data': 'idJugadores'
               ,'render': function(data) {
                   return '<a class="btn btn-primary editarbtn" href=http://localhost/Proyecto final/app/php/modificar_jugador.php?idJugadores=' + data + '>Editar</a><a data-toggle="modal" data-target="#basicModal"  class="btn btn-warning borrarbtn" >Borrar</a>';
               }
           }]
       });

       $('#miTabla').on('click', '.editarbtn', function(e) {
           e.preventDefault();
           $('#tabla').fadeOut(100);
           $('#formulario').fadeIn(100);

           var nRow = $(this).parents('tr')[0];
           var aData = miTabla.row(nRow).data();
           $('#idJugador').val(aData.idJugadores);
           $('#nombre').val(aData.Nombre);
           $('#valor').val(aData.Valor);
           $('#puntosjornada').val(aData.Puntosjornada);
           $('#puntostotales').val(aData.Puntostotales);
       });



       $('#formCrear').validate({

           rules: {
               nombreNuevo: {
                   required: true,
                   lettersonly: true
               },
               equipoNuevo: {
                   required: true
               },
               valorNuevo: {
                   required: true,
                   digits: true
               },
               posicionNuevo: {
                   required: true,
                   lettersonly: true
               }
           },
           submitHandler: function() {
               var nombreNuevo = $('#nombreNuevo').val();
               var equipoNuevo = $('#equipoNuevo').val();
               var valorNuevo = $('#valorNuevo').val();
               var posicionNuevo = $('#posicionNuevo').val();

               $.ajax({
                   type: 'POST',
                   dataType: 'json',
                   url: 'php/añadir_jugador.php',
                   data: {
                       nombreNuevo: nombreNuevo,
                       equipoNuevo: equipoNuevo,
                       valorNuevo: valorNuevo,
                       posicionNuevo: posicionNuevo

                   },
                   error: function(xhr, status, error) {
                       $.growl({

                           icon: "glyphicon glyphicon-remove",
                           message: "Error al añadir el jugador!"

                       }, {
                           type: "danger"
                       });

                   },
                   success: function(data) {
                       var $mitabla = $("#miTabla").dataTable({
                           bRetrieve: true
                       });
                       $mitabla.fnDraw();
                       if (data[0].estado == 0) {

                           $.growl({

                               icon: "glyphicon glyphicon-ok",
                               message: "Jugador añadido correctamente!"

                           }, {
                               type: "success"
                           });
                       } else {

                           $.growl({

                               icon: "glyphicon glyphicon-remove",
                               message: "Error al añadir el jugadorrr!"

                           }, {
                               type: "danger"
                           });
                       }

                   },
                   complete: {}
               });
               $('#formularioCrear').fadeOut(100);
               $('#tabla').fadeIn(100);

           }

       });

       $('#creajugador').click(function(e) {
           e.preventDefault();

           $('#tabla').fadeOut(100);
           $('#formularioCrear').fadeIn(100);

           $('#nombreNuevo').val("");
           $('#equipoNuevo').val("");
           $('#valorNuevo').val("");
           $('#posicionNuevo').val("");
       });

       $('#formEditar').validate({

           rules: {
               nombre: {
                   required: true,
                   lettersonly: true
               },
               valor: {
                   required: true,
                   digits: true
                  },
               puntosjornada: {
                   required: true,
                   digits: true
               }
           },
           submitHandler: function() {

               var idJugador = $('#idJugador').val();
               var nombre = $('#nombre').val();
               var valor = $('#valor').val();
               var puntosjornada = $('#puntosjornada').val();
               var puntostotales = $('#puntostotales').val();

               $.ajax({
                   type: 'POST',
                   dataType: 'json',
                   url: 'php/modificar_jugador.php',
                   data: {
                       idJugador: idJugador,
                       nombre: nombre,
                       valor: valor,
                       puntosjornada: puntosjornada,
                       puntostotales: puntostotales
                   },
                   error: function(xhr, status, error) {
                       $.growl({

                           icon: "glyphicon glyphicon-remove",
                           message: "Error al editar!"

                       }, {
                           type: "danger"
                       });

                   },
                   success: function(data) {
                       var $mitabla = $("#miTabla").dataTable({
                           bRetrieve: true
                       });
                       $mitabla.fnDraw();
                       if (data[0].estado == 0) {

                           $.growl({

                               icon: "glyphicon glyphicon-ok",
                               message: "Jugador editado correctamente!"

                           }, {
                               type: "success"
                           });
                       } else {

                           $.growl({

                               icon: "glyphicon glyphicon-remove",
                               message: "Error al editar el jugador!"

                           }, {
                               type: "danger"
                           });
                       }

                   },
                   complete: {}
               });
               $('#tabla').fadeIn(100);
               $('#formulario').fadeOut(100);
           }

       });

$('#miTabla').on('click', '.borrarbtn', function(e) {
           var nRow = $(this).parents('tr')[0];
           var aData = miTabla.row(nRow).data();
           idJugador = aData.idJugadores;
       });

       $('#basicModal').on('click', '#confBorrar', function(e) {
           $.ajax({
               type: 'POST',
               dataType: 'json',
               url: 'php/borrar_jugador.php',
               data: {
                   idJugador: idJugador
               },
               error: function(xhr, status, error) {
                   $.growl({

                       icon: "glyphicon glyphicon-remove",
                       message: "Error al borrar!"

                   }, {
                       type: "danger"
                   });
               },
               success: function(data) {
                   var $mitabla = $("#miTabla").dataTable({
                       bRetrieve: true
                   });
                   $mitabla.fnDraw();
                   $.growl({

                       icon: "glyphicon glyphicon-ok",
                       message: "Borrado realizado con exito!"

                   }, {
                       type: "success"
                   });
               },
               complete: {}
           });
           $('#tabla').fadeIn(100);
       });


   });

$('#calclasif').click(function(e) {
 $.ajax({
               type: 'POST',
               dataType: 'json',
               url: 'php/calcular_clasificaciones.php',
               error: function(xhr, status, error) {
                   $.growl({
                       icon: "glyphicon glyphicon-remove",
                       message: "Error al calcular las clasificaciones!"
                   }, {
                       type: "danger"
                   });
               },
               success: function(data) {
                   $.growl({
                       icon: "glyphicon glyphicon-ok",
                       message: "Cálculo de clasificaciones realizado con éxito!"
                   }, {
                       type: "success"
                   });
               },
               complete: {}
           });
       });

$('#resetearpuntos').click(function(e) {
 $.ajax({
               type: 'POST',
               dataType: 'json',
               url: 'php/resetear_puntos.php',
               error: function(xhr, status, error) {
                   $.growl({
                       icon: "glyphicon glyphicon-remove",
                       message: "Error al resetear los puntos!"
                   }, {
                       type: "danger"
                   });
               },
               success: function(data) {
                   $.growl({
                       icon: "glyphicon glyphicon-ok",
                       message: "Reseteo de puntos realizado con éxito!"
                   }, {
                       type: "success"
                   });
               },
               complete: {}
           });
           location.reload();
       });