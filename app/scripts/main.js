$("#formregistro").validate({
     onkeyup: false,
     onfocusout: false,
     onclick: false,
     rules: {
         usuario: {
             required: true
         },
         equipo: {
             required: true
         },
         email: {
             required: true,
             minlength: 4,
             email: true,
             remote: "php/validar_email_db.php"
         },
         password: {
             required: true
         }
     }
});

$("#formlogin").validate({
     onkeyup: false,
     onfocusout: false,
     onclick: false,
     rules: {
         usuario: {
             required: true,
             remote: "php/usuario.php"
         },
         password: {
             required: true,
             remote: "php/pass.php"
         }
     }
});

var idJugadores;
   $(document).ready(function() {
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
               'sInfoThousands': ',',
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
               'data': 'Puntos jornada'
           }, {
               'data': 'Puntos totales'
           }, {
               'data': 'idJugadores'

           
           }]
       });
       /*$('#miTabla').on('click', '.editarbtn', function(e) {
           e.preventDefault();
           $('#tabla').fadeOut(100);
           $('#formulario').fadeIn(100);

           var nRow = $(this).parents('tr')[0];
           var aData = miTabla.row(nRow).data();
           $('#idDoctor').val(aData.idDoctor);
           $('#nombre').val(aData.nombre);
           $('#numcolegiado').val(aData.numcolegiado);
           $('#clinicas').val(aData.nombreClinica);
           cargarTarifas();
           var str = aData.idClinica;
           str = str.split(",");
           $('#clinicas').val(str);]*/
       });