$(document).ready(function () {
    CargarTipoAsistencia('0');
    CargarTipoServicio('-1');
    ObtenerAsistenciaAtendida();
});

function GuardarExpediente() {
    var cod_registro_asistencia = $('#tbCodAuto').val(); 
    var cod_usuario_tabla = $('#EmpresaSelect').val(); 
    var exeve_tipo_asistencia = $('#AsistenciaSelect').val();
    var exeve_tipo_servicio = $('#ServicioSelect').val();
    var continuar = false; 
    var mensaje = ''; 
    
    if (cod_registro_asistencia == '-1' || cod_registro_asistencia == '') 
        mensaje = 'Seleccionar un caso.'; 
    else if (cod_usuario_tabla == '-1' || cod_usuario_tabla == '') 
        mensaje = 'Seleccionar una empresa.'; 
    else if (exeve_tipo_asistencia == '-1' || exeve_tipo_asistencia == '') 
        mensaje = 'Seleccionar una asistencia.'; 
    else if (exeve_tipo_servicio == '-1' || exeve_tipo_servicio == '') 
        mensaje = 'Seleccionar un servicio.';
    else {
        continuar = true;
        $.ajax({
            type: "POST",
            url: "../WebService/WSCorisAsis.asmx/GuardarExpediente",
            contentType: "application/json; charset=utf-8",
            data: "{" +
            "'cod_registro_asistencia': '" + cod_registro_asistencia + "', " +
            "'cod_usuario_tabla': '" + cod_usuario_tabla + "', " +
            "'exeve_tipo_asistencia': '" + exeve_tipo_asistencia + "', " +
            "'exeve_tipo_servicio': '" + exeve_tipo_servicio + "' " +
            "} ",
            dataType: "json",
            success: function (jsonData) {
                verMensaje('Expediente almacenado.', '#mensaje', true); 
                IniciarControles();
                ObtenerAsistenciaPendiente(); 
                /*var jsonArray = jQuery.parseJSON(jsonData.d);
                $.each(jsonArray, function (key, value) {
                empresaSelect.append('<option value="' + value.cod_auto + '">' + value.nombre + '</option>').val(value.cod_auto);
                });*/


            },
            error: AjaxError
        });
    }

    if (!continuar)
        alert(mensaje); 
}

function CargarEmpresa(cod_registro_asistencia) {
    var select = $('#EmpresaSelect');
    select.find('option').remove().end().append('<option value="-1">SELECCIONAR</option>').val('-1');

    if (cod_registro_asistencia != '-1') {
        $.ajax({
            type: "POST",
            url: "../WebService/WSCorisAsis.asmx/SeleccionarLiquidacionEmpresa",
            contentType: "application/json; charset=utf-8",
            data: "{'cod_registro_asistencia': '" + cod_registro_asistencia + "'} ",
            dataType: "json",
            success: function (jsonData) {
                var jsonArray = jQuery.parseJSON(jsonData.d);

                $.each(jsonArray, function (key, value) {
                    select.append('<option value="' + value.cod_auto + '">' + value.nombre + '</option>').val(value.cod_auto);
                });

                select.val('-1'); 
            },
            error: AjaxError
        });
    }
}

