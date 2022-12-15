$('#descargar').on('click', function () {

    window.open('DescargarArchivo.ashx?nombreArchivo=CorisMovil.apk&extension=apk&directorio=Content/recursos/&borrarArchivo=false', 'Descargar', '')

});

function enviarMensaje() {
    var regId = $('#listaUsuarios option:selected').val();
    var mensaje = $('#mensaje').val(); 
    var cod_usuario = $('#tbCodUsuario').val(); 

    if (regId != '-2' && mensaje != '') {

        $.ajax({
            type: "POST",
            url: "../WebService/WSCorisMovil.asmx/EnviarMensaje",
            data: "{'dispositivo': '" + regId + "'," +
                    "'mensaje': '" + mensaje + "'," +
                    "'cod_usuario': '" + cod_usuario + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function vacio() {
                refrescarConversacion();
                $('#mensaje').val('');
            },
            error: AjaxError
        });
    }
}


function refrescarConversacion() {
    var regId = $('#listaUsuarios option:selected').val();
    $('#conversacion').html('');

    if (regId != '-2')
        cargarConversacion();
}

function cargarConversacion() {
    var regId = $('#listaUsuarios option:selected').val(),
                cod_usuario = $('#tbCodUsuario').val(),
                conversacion = $('#conversacion');
    $.ajax({
        type: "POST",
        url: "../WebService/WSCorisMovil.asmx/SeleccionarRegistroMensajeBuscar",
        data: "{'regId': '" + regId + "'," +
                    "'cod_usuario': '" + cod_usuario + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (jsonData) {
            var jsonArray = jQuery.parseJSON(jsonData.d);
            var lista =
                        '<h5><strong>Conversación</strong><h5><hr />' +
                        '<table class="table table-hover">' +
                        '<tbody>';

            $.each(jsonArray, function (key, value) {
                lista +=
                            '<tr><td>' + value.fecha_registro + ' ' + (value.envio_usuario == '1' ? value.usuario : 'Yo') + ':<br />' + value.mensaje + '</td></tr>';
            });

            lista +=
                    '</tbody>' +
                    '</table>';

            conversacion.html(lista);
        },
        error: AjaxError
    });
}

function iniciarMapa() {
    var regId = $("#listaUsuarios option:selected").val(),
                opcion = $("#opcionBusqueda option:selected").val(),
                fechaInicial = $('#fechaInicial').val() + ' ' + $('#horaInicial').val(),
                fechaFinal = $('#fechaFinal').val() + ' ' + $('#horaFinal').val(),
                lista = new Array(),
                datos = new Array(),
                index = 0;

    refrescarConversacion();

    $.ajax({
        type: "POST",
        url: "../WebService/WSCorisMovil.asmx/SeleccionarRegistroCoordenadaBuscar",
        data: "{'regId': '" + regId + "'," +
                    "'opcion': '" + opcion + "'," +
                    "'fechaInicial': '" + fechaInicial + "'," +
                    "'fechaFinal': '" + fechaFinal + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (jsonData) {
            var jsonArray = jQuery.parseJSON(jsonData.d);

            $.each(jsonArray, function (key, value) {
                datos = new Array();
                datos['nombre'] = value.nombre;
                datos['latitud'] = value.latitud;
                datos['longitud'] = value.longitud;
                datos['fecha_registro'] = value.fecha_registro;
                lista[index++] = datos;
            });

            var latitud = -0.207528400000000000,
                        longitud = -78.485218000000000000,
                        aux = new Array();

            if (lista.length > 0) {
                aux = lista[0];
                latitud = aux['latitud'];
                longitud = aux['longitud'];
            }

            var myLatlng = new google.maps.LatLng(latitud, longitud);

            var map_options = {
                center: myLatlng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            var map = new google.maps.Map(map_canvas, map_options);

            for (index = 0; index < lista.length; index++) {
                aux = lista[index];
                latitud = aux['latitud'];
                longitud = aux['longitud'];
                var nombre = aux['nombre'],
                            fecha_registro = aux['fecha_registro'];

                myLatlng = new google.maps.LatLng(latitud, longitud);
                var marker = new MarkerWithLabel({ //new google.maps.Marker({
                    draggable: false,
                    map: map,
                    position: myLatlng,
                    title: (regId != '-2' ? nombre : fecha_registro),
                    labelAnchor: new google.maps.Point(30, 0),
                    labelContent: (regId != '-2' ? fecha_registro : nombre),
                    labelClass: "btn btn-primary btn-xs", // the CSS class for the label
                    labelStyle: { opacity: 0.75 }
                });
            }
        },
        error: AjaxError
    });
}

function iniciarListaUsuarios() {
    var lista = $('#listaUsuarios');

    $.ajax({
        type: "POST",
        url: "../WebService/WSCorisMovil.asmx/SeleccionarUsuarioLista",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (jsonData) {
            var jsonArray = jQuery.parseJSON(jsonData.d);

            $.each(jsonArray, function (key, value) {
                lista.append($('<option>', { value: value.cod_auto, text: value.nombre }));
            });
        },
        error: AjaxError
    });
}

function AjaxError(result) { alert("ERROR " + result.status + ' ' + result.statusText); }

$('#listaUsuarios').on('change', function () {
    var valor = $(this).val(),
                br = $('#buscarRango'),
                bf = $('#buscarFecha');
    bf.attr('style', 'display: block');

    if (valor != '-2') {
        br.attr('style', 'display: block');

        if ($('#buscarRango option:selected').val() == "1")
            bf.attr('style', 'display: none');
    }
    else {
        br.attr('style', 'display: none');
    }
});

$('#opcionBusqueda').on('change', function () {
    var valor = $(this).val(),
                bf = $('#buscarFecha');

    if (valor == "1")
        bf.attr('style', 'display: none');
    else
        bf.attr('style', 'display: block');
});

$(document).ready(function () {
    $('[rel=tooltip]').tooltip();
    $('[rel=datetime]').datetimepicker({ pickTime: false });
    iniciarListaUsuarios();
    iniciarMapa();
}); 
