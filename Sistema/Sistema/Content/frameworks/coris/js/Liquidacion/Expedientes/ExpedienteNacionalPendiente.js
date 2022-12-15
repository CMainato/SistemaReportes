$(document).ready(function () {
    CambiarTipoPago(false);
});


$('#myTab a').click(function (e) { e.preventDefault(); $(this).tab('show'); });
$('[rel=tooltip]').tooltip();
$('[rel=datetime]').datetimepicker({ pickTime: false });

$("#tbUbicacionLlamada").typeahead({ source: function (query, process) { return $.ajax({ type: "POST", url: "../../WebService/WSLiquidacion.asmx/SeleccionarUbicacion", data: "{'buscar': '" + query + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (jsonData) { $('#tbUbicacionLlamadaCodPais').val('-1'); $('#tbUbicacionLlamadaCodProvincia').val('-1'); $('#tbUbicacionLlamadaCodCiudad').val('-1'); arrayNames = []; arrayIds = {}; var jsonArray = jQuery.parseJSON(jsonData.d); $.each(jsonArray, function (key, value) { arrayIds[value.nombre] = value; arrayNames.push(value.nombre); }); return process(arrayNames); }, error: AjaxError }); }, updater: function (item) { $('#tbUbicacionLlamadaCodPais').val(arrayIds[item].pai_code); $('#tbUbicacionLlamadaCodProvincia').val(arrayIds[item].pro_code); $('#tbUbicacionLlamadaCodCiudad').val(arrayIds[item].ciu_code); return item; } });
$("#tbUbicacionCliente").typeahead({ source: function (query, process) { return $.ajax({ type: "POST", url: "../../WebService/WSLiquidacion.asmx/SeleccionarUbicacion", data: "{'buscar': '" + query + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (jsonData) { $('#tbUbicacionClienteCodPais').val('-1'); $('#tbUbicacionClienteCodProvincia').val('-1'); $('#tbUbicacionClienteCodCiudad').val('-1'); arrayNames = []; arrayIds = {}; var jsonArray = jQuery.parseJSON(jsonData.d); $.each(jsonArray, function (key, value) { arrayIds[value.nombre] = value; arrayNames.push(value.nombre); }); return process(arrayNames); }, error: AjaxError }); }, updater: function (item) { $('#tbUbicacionClienteCodPais').val(arrayIds[item].pai_code); $('#tbUbicacionClienteCodProvincia').val(arrayIds[item].pro_code); $('#tbUbicacionClienteCodCiudad').val(arrayIds[item].ciu_code); $('#ddlServicio').val('-1'); return item; } });
$("#tbExpedienteDiagnostico").typeahead({ source: function (query, process) { return $.ajax({ type: "POST", url: "../../WebService/WSLiquidacion.asmx/SeleccionarDiagnosticoCIE10", data: "{'nombre': '" + query + "', 'opcion': '1'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (jsonData) { $('#tbExpedienteDiagnosticoCod').val('-1'); $('#tbExpedienteDiagnosticoOtro').css('display', 'none'); arrayNames = []; arrayIds = {}; var jsonArray = jQuery.parseJSON(jsonData.d); $.each(jsonArray, function (key, value) { arrayIds[value.nombre] = value; arrayNames.push(value.nombre); }); return process(arrayNames); }, error: AjaxError }); }, updater: function (item) { $('#tbExpedienteDiagnosticoCod').val(arrayIds[item].cod_auto); if (arrayIds[item].cod_auto == 'OTROS') { $('#tbExpedienteDiagnosticoOtro').css('display', 'block'); } return item; } });
$('#lbSeguimientoHistorial').popupWindow({ height: 500, width: 900, centerScreen: 1 });

function AjaxError(result) { alert("ERROR " + result.status + ' ' + result.statusText); }


$('[rel=calcularServicio]').on('change', function () { CalcularServicio(); });
$('#ddlServicioTipoPago').on('change', function () { CambiarTipoPago(true); });

function CalcularServicio() {
    var servicioValor = 0,
        servicioValorCubierto = 0,
        servicioValorNoCubierto = 0;

    $('#divServicioTipoPago').css('display', 'none');
    $('#ddlServicioTipoPago').val('-1');

    IniciarControlesEnPos();

    try {
        servicioValor = ($('#tbServicioValor').val().length > 0 ? parseFloat($('#tbServicioValor').val()).toFixed(2) : 0);
        servicioValorCubierto = ($('#tbServicioValorCubierto').val().length > 0 ? parseFloat($('#tbServicioValorCubierto').val()).toFixed(2) : 0);
    }
    catch (e) { }

    servicioValorNoCubierto = parseFloat(servicioValor - servicioValorCubierto).toFixed(2);
    servicioValorNoCubierto = servicioValorNoCubierto > 0 ? servicioValorNoCubierto : 0;

    if (servicioValorNoCubierto > 0)
        $('#divServicioTipoPago').css('display', 'block');

    $('#tbServicioValorNoCubierto').val(servicioValorNoCubierto.toString().replace(',', '.'));
}

function CambiarTipoPago(iniciarControles) {
    var valor = $('#ddlServicioTipoPago').val();

    if (iniciarControles)
        IniciarControlesEnPos();

    if (valor == '2') {

        $('#divServicioTipoPago').css('display', 'block');

        var ivaServicio = 0.12,
            comisionCoris = 0.1,
            comisionDiners = 0.0450,
            retencionImpRta = 0.02,
            servicioValorNoCubierto = 0,
            valorBase = 0,
            valorComisionCoris = 0,
            valorPos = 0,
            valorComisionDiners = 0,
            valorImpuestoRenta = 0;

        try {
            servicioValorNoCubierto = parseFloat($('#tbServicioValorNoCubierto').val()).toFixed(2);
            valorBase = parseFloat(servicioValorNoCubierto / (1 + ivaServicio)).toFixed(2);
            valorComisionCoris = parseFloat(valorBase * comisionCoris).toFixed(2);
            valorPos = parseFloat(valorBase * (1 + comisionCoris) / (((1 - retencionImpRta) / 1.12 - comisionDiners))).toFixed(2);
            valorComisionDiners = parseFloat(valorPos * comisionDiners).toFixed(2);
            valorImpuestoRenta = parseFloat(retencionImpRta * (valorPos / 1.12)).toFixed(2);
        }
        catch (e) { }

        $('#divServicioValorEnPos').css('display', 'block');
        $('#tbServicioValorEnPos').val(valorPos.toString().replace(',', '.'));

        $('#divServicioLote').css('display', 'block');
        $('#tbServicioValorBase').val(valorBase.toString().replace(',', '.'));
        $('#tbServicioValorComisionCoris').val(valorComisionCoris.toString().replace(',', '.'));
        $('#tbServicioValorComisionDiners').val(valorComisionDiners.toString().replace(',', '.'));
        $('#tbServicioValorImpuestoRenta').val(valorImpuestoRenta.toString().replace(',', '.'));
    }
}

function IniciarControlesEnPos() {
    $('#divServicioValorEnPos').css('display', 'none');
    $('#tbServicioValorEnPos').val('');

    $('#divServicioLote').css('display', 'none');
    $('#tbServicioNroLote').val('');
    $('#tbServicioNroReferencia').val('');

    $('#tbServicioValorBase').val('0');
    $('#tbServicioValorComisionCoris').val('0');
    $('#tbServicioValorComisionDiners').val('0');
    $('#tbServicioValorImpuestoRenta').val('0');
}