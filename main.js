var musica = new Audio ()
musica.src="Narutoflauta.mp3"
const DECREMENTO = 10;
const DECREMENTO_MIN = 1;
const DECREMENTO_MEDIO = 5;
const VELOCIDAD = 300;
var status_jugador1 = {
  palabraActual: 'Suerte',
  estres: 0,
  hambre: 0,
  cansancio: 0
}

var status_jugador2 = {
  palabraActual: 'Suerte',
  estres: 0,
  hambre: 0,
  cansancio: 0
}

$(document).ready(function(){
  $('#comenzar').on('click', start);
  var teclas = addEventListener('keydown', function(event){
    if(event.keyCode == 65){//Tecla A 
      verificaA();
    }
    else if(event.keyCode == 87){//Tecla W
      verificaW();
    }
    else if(event.keyCode == 68){//Tecla D
      verificaD();
    }
    else if(event.keyCode == 83){//Tecla S
      verificaS();
    }
    if(event.keyCode == 37){//Tecla A 
      verificaIz();
    }
    else if(event.keyCode == 38){//Tecla W
      verificaAr();
    }
    else if(event.keyCode == 40){//Tecla D
      verificaAb();
    }
    else if(event.keyCode == 39){//Tecla S
      verificaDe();
    }
  });
})

function verificaA(){
  if(status_jugador1.palabraActual == 'azul') {
    status_jugador1.estres -= DECREMENTO;
    status_jugador1.hambre -= DECREMENTO_MIN;
    status_jugador1.cansancio -= DECREMENTO_MIN;
    cambia1();
    if(status_jugador1.estres<0){
      status_jugador1.estres=0;
    }
  }
}

function verificaW(){
  if(status_jugador1.palabraActual == 'amarillo') {
    status_jugador1.estres -= DECREMENTO_MIN;
    status_jugador1.hambre -= DECREMENTO;
    status_jugador1.cansancio -= DECREMENTO_MIN;    
    cambia1();
    if(status_jugador1.hambre<0) {
      status_jugador1.hambre=0;
    }
  }
}

function verificaD(){
  if(status_jugador1.palabraActual == 'verde') {
    status_jugador1.estres -= DECREMENTO_MIN;
    status_jugador1.hambre -= DECREMENTO_MIN;
    status_jugador1.cansancio -= DECREMENTO;   
        cambia1();
    if(status_jugador1.cansancio<0) {
    status_jugador1.cansancio=0;
    }
  }

  }

function verificaS(){
  if(status_jugador1.palabraActual == 'rojo') {
    status_jugador1.estres -= DECREMENTO_MEDIO;
    status_jugador1.hambre -= DECREMENTO_MEDIO;
    status_jugador1.cansancio -= DECREMENTO_MEDIO;
    cambia1();
    if(status_jugador1.estres<0) {
      status_jugador1.estres=0;
    }
  }
}

function verificaIz(){
  if(status_jugador2.palabraActual == 'azul') {
    status_jugador2.estres -= DECREMENTO;
    status_jugador2.hambre -= DECREMENTO_MIN;
    status_jugador2.cansancio -= DECREMENTO_MIN;

    cambia2();
    if(status_jugador2.estres<0){
      status_jugador2.estres=0;
    }
  }
}

function verificaAr(){
  if(status_jugador2.palabraActual == 'amarillo') {
    status_jugador2.estres -= DECREMENTO_MIN;
    status_jugador2.hambre -= DECREMENTO;
    status_jugador2.cansancio -= DECREMENTO_MIN;
        cambia2();
    if(status_jugador2.hambre<0) {
      status_jugador2.hambre=0;
    }
  }
}

function verificaDe(){
  if(status_jugador2.palabraActual == 'verde') {
    status_jugador2.estres -= DECREMENTO_MIN;
    status_jugador2.hambre -= DECREMENTO_MIN;
    status_jugador2.cansancio -= DECREMENTO;
        cambia2();
    if(status_jugador2.cansancio<0) {
    status_jugador2.cansancio=0;
    }
  }

  }

