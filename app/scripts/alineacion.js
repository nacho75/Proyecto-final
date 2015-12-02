$(document).ready(function() {
    var Tablaali = $('#Tablaali').DataTable({
        'processing': true,
        'serverSide': true,
        'ajax': 'php/cargar_jugadores_alineacion.php',
        "paging": false,
        "searching": false,
        "info": false,
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
            'data': 'Posicion'
        }, {
            'data': 'EquipoReal'
        }, {
            'data': 'Nombre'
        }, {
            'data': 'PuntosTotales'
        }, {
            'data': 'Valor'
        }, {
            'data': 'Alineado'
        }, {
            'data': 'Vendible'
        }, {
            'data': 'NombreUsuario',
            "visible": false
        }, {
            'data': 'idJugadores',
            'render': function(data) {
                return '<a class="btn btn-primary editarbtn">Alinear</a><a class="btn btn-primary editarbtn" >Quitar del 11</a><a class="btn btn-primary editarbtn">Vender</a><a class="btn btn-primary editarbtn">Quitar del mercado</a>';
            }
        }]
    });

    function load() {
        $.ajax({
            type: "POST",
            url: "php/cargar_tactica.php",
            dataType: "json",
            success: function(data) {
                //alert(data);
                document.getElementById(data).click();
            }
        });
    }
    load();
});

$('#4-4-2').click(function() {
    document.getElementsByClassName('del1')[0].style.visibility = 'hidden';
    document.getElementsByClassName('del2')[0].style.visibility = 'visible';
    document.getElementsByClassName('del3')[0].style.visibility = 'visible';
    document.getElementsByClassName('del4')[0].style.visibility = 'hidden';
    document.getElementsByClassName('del5')[0].style.visibility = 'hidden';
    document.getElementsByClassName('med1')[0].style.visibility = 'hidden';
    document.getElementsByClassName('med2')[0].style.visibility = 'visible';
    document.getElementsByClassName('med3')[0].style.visibility = 'visible';
    document.getElementsByClassName('med4')[0].style.visibility = 'visible';
    document.getElementsByClassName('med5')[0].style.visibility = 'visible';
    document.getElementsByClassName('def1')[0].style.visibility = 'hidden';
    document.getElementsByClassName('def2')[0].style.visibility = 'visible';
    document.getElementsByClassName('def3')[0].style.visibility = 'visible';
    document.getElementsByClassName('def4')[0].style.visibility = 'visible';
    document.getElementsByClassName('def5')[0].style.visibility = 'visible';
    tactica = "4-4-2"
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'php/cambiar_tactica.php',
        data: {
            tactica: tactica
        },
        error: function(xhr, status, error) {
            $.growl({
                icon: "glyphicon glyphicon-remove",
                message: "Error al actualizar la tactica!"
            }, {
                type: "danger"
            });
        },
        success: function(data) {
            $.growl({
                icon: "glyphicon glyphicon-ok",
                message: "Actualización de tactica con éxito!"
            }, {
                type: "success"
            });
        },
        complete: {}
    });

});


$('#4-3-3').click(function() {
    document.getElementsByClassName('del1')[0].style.visibility = 'visible';
    document.getElementsByClassName('del2')[0].style.visibility = 'hidden';
    document.getElementsByClassName('del3')[0].style.visibility = 'hidden';
    document.getElementsByClassName('del4')[0].style.visibility = 'visible';
    document.getElementsByClassName('del5')[0].style.visibility = 'visible';
    document.getElementsByClassName('med1')[0].style.visibility = 'visible';
    document.getElementsByClassName('med2')[0].style.visibility = 'hidden';
    document.getElementsByClassName('med3')[0].style.visibility = 'hidden';
    document.getElementsByClassName('med4')[0].style.visibility = 'visible';
    document.getElementsByClassName('med5')[0].style.visibility = 'visible';
    document.getElementsByClassName('def1')[0].style.visibility = 'hidden';
    document.getElementsByClassName('def2')[0].style.visibility = 'visible';
    document.getElementsByClassName('def3')[0].style.visibility = 'visible';
    document.getElementsByClassName('def4')[0].style.visibility = 'visible';
    document.getElementsByClassName('def5')[0].style.visibility = 'visible';
    tactica = "4-3-3"
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'php/cambiar_tactica.php',
        data: {
            tactica: tactica
        },
        error: function(xhr, status, error) {
            $.growl({
                icon: "glyphicon glyphicon-remove",
                message: "Error al actualizar la tactica!"
            }, {
                type: "danger"
            });
        },
        success: function(data) {
            $.growl({
                icon: "glyphicon glyphicon-ok",
                message: "Actualización de tactica con éxito!"
            }, {
                type: "success"
            });
        },
        complete: {}
    });

});


