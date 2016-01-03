var idJugadores;
   $(document).ready(function() {
       var mercado = $('#mercado').DataTable({
           'processing': true,
           'serverSide': true,
           'ajax': 'php/cargar_mercado.php',
                    "order": [[ 6, "asc" ]],
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
               'data': 'Usuario'
           }, {
               'data': 'idJugadores',
               'render': function(data) {
                    return '<a data-toggle="modal" data-target="#basicModal" class="btn btn-primary pujar" >Pujar</a>';
            }
           }]
       });
    $('#mercado').on('click', '.pujar', function(e) {
        var nRow = $(this).parents('tr')[0];
        var aData = mercado.row(nRow).data();
        idJugador = aData.idJugadores;
        usuario = aData.Usuario;
        $('#preciopuja').val(aData.Precio);
    });

    $('#basicModal').on('click', '#confpujar', function(e) {
            var precio = $('#preciopuja').val();
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: 'php/pujar.php',
                data: {
                    idJugador: idJugador,
                    precio: precio,
                    usuario: usuario
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
                  } else if(data[0].mensaje == "Error saldo"){
                    $.growl({
                        icon: "glyphicon glyphicon-remove",
                        message: "No puedes pujar porque tu saldo es negativo!"
                    }, {
                        type: "danger"
                    });
                  } else if(data[0].mensaje == "Error jugador"){
                    $.growl({
                        icon: "glyphicon glyphicon-remove",
                        message: "No puedes pujar por tu propio jugador!"
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
    });
});