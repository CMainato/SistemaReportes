function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }

    if (navigator.appName == 'Netscape') {
        var ua = navigator.userAgent;
        var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }

    return rv;
}

function inicioSesionVerificar() {
    var msg = false;
    var ver = getInternetExplorerVersion();

    if (ver > -1) {
        if (ver <= 8.0) {
            $('#divUsuario').html('Usuario<br />');
            $('#divClave').html('Contraseña<br />');
            msg = true;
        }
    }
}
