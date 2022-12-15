var servidor = "172.27.210.198"; 

$(document).ready(function () {

    $(".list-table > tbody > tr > td").find('#btn_llamar').click(function (e) {
        var aux_row = $(this).parents('.extension-row');

        // alert($('#extension').val());

        var destino = aux_row.find('.extension-number a').text();
        var origen = $('#extension').val();
        // var origen = $.cookie("extension");
        
        // alert(origen);
        realizarLlamada(origen,destino,e);

    });

    

});



function realizarLlamada(origen, destino, e) {

    var webserUrl = "http://" + servidor + "/soap/realizarLlamada.php";

    var soapRequest = 


        '<?xml version="1.0" encoding="ISO-8859-1"?>  \
        <SOAP-ENV:Envelope  \
            SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"  \
            xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"  \
            xmlns:xsd="http://www.w3.org/2001/XMLSchema"  \
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  \
            xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/"> \
            <SOAP-ENV:Body> \
                <ns6791:realizarLlamada xmlns:ns6791="http://tempuri.org"> \
                    <__numeric_0> \
                        <origen xsi:type="xsd:string">'+ origen +'</origen> \
                    </__numeric_0> \
                    <__numeric_1> \
                        <destino xsi:type="xsd:string">'+ destino +'</destino> \
                    </__numeric_1> \
                </ns6791:realizarLlamada> \
            </SOAP-ENV:Body> \
        </SOAP-ENV:Envelope>';

    $.ajax({
        type: 'POST',
        url: webserUrl,
        contentType: "text/xml",
        dataType: "xml",
        cache: false,
        // crossDomain: false,
        data: soapRequest,
        // processData: false,
        success: SuccessOccur,
        error: ErrorOccur

    });

    e.preventDefault();

}

function SuccessOccur(data, status, req) {
    if (status == "success")
        alert('Por favor conteste la llamada para continuar.');
}

function ErrorOccur(data, status, req) {
    alert(req.responseText + " - " + status + " - " + JSON.stringify(data));
}
