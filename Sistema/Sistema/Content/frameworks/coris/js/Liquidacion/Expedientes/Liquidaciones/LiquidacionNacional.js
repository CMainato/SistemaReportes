$('#myTab a').click(function (e) { e.preventDefault(); $(this).tab('show'); });
$('[rel=tooltip]').tooltip();
$('[rel=datetime]').datetimepicker({ pickTime: false });
$('[rel=calcularFactura]').on('change', function () {
    var emp_code = ($('#ddlEmpresa').val());
    if (emp_code == 'LIBERTY_MEDICO' || emp_code == 'SEGUROS_CONSTITUCION') CalcularValorFactura2(); else CalcularValorFactura();
});

$("#tbLiquidacionDiagnostico").typeahead({ source: function (query, process) { return $.ajax({ type: "POST", url: "../../../WebService/WSLiquidacion.asmx/SeleccionarDiagnosticoCIE10", data: "{'nombre': '" + query + "', 'opcion': '2'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (jsonData) { $('#tbLiquidacionDiagnosticoCod').val('-1'); arrayNames = []; arrayIds = {}; var jsonArray = jQuery.parseJSON(jsonData.d); $.each(jsonArray, function (key, value) { arrayIds[value.nombre] = value; arrayNames.push(value.nombre); }); return process(arrayNames); }, error: AjaxError }); }, updater: function (item) { $('#tbLiquidacionDiagnosticoCod').val(arrayIds[item].cod_auto); return item; } });
$("#tbFacturaDetalleArancelBuscar").dblclick(function () { $(this).val(''); $('#tbFacturaDetalleArancelCod').val('-1'); $('#tbFacturaDetalleArancel').val(''); });
$("#tbFacturaDetalleArancelBuscar").typeahead({ source: function (query, process) { return $.ajax({ type: "POST", url: "../../../WebService/WSLiquidacion.asmx/SeleccionarArancel", data: "{'nombre': '" + query + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (jsonData) { $('#tbFacturaDetalleArancelCod').val('-1'); $('#tbFacturaDetalleArancel').val(''); $('#tbFacturaDetalleArancelValor').val(''); arrayNames = []; arrayIds = {}; var jsonArray = jQuery.parseJSON(jsonData.d); $.each(jsonArray, function (key, value) { arrayIds[value.nombre] = value; arrayNames.push(value.nombre); }); return process(arrayNames); }, error: AjaxError }); }, updater: function (item) { $('#tbFacturaDetalleArancelCod').val(arrayIds[item].cod_auto); $('#tbFacturaDetalleArancelValor').val($.trim(arrayIds[item].valor)); if (arrayIds[item].cod_auto != '77711') $('#tbFacturaDetalleArancel').val($.trim(arrayIds[item].detalle)); return item; } });

$("#tbMedicamentos").typeahead({ source: function (query, process) { return $.ajax({ type: "POST", url: "../../WebService/WSLiquidacion.asmx/ObtenerMedicamentos", data: "{'nombre': '" + query + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (jsonData) { $('#tbMedicamentosCodAuto').val('-1'); arrayNames = []; arrayIds = {}; var jsonArray = jQuery.parseJSON(jsonData.d); $.each(jsonArray, function (key, value) { arrayIds[value.nombre] = value; arrayNames.push(value.nombre); }); return process(arrayNames); }, error: AjaxError }); }, updater: function (item) { $('#tbMedicamentosCodAuto').val(arrayIds[item].cod_auto); return item; } });

function AjaxError(result) { alert("ERROR " + result.status + ' ' + result.statusText); }

function CalcularValorFactura() {
    var reclamo = ($('#ddlLiquidacionTipo').val());
    var valorPresentado = 0,
        valorNoCubiertoPrestador = 0,
        valorNoCubiertoAsegurado = 0,
        porCoaseguro = 0,
        coaseguro = 0,
        deducible = 0,
        porReembolso = 0,
        pagoProveedor = 0,
        porCobrar = 0;

    try {
        valorPresentado = ($('#tbFacturaDetalleValorPresentado').val().length > 0 ? parseFloat($('#tbFacturaDetalleValorPresentado').val()).toFixed(2) : 0);
        valorNoCubiertoPrestador = ($('#tbFacturaDetalleValorNoCubiertoPrestador').val().length > 0 ? parseFloat($('#tbFacturaDetalleValorNoCubiertoPrestador').val()).toFixed(2) : 0);
        valorNoCubiertoAsegurado = ($('#tbFacturaDetalleValorNoCubiertoAsegurado').val().length > 0 ? parseFloat($('#tbFacturaDetalleValorNoCubiertoAsegurado').val()).toFixed(2) : 0);
        porCoaseguro = parseInt($('#ddlFacturaDetalleCoaseguro').val());
        coaseguro = parseFloat(0);
        deducible = ($('#tbFacturaDetalleDeducible').val().length > 0 ? parseFloat($('#tbFacturaDetalleDeducible').val()).toFixed(2) : 0);
        porReembolso = 100 - porCoaseguro;
        pagoProveedor = parseFloat(0);
        porCobrar = parseFloat(0);


        if ((deducible + valorNoCubiertoAsegurado) == valorPresentado)
            coaseguro = parseFloat(0);
        else
            coaseguro = parseFloat(((parseFloat(valorPresentado) - parseFloat(valorNoCubiertoAsegurado)) * parseFloat(porCoaseguro)) / parseFloat(100)).toFixed(2);

        if (reclamo == 'B' || reclamo == 'CA' || reclamo == 'RC') {
            pagoProveedor = parseFloat(parseFloat(valorPresentado) - parseFloat(valorNoCubiertoPrestador) - (parseFloat(deducible) + parseFloat(coaseguro) + parseFloat(valorNoCubiertoAsegurado))).toFixed(2);
            porCobrar = parseFloat(parseFloat(deducible) + parseFloat(coaseguro) + parseFloat(valorNoCubiertoAsegurado)).toFixed(2);
        }
        else {
            pagoProveedor = parseFloat(parseFloat(valorPresentado) - parseFloat(valorNoCubiertoPrestador)).toFixed(2);
            porCobrar = parseFloat(parseFloat(deducible) + parseFloat(coaseguro) + parseFloat(valorNoCubiertoAsegurado)).toFixed(2);
        }
    }
    catch (e) {
    }

    $('#tbFacturaDetalleCoaseguro').val(coaseguro.toString().replace(',', '.'));
    $('#tbFacturaDetalleDeducible').val(deducible.toString().replace(',', '.'));
    $('#tbFacturaDetalleReembolso').val(porReembolso.toString().replace(',', '.'));
    $('#tbFacturaDetallePagoProveedor').val(pagoProveedor.toString().replace(',', '.'));
    $('#tbFacturaDetallePorCobrar').val(porCobrar.toString().replace(',', '.'));
}

function CalcularValorFactura2() {
    var emp_code = ($('#ddlEmpresa').val()),
        reclamo = ($('#ddlLiquidacionTipo').val());
    var valorTope = 0,
        deducAmb = 0,
        deducHosp = 0,
        deducGen = 0,
        deducAmbCli = 0,
        deducHospCli = 0,
        deducGenCli = 0;
    var rubro = '0',
        valorPresentado = 0,
        valorNoCubiertoPrestador = 0,
        valorNoCubiertoAsegurado = 0,
        porCoaseguro = 0,
        coaseguro = 0,
        deducible = 0,
        porReembolso = 0,
        pagoProveedor = 0,
        porCobrar = 0;

    var mensaje = '';


    try {
        valorTope = ($('#lblFacturaRubroValorTope').html().length > 0 ? parseFloat($('#lblFacturaRubroValorTope').html()).toFixed(2) : 0);
        deducAmb = ($('#lblFacturaRubroDeducAmb').html().length > 0 ? parseFloat($('#lblFacturaRubroDeducAmb').html()).toFixed(2) : 0);
        deducHosp = ($('#lblFacturaRubroDeducHosp').html().length > 0 ? parseFloat($('#lblFacturaRubroDeducHosp').html()).toFixed(2) : 0);
        deducGen = ($('#lblFacturaRubroDeducGeneral').html().length > 0 ? parseFloat($('#lblFacturaRubroDeducGeneral').html()).toFixed(2) : 0);
        deducAmbCli = ($('#lblFacturaRubroAmbulatorio').html().length > 0 ? parseFloat($('#lblFacturaRubroAmbulatorio').html()).toFixed(2) : 0);
        deducHospCli = ($('#lblFacturaRubroHospitalario').html().length > 0 ? parseFloat($('#lblFacturaRubroHospitalario').html()).toFixed(2) : 0);
        deducGenCli = ($('#lblFacturaRubroGeneral').html().length > 0 ? parseFloat($('#lblFacturaRubroGeneral').html()).toFixed(2) : 0);

        rubro = $('#ddlFacturaRubro').val();
        valorPresentado = ($('#tbFacturaDetalleValorPresentado').val().length > 0 ? parseFloat($('#tbFacturaDetalleValorPresentado').val()).toFixed(2) : 0);
        valorNoCubiertoPrestador = ($('#tbFacturaDetalleValorNoCubiertoPrestador').val().length > 0 ? parseFloat($('#tbFacturaDetalleValorNoCubiertoPrestador').val()).toFixed(2) : 0);
        valorNoCubiertoAsegurado = ($('#tbFacturaDetalleValorNoCubiertoAsegurado').val().length > 0 ? parseFloat($('#tbFacturaDetalleValorNoCubiertoAsegurado').val()).toFixed(2) : 0);
        porCoaseguro = parseInt($('#ddlFacturaDetalleCoaseguro').val());
        coaseguro = parseFloat(0);
        deducible = ($('#tbFacturaDetalleDeducible').val().length > 0 ? parseFloat($('#tbFacturaDetalleDeducible').val()).toFixed(2) : 0);
        porReembolso = 100 - porCoaseguro;
        pagoProveedor = parseFloat(valorPresentado - (valorNoCubiertoPrestador + valorNoCubiertoAsegurado)).toFixed(2);


        if (valorPresentado > valorTope) {
            mensaje = 'RUBRO NO PARAMETRIZADO. POR FAVOR CONSULTAR LA DOCUMENTACIÓN FÍSICA.';
        }

        if (rubro == '1' && deducAmbCli < deducAmb) {
            if ((valorPresentado + deducAmbCli) <= deducAmb) {
                deducible = valorPresentado;
            }
            else {
                deducible = deducAmb + deducAmbCli;
            }
        }

        if (rubro == '2' && deducHospCli < deducHosp) {
            if ((valorPresentado + deducHospCli) <= deducHosp) {
                deducible = valorPresentado;
            }
            else {
                deducible = deducHosp + deducHospCli;
            }
        }

        if ((rubro == '1' || rubro == '2') && deducGenCli < deducGen) {
            if ((valorPresentado + deducGenCli) <= deducGen) {
                deducible = valorPresentado;
            }
            else {
                deducible = deducGen + deducGenCli;
            }
        }

        if ((deducible + valorNoCubiertoAsegurado) == valorPresentado) {
            coaseguro = 0;
        }
        else if (emp_code == 'SEGUROS_CONSTITUCION' && (reclamo == 'B' || reclamo == 'CA')) {
            coaseguro = parseFloat(((valorPresentado - valorNoCubiertoAsegurado - deducible) * porCoaseguro) / 100).toFixed(2);
        }
        else {
            coaseguro = parseFloat(((valorPresentado - valorNoCubiertoAsegurado - deducible) * porCoaseguro) / 100).toFixed(2);
        }

        pagoProveedor = parseFloat(valorPresentado - valorNoCubiertoPrestador).toFixed(2);
        porCobrar = parseFloat(parseFloat(deducible) + parseFloat(coaseguro) + parseFloat(valorNoCubiertoAsegurado)).toFixed(2);

        if (emp_code != 'SEGUROS_CONSTITUCION' && (reclamo == 'B' || reclamo == 'CA' || reclamo == 'RC')) {
            pagoProveedor = parseFloat((valorPresentado - valorNoCubiertoPrestador) - (deducible + coaseguro + valorNoCubiertoAsegurado)).toFixed(2);
            porCobrar = 0;
        }

        if (emp_code == 'SEGUROS_CONSTITUCION' && (reclamo == 'B' || reclamo == 'CA')) {
            pagoProveedor = parseFloat((valorPresentado - valorNoCubiertoAsegurado) - (deducible + coaseguro)).toFixed(2);
            porCobrar = 0;
        }
    }
    catch (e) {
    }

    $('#lblFacturaRubroMensaje').html(mensaje);
    $('#tbFacturaDetalleCoaseguro').val(coaseguro.toString().replace(',', '.'));
    $('#tbFacturaDetalleDeducible').val(deducible.toString().replace(',', '.'));
    $('#tbFacturaDetalleReembolso').val(porReembolso.toString().replace(',', '.'));
    $('#tbFacturaDetallePagoProveedor').val(pagoProveedor.toString().replace(',', '.'));
    $('#tbFacturaDetallePorCobrar').val(porCobrar.toString().replace(',', '.'));
}

$('#lbSeguimientoHistorial').popupWindow({ height: 500, width: 900, centerScreen: 1 });