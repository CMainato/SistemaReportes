

$(document).ready(function () {

    //$('#myTab a').click(function (e) { e.preventDefault(); $(this).tab('show'); });
    $('[rel=tooltip]').tooltip();
    //$('[rel=datetime]').datetimepicker({ pickTime: false });

    $('#ddlTipoCliente').on('change', function () {
        var tipo = $('#ddlTipoCliente').val();

        $('#lblDocumento').html('#R.U.C.'); 
        $('#divNatural').css('display', 'none');
        $('#divJuridica').css('display', 'block');

        if (tipo == '38') {
            $('#lblDocumento').html('#Cédula');
            $('#divNatural').css('display', 'block');
            $('#divJuridica').css('display', 'none');
        }
    });


    $('#tbUbicacion').typeahead({ source: function (query, process) { return $.ajax({ type: "POST", url: "../WebService/WSComun.asmx/getUbicacionGeografica", data: "{'nombre': '" + query + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (jsonData) { $('#tbUbicacionCod').val('-1'); arrayNames = []; arrayIds = {}; var jsonArray = jQuery.parseJSON(jsonData.d); $.each(jsonArray, function (key, value) { arrayIds[value.nombre] = value; arrayNames.push(value.nombre); }); return process(arrayNames); }, error: AjaxError }); }, updater: function (item) { $('#tbUbicacionCod').val(arrayIds[item].cod_ciudad); return item; } });

});


$('#btnProductoAgregar').on('click', function () {

    var retorno = false;

    if ($('#tbProducto').val().length <= 0)
        $('#tbProducto').focus();
    else if ($('#tbMonto').val().length <= 0)
        $('#tbMonto').focus();
    else retorno = true; 

    return retorno;
}); 

function AjaxError(result) {
    alert("ERROR " + result.status + ' ' + result.statusText);
}