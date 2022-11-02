/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Recuperar() {
    var usuario = document.getElementById("txtUsu").value;
    var contraseña = document.getElementById("txtPass").value;
    alert('su nombre es ' + usuario + ' y su contraseña es ' + contraseña);
}
function Calcular() {
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    alert('La suma es ' + (n1 + n2));
}

//Gestores de Eventos
$(document).ready(function () {
    $('#alternador .boton').click(function () {
        $('#alternador .boton').removeClass('seleccionado');
        $(this).addClass('seleccionado');
    });
    $('#alternador .boton').hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });
    $('#alternador').click(function () {
        $('#alternador .boton').hide('slow');
        if ($('#alternador .boton').hide()) {
            $('#alternador .boton').show();
        }
    });
});

//la funcion .css
$(document).ready(function () {
    $('div#texto').css({'background-color': 'white', 'margin': '5px'});
    $('#alternador .boton').click(function (event) {
        var $texto = $('#texto');
        var tamaño = $('#texto').css('fontSize');
        var num = parseFloat(tamaño, 10);
        var unidad = tamaño.slice(-2);
        if (this.id === 'aumentar') {
            num *= 1.4;
        }
        if (this.id === 'disminuir') {
            num /= 1.4;
        }
        $texto.css('fontSize', num + unidad);
        event.stopPropagation();
    });
});

//Efectos
$(document).ready(function () {
    $('#animar').click(function(){
        $('#parrafo').animate({left:'200px'});
    }); 
    $('#campos').hide();
    $('#login').hover(function () {
        $(this).css('background-color', 'dodgerblue');
    }, function () {
        $(this).css('background-color', 'lightblue');
    });
    $('#login h3').click(function () {
        $('#campos').slideToggle();
    });
});
