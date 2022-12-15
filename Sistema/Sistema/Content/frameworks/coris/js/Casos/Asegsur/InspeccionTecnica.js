$('#myTab a').click(function (e) { e.preventDefault(); $(this).tab('show'); })
$('[rel=tooltip]').tooltip();
$('[rel=datetime]').datetimepicker({ pickTime: false });

$('#ddlDocumentoTipo').on('change', function () { var valor = $(this).val(); $('#divNombres').css('display', (valor != 'R' ? 'block' : 'none')); $('#divRazonSocial').css('display', (valor == 'R' ? 'block' : 'none')); });

var arrayNames = [];
var arrayIds = {};

$('#tbAseguradoPrimerApellido').typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../../WebService/WSAjustes.asmx/AsegsurAseguradoBuscar",
            data: "{'buscar': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                arrayNames = [];
                arrayIds = {};
                var jsonArray = jQuery.parseJSON(jsonData.d);

                $.each(jsonArray, function (key, value) {
                    arrayIds[value.nombre] = value;
                    arrayNames.push(value.nombre);

                });

                return process(arrayNames);
            },
            error: AjaxError
        });
    },
    updater: function (item) {

        $('#ddlDocumentoTipo').val(arrayIds[item].tipo_identificacion);
        $('#tbIdentificacion').val(arrayIds[item].cedula);
        $('#tbAseguradoSegundoApellido').val(arrayIds[item].segundo_apellido);
        $('#tbAseguradoPrimerNombre').val(arrayIds[item].primer_nombre);
        $('#tbAseguradoSegundoNombre').val(arrayIds[item].segundo_nombre);
        $('#tbEstadoCivil').val(arrayIds[item].estado_civil);
        $('#ddlGrupoEconomico').val(arrayIds[item].cod_grupo_economico);
        $('#ddlGenero').val(arrayIds[item].genero);
        $('#tbTelefonoFijo').val(arrayIds[item].telefono_fijo);
        $('#tbTelefonoCelular').val(arrayIds[item].telefono_celular);
        $('#tbTelefonoFax').val(arrayIds[item].fax);
        $('#tbEmail').val(arrayIds[item].email);
        $('#tbFechaNacimiento').val(arrayIds[item].fecha_nacimiento);
        $('#tbContactoApellidos').val(arrayIds[item].contacto_apellidos);
        $('#tbContactoNombres').val(arrayIds[item].contacto_nombres);
        $('#tbContactoTelefono').val(arrayIds[item].contacto_telefono);
        $('#tbContactoParentesco').val(arrayIds[item].contacto_parentesco);
        $('#tbDireccion').val(arrayIds[item].direccion);
        return arrayIds[item].primer_apellido;
    }
});

$('#tbAseguradoSegundoApellido').typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../../WebService/WSAjustes.asmx/AsegsurAseguradoBuscar",
            data: "{'buscar': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                arrayNames = [];
                arrayIds = {};
                var jsonArray = jQuery.parseJSON(jsonData.d);

                $.each(jsonArray, function (key, value) {
                    arrayIds[value.nombre] = value;
                    arrayNames.push(value.nombre);

                });

                return process(arrayNames);
            },
            error: AjaxError
        });
    },
    updater: function (item) {

        $('#ddlDocumentoTipo').val(arrayIds[item].tipo_identificacion);
        $('#tbIdentificacion').val(arrayIds[item].cedula);
        $('#tbAseguradoPrimerApellido').val(arrayIds[item].primer_apellido);
        $('#tbAseguradoPrimerNombre').val(arrayIds[item].primer_nombre);
        $('#tbAseguradoSegundoNombre').val(arrayIds[item].segundo_nombre);
        $('#tbEstadoCivil').val(arrayIds[item].estado_civil);
        $('#ddlGrupoEconomico').val(arrayIds[item].cod_grupo_economico);
        $('#ddlGenero').val(arrayIds[item].genero);
        $('#tbTelefonoFijo').val(arrayIds[item].telefono_fijo);
        $('#tbTelefonoCelular').val(arrayIds[item].telefono_celular);
        $('#tbTelefonoFax').val(arrayIds[item].fax);
        $('#tbEmail').val(arrayIds[item].email);
        $('#tbFechaNacimiento').val(arrayIds[item].fecha_nacimiento);
        $('#tbContactoApellidos').val(arrayIds[item].contacto_apellidos);
        $('#tbContactoNombres').val(arrayIds[item].contacto_nombres);
        $('#tbContactoTelefono').val(arrayIds[item].contacto_telefono);
        $('#tbContactoParentesco').val(arrayIds[item].contacto_parentesco);
        $('#tbDireccion').val(arrayIds[item].direccion);
        return arrayIds[item].segundo_apellido;
    }
});

