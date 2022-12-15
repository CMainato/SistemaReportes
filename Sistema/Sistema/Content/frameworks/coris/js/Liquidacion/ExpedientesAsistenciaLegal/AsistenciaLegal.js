$('[rel=tooltip]').tooltip();
$('#tbValorServicio').on('change', function () { CalculaValor(); });
$('#tbValorCubierto').on('change', function () { CalculaValor(); });
$('#ddlTipoPago').on('change', function () {
    $('#divValorIva').css('display', ($(this).val() == '1' ? 'none' : 'block'));
});

function CalculaValor() {
    var 
        ivaServicio = 0,
        comisionCoris = 0,
        comisionDiners = 0,
        retencionImpRenta = 0,
        valorServicio = 0,
        valorCubierto = 0,
        valorNoCubierto = 0,
        valorSinIVA = 0,
        valorConIVA = 0,
        valorBase = 0,
        valorComisionCoris = 0,
        valorComisionDiners = 0,
        valorImpRta = 0;

    $('#divTipoPago').css('display', 'none');
    $('#ddlTipoPago').val('1');
    $('#divValorIva').css('display', 'none');

    try {
        ivaServicio = ($('#lblIVAServicio').html().length > 0 ? parseFloat($('#lblIVAServicio').html()) : 0);
        comisionCoris = ($('#lblComisionCoris').html().length > 0 ? parseFloat($('#lblComisionCoris').html()) : 0);
        comisionDiners = ($('#lblComisionDiners').html().length > 0 ? parseFloat($('#lblComisionDiners').html()) : 0);
        retencionImpRenta = ($('#lblRetencionImpRta').html().length > 0 ? parseFloat($('#lblRetencionImpRta').html()) : 0);
        valorServicio = ($('#tbValorServicio').val().length > 0 ? parseFloat($('#tbValorServicio').val()) : 0);
        valorCubierto = ($('#tbValorCubierto').val().length > 0 ? parseFloat($('#tbValorCubierto').val()) : 0);
        valorNoCubierto = (valorServicio - valorCubierto);

        if (valorNoCubierto <= 0)
            valorNoCubierto = 0;
    }
    catch (e) { }

    $('#tbValorNoCubierto').val(valorNoCubierto);

    if (valorNoCubierto > 0) {
        $('#divTipoPago').css('display', 'block');

        valorBase = (valorNoCubierto / (1 + ivaServicio));
        valorBase = valorBase.toFixed(2);

        if (valorBase >= 1 && valorBase <= 100) {
            valorComisionCoris = valorBase * 0.15;
            valorSinIVA = (valorBase * (1 + 0.15)) / 0.9296;
            valorConIVA = ((valorBase * (1 + 0.15)) / 0.9296) * 1.12;
        }
        else if (valorBase > 100 && valorBase <= 200) {
            valorComisionCoris = valorBase * 0.1;
            valorSinIVA = (valorBase * (1 + 0.1)) / 0.9296;
            valorConIVA = ((valorBase * (1 + 0.1)) / 0.9296) * 1.12;
        }
        else if (valorBase > 200) {
            valorComisionCoris = valorBase * 0.05;
            valorSinIVA = (valorBase * (1 + 0.05)) / 0.9296;
            valorConIVA = ((valorBase * (1 + 0.05)) / 0.9296) * 1.12;
        }

        valorSinIVA = valorSinIVA.toFixed(2);
        valorConIVA = valorConIVA.toFixed(2);
        valorComisionCoris = valorComisionCoris.toFixed(2);
        valorComisionDiners = valorConIVA * comisionDiners;
        valorComisionDiners = valorComisionDiners.toFixed(2);
        valorImpRta = retencionImpRenta * (valorConIVA / 1.12);
        valorImpRta = valorImpRta.toFixed(2);
    }

    $('#tbValorSinIVA').val(valorSinIVA);
    $('#tbValorConIVA').val(valorConIVA);
    $('#lblValorBase').html(valorBase);
    $('#lblValorComisionCoris').html(valorComisionCoris);
    $('#lblValorComisionDiners').html(valorComisionDiners);
    $('#lblValorImpRta').html(valorImpRta);
}