function CargarRegistroMensaje(cod_usuario_registro, bandera) {
    if (cod_usuario_registro != '0') {
        $.ajax({
            type: "POST",
            url: "../WebService/WSCorisAsis.asmx/SeleccionarRegistroMensaje",
            contentType: "application/json; charset=utf-8",
            data: "{'cod_usuario_registro': '" + cod_usuario_registro + "', 'bandera': '" + bandera + "'} ",
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

function CargarTipoAsistencia(cod_registro_asistencia) {
    var select = $('#AsistenciaSelect');
    select.find('option').remove().end().append('<option value="-1">SELECCIONAR</option>').val('-1');

    if (cod_registro_asistencia != '-1') {
        $.ajax({
            type: "POST",
            url: "../WebService/WSCorisAsis.asmx/SeleccionarLiquidacionTipoAsistencia",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {

                var jsonArray = jQuery.parseJSON(jsonData.d);

                $.each(jsonArray, function (key, value) {
                    select.append('<option value="' + value.cod_auto + '">' + value.nombre + '</option>').val(value.cod_auto);
                });

                select.val('-1');

            },
            error: AjaxError
        });
    }
}

function CargarTipoServicio(asis_cod) {

    var select = $('#ServicioSelect');
    select.find('option').remove().end().append('<option value="-1">SELECCIONAR</option>').val('-1');

    if (asis_cod != '-1') {
        $.ajax({
            type: "POST",
            url: "../WebService/WSCorisAsis.asmx/SeleccionarLiquidacionTipoServicio",
            contentType: "application/json; charset=utf-8",
            data: "{'asis_cod': '" + asis_cod + "'} ",
            dataType: "json",
            success: function (jsonData) {

                var jsonArray = jQuery.parseJSON(jsonData.d);

                $.each(jsonArray, function (key, value) {
                    select.append('<option value="' + value.cod_auto + '">' + value.nombre + '</option>').val(value.cod_auto);
                });

                select.val('-1');

            },
            error: AjaxError
        });
    }
}

function ObtenerAsistenciaAtendida() {
    $.ajax({
        type: "POST",
        url: "../WebService/WSCorisAsis.asmx/SeleccionarRegistroAsistenciaAtendida",
        contentType: "application/json; charset=utf-8",
        data: "{'cod_usuario': '" + $('#tbCodUsuario').val() + "'} ",
        dataType: "json",
        success: function (jsonData) {
            var jsonArray = jQuery.parseJSON(jsonData.d);

            $.each(jsonArray, function (key, value) {
                $('#tbTarea').val('1');
                $('#tbCodAuto').val(value.cod_auto);
                $('#tbCodUsuarioRegistro').val(value.cod_usuario_registro);
                $('#tbCedula').val(value.cedula);
                $('#tbFechaRegistro').val(value.fecha_registro);
                $('#tbAsegurado').val(value.asegurado);
                $('#tbAsistencia').val(value.asistencia);
                $('#tbAsistenciaTipo').val(value.asistencia_tipo);
                $('#tbLatitud').val(value.latitud);
                $('#tbLongitud').val(value.longitud);
                CargarEmpresa(value.cod_auto);
                CargarRegistroMensaje(value.cod_usuario_registro, 1);
                IniciarConversacion();
                initialize();
            });

            if ($('#tbTarea').val() == '0')
                ObtenerAsistenciaPendiente();

            start();
        },
        error: AjaxError
    });
}

function EnviarMensajeCodUsuarioRegistro() {
    if ($('#tbMensaje').val() != '') {
        $.ajax({
            type: "POST",
            url: "../WebService/WSCorisAsis.asmx/EnviarMensajeCodUsuarioRegistro",
            contentType: "application/json; charset=utf-8",
            data: "{'cod_usuario_registro': '" + $('#tbCodUsuarioRegistro').val() + "', 'mensaje': '" + $('#tbMensaje').val() + "', 'cod_usuario': '" + $('#tbCodUsuario').val() + "'} ",
            dataType: "json",
            success: function (jsonData) {
                CargarRegistroMensaje($('#tbCodUsuarioRegistro').val(), 2);
                $('#tbMensaje').val('');
            },
            error: AjaxError
        });
    }
    else
        verMensaje('Ingresar un mensaje', '#mensajeConversacion', false); 
}

function start() {
    time = 15;

    var interv = setInterval(function () {
        time = time - 1;

        if (time <= 0) { // clearInterval(interv);

            if ($('#tbTarea').val() == '0') {
                ObtenerAsistenciaPendiente();
            }

            time = 15;
        }
    }, 1000);
}

function IniciarConversacion() {
    time = 30;

    var interv = setInterval(function () {
        time = time - 1;

        if (time <= 0) { // clearInterval(interv);
            var cod_usuario_registro = $('#tbCodUsuarioRegistro').val(); 
            CargarRegistroMensaje(cod_usuario_registro, 2); 
            time = 30;
        }
    }, 1000);
}

function initialize() {
    var latitud = $('#tbLatitud').val();
    var longitud = $('#tbLongitud').val();
    //var map_canvas = document.getElementById('map_canvas'); 
    var myLatlng = new google.maps.LatLng(latitud, longitud); 

    myLatlng = new google.maps.LatLng(latitud, longitud);

    var map_options = {
        center: myLatlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(map_canvas, map_options)

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Asistencia!'
    });
}

function ObtenerAsistenciaPendiente() {
    $.ajax({
        type: "POST",
        url: "../WebService/WSCorisAsis.asmx/SeleccionarRegistroAsistenciaPendiente",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (jsonData) {
            var jsonArray = jQuery.parseJSON(jsonData.d);

            $.each(jsonArray, function (key, value) {
                $('#myModal').modal('show');
                $('#tbCodAuto').val(value.cod_auto);
                $('#tbTipo').val(value.tipo);
                $('#lblMensaje').html(value.nombre);
            });

        },
        error: AjaxError
    });
}

function verMensaje(mensaje) {
    var divMensaje = $('#mensaje');
    divMensaje.html(
                '<div class="alert alert-success fade in">' +
                '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>' +
                '<strong>Antención.</strong> ' + mensaje +
                '</div>');
}

function verMensaje(mensaje, id, estado) {
    var divMensaje = $(id);
    divMensaje.html(
                (estado == true ? '<div class="alert alert-success fade in">' : '<div class="alert alert-warning fade in">') +
                '<button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>' +
                '<strong>Antención.</strong> ' + mensaje +
                '</div>');
}

function SeleccionarItemSelect(select, valor) {

    select.find('option').each(function (i, opt) {
        if (opt.value === valor)
            $(opt).attr('selected', 'selected');
    });
}

function IniciarControles() {
    $('#tbTarea').val('0');
    $('#tbLatitud').val('-0.19093');
    $('#tbLongitud').val('-78.486121');
    $('#tbTipo').val('0');
    $('#tbCodAuto').val('0');
    $('#tbCodAuto').val('0');
    $('#tbAsegurado').val('');
    $('#tbCedula').val('');
    $('#tbFechaRegistro').val('');
    $('#tbAsistencia').val('');
    $('#tbAsistenciaTipo').val('');
    $('#tbRegId').val('');
    $('#tbMensaje').val('');
    $("MensajesList").empty();
    CargarEmpresa('-1');
    CargarTipoAsistencia('-1');
    CargarTipoServicio('-1');
}

function AjaxError(result) { alert("ERROR " + result.status + ' ' + result.statusText); }

function CargarAsistenciaUsuario() {
    $.ajax({
        type: "POST",
        url: "../WebService/WSCorisAsis.asmx/SeleccionarRegistroAsistenciaUsuario",
        contentType: "application/json; charset=utf-8",
        data: "{'cod_usuario_atencion': '" + $('#tbCodUsuario').val() + "', 'cod_registro_asistencia': '" + $('#tbCodAuto').val() + "', 'tipo': '" + $('#tbTipo').val() + "'} ",
        dataType: "json",
        success: function (jsonData) {

            var jsonArray = jQuery.parseJSON(jsonData.d);
            $('#tbTarea').val('0');

            $.each(jsonArray, function (key, value) {
                $('#tbCedula').val(value.cedula);
                $('#tbFechaRegistro').val(value.fecha_registro);
                $('#tbAsegurado').val(value.asegurado);
                $('#tbAsistencia').val(value.asistencia_tipo);
                $('#tbAsistenciaTipo').val(value.asistencia_opcion);
                $('#tbLatitud').val(value.latitud);
                $('#tbLongitud').val(value.longitud);
                $('#tbRegId').val(value.reg_id);
                initialize();
                $('#tbTarea').val('1');
                $('#tbTipo').val(value.tipo);
                CargarEmpresa($('#tbCodAuto'));
                $('#tbCodUsuarioRegistro').val(value.cod_usuario_registro);
                CargarRegistroMensaje(value.cod_usuario_registro, 1);
                IniciarConversacion();
            });

            if ($('#tbTarea').val() != '1') {
                verMensaje('La asistencia ha sido atendida por otro usuario.');
            }
        },
        error: AjaxError
    });
}
/*
function ActualizarAsistencia() {

var cod_usuario = $('#tbCodUsuario').val();
var cod_auto = $('#tbCodAuto').val();

if (cod_auto != '0') {

$.ajax({
type: "POST",
url: "../WebService/WSCorisAsis.asmx/ActualizarRegistroAsistenciaAtendido",
contentType: "application/json; charset=utf-8",
data: "{'cod_usuario': '" + $('#tbCodUsuario').val() + "', 'cod_auto': '" + $('#tbCodAuto').val() + "'} ",
dataType: "json",
success: function (jsonData) {
$('#tbCodAuto').val('0');
$('#tbCedula').val('');
$('#tbFechaRegistro').val('');
$('#tbAsegurado').val('');
$('#tbAsistencia').val('');
$('#tbAsistenciaTipo').val('');
$('#tbTarea').val('0');
verMensaje('Asistencia atendida.');
},
error: AjaxError
});

}
}*/
