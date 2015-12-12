/*$(document).ready(function() {
        $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'php/comprobar_equipo.php',
        error: function(xhr, status, error) {
            $.growl({
                icon: "glyphicon glyphicon-remove",
                message: "Recuerda darle al botón Asignar equipo!"
            }, {
                type: "danger"
            });
        },
        success: function(data) {
            document.getElementsByClassName('asigeq')[0].style.visibility = 'hidden';
        },
        complete: {}
    });
});
$('#asignarequipo').click(function() {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'php/asignar_equipos.php',
        error: function(xhr, status, error) {
            $.growl({
                icon: "glyphicon glyphicon-remove",
                message: "Error al asignar el equipo!"
            }, {
                type: "danger"
            });
        },
        success: function(data) {
            $.growl({
                icon: "glyphicon glyphicon-ok",
                message: "Asignación de equipo correcta!"
            }, {
                type: "success"
            });
        },
        complete: {
        }
    });

});*/