$('[rel=tooltip]').tooltip(); 
$('[rel=datetime]').datetimepicker({ pickTime: false }); 

$("#tbLlamadaClienteUbicacion").typeahead({ 
    source: function (query, process) { 
        return $.ajax({ 
            type: "POST", 
            url: "../../WebService/WSLiquidacion.asmx/SeleccionarUbicacion", 
            data: "{'buscar': '" + query + "'}", 
            contentType: "application/json; charset=utf-8", 
            dataType: "json", 
            success: function (jsonData) { 
                $('#tbLlamadaClienteUbicacionCodPais').val('-1'); 
                $('#tbLlamadaClienteUbicacionCodProvincia').val('-1'); 
                $('#tbLlamadaClienteUbicacionCodCiudad').val('-1'); 
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
        $('#tbLlamadaClienteUbicacionCodPais').val(arrayIds[item].pai_code); 
        $('#tbLlamadaClienteUbicacionCodProvincia').val(arrayIds[item].pro_code); 
        $('#tbLlamadaClienteUbicacionCodCiudad').val(arrayIds[item].ciu_code); 
        return item; 
    } 
});

function AjaxError(result) {
    alert("ERROR " + result.status + ' ' + result.statusText); 
}