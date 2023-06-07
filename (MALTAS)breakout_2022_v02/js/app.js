function animacio() {
    joc.update();
    requestAnimationFrame(animacio);
}

function show(nivell){
    let n;
    $("#seleccio").fadeOut(300);
    $("#principal").fadeIn(3000);
    $("#vides").fadeIn(3000);
    $("#puntuacio").fadeIn(3000);
    console.log($(nivell).attr("id"));
    if ($(nivell).attr("id")=="Nivell1"){
        n=0;
    } 
    else if ($(nivell).attr("id")=="Nivell2") {
        n=1;
    } 
    else if ($(nivell).attr("id")=="Nivell3"){
        n=2;
    }
    let myCanvas = document.getElementById("joc");
    let ctx = myCanvas.getContext("2d");
    joc = new Joc(myCanvas,ctx,n);
    let pantalla = new display(ctx);
    joc.velocitat=1;
    joc.inicialitza();
} 