$('#tbAseguradoPrimerNombre').typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../../WebService/WSAjustes.asmx/AsegsurAseguradoBuscar",
            data: "{'buscar': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                arrayNames = [];
                arrayIds = {};
                var jsonArray = jQuery.parseJSON(jsonData.d);

                $.each(jsonArray, function (key, value) {
                    arrayIds[value.nombre] = value;
                    arrayNames.push(value.nombre);

                });

                return process(arrayNames);
            },
            error: AjaxError
        });
    },
    updater: function (item) {

        $('#ddlDocumentoTipo').val(arrayIds[item].tipo_identificacion);
        $('#tbIdentificacion').val(arrayIds[item].cedula);
        $('#tbAseguradoPrimerApellido').val(arrayIds[item].primer_apellido);
        $('#tbAseguradoSegundoApellido').val(arrayIds[item].segundo_apellido);
        $('#tbAseguradoSegundoNombre').val(arrayIds[item].segundo_nombre);
        $('#tbEstadoCivil').val(arrayIds[item].estado_civil);
        $('#ddlGrupoEconomico').val(arrayIds[item].cod_grupo_economico);
        $('#ddlGenero').val(arrayIds[item].genero);
        $('#tbTelefonoFijo').val(arrayIds[item].telefono_fijo);
        $('#tbTelefonoCelular').val(arrayIds[item].telefono_celular);
        $('#tbTelefonoFax').val(arrayIds[item].fax);
        $('#tbEmail').val(arrayIds[item].email);
        $('#tbFechaNacimiento').val(arrayIds[item].fecha_nacimiento);
        $('#tbContactoApellidos').val(arrayIds[item].contacto_apellidos);
        $('#tbContactoNombres').val(arrayIds[item].contacto_nombres);
        $('#tbContactoTelefono').val(arrayIds[item].contacto_telefono);
        $('#tbContactoParentesco').val(arrayIds[item].contacto_parentesco);
        $('#tbDireccion').val(arrayIds[item].direccion);
        return arrayIds[item].primer_nombre;
    }
});


$('#tbAseguradoSegundoNombre').typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../../WebService/WSAjustes.asmx/AsegsurAseguradoBuscar",
            data: "{'buscar': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                arrayNames = [];
                arrayIds = {};
                var jsonArray = jQuery.parseJSON(jsonData.d);

                $.each(jsonArray, function (key, value) {
                    arrayIds[value.nombre] = value;
                    arrayNames.push(value.nombre);

                });

                return process(arrayNames);
            },
            error: AjaxError
        });
    },
    updater: function (item) {

        $('#ddlDocumentoTipo').val(arrayIds[item].tipo_identificacion);
        $('#tbIdentificacion').val(arrayIds[item].cedula);
        $('#tbAseguradoPrimerApellido').val(arrayIds[item].primer_apellido);
        $('#tbAseguradoSegundoApellido').val(arrayIds[item].segundo_apellido);
        $('#tbAseguradoPrimerNombre').val(arrayIds[item].primer_nombre);
        $('#tbEstadoCivil').val(arrayIds[item].estado_civil);
        $('#ddlGrupoEconomico').val(arrayIds[item].cod_grupo_economico);
        $('#ddlGenero').val(arrayIds[item].genero);
        $('#tbTelefonoFijo').val(arrayIds[item].telefono_fijo);
        $('#tbTelefonoCelular').val(arrayIds[item].telefono_celular);
        $('#tbTelefonoFax').val(arrayIds[item].fax);
        $('#tbEmail').val(arrayIds[item].email);
        $('#tbFechaNacimiento').val(arrayIds[item].fecha_nacimiento);
        $('#tbContactoApellidos').val(arrayIds[item].contacto_apellidos);
        $('#tbContactoNombres').val(arrayIds[item].contacto_nombres);
        $('#tbContactoTelefono').val(arrayIds[item].contacto_telefono);
        $('#tbContactoParentesco').val(arrayIds[item].contacto_parentesco);
        $('#tbDireccion').val(arrayIds[item].direccion);
        return arrayIds[item].segundo_nombre;
    }
});