function verificaAb(){
  if(status_jugador2.palabraActual == 'rojo') {
    status_jugador2.estres -= DECREMENTO_MEDIO;
    status_jugador2.hambre -= DECREMENTO_MEDIO;
    status_jugador2.cansancio -= DECREMENTO_MEDIO;
    cambia2();
    if(status_jugador2.estres<0) {
      status_jugador2.estres=0;
    }
  }
}

function color1 (){
  var lista = ["#F0A103", "#FFE102","#BFDC06", "#8CD300","#39FC02", "#27ED31","#FF00BF","#0EEB76","#03E398", "#02B29A", "#025178", "#3568C1","#413671", "#985EBB", "#ED31F0","#EB079F","#790A54","#E6066E","#E19BBC","#AC133A","#F80744","#B9272B"];
  var div = document.getElementById("rombo1");

  div.style.background = lista[Math.floor(Math.random()* lista.length)];
}


function text1 (){
  var lista = ["#D9A438", "#D4C025","#87971E", "#547D03","#25860A", "#0B0B61","#5DAC61","#51B680","#519981", "#14544C", "#A1C4D7", "#0A2452","#867EAB", "#B43104", "#CEF6F5"];
  var div = document.getElementById("texto1");
  div.style.color= lista[Math.floor(Math.random()* lista.length)];
}


//puntajes jugador

function timer_estres_2 (){

function getSec(){
  if(status_jugador2.estres > 101) {
    alert('Fatality');
    status_jugador2.estres = 0;
  }
  if(status_jugador2.estres<10) return "0" + status_jugador2.estres
  return status_jugador2.estres
}
function main(){
  
  var time = getSec();
  $("#estres-circulo1").val(time).trigger('change');
  status_jugador2.estres++;
  if(status_jugador2.estres > 100) {
    clearInterval(interval)
    alert('Jugador 1 vencedor');
  }
}
var interval = setInterval(main,VELOCIDAD);
}

$(document).ready(function() {
  $('.dial2-3').knob({
    'min':0,
    'max':100,
    'width':100,
    'height':150,
    'displayInput':true,
    'fgColor':"black",
    'release':function(v) {$("p").text(v);},
    'readOnly':true
  }); 
});



function timer_cansancio_2 (){

function getSec(){
  if(status_jugador2.cansancio > 101) {
    status_jugador2.cansancio = 0
  }
  if(status_jugador2.cansancio<10) return "0" + status_jugador2.cansancio;
  return status_jugador2.cansancio
}
function main(){
  
  var time = getSec()

  $("#cansancio-circulo1").val(time).trigger('change');
  status_jugador2.cansancio++;
  if(status_jugador2.cansancio > 100) {
    clearInterval(interval)
    alert("Player one, win!")
  }
}
var interval = setInterval(main,VELOCIDAD)
}

$(document).ready(function() {
  $('.dial2-2').knob({
    'min':0,
    'max':100,
    'width':100,
    'height':150,
    'displayInput':true,
    'fgColor':"red",
    'release':function(v) {$("p").text(v);},
    'readOnly':true
  }); 
});


function timer_hambre_2(){

function getSec(){
  if(status_jugador2.hambre > 101) {
    status_jugador2.hambre = 0
    min++
  }
  if(status_jugador2.hambre<10) return "0" + status_jugador2.hambre
  return status_jugador2.hambre
}
function main(){
  
  var time = getSec()

  $("#hambre-circulo1").val(time).trigger('change');

  status_jugador2.hambre++
  if(status_jugador2.hambre > 100) {
    clearInterval(interval)
    alert("Jugador 1 ganaaaa!")
  }
}
var interval = setInterval(main,VELOCIDAD)
}

$(document).ready(function() {
  $('.dial2-1').knob({
    'min':0,
    'max':100,
    'width':100,
    'height':150,
    'displayInput':true,
    'fgColor':"green",
    'release':function(v) {$("p").text(v);},
    'readOnly':true
  }); 
});


function eligePalabra1(){
  var lista = ["verde", "azul", "rojo", "amarillo"]
  var palabraElegida =  lista[Math.floor(Math.random()* lista.length)]; 
  var x = $('#texto1').html(palabraElegida);
  status_jugador1.palabraActual = palabraElegida;
}

