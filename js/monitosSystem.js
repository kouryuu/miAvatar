
//alert(window.navigator.standalone);


path_monitos='Monitos/hombre/';

// constructor de monito
function monito(cabello,torso,piernas,zapatos){
    this.cabello = cabello;
    this.torso = torso;
    this.piernas = piernas;
    this.zapatos = zapatos;
}

// Creamos un monito actual

monito_actual = {cabello:'none',torso:'none',piernas:'none',zapatos:'none'};
/*
*   agregaPrenda
*   @prenda es el id de la div tipo prenda
*/
function agregaPrenda(prenda){

tipo = $('#'+prenda).attr('tipoderopa');
 console.log(tipo);
switch(tipo){
    case 'cabello':
    monito_actual.cabello = prenda;
    $('#'+prenda).hide('slow');
    $('#cabello').attr('src',path_monitos+prenda+'_monito.png');
    break;
    case 'torso':
    monito_actual.torso = prenda;
    $('#'+prenda).hide('slow');
    $('#torso').attr('src',path_monitos+prenda+'_monito.png');
    break;
    case 'piernas':
    monito_actual.piernas = prenda;
    $('#'+prenda).hide('slow');
    $('#piernas').attr('src',path_monitos+prenda+'_monito.png');
    break;
    case 'zapatos':
    monito_actual.zapatos = prenda;
    $('#'+prenda).hide('slow');
    $('#zapatos').attr('src',path_monitos+prenda+'_monito.png');
    break
}

}

function start(){

	var hm = Hammer($("#drawer")).on("swiperight",function(event){mueveUno('izq');});
    var hm2 = Hammer($("#drawer")).on("swipeleft",function(event){mueveUno('der');});
	
    var hammertime = Hammer($("#ropa1")).on("touch",function(event){
        ponerImagen('playera_sheldon','torso')});
    var hammertime2 = Hammer($("#ropa2")).on("touch",function(event){
        ponerImagen('mesclilla_azul','piernas')});
var hammertime3 = Hammer($("#ropa3")).on("touch",function(event){
        ponerImagen('zapatos_negros','zapatos')});
var hammertime4 = Hammer($("#ropa4")).on("touch",function(event){
        ponerImagen('cabello_negro','cabello')});
var hammertime5 = Hammer($("#ropa5")).on("touch",function(event){
        ponerImagen('','')});
var hammertime6 = Hammer($("#ropa6")).on("touch",function(event){
        ponerImagen('','')});


 function ponerImagen(imagen,tipoderopa){
    $(".prenda").fadeIn();
$(".prenda").css({
    left: 10,
    top: 20

});
    $(".prenda").attr("tipoderopa",tipoderopa);
    $(".prenda").attr("src",path_monitos+imagen+'.png');
    $(".prenda").attr("id",imagen);
 }

$(".prenda")
            .hammer({ drag_max_touches:0})
            .on("touch drag", function(ev) {

                var touches = ev.gesture.touches;

                ev.gesture.preventDefault();

                for(var t=0,len=touches.length; t<len; t++) {
                
                if(touches[t].pageX>456 && touches[t].pageX<656 && touches[t].pageY>500 ){


                	agregaPrenda (this.getAttribute('id'));
                	
                }
                
                    var target = $(touches[t].target);
                    target.css({
                        zIndex: 1337,
                        left: touches[t].pageX-135,
                        top: touches[t].pageY-148
                    });
                }
            });	 
}

function cambiarRopa(){


}
var ultimo = $('.ropa').last();
function mueveUno(direccion){
if(direccion == 'izq'){
$('.ropa').animate({
    left: '+=80'
},100);

ultimo.hide();
var ultimo = ultimo.prev();
}if(direccion == 'der'){
$('.ropa').animate({
    left: '-=80'
},100);

}

}


function showColors(){



  }


