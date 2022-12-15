$('[rel=tooltip]').tooltip();
$('[rel=datetime]').datetimepicker({ pickTime: false });

var arrayNames = [];
var arrayIds = {};

$("#tbPostulanteNombre").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../../WebService/WSLiquidacion.asmx/SeleccionarClientesAsegurabilidadLista",
            data: "{'buscar': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {

                $('#tbPostulanteCod').val('');
                $('#tbExamenesARealizar').val('');
                arrayNames = [];
                arrayIds = {};

                var jsonArray = jQuery.parseJSON(jsonData.d);

                $.each(jsonArray, function (key, value) {
                    arrayIds[value.nombre] = value;
                    arrayNames.push(value.nombre);
                });

                var cbExamenes = $('[rel=cbExamenes]').find('input');

                cbExamenes.each(function () {
                    $(this).prop('checked', false);
                });

                return process(arrayNames);

            },
            error: AjaxError
        });
    },
    updater: function (item) {
        $('#tbPostulanteCod').val(arrayIds[item].cod_auto);

        $.ajax({
            type: "POST",
            url: "../../WebService/WSLiquidacion.asmx/SeleccionarExamenesRango",
            data: "{'monto': '" + arrayIds[item].monto + "', 'edad': '" + arrayIds[item].EDAD + "', 'sexo': '" + arrayIds[item].SEXO + "', 'entidad': '" + arrayIds[item].entidad + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {

                var jsonArray = jQuery.parseJSON(jsonData.d);
                var examenes = $('[rel=cbExamenes]').find('span');

                $.each(jsonArray, function (key, value) {

                    examenes.each(function () {

                        if ($(this).attr('rel') == value.COD_EXR) {
                            $(this).find('input').prop('checked', true);
                        }

                    });

                });

            },
            error: AjaxError
        });

        $('#tbExamenesARealizar').val(arrayIds[item].examenes);
        return item;
    }
});

$("#tbProveedorNombre").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../../WebService/WSLiquidacion.asmx/SeleccionarEmpresasCitasLista",
            data: "{'buscar': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {

                $('#lbProveedorVerAgenda').attr('disabled', 'disabled');
                $('#lbProveedorVerAgenda').attr('class', 'btn btn-default');
                $('#tbProveedorCod').val('-1');

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
        $('#tbProveedorCod').val(arrayIds[item].cod_auto);
        $('#lbProveedorVerAgenda').removeAttr('disabled');
        $('#lbProveedorVerAgenda').attr('class', 'btn btn-info');
        $("#lbProveedorVerAgenda").prop("href", "http://192.168.0.123/wsga/pag_VerAgenda.aspx?prov_id=" + arrayIds[item].cod_auto);

        $.ajax({
            type: "POST",
            url: "../../WebService/WSLiquidacion.asmx/SeleccionarEmpresasExamenes",
            data: "{'cod_emp': '" + arrayIds[item].cod_auto + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {

                var jsonArray = jQuery.parseJSON(jsonData.d);
                var continuar = true;
                var examenes = $('[rel=cbExamenes]').find('span');
                var mensaje = '';

                examenes.each(function () {

                    var cod_exr = $.trim($(this).attr('rel'));
                    var nombre = $.trim($(this).parent().attr('rel'));
                    var cbExamenes = $(this).find('input');

                    if (cbExamenes.prop('checked')) {

                        continuar = false;

                        $.each(jsonArray, function (key, value) {

                            if ($.trim(value.COD_EXR.trim()) == cod_exr) {

                                continuar = true;
                                return;
                            }

                        });

                        if (!continuar)
                            mensaje += (mensaje != '' ? ', ' : '') + nombre;
                    }
                });

                if (mensaje != '') {
                    alert("El proveedor seleccionado no puede realizar los siguientes examenes: " + mensaje);
                }


            },
            error: AjaxError
        });

        return arrayIds[item].NOMBRE_EMP;
    }
});

$('#lbProveedorVerAgenda').popupWindow({ height: 500, width: 900, centerScreen: 1 });

function AjaxError(result) {
    alert("ERROR " + result.status + ' ' + result.statusText); 
}