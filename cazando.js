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
//Dibuja cualquier rectángulo utilizando fillStyle y fillRect
function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}
function graficarGato(){ 
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"#545454");
}
function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"#D40000");
}
//limpiar area de canvas
function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
//actualizar Pantalla
function actualizarPantalla(){
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

//mover izquierda
function moverIzquierda(){
    gatoX=gatoX-10;
    actualizarPantalla();
}
//mover derecha
function moverDerecha(){
    gatoX=gatoX+10;
    actualizarPantalla();
}
//mover abajo
function moverAbajo(){
    gatoY=gatoY+10;
    actualizarPantalla();
}
//mover arriba
function moverArriba(){
    gatoY=gatoY-10;
    actualizarPantalla();
}
//detectar colision
function detectarColision(){
    if(comidaX+ANCHO_COMIDA>gatoX &&
        comidaX<gatoX+ANCHO_GATO &&
        comidaY+ALTO_COMIDA>gatoY &&
        comidaY<gatoY+ALTO_GATO){
        alert("RRR MIAU");
    }
}