$('[rel=buscarEmpresa]').typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../../WebService/WSAjustes.asmx/AsegsurAseguradoBuscarEmpresa",
            data: "{'buscar': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                arrayNames = [];
                arrayIds = {};
                var jsonArray = jQuery.parseJSON(jsonData.d);

                $.each(jsonArray, function (key, value) {
                    arrayIds[value.nombre] = value;
                    arrayNames.push(value.nombre);

                });

                return process(arrayNames);
            },
            error: AjaxError
        });
    },
    updater: function (item) {

        $('#ddlDocumentoTipo').val(arrayIds[item].tipo_identificacion);
        $('#tbIdentificacion').val(arrayIds[item].cedula);
        $('#tbAseguradoPrimerApellido').val(arrayIds[item].primer_apellido);
        $('#tbAseguradoSegundoApellido').val(arrayIds[item].segundo_apellido);
        $('#tbAseguradoPrimerNombre').val(arrayIds[item].primer_nombre);
        $('#tbAseguradoSegundoNombre').val(arrayIds[item].segundo_nombre);
        $('#tbEstadoCivil').val(arrayIds[item].estado_civil);
        $('#ddlGenero').val(arrayIds[item].genero);
        $('#ddlGrupoEconomico').val(arrayIds[item].cod_grupo_economico);
        $('#tbTelefonoFijo').val(arrayIds[item].telefono_fijo);
        $('#tbTelefonoCelular').val(arrayIds[item].telefono_celular);
        $('#tbTelefonoFax').val(arrayIds[item].fax);
        $('#tbEmail').val(arrayIds[item].email);
        $('#tbFechaNacimiento').val(arrayIds[item].fecha_nacimiento);
        $('#tbContactoApellidos').val(arrayIds[item].contacto_apellidos);
        $('#tbContactoNombres').val(arrayIds[item].contacto_nombres);
        $('#tbContactoTelefono').val(arrayIds[item].contacto_telefono);
        $('#tbContactoParentesco').val(arrayIds[item].contacto_parentesco);
        $('#tbDireccion').val(arrayIds[item].direccion);
        return arrayIds[item].nombre;
    }
});

$('[rel=buscarEmpresa]').typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../../WebService/WSAjustes.asmx/AsegsurAseguradoBuscarEmpresa",
            data: "{'buscar': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                arrayNames = [];
                arrayIds = {};
                var jsonArray = jQuery.parseJSON(jsonData.d);

                $.each(jsonArray, function (key, value) {
                    arrayIds[value.nombre] = value;
                    arrayNames.push(value.nombre);

                });

                return process(arrayNames);
            },
            error: AjaxError
        });
    },
    updater: function (item) {

        $('#ddlDocumentoTipo').val(arrayIds[item].tipo_identificacion);
        $('#tbIdentificacion').val(arrayIds[item].cedula);
        $('#tbAseguradoPrimerApellido').val(arrayIds[item].primer_apellido);
        $('#tbAseguradoSegundoApellido').val(arrayIds[item].segundo_apellido);
        $('#tbAseguradoPrimerNombre').val(arrayIds[item].primer_nombre);
        $('#tbAseguradoSegundoNombre').val(arrayIds[item].segundo_nombre);
        $('#tbEstadoCivil').val(arrayIds[item].estado_civil);
        $('#ddlGenero').val(arrayIds[item].genero);
        $('#ddlGrupoEconomico').val(arrayIds[item].cod_grupo_economico);
        $('#tbTelefonoFijo').val(arrayIds[item].telefono_fijo);
        $('#tbTelefonoCelular').val(arrayIds[item].telefono_celular);
        $('#tbTelefonoFax').val(arrayIds[item].fax);
        $('#tbEmail').val(arrayIds[item].email);
        $('#tbFechaNacimiento').val(arrayIds[item].fecha_nacimiento);
        $('#tbContactoApellidos').val(arrayIds[item].contacto_apellidos);
        $('#tbContactoNombres').val(arrayIds[item].contacto_nombres);
        $('#tbContactoTelefono').val(arrayIds[item].contacto_telefono);
        $('#tbContactoParentesco').val(arrayIds[item].contacto_parentesco);
        $('#tbDireccion').val(arrayIds[item].direccion);
        return arrayIds[item].nombre;
    }
});

