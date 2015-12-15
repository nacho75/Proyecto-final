var idpuja;
$(document).ready(function() {
    var ofertasrec = $('#ofertasrec').DataTable({
        'processing': true,
        'serverSide': true,
        'ajax': 'php/cargar_ofertas_recibidas.php',
        "order": [
            [6, "desc"]
        ],
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
            "visible": false
        }, {
            'data': 'Propietarios',
            "visible": false
        }, {
            'data': 'Puja'
        }, {
            'data': 'idpuja',
            'render': function(data) {
                return '<a data-toggle="modal" data-target="#basicModal" class="btn btn-primary aceptar" >Aceptar</a><a data-toggle="modal" data-target="#basicModal2" class="btn btn-primary rechazar" >Rechazar</a>';
            }
        }]
    });
    $('#ofertasrec').on('click', '.aceptar', function(e) {
        var nRow = $(this).parents('tr')[0];
        var aData = ofertasrec.row(nRow).data();
        idpuja = aData.idpuja;
        puja = aData.Puja;
        idjugador = aData.idJugadores;
        usuario = aData.Usuario;
    });

    $('#basicModal').on('click', '#confaceptar', function(e) {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'php/aceptar_puja.php',
            data: {
                idpuja: idpuja,
                puja: puja,
                idjugador: idjugador,
                usuario: usuario
            },
            error: function(xhr, status, error) {
                $.growl({

                    icon: "glyphicon glyphicon-remove",
                    message: "Error en la transferencia del jugador!"

                }, {
                    type: "danger"
                });
            },
            success: function(data) {
                $.growl({

                    icon: "glyphicon glyphicon-ok",
                    message: "Transferencia del jugador realizada con exito!"

                }, {
                    type: "success"
                });
            },
            complete: {}
        });
        ofertasrec.ajax.reload();
    });




    $('#ofertasrec').on('click', '.rechazar', function(e) {
        var nRow = $(this).parents('tr')[0];
        var aData = ofertasrec.row(nRow).data();
        idpuja = aData.idpuja;
    });

    $('#basicModal2').on('click', '#confBorrar', function(e) {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'php/rechazar_puja.php',
            data: {
                idpuja: idpuja
            },
            error: function(xhr, status, error) {
                $.growl({

                    icon: "glyphicon glyphicon-remove",
                    message: "Error al rechazar la oferta!"

                }, {
                    type: "danger"
                });
            },
            success: function(data) {
                $.growl({

                    icon: "glyphicon glyphicon-ok",
                    message: "Oferta rechazada con exito!"

                }, {
                    type: "success"
                });
            },
            complete: {}
        });
        ofertasrec.ajax.reload();
    });
});
