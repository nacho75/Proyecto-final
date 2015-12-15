var idpuja;
   $(document).ready(function() {
       var ofertas = $('#ofertas').DataTable({
           'processing': true,
           'serverSide': true,
           'ajax': 'php/cargar_ofertas_realizadas.php',
                    "order": [[ 6, "desc" ]],
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
               'data': 'Posicion'
           }, {
               'data': 'Equipo'
           }, {
               'data': 'Valor'
           }, {
               'data': 'Precio'
           }, {
               'data': 'Puntostotales'
           }, {
               'data': 'Usuario',
                "visible": false
           }, {
               'data': 'idJugadores',
                "visible": false
           }, {
               'data': 'Propietarios'
           }, {
               'data': 'Puja'
           }, {
               'data': 'idpuja',
               'render': function(data) {
                    return '<a data-toggle="modal" data-target="#basicModal" class="btn btn-primary modificar" >Modificar</a><a data-toggle="modal" data-target="#basicModal2" class="btn btn-primary eliminar" >Eliminar</a>';
            }
           }]
       });
    
    $('#ofertas').on('click', '.modificar', function(e) {
        var nRow = $(this).parents('tr')[0];
        var aData = ofertas.row(nRow).data();
        idpuja = aData.idpuja;
        Propietarios = aData.Propietarios;
        idJugador = aData.idJugadores;
    });

    $('#basicModal').on('click', '#confmodificar', function(e) {
            var precio = $('#preciopuja').val();
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: 'php/modificar_puja.php',
                data: {
                    idpuja: idpuja,
                    precio: precio,
                    Propietarios: Propietarios,
                    idJugador: idJugador
                },
                error: function(xhr, status, error) {
                    $.growl({
                        icon: "glyphicon glyphicon-remove",
                        message: "Error al pujar por el jugador!"
                    }, {
                        type: "danger"
                    });

                },
                success: function(data) {
                  if (data[0].mensaje == "Error precio") {
                    $.growl({
                        icon: "glyphicon glyphicon-remove",
                        message: "No puedes pujar menos del valor por los jugadores del admin!"
                    }, {
                        type: "danger"
                    });
                  } else {
                    $.growl({
                        icon: "glyphicon glyphicon-ok",
                        message: "Puja por el jugador correcta!"
                    }, {
                        type: "success"
                    });
                    }
                },
                complete: {}
            });
      ofertas.ajax.reload();
    });
$('#ofertas').on('click', '.eliminar', function(e) {
           var nRow = $(this).parents('tr')[0];
           var aData = ofertas.row(nRow).data();
            idpuja = aData.idpuja;
       });

       $('#basicModal2').on('click', '#confBorrar', function(e) {
           $.ajax({
               type: 'POST',
               dataType: 'json',
               url: 'php/eliminar_puja.php',
               data: {
                   idpuja: idpuja
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
                   $.growl({

                       icon: "glyphicon glyphicon-ok",
                       message: "Borrado realizado con exito!"

                   }, {
                       type: "success"
                   });
               },
               complete: {}
           });
      ofertas.ajax.reload();
       });
});