$('#ddlAPS').on('change', function () { $('#divAPS').css('display', (($(this).val() == '-2') ? 'block' : 'none')); $('#tbAPSNombre').val(''); $('#tbAPSEmail').val(''); });
$('#ddlExtrasTipo').on('change', function () { $('#divExtrasOtro').css('display', (($(this).val() == '31') ? 'block' : 'none')); $('#tbExtrasOtro').val(''); });
$("#tbCiudad").typeahead({ source: function (query, process) { return $.ajax({ type: "POST", url: "../../WebService/WSAjustes.asmx/getUbicacionGeografica", data: "{'nombre': '" + query + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (jsonData) { $('#tbCiudadCod').val('-1'); arrayNames = []; arrayIds = {}; var jsonArray = jQuery.parseJSON(jsonData.d); $.each(jsonArray, function (key, value) { arrayIds[value.nombre] = value; arrayNames.push(value.nombre); }); return process(arrayNames); }, error: AjaxError }); }, updater: function (item) { $('#tbCiudadCod').val(arrayIds[item].cod_ciudad); return item; } });
$("#tbPais").typeahead({ source: function (query, process) { return $.ajax({ type: "POST", url: "../../WebService/WSAjustes.asmx/getPais", data: "{'nombre': '" + query + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (jsonData) { $('#tbPaisCod').val('-1'); arrayNames = []; arrayIds = {}; var jsonArray = jQuery.parseJSON(jsonData.d); $.each(jsonArray, function (key, value) { arrayIds[value.nombre] = value; arrayNames.push(value.nombre); }); return process(arrayNames); }, error: AjaxError }); }, updater: function (item) { $('#tbPaisCod').val(arrayIds[item].cod_auto); return item; } });
$("#tbMarca").typeahead({ source: function (query, process) { return $.ajax({ type: "POST", url: "../../WebService/WSAjustes.asmx/getMarcaVehiculo", data: "{'nombre': '" + query + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (jsonData) { arrayNames = []; arrayIds = {}; var jsonArray = jQuery.parseJSON(jsonData.d); $.each(jsonArray, function (key, value) { arrayIds[value.nombre] = value; arrayNames.push(value.nombre); }); return process(arrayNames); }, error: AjaxError }); }, updater: function (item) { return item; } });
$("#tbModelo").typeahead({ source: function (query, process) { return $.ajax({ type: "POST", url: "../../WebService/WSAjustes.asmx/getModeloVehiculo", data: "{'nombre': '" + query + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (jsonData) { arrayNames = []; arrayIds = {}; var jsonArray = jQuery.parseJSON(jsonData.d); $.each(jsonArray, function (key, value) { arrayIds[value.nombre] = value; arrayNames.push(value.nombre); }); return process(arrayNames); }, error: AjaxError }); }, updater: function (item) { return item; } });
$("#tbColor").typeahead({ source: function (query, process) { return $.ajax({ type: "POST", url: "../../WebService/WSAjustes.asmx/getColorVehiculo", data: "{'nombre': '" + query + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (jsonData) { arrayNames = []; arrayIds = {}; var jsonArray = jQuery.parseJSON(jsonData.d); $.each(jsonArray, function (key, value) { arrayIds[value.nombre] = value; arrayNames.push(value.nombre); }); return process(arrayNames); }, error: AjaxError }); }, updater: function (item) { return item; } });
$('#tbVhstdValorAsegurable').on('change', function () { CalcularAsegurable(); });
$('#tbVhstdValorSugerido').on('change', function () { CalcularSugerido(); });
$('#btnBuscarPlacaCopiar').on('click', function () { BuscarPlaca(); });

function CalcularAsegurable() {
    var valor = ($('#tbVhstdValorAsegurable').val() != '' ? parseFloat($('#tbVhstdValorAsegurable').val()) : 0),
                    extras = ($('#tbExtrasValorAsegurable').val() != '' ? parseFloat($('#tbExtrasValorAsegurable').val()) : 0),
                    total = 0;

    total = valor + extras;

    $('#tbTotalValorAsegurable').val(total.toFixed(2));
}

function CalcularSugerido() {
    var valor = ($('#tbVhstdValorSugerido').val() != '' ? parseFloat($('#tbVhstdValorSugerido').val()) : 0),
                    extras = ($('#tbExtrasValorSugerido').val() != '' ? parseFloat($('#tbExtrasValorSugerido').val()) : 0),
                    total = 0;

    total = valor + extras;

    $('#tbTotalValorSugerido').val(total.toFixed(2));
}


function AjaxError(result) { alert("ERROR " + result.status + ' ' + result.statusText); }