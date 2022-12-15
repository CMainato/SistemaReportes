var elastix = '192.168.0.26';
$(function() {
$('#ContentPlaceHolder1_btn_realizar_llamadaVer').click(function() {
var origen =  $('#ContentPlaceHolder1_txt_origen').val(),
destino = $('#ContentPlaceHolder1_txt_destino').val();
//var origen = '1001',
//destino = '1000';

//alert(destino +' '+ origen )

if (origen && destino) {
generarLlamada(origen, destino);
}
});
});
function generarLlamada(origen, destino) {
$.ajax({
type: 'GET',
url: 'http://' + elastix + '/soap/generarLlamada.php',
data: {
'origen': origen,
'destino': destino
},
dataType: 'jsonp',
crossDomain: true,
}).done(function(response){
console.log(response);
}).fail(function(error){
console.log(error.statusText);
});
}
