var elastix = '192.168.0.26';
$(function() {
$('#llamar').click(function() {
var origen = $('#txt_origen').val(),
destino = $('#txt_destino').val();
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