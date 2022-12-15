$('#myTab a').click(function (e) {
    e.preventDefault(); $(this).tab('show');
});

$('[rel=tooltip]').tooltip();

$('[rel=datetime]').datetimepicker({
    pickTime: false 
});

var arrayNames = [];
var arrayIds = {};

$("#textBoxAseguradora").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getAseguradora",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                $('#textBoxAseguradoraCodAuto').val('0');
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
        $('#textBoxAseguradoraCodAuto').val(arrayIds[item].cod_aseguradora);
        return item;
    }
});

$("#textBoxAseguradoNombre").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getAsegurado",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                $('#textBoxAseguradoCodAuto').val('0');
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
        $('#textBoxAseguradoCodAuto').val(arrayIds[item].cod_auto);
        $('#textBoxAseguradoCedula').val(arrayIds[item].cedula);
        return item;
    }
});

$("#textBoxRCNombre").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getAsegurado",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                $('#textBoxRCCodAuto').val('0');
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
        $('#textBoxRCCodAuto').val(arrayIds[item].cod_auto);
        $('#textBoxRCCedula').val(arrayIds[item].cedula);
        return item;
    }
});

$("#textBoxAgregarRC").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getAsegurado",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                $('#textBoxAgregarRCCodAuto').val('0');
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
        $('#textBoxAgregarRCCodAuto').val(arrayIds[item].cod_auto);
        $('#textBoxAgregarRCCedula').val(arrayIds[item].cedula);
        return item;
    }
});

$("#textBoxTallerNombre").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getTaller",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                $('#textBoxTallerCodAuto').val('0');
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
        $('#textBoxTallerCodAuto').val(arrayIds[item].cod_auto);
        $('#textBoxTallerContacto').val(arrayIds[item].contacto);
        $('#textBoxTallerTelefono').val(arrayIds[item].telefono);
        $('#textBoxTallerUbicacion').val(arrayIds[item].ubicacion);
        $('#textBoxTallerUbicacionCodAuto').val(arrayIds[item].cod_ciudad);
        $('#textBoxTallerDireccion').val(arrayIds[item].direccion);

        var sel = document.getElementById('ddlTallerZona');
        for (var i, j = 0; i = sel.options[j]; j++) {
            if (i.value == arrayIds[item].cod_zona) {
                sel.selectedIndex = j;
                break;
            }
        }

        return item;
    }
});

$("#textBoxRCTallerNombre").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getTaller",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                $('#textBoxRCTallerCodAuto').val('0');
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
        $('#textBoxRCTallerCodAuto').val(arrayIds[item].cod_auto);
        $('#textBoxRCTallerContacto').val(arrayIds[item].contacto);
        $('#textBoxRCTallerTelefono').val(arrayIds[item].telefono);
        $('#textBoxRCTallerUbicacion').val(arrayIds[item].ubicacion);
        $('#textBoxRCTallerUbicacionCodAuto').val(arrayIds[item].cod_ciudad);
        $('#textBoxRCTallerDireccion').val(arrayIds[item].direccion);

        var sel = document.getElementById('ddlRCTallerZona');
        for (var i, j = 0; i = sel.options[j]; j++) {
            if (i.value == arrayIds[item].cod_zona) {
                sel.selectedIndex = j;
                break;
            }
        }

        return item;
    }
});

$("#textBoxAgregarTaller").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getTaller",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                $('#textBoxAgregarTallerCodAuto').val('0');
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
        $('#textBoxAgregarTallerCodAuto').val(arrayIds[item].cod_auto);
        $('#textBoxAgregarTallerContacto').val(arrayIds[item].contacto);
        $('#textBoxAgregarTallerTelefono').val(arrayIds[item].telefono);
        $('#textBoxAgregarTallerUbicacion').val(arrayIds[item].ubicacion);
        $('#textBoxAgregarTallerUbicacionCodAuto').val(arrayIds[item].cod_ciudad);
        $('#textBoxAgregarTallerDireccion').val(arrayIds[item].direccion);

        var sel = document.getElementById('ddlAgregarTallerZona');
        for (var i, j = 0; i = sel.options[j]; j++) {
            if (i.value == arrayIds[item].cod_zona) {
                sel.selectedIndex = j;
                break;
            }
        }

        return item;
    }
});

$("#textBoxTallerUbicacion").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getUbicacionGeografica",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                $('#textBoxTallerUbicacionCodAuto').val('0');
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
        $('#textBoxTallerUbicacionCodAuto').val(arrayIds[item].cod_ciudad);
        return item;
    }
});

$("#textBoxRCTallerUbicacion").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getUbicacionGeografica",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                $('#textBoxRCTallerUbicacionCodAuto').val('0');
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
        $('#textBoxRCTallerUbicacionCodAuto').val(arrayIds[item].cod_ciudad);
        return item;
    }
});

$("#textBoxAgregarTallerUbicacion").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getUbicacionGeografica",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                $('#textBoxAgregarTallerUbicacionCodAuto').val('0');
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
        $('#textBoxAgregarTallerUbicacionCodAuto').val(arrayIds[item].cod_ciudad);
        return item;
    }
});

$("#textBoxRepuestoManoObra").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getRepuesto",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                $('#textBoxRepuestoManoObraCodAuto').val('0');
                $('#textBoxRepuestoManoObraCodTipo').val('0');
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
        $('#textBoxRepuestoManoObraCodAuto').val(arrayIds[item].cod_auto);
        $('#textBoxRepuestoManoObraCodTipo').val(arrayIds[item].cod_catalogo_tipo_repuesto);
        return item;
    }
});

$("#textBoxRepuestoManoObra").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getRepuesto",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
                $('#textBoxRepuestoManoObraCodAuto').val('0');
                $('#textBoxRepuestoManoObraCodTipo').val('0');
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
        $('#textBoxRepuestoManoObraCodAuto').val(arrayIds[item].cod_auto);
        $('#textBoxRepuestoManoObraCodTipo').val(arrayIds[item].cod_catalogo_tipo_repuesto);
        return item;
    }
});

$("#textBoxVehiculoMarca").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getMarcaVehiculo",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
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
        return item;
    }
});

$("#textBoxVehiculoModelo").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getModeloVehiculo",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
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
        return item;
    }
});

$("#textBoxVehiculoColor").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getColorVehiculo",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
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
        return item;
    }
});

$("#textBoxRCVehiculoMarca").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getMarcaVehiculo",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
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
        return item;
    }
});

$("#textBoxRCVehiculoModelo").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getModeloVehiculo",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
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
        return item;
    }
});

$("#textBoxRCVehiculoColor").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getColorVehiculo",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
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
        return item;
    }
});

$("#textBoxAgregarVehiculoMarca").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getMarcaVehiculo",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
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
        return item;
    }
});

$("#textBoxAgregarVehiculoModelo").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getModeloVehiculo",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
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
        return item;
    }
});

$("#textBoxAgregarVehiculoColor").typeahead({
    source: function (query, process) {
        return $.ajax({
            type: "POST",
            url: "../WebService/WSAjustes.asmx/getColorVehiculo",
            data: "{'nombre': '" + query + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (jsonData) {
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
        return item;
    }
});

function AjaxError(result) { alert("ERROR " + result.status + ' ' + result.statusText); }