function eligePalabra2(){
  var lista = ["verde", "azul", "rojo", "amarillo"]
  var palabraElegida =  lista[Math.floor(Math.random()* lista.length)]; 
  var x = $('#texto2').html(palabraElegida);
  status_jugador2.palabraActual = palabraElegida;
}



function color2(){
  var lista = ["#F0A103", "#FFE102","#BFDC06", "#8CD300","#39FC02", "#27ED31","#FF00BF","#0EEB76","#03E398", "#02B29A", "#025178", "#3568C1","#413671", "#985EBB", "#ED31F0","#EB079F","#790A54","#E6066E","#E19BBC","#AC133A","#F80744","#B9272B"];
  var div = document.getElementById("rombo2");

  div.style.background = lista[Math.floor(Math.random()* lista.length)];
}


function text2 (){
  var lista = ["#D9A438", "#D4C025","#87971E", "#547D03","#25860A", "#0B0B61","#5DAC61","#51B680","#519981", "#14544C", "#A1C4D7", "#0A2452","#867EAB", "#B43104", "#CEF6F5"];
  var div = document.getElementById("texto2");



  
  div.style.color= lista[Math.floor(Math.random()* lista.length)];

}



//puntajes jugador2


function timer_estres_1(){

function getSec(){
  if(status_jugador1.estres > 101) {
    status_jugador1.estres = 0
    min++
  }
  if(status_jugador1.estres<10) return "0" + status_jugador1.estres
  return status_jugador1.estres
}
function main(){
  
  var time = getSec()
  
 
  var a = $('#tiempo2-1').html(time)
  $("#estres-circulo2").val(time).trigger('change');

  
  status_jugador1.estres++
  if(status_jugador1.estres > 100) {
    clearInterval(interval)
    alert("Gana jugador 2")
  }
}
var interval = setInterval(main,VELOCIDAD)
}

$(document).ready(function() {
  $('.dial1-3').knob({
    'min':0,
    'max':100,
    'width':100,
    'height':150,
    'displayInput':true,
    'fgColor':"black",
    'release':function(v) {$("p").text(v);},
    'readOnly':true
  }); 
});

function timer_cansancio_1(){


function getSec(){
  if(status_jugador1.cansancio > 101) {
    status_jugador1.cansancio = 0
    min++
  }
  if(status_jugador1.cansancio<10) return "0" + status_jugador1.cansancio
  return status_jugador1.cansancio
}
function main(){
  
  var time = getSec()

  var b = $('#tiempo2-2').html(time)
  $("#cansancio-circulo2").val(time).trigger('change');
  

  status_jugador1.cansancio++
  if(status_jugador1.cansancio > 100) {
    clearInterval(interval)
    alert("Jugador 2 vencedor!")
  }
}
var interval = setInterval(main,VELOCIDAD)
}

$(document).ready(function() {
  $('.dial1-2').knob({
    'min':0,
    'max':100,
    'width':100,
    'height':150,
    'displayInput':true,
    'fgColor':"red",
    'release':function(v) {$("p").text(v);},
    'readOnly':true
  }); 
});

function timer_hambre_1(){


function getSec(){
  if(status_jugador1.hambre > 101) {
    status_jugador1.hambre = 0
    min++
  }
  if(status_jugador1.hambre<10) return "0" + status_jugador1.hambre
  return status_jugador1.hambre
}
function main(){
  
  var time = getSec()

  $("#hambre-circulo2").val(time).trigger('change');
  status_jugador1.hambre++
  if(status_jugador1.hambre > 100) {
    clearInterval(interval)
    alert("Jugador 2 eres el ganador!");
  }
}
var interval = setInterval(main,VELOCIDAD)
}

$(document).ready(function() {
  $('.dial1-1').knob({
    'min':0,
    'max':100,
    'width':100,
    'height':150,
    'displayInput':true,
    'fgColor':"green",
    'release':function(v) {$("p").text(v);},
    'readOnly':true
  }); 
});

function cambia1(){
  text1();
  color1();
  eligePalabra1();
}
function cambia2(){
  text2();
  color2();
  eligePalabra2();
}
function start(){

  musica.play(); 
  timer_hambre_2();
  timer_cansancio_2 ();  
  timer_estres_2 ();
  timer_hambre_1();
  timer_cansancio_1();
  timer_estres_1();

  cambia1();
  cambia2();
}


