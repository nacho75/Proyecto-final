var idJugadores;
$(document).ready(function() {
    var Tablaali = $('#Tablaali').DataTable({
        'processing': true,
        'serverSide': true,
        'ajax': 'php/cargar_jugadores_alineacion.php',
        "paging": false,
        "searching": false,
        "order": [[ 0, "Desc" ]],
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
            'data': 'Nombre'
        }, {
            'data': 'EquipoReal'
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
            "visible": false
        }, {
            'data': 'Alineado',
            'render': function(data) {
                if (data == 'Si') {
                    return '<a class="btn btn-primary quiali" >Quitar del 11</a>';
                    this.css({"background-color":"red"});
                };
                if (data == 'No') {
                    return '<a class="btn btn-primary ali">Alinear</a>';
                };
            }
            }, {
                'data': 'Vendible',
                'render': function(data) {
                    if (data == 'Si') {
                        return '<a class="btn btn-primary quimer" >Quitar del mercado</a>';
                    };
                    if (data == 'No') {
                        return '<a data-toggle="modal" data-target="#basicModal" class="btn btn-primary mer">Vender</a>';
                    };
            }
        }]
    });

    function load() {
        $.ajax({
            type: "POST",
            url: "php/cargar_tactica.php",
            dataType: "json",
            success: function(data) {
                document.getElementById(data).click();
            }
        });
    }

    function ponerimagenes() {
                document.getElementById('jugador1').src = "images/player.png";
                document.getElementById('jugador1nom').innerHTML = "";
                document.getElementById('jugador2').src = "images/player.png";
                document.getElementById('jugador2nom').innerHTML = "";
                document.getElementById('jugador3').src = "images/player.png";
                document.getElementById('jugador3nom').innerHTML = "";
                document.getElementById('jugador4').src = "images/player.png";
                document.getElementById('jugador4nom').innerHTML = "";
                document.getElementById('jugador5').src = "images/player.png";
                document.getElementById('jugador5nom').innerHTML = "";
                document.getElementById('jugador6').src = "images/player.png";
                document.getElementById('jugador6nom').innerHTML = "";
                document.getElementById('jugador7').src = "images/player.png";
                document.getElementById('jugador7nom').innerHTML = "";
                document.getElementById('jugador8').src = "images/player.png";
                document.getElementById('jugador8nom').innerHTML = "";
                document.getElementById('jugador9').src = "images/player.png";
                document.getElementById('jugador9nom').innerHTML = "";
                document.getElementById('jugador10').src = "images/player.png";
                document.getElementById('jugador10nom').innerHTML = "";
                document.getElementById('jugador11').src = "images/player.png";
                document.getElementById('jugador11nom').innerHTML = "";
                document.getElementById('jugador12').src = "images/player.png";
                document.getElementById('jugador12nom').innerHTML = "";
                document.getElementById('jugador13').src = "images/player.png";
                document.getElementById('jugador13nom').innerHTML = "";
                document.getElementById('jugador14').src = "images/player.png";
                document.getElementById('jugador14nom').innerHTML = "";
                document.getElementById('jugador15').src = "images/player.png";
                document.getElementById('jugador15nom').innerHTML = "";
                document.getElementById('jugador16').src = "images/player.png";
                document.getElementById('jugador16nom').innerHTML = "";
    }

    function loadjugadores() {
        $.ajax({
            type: "POST",
            url: "php/cargar_jugadores_alineados.php",
            dataType: "json",
            success: function(data) {
                var numeroalineados = data[0].nombre.length;
                for (var i = 0; i < numeroalineados; i++) {
                    if (data[0].posicion[i] == "Portero") {
                        if (data[0].equipo[i] == "F.C.Barcelona") {
                            document.getElementById('jugador16').src = "images/camisetas/cam_BAR.png";
                            document.getElementById('jugador16nom').innerHTML = data[0].nombre[i];
                        };
                        if (data[0].equipo[i] == "At. Madrid") {
                            document.getElementById('jugador16').src = "images/camisetas/cam_ATM.png";
                            document.getElementById('jugador16nom').innerHTML = data[0].nombre[i];
                        };
                        if (data[0].equipo[i] == "Real Madrid") {
                            document.getElementById('jugador16').src = "images/camisetas/cam_RMA.png";
                            document.getElementById('jugador16nom').innerHTML = data[0].nombre[i];
                        };
                        if (data[0].equipo[i] == "Eibar") {
                            document.getElementById('jugador16').src = "images/camisetas/cam_EIB.png";
                            document.getElementById('jugador16nom').innerHTML = data[0].nombre[i];
                        };
                        if (data[0].equipo[i] == "At. Bilbao") {
                            document.getElementById('jugador16').src = "images/camisetas/cam_ATH.png";
                            document.getElementById('jugador16nom').innerHTML = data[0].nombre[i];
                        };
                    };
                    if (data[0].posicion[i] == "Defensa") {
                        if (data[0].alineacion == "5-3-2") {
                            if (document.getElementById('jugador11').src == "http://localhost/Proyecto%20final/app/images/player.png") {
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador12').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador13').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador14').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador15').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                        if (data[0].alineacion == "5-4-1") {
                            if (document.getElementById('jugador11').src == "http://localhost/Proyecto%20final/app/images/player.png") {
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador12').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador13').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador14').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador15').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                        if (data[0].alineacion == "4-4-2") {
                            if (document.getElementById('jugador12').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador13').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador14').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador15').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                            }

                        };
                        if (data[0].alineacion == "4-3-3") {
                            if (document.getElementById('jugador12').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador13').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador14').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador15').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                            }

                        };
                        if (data[0].alineacion == "4-5-1") {
                            if (document.getElementById('jugador12').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador12').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador12nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador13').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador13').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador13nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador14').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador15').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                            }

                        };
                        if (data[0].alineacion == "3-4-3") {
                            if (document.getElementById('jugador11').src == "http://localhost/Proyecto%20final/app/images/player.png") {
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador14').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador15').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                        if (data[0].alineacion == "3-5-2") {
                            if (document.getElementById('jugador11').src == "http://localhost/Proyecto%20final/app/images/player.png") {
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador11').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador11nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador14').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador14').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador14nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador15').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador15').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador15nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                    };
                    if (data[0].posicion[i] == "Centrocampista") {
                        if (data[0].alineacion == "3-5-2") {
                            if (document.getElementById('jugador6').src == "http://localhost/Proyecto%20final/app/images/player.png") {
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador7').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador8').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador9').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador10').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                        if (data[0].alineacion == "4-5-1") {
                            if (document.getElementById('jugador6').src == "http://localhost/Proyecto%20final/app/images/player.png") {
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador7').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador8').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador9').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador10').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                        if (data[0].alineacion == "4-4-2") {
                            if (document.getElementById('jugador7').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador8').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador9').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador10').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                        if (data[0].alineacion == "3-4-3") {
                            if (document.getElementById('jugador7').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador8').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador9').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador10').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                        if (data[0].alineacion == "5-4-1") {
                            if (document.getElementById('jugador7').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador7').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador7nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador8').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador8').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador8nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador9').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador10').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                        if (data[0].alineacion == "4-3-3") {
                            if (document.getElementById('jugador6').src == "http://localhost/Proyecto%20final/app/images/player.png") {
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador9').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador10').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                        if (data[0].alineacion == "5-3-2") {
                            if (document.getElementById('jugador6').src == "http://localhost/Proyecto%20final/app/images/player.png") {
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador6').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador6nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador9').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador9').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador9nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador10').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador10').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador10nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                    };
                    if (data[0].posicion[i] == "Delantero") {
                        if (data[0].alineacion == "4-3-3") {
                            if (document.getElementById('jugador1').src == "http://localhost/Proyecto%20final/app/images/player.png") {
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador4').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador4').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador4nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador4').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador4nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador4').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador4nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador4').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador4nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador4').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador4nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador5').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador5').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador5nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador5').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador5nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador5').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador5nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador5').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador5nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador5').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador5nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                        if (data[0].alineacion == "3-4-3") {
                            if (document.getElementById('jugador1').src == "http://localhost/Proyecto%20final/app/images/player.png") {
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador4').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador4').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador4nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador4').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador4nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador4').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador4nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador4').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador4nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador4').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador4nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador5').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador5').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador5nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador5').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador5nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador5').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador5nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador5').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador5nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador5').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador5nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                        if (data[0].alineacion == "4-4-2") {
                            if (document.getElementById('jugador2').src == "http://localhost/Proyecto%20final/app/images/player.png") {
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador2').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador2nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador2').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador2nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador2').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador2nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador2').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador2nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador2').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador2nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador3').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador3').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador3nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador3').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador3nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador3').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador3nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador3').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador3nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador3').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador3nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                        if (data[0].alineacion == "5-3-2") {
                            if (document.getElementById('jugador2').src == "http://localhost/Proyecto%20final/app/images/player.png") {
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador2').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador2nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador2').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador2nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador2').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador2nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador2').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador2nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador2').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador2nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador3').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador3').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador3nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador3').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador3nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador3').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador3nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador3').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador3nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador3').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador3nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                        if (data[0].alineacion == "3-5-2") {
                            if (document.getElementById('jugador2').src == "http://localhost/Proyecto%20final/app/images/player.png") {
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador2').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador2nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador2').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador2nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador2').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador2nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador2').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador2nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador2').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador2nom').innerHTML = data[0].nombre[i];
                                };
                            } else if (document.getElementById('jugador3').src == "http://localhost/Proyecto%20final/app/images/player.png"){
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador3').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador3nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador3').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador3nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador3').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador3nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador3').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador3nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador3').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador3nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                        if (data[0].alineacion == "4-5-1") {
                            if (document.getElementById('jugador1').src == "http://localhost/Proyecto%20final/app/images/player.png") {
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                        if (data[0].alineacion == "5-4-1") {
                            if (document.getElementById('jugador1').src == "http://localhost/Proyecto%20final/app/images/player.png") {
                                if (data[0].equipo[i] == "F.C.Barcelona") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_BAR.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Madrid") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_ATM.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Real Madrid") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_RMA.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "Eibar") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_EIB.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                                if (data[0].equipo[i] == "At. Bilbao") {
                                    document.getElementById('jugador1').src = "images/camisetas/cam_ATH.png";
                                    document.getElementById('jugador1nom').innerHTML = data[0].nombre[i];
                                };
                            }
                        };
                    };
                };
            }
        });
    }
    
    loadjugadores();
    function comprobar() {
        $.ajax({
            type: "POST",
            url: "php/comprobar_equipo.php",
            dataType: "json",
            success: function(data) {
                document.getElementById(data).click();
            }
        });
    }
    load();
    $('#Tablaali').on('click', '.ali', function(e) {
        e.preventDefault();
        var nRow = $(this).parents('tr')[0];
        var aData = Tablaali.row(nRow).data();
        idJugador = aData.idJugadores;
        Posicion = aData.Posicion;
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'php/alinear.php',
            data: {
                idJugador: idJugador,
                Posicion: Posicion
            },
            error: function(xhr, status, error) {
                $.growl({

                    icon: "glyphicon glyphicon-remove",
                    message: "Error al alinear!"

                }, {
                    type: "danger"
                });

            },
            success: function(data) {
                if(data[0].mensaje == "Error jornada"){
                    $.growl({
                        icon: "glyphicon glyphicon-remove",
                        message: "La jornada ha comenzado, no puedes cambiar la alineacion!"
                    }, {
                        type: "danger"
                    });
                  } else if(data[0].mensaje == "Error posicion"){
                    $.growl({
                        icon: "glyphicon glyphicon-remove",
                        message: "Tienes completa la posición!"
                    }, {
                        type: "danger"
                    });
                  } else {
                    $.growl({
                        icon: "glyphicon glyphicon-ok",
                        message: "Jugador alineado correctamente!"
                    }, {
                        type: "success"
                    });
                    }

            },
            complete: {}
        });
        Tablaali.ajax.reload();
        ponerimagenes();
        loadjugadores();
    });
    $('#Tablaali').on('click', '.quiali', function(e) {
        e.preventDefault();
        var nRow = $(this).parents('tr')[0];
        var aData = Tablaali.row(nRow).data();
        idJugador = aData.idJugadores;
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'php/quitar_alineado.php',
            data: {
                idJugador: idJugador
            },
            error: function(xhr, status, error) {
                $.growl({

                    icon: "glyphicon glyphicon-remove",
                    message: "Error al quitar al jugador de la alineación!"

                }, {
                    type: "danger"
                });

            },
            success: function(data) {
                if(data[0].mensaje == "Error jornada"){
                    $.growl({
                        icon: "glyphicon glyphicon-remove",
                        message: "La jornada ha comenzado, no puedes cambiar la alineacion!"
                    }, {
                        type: "danger"
                    });
                  } else {
                    $.growl({
                        icon: "glyphicon glyphicon-ok",
                        message: "Jugador eliminado de la alineación correctamente!"
                    }, {
                        type: "success"
                    });
                    }

            },
            complete: {}
        });
        Tablaali.ajax.reload();
        ponerimagenes();
        loadjugadores();
    });
    $('#Tablaali').on('click', '.mer', function(e) {
        var nRow = $(this).parents('tr')[0];
        var aData = Tablaali.row(nRow).data();
        idJugador = aData.idJugadores;
        $('#precioventa').val(aData.Valor);
    });

    $('#basicModal').on('click', '#confvender', function(e) {
            var precio = $('#precioventa').val();
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: 'php/vender.php',
                data: {
                    idJugador: idJugador,
                    precio: precio
                },
                error: function(xhr, status, error) {
                    $.growl({

                        icon: "glyphicon glyphicon-remove",
                        message: "Error al poner en el mercado al jugador!"

                    }, {
                        type: "danger"
                    });

                },
                success: function(data) {
                    $.growl({

                        icon: "glyphicon glyphicon-ok",
                        message: "Jugador puesto en el mercado correctamente!"

                    }, {
                        type: "success"
                    });

                },
                complete: {}
            });
            Tablaali.ajax.reload();
    });
    $('#Tablaali').on('click', '.quimer', function(e) {
        e.preventDefault();
        var nRow = $(this).parents('tr')[0];
        var aData = Tablaali.row(nRow).data();
        idJugador = aData.idJugadores;
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'php/quitar_mercado.php',
            data: {
                idJugador: idJugador
            },
            error: function(xhr, status, error) {
                $.growl({

                    icon: "glyphicon glyphicon-remove",
                    message: "Error al quitar al jugador del mercado!"

                }, {
                    type: "danger"
                });

            },
            success: function(data) {
                $.growl({

                    icon: "glyphicon glyphicon-ok",
                    message: "Jugador eliminado del mercado correctamente!"

                }, {
                    type: "success"
                });

            },
            complete: {}
        });
        Tablaali.ajax.reload();
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
            
        },
        complete: {}
    });
            Tablaali.ajax.reload();
            ponerimagenes();
            loadjugadores();
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
            
        },
        complete: {}
    });
            Tablaali.ajax.reload();
            ponerimagenes();
            loadjugadores();
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
            
        },
        complete: {}
    });
            Tablaali.ajax.reload();
            ponerimagenes();
            loadjugadores();
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
            
        },
        complete: {}
    });
            Tablaali.ajax.reload();
            ponerimagenes();
            loadjugadores();
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
            
        },
        complete: {}
    });

            Tablaali.ajax.reload();
            ponerimagenes();
            loadjugadores();
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
            
        },
        complete: {}
    });
            Tablaali.ajax.reload();
            ponerimagenes();
            loadjugadores();
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
            
        },
        complete: {}
    });

            Tablaali.ajax.reload();
            ponerimagenes();
            loadjugadores();
});
});