$('#3-4-3').click(function() {
    document.getElementsByClassName('del1')[0].style.visibility = 'visible';
    document.getElementsByClassName('del2')[0].style.visibility = 'hidden';
    document.getElementsByClassName('del3')[0].style.visibility = 'hidden';
    document.getElementsByClassName('del4')[0].style.visibility = 'visible';
    document.getElementsByClassName('del5')[0].style.visibility = 'visible';
    document.getElementsByClassName('med1')[0].style.visibility = 'hidden';
    document.getElementsByClassName('med2')[0].style.visibility = 'visible';
    document.getElementsByClassName('med3')[0].style.visibility = 'visible';
    document.getElementsByClassName('med4')[0].style.visibility = 'visible';
    document.getElementsByClassName('med5')[0].style.visibility = 'visible';
    document.getElementsByClassName('def1')[0].style.visibility = 'visible';
    document.getElementsByClassName('def2')[0].style.visibility = 'hidden';
    document.getElementsByClassName('def3')[0].style.visibility = 'hidden';
    document.getElementsByClassName('def4')[0].style.visibility = 'visible';
    document.getElementsByClassName('def5')[0].style.visibility = 'visible';
    tactica = "3-4-3"
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'php/cambiar_tactica.php',
        data: {
            tactica: tactica
        },
        error: function(xhr, status, error) {
            $.growl({
                icon: "glyphicon glyphicon-remove",
                message: "Error al actualizar la tactica!"
            }, {
                type: "danger"
            });
        },
        success: function(data) {
            $.growl({
                icon: "glyphicon glyphicon-ok",
                message: "Actualización de tactica con éxito!"
            }, {
                type: "success"
            });
        },
        complete: {}
    });

});


$('#3-5-2').click(function() {
    document.getElementsByClassName('del1')[0].style.visibility = 'hidden';
    document.getElementsByClassName('del2')[0].style.visibility = 'visible';
    document.getElementsByClassName('del3')[0].style.visibility = 'visible';
    document.getElementsByClassName('del4')[0].style.visibility = 'hidden';
    document.getElementsByClassName('del5')[0].style.visibility = 'hidden';
    document.getElementsByClassName('med1')[0].style.visibility = 'visible';
    document.getElementsByClassName('med2')[0].style.visibility = 'visible';
    document.getElementsByClassName('med3')[0].style.visibility = 'visible';
    document.getElementsByClassName('med4')[0].style.visibility = 'visible';
    document.getElementsByClassName('med5')[0].style.visibility = 'visible';
    document.getElementsByClassName('def1')[0].style.visibility = 'visible';
    document.getElementsByClassName('def2')[0].style.visibility = 'hidden';
    document.getElementsByClassName('def3')[0].style.visibility = 'hidden';
    document.getElementsByClassName('def4')[0].style.visibility = 'visible';
    document.getElementsByClassName('def5')[0].style.visibility = 'visible';
    tactica = "3-5-2"
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'php/cambiar_tactica.php',
        data: {
            tactica: tactica
        },
        error: function(xhr, status, error) {
            $.growl({
                icon: "glyphicon glyphicon-remove",
                message: "Error al actualizar la tactica!"
            }, {
                type: "danger"
            });
        },
        success: function(data) {
            $.growl({
                icon: "glyphicon glyphicon-ok",
                message: "Actualización de tactica con éxito!"
            }, {
                type: "success"
            });
        },
        complete: {}
    });

});


