var interv;

$(document).ready(function () {
    $('[rel=tooltip]').tooltip();
    $('[rel=datetime]').datetimepicker({ pickTime: false });

    $.ajax({
        type: "POST",
        url: "../WebService/WSCorisMovil.asmx/SeleccionarUsuarioLista",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (jsonData) {
            var jsonArray = jQuery.parseJSON(jsonData.d);
            var lista = $('#SelectUsuarios');

            $.each(jsonArray, function (key, value) {
                lista.append($('<option>', { value: value.cod_auto, text: value.nombre }));
            });

            lista.append($('<option>', { value: '-2', text: 'LISTAR TODO' }));
        },
        error: AjaxError
    });

});

function IniciarControles() {
    $('#SelectOpcion').val('1');
    $('#pBuscarFecha').attr('style', 'display: none;');
    $('#pMensaje').html('');
    $('#MensajesList').html('');
    $('#pConversacion').attr('style', 'display: none;');
    $('#tbMensaje').val('');
    $('#pMensajeConversacion').html('');
    clearInterval(interv);
}

$('#SelectUsuarios').on('change', function () {
    var reg_id = $(this).val();
    IniciarControles();

    if (reg_id == '-2') {
        $('#SelectOpcion').val('2');
        $('#pBuscarFecha').attr('style', 'display: block;');
    }
    else {
        CargarRegistroMensaje(reg_id, 1);
        $('#pConversacion').attr('style', 'display: block;');
    }
});

$('#SelectOpcion').on('change', function () {
    var rango = $(this).val();

    if ($('#SelectUsuarios').val() == '-2') {
        rango = '2';
        $(this).val(rango);
    }

    $('#pBuscarFecha').attr('style', (rango == '2' ? 'display: block;' : 'display: none;'));
});

$('#btnBuscar').on('click', function () {
    var continuar = false;
    var mensaje = '';
    var usuario = $('#SelectUsuarios').val();

    if (usuario == '-1')
        mensaje = "Seleccionar un usuario.";
    else {
        CargarMapa();

        if (usuario != '-2') {
            clearInterval(interv);
            IniciarConversacion(usuario);
        }

        continuar = true;
    }

    if (!continuar)
        AlertaMensaje(mensaje, '#pMensaje', false);

    return false;
});

function CargarMapa() {
    var regId = $("#SelectUsuarios").val();
    var opcion = $("#SelectOpcion").val();
    var fechaInicial = $('#tbBuscarFechaInicial').val() + ' ' + $('#tbBuscarHoraInicial').val();
    var fechaFinal = $('#tbBuscarFechaFinal').val() + ' ' + $('#tbBuscarHoraFinal').val();

    var lista = new Array();
    var datos = new Array();
    var index = 0;

    $.ajax({
        type: "POST",
        url: "../WebService/WSCorisMovil.asmx/SeleccionarRegistroCoordenadaBuscar",
        data: "{" +
            "'regId': '" + regId + "'," +
            "'opcion': '" + opcion + "'," +
            "'fechaInicial': '" + fechaInicial + "'," +
            "'fechaFinal': '" + fechaFinal +
            "'}",
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

            var latitud = -0.207528400000000000;
            var longitud = -78.485218000000000000;
            var aux = new Array();

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
                var nombre = aux['nombre'];
                var fecha_registro = aux['fecha_registro'];

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

function AjaxError(result) {
    alert("ERROR " + result.status + ' ' + result.statusText);
}

function AlertaMensaje(mensaje, id, estado) {

    var divMensaje = $(id);
    divMensaje.html(
        (estado == true ? '<div class="alert alert-success fade in">' : '<div class="alert alert-warning fade in">') +
        '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>' +
        '<strong>Antención.</strong> ' + mensaje +
        '</div>');
}

$('#btnEnviar').on('click', function () {
    var mensaje = '';
    var continuar = false;
    var conversacion = $('#tbMensaje').val();
    var reg_id = $('#SelectUsuarios').val();

    if (reg_id == "-1" || reg_id == "-2")
        mensaje = "Seleccionar un usuario de la lista.";
    else if (conversacion == "")
        mensaje = "Ingresar un mensaje.";
    else {
        $.ajax({
            type: "POST",
            url: "../WebService/WSCorisMovil.asmx/EnviarMensajeRegId",
            contentType: "application/json; charset=utf-8",
            data: "{'reg_id': '" + reg_id + "', 'mensaje': '" + conversacion + "', 'cod_usuario': '" + $('#tbCodUsuario').val() + "'} ",
            dataType: "json",
            success: function (jsonData) {
                CargarRegistroMensaje(reg_id, 2);
                $('#tbMensaje').val('');
            },
            error: AjaxError
        });

        continuar = true;
    }

    if (!continuar)
        AlertaMensaje('Ingresar un mensaje', '#pMensajeConversacion', false);
});

$('#btnRefrescar').on('click', function () {
    var reg_id = $('#SelectUsuarios').val();

    if (reg_id != "-1" && reg_id != "-2")
        CargarRegistroMensaje(reg_id, 2);
});

function CargarRegistroMensaje(reg_id, bandera) {
    if (reg_id != '') {
        $.ajax({
            type: "POST",
            url: "../WebService/WSCorisMovil.asmx/SeleccionarRegistroMensajeLista",
            contentType: "application/json; charset=utf-8",
            data: "{'reg_id': '" + reg_id + "', 'bandera': '" + bandera + "'} ",
            dataType: "json",
            success: function (jsonData) {
                var lista = $('#MensajesList');
                var jsonArray = jQuery.parseJSON(jsonData.d);

                $.each(jsonArray, function (key, value) {
                    lista.append(
                    '<li>' +
                    '<p><label>' + value.usuario + '</label></p>' +
                    '<p>' + value.mensaje + '<br />' +
                    '<small>' + value.fecha_registro + '</small></p>' +
                    '</li>'
                    );
                });
            },
            error: AjaxError
        });
    }
}

function IniciarConversacion(reg_id) {
    time = 15;

    interv = setInterval(function () {
        time = time - 1;

        if (time <= 0) {
            CargarRegistroMensaje(reg_id, 2);
            time = 30;
        }
    }, 1000);
}

$('#btnDescargar').on('click', function () {

    window.open('../DescargarArchivo.ashx?nombreArchivo=Coris.Movil.apk&extension=apk&directorio=Content/recursos/&borrarArchivo=false', 'Descargar', '')

});

