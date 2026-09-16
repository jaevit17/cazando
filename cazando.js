let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
//Variables inicializadas en 0
let gatoX=0;
let gatoY=0;
let comidaX=0;
let comidaY=0;
let puntaje=0;
let tiempo=10;
let conteo=1000;//1000 milisegundos = 1 segundo
let cuentaRegresiva;
//Constantes
const ALTO_GATO=160;
const ANCHO_GATO=160;
const ALTO_COMIDA=45;
const ANCHO_COMIDA=75;

function iniciarJuego(){
    cuentaRegresiva=setInterval(restarTiempo,conteo);
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
    gatoX=gatoX-40;
    actualizarPantalla();
}
//mover derecha
function moverDerecha(){
    gatoX=gatoX+40;
    actualizarPantalla();
}
//mover abajo
function moverAbajo(){
    gatoY=gatoY+40;
    actualizarPantalla();
}
//mover arriba
function moverArriba(){
    gatoY=gatoY-40;
    actualizarPantalla();
}
//detectar colision
function detectarColision(){
    if(comidaX+ANCHO_COMIDA>gatoX &&
        comidaX<gatoX+ANCHO_GATO &&
        comidaY+ALTO_COMIDA>gatoY &&
        comidaY<gatoY+ALTO_GATO){
        //Genera posicion aleatoria para posicion comida
        //Evitamos que aparezca fuera del canvas al restar ancho y alto
        comidaX=generarAleatorio(0,canvas.width-ANCHO_COMIDA);
        comidaY=generarAleatorio(0,canvas.height-ALTO_COMIDA);
        actualizarPantalla();
        puntaje=puntaje+1;
        mostrarEnSpan("puntos",puntaje);
    }
    //Puntaje 6 = alert GANADOR
    if(puntaje==6){
        alert("😸LOGRASTE COMERTE TODO!█▓▒░ GΛNΛDØR ░▒▓█ , ERES DE LOS MEJORES FELINOS ¡FELICIDADES GANADOR!! 🏆");
        //detener setInterval
        clearInterval(cuentaRegresiva);
    }
}
//cuenta regresiva de tiempo
function restarTiempo(){
    tiempo=tiempo-1;
    mostrarEnSpan("tiempo",tiempo);
    //Tiempo = 0 alert GAMEOVER
    if(tiempo==0){
        alert("█▓▒░ GΛME ØVER ░▒▓█ NO TE CANSES DE COMER HOY!");
        //detener setInterval
        clearInterval(cuentaRegresiva);
    }
}
function reiniciar(){
    limpiarCanva();
    clearInterval(cuentaRegresiva);
    conteo=1000;
    puntaje=0;
    tiempo=10;
    mostrarEnSpan("puntos",puntaje);
    mostrarEnSpan("tiempo",tiempo);
    iniciarJuego();
}