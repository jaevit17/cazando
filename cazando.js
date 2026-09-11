let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
//Variables inicializadas en 0
let gatoX=0;
let gatoY=0;
let comidaX=0;
let comidaY=0;
//Constantes
const ALTO_GATO=55;
const ANCHO_GATO=40;
const ALTO_COMIDA=15;
const ANCHO_COMIDA=35;

function iniciarJuego(){
    //Gato centrado
    gatoX=canvas.width/2-ANCHO_GATO/2;
    gatoY=canvas.height/2-ALTO_GATO/2;
    //Comida en esquina inferior derecha
    comidaX=canvas.width-ANCHO_COMIDA;
    comidaY=canvas.height-ALTO_COMIDA;
    graficarGato();
    graficarComida();
}

function graficarGato(){
    ctx.fillStyle="#545454";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);   
}
function graficarComida(){
    ctx.fillStyle="#D40000";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
}