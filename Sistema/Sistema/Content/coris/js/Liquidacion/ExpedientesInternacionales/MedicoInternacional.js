$('#myTab a').click(function (e) { e.preventDefault(); $(this).tab('show'); })
$('[rel=tooltip]').tooltip();
$('[rel=datetime]').datetimepicker({ pickTime: false });

/*$(document).ready(function () {
    $.cookies.set('test3', 'three');
}); */

$("#tbUbicacionDiagnostico").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../../WebService/WSLiquidacion.asmx/SeleccionarDiagnosticoCIE10",
            data: "{'nombre': '" + query + "', 'opcion': '2'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {

                $('#tbUbicacionDiagnosticoCod').val('-1');
                $('#tbUbicacionProvision').val('0');
                arrayNames = [];
                arrayIds = {};

                var jsonArray = jQuery.parseJSON(jsonData.d); $.each(jsonArray, function (key, value) {
                    arrayIds[value.nombre] = value;
                    arrayNames.push(value.nombre);
                });

                return process(arrayNames);
            },
            error: AjaxError
        });
    },
    updater: function (item) {
        $('#tbUbicacionDiagnosticoCod').val(arrayIds[item].cod_auto);

        $.ajax({
            type: "POST",
            url: "../../WebService/WSLiquidacion.asmx/SeleccionarCIEValor",
            data: "{'cie_cod': '" + arrayIds[item].cod_auto + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {

                var jsonArray = jQuery.parseJSON(jsonData.d); 
                
                $.each(jsonArray, function (key, value) {
                    $('#tbUbicacionProvision').val(value.valor); 
                });

            },
            error: AjaxError
        });


        return item;
    }
});

function AjaxError(result) {
    alert("ERROR " + result.status + ' ' + result.statusText);
}


$('#tbUbicacionFechaNacimiento').on('click', function () { checkTextboxChanged(); });
var searchValue = "";
setInterval(checkTextboxChanged, 0.5);

function checkTextboxChanged() {
    var currentValue = $('#tbUbicacionFechaNacimiento').val();
    if (currentValue != searchValue) {
        searchValue = currentValue;
        obtenerEdad(searchValue);
    }
}

function obtenerEdad(fecha) {
    var edad = $('#tbUbicacionEdad');

    try {
        var 
                restar = true,
                lista = fecha.split('-'),
                aa = parseInt(lista[0]),
                mm = parseInt(lista[1]),
                dd = parseInt(lista[2]),
                d = new Date(),
                aad = d.getFullYear(),
                mmd = d.getMonth() + 1,
                ddd = d.getDate();

        if (mmd >= mm)
            restar = !((mmd == mm && ddd >= d) || (mmd > mm));

        var edadValor = aad - (aa + (restar ? 1 : 0));

        edad.val(edadValor < 0 ? 0 : edadValor);
    }
    catch (ex) {
        edad.val('');
    }
}




/*window.onbeforeunload = function () {
    $.cookies.set('test2', 'two');
};*/

