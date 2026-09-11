let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

function graficarGato(){
    const MITAD_ANCHO=canvas.width/2;
    const MITAD_ALTO=canvas.height/2;
    let cuadrado=40;
    ctx.fillStyle="#F54927";
    ctx.fillRect(MITAD_ANCHO-cuadrado/2,MITAD_ALTO-cuadrado/2,cuadrado,cuadrado);   
}