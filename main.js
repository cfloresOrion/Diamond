function inicio2 (){
  var boton = document.getElementById("boton2")
  boton.addEventListener('click', cambiar2 ,);

}
function inicios2 (){
  var boton = document.getElementById("boton2")
  addEventListener('click', text2 ,);

}
function inicioss2 (){
  var boton = document.getElementById("boton2")
  addEventListener('click', pala ,);

}







$(document).ready(function(){

  $('#boton2').on('click',function(){

    var lista = ["verde", "azul", "rojo", "amarillo","ROJO","AMARILLO","VERDE","AZUL"]
    var palabraElegida =  lista[Math.floor(Math.random()* lista.length)]; 
  

  var x = $('#texto2').html(palabraElegida);
  })

})



function cambiar2 (){
  var lista = ["#F0A103", "#FFE102","#BFDC06", "#8CD300","#39FC02", "#27ED31","#FF00BF","#0EEB76","#03E398", "#02B29A", "#025178", "#3568C1","#413671", "#985EBB", "#ED31F0","#EB079F","#790A54","#E6066E","#E19BBC","#AC133A","#F80744","#B9272B"];
  var div = document.getElementById("oval-half-red2 ");

  div.style.background = lista[Math.floor(Math.random()* lista.length)];
}


function text2 (){
  var lista = ["#D9A438", "#D4C025","#87971E", "#547D03","#25860A", "#0B0B61","#5DAC61","#51B680","#519981", "#14544C", "#A1C4D7", "#0A2452","#867EAB", "#B43104", "#CEF6F5"];
  var div = document.getElementById("texto2");



  
  div.style.color= lista[Math.floor(Math.random()* lista.length)];

}









inicio2 ();

inicios2 ();



$(document).ready(function() {
  $('.dial').knob({
    'min':0,
    'max':100,
    'width':150,
    'height':250,
    'displayInput':true,
    'fgColor':"blue",
    'release':function(v) {$("p").text(v);},
    'readOnly':false
  }); 
});