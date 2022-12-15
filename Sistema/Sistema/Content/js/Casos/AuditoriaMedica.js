$('#myTab a').click(function (e) { 
    e.preventDefault(); 
    $(this).tab('show'); 
});

$('[rel=tooltip]').tooltip();

$('[rel=datetime]').datetimepicker({ 
    pickTime: false 
});

var arrayNames = [];
var arrayIds = {};

$("#tbPrestador").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getPrestador",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                $('#tbPrestadorCod').val('0');
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
        $('#tbPrestadorCod').val(arrayIds[item].cod_prestador);
        return item;
    }
});

$("#tbAsegurado").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getAsegurado",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                $('#tbAseguradoCod').val('0');
                arrayNames = [];
                arrayIds = {};
                var jsonArray = jQuery.parseJSON(jsonData.d);
                $.each(jsonArray, function (key, value) {
                    arrayIds[value.nombres] = value;
                    arrayNames.push(value.nombres);
                });
                return process(arrayNames);
            },
            error: AjaxError
        });
    },
    updater: function (item) {
        $('#tbAseguradoCod').val(arrayIds[item].cod_auto);
        $('#tbAseguradoCedula').val(arrayIds[item].cedula);
        $('#tbEdad').val(arrayIds[item].edad);

        var sel = document.getElementById('ddlSexo');
        for (var i, j = 0; i = sel.options[j]; j++) {
            if (i.value == arrayIds[item].genero) {
                sel.selectedIndex = j;
                break;
            }
        }

        var sel = document.getElementById('ddlEdad');
        for (var i, j = 0; i = sel.options[j]; j++) {
            if (i.value == arrayIds[item].edad_valor) {
                sel.selectedIndex = j;
                break;
            }
        }

        return item;
    }
});

$("#tbDiagnostico").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getDiagnostico",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                $('#tbDiagnosticoCod').val('-1');
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
        $('#tbDiagnosticoCod').val(arrayIds[item].cod_auto);
        var cod_asegurado = $('#tbAseguradoCod').val(),
                    cie_cod = arrayIds[item].cod_auto;

        if (cod_asegurado != '') {
            $.ajax({
                type: "POST",
                url: "../WebService/WSAjustes.asmx/getVisitas",
                data: "{'cod_asegurado': '" + cod_asegurado + "','cie_cod': '" + cie_cod + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (jsonData) {
                    $('#tbVisitas').val('');
                    var jsonArray = jQuery.parseJSON(jsonData.d);
                    $.each(jsonArray, function (key, value) {
                        $('#tbVisitas').val(value.total);
                    });
                },
                error: AjaxError
            });
        }

        return item;
    }
});

function AjaxError(result) {
    alert("ERROR " + result.status + ' ' + result.statusText);
}