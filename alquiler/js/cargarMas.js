$(document).ready(function(){
    $('.col-sm-12.col-md-3.adicional1').addClass('d-none');
    $("#cargarMas").click(function(){
        $('#filaCargar').addClass('d-none');
        $('.col-sm-12.col-md-3.adicional1').addClass('d-block');
    });
});