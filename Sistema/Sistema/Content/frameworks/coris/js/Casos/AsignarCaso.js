$('#myTab a').click(function (e) {
    e.preventDefault(); $(this).tab('show');
});

$('[rel=tooltip]').tooltip();

$('[rel=datetime]').datetimepicker({
    pickTime: false 
});