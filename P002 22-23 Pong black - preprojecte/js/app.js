//Variables i constants globals
//Main de l'aplicatiu
var joc;
let pantalla;
$(function(){

    let myCanvas = $("#joc")[0];
    let myCtx = myCanvas.getContext("2d");

    /********************************* 
     * Tasca. Inicialitza la classe JOC les posicions 
     * dels elements del joc
     * al canva: Pales, bola, etc
    **********************************/


    joc = new Joc(myCanvas,myCtx)
    joc.velocitat(1);
    joc.inicialitza();
    animacio();
})

function animacio(){
    joc.update();
    //Oportunitat per actualitzar les puntuacions
    //revisar si seguim jugant o no
    //Si pujem de nivell, etc

    //Crida recursiva per generar animació
    requestAnimationFrame(animacio);
}