$('#4-5-1').click(function() {
    document.getElementsByClassName('del1')[0].style.visibility = 'visible';
    document.getElementsByClassName('del2')[0].style.visibility = 'hidden';
    document.getElementsByClassName('del3')[0].style.visibility = 'hidden';
    document.getElementsByClassName('del4')[0].style.visibility = 'hidden';
    document.getElementsByClassName('del5')[0].style.visibility = 'hidden';
    document.getElementsByClassName('med1')[0].style.visibility = 'visible';
    document.getElementsByClassName('med2')[0].style.visibility = 'visible';
    document.getElementsByClassName('med3')[0].style.visibility = 'visible';
    document.getElementsByClassName('med4')[0].style.visibility = 'visible';
    document.getElementsByClassName('med5')[0].style.visibility = 'visible';
    document.getElementsByClassName('def1')[0].style.visibility = 'hidden';
    document.getElementsByClassName('def2')[0].style.visibility = 'visible';
    document.getElementsByClassName('def3')[0].style.visibility = 'visible';
    document.getElementsByClassName('def4')[0].style.visibility = 'visible';
    document.getElementsByClassName('def5')[0].style.visibility = 'visible';
    tactica = "4-5-1"
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'php/cambiar_tactica.php',
        data: {
            tactica: tactica
        },
        error: function(xhr, status, error) {
            $.growl({
                icon: "glyphicon glyphicon-remove",
                message: "Error al actualizar la tactica!"
            }, {
                type: "danger"
            });
        },
        success: function(data) {
            $.growl({
                icon: "glyphicon glyphicon-ok",
                message: "Actualización de tactica con éxito!"
            }, {
                type: "success"
            });
        },
        complete: {}
    });


});

$('#5-3-2').click(function() {
    document.getElementsByClassName('del1')[0].style.visibility = 'hidden';
    document.getElementsByClassName('del2')[0].style.visibility = 'visible';
    document.getElementsByClassName('del3')[0].style.visibility = 'visible';
    document.getElementsByClassName('del4')[0].style.visibility = 'hidden';
    document.getElementsByClassName('del5')[0].style.visibility = 'hidden';
    document.getElementsByClassName('med1')[0].style.visibility = 'visible';
    document.getElementsByClassName('med2')[0].style.visibility = 'hidden';
    document.getElementsByClassName('med3')[0].style.visibility = 'hidden';
    document.getElementsByClassName('med4')[0].style.visibility = 'visible';
    document.getElementsByClassName('med5')[0].style.visibility = 'visible';
    document.getElementsByClassName('def1')[0].style.visibility = 'visible';
    document.getElementsByClassName('def2')[0].style.visibility = 'visible';
    document.getElementsByClassName('def3')[0].style.visibility = 'visible';
    document.getElementsByClassName('def4')[0].style.visibility = 'visible';
    document.getElementsByClassName('def5')[0].style.visibility = 'visible';
    tactica = "5-3-2"
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'php/cambiar_tactica.php',
        data: {
            tactica: tactica
        },
        error: function(xhr, status, error) {
            $.growl({
                icon: "glyphicon glyphicon-remove",
                message: "Error al actualizar la tactica!"
            }, {
                type: "danger"
            });
        },
        success: function(data) {
            $.growl({
                icon: "glyphicon glyphicon-ok",
                message: "Actualización de tactica con éxito!"
            }, {
                type: "success"
            });
        },
        complete: {}
    });

});

$('#5-4-1').click(function() {
    document.getElementsByClassName('del1')[0].style.visibility = 'visible';
    document.getElementsByClassName('del2')[0].style.visibility = 'hidden';
    document.getElementsByClassName('del3')[0].style.visibility = 'hidden';
    document.getElementsByClassName('del4')[0].style.visibility = 'hidden';
    document.getElementsByClassName('del5')[0].style.visibility = 'hidden';
    document.getElementsByClassName('med1')[0].style.visibility = 'hidden';
    document.getElementsByClassName('med2')[0].style.visibility = 'visible';
    document.getElementsByClassName('med3')[0].style.visibility = 'visible';
    document.getElementsByClassName('med4')[0].style.visibility = 'visible';
    document.getElementsByClassName('med5')[0].style.visibility = 'visible';
    document.getElementsByClassName('def1')[0].style.visibility = 'visible';
    document.getElementsByClassName('def2')[0].style.visibility = 'visible';
    document.getElementsByClassName('def3')[0].style.visibility = 'visible';
    document.getElementsByClassName('def4')[0].style.visibility = 'visible';
    document.getElementsByClassName('def5')[0].style.visibility = 'visible';
    tactica = "5-4-1"
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'php/cambiar_tactica.php',
        data: {
            tactica: tactica
        },
        error: function(xhr, status, error) {
            $.growl({
                icon: "glyphicon glyphicon-remove",
                message: "Error al actualizar la tactica!"
            }, {
                type: "danger"
            });
        },
        success: function(data) {
            $.growl({
                icon: "glyphicon glyphicon-ok",
                message: "Actualización de tactica con éxito!"
            }, {
                type: "success"
            });
        },
        complete: {}
    });


});
