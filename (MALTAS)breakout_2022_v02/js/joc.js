class Joc{
    constructor(canvas,ctx,nivell) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.amplada = canvas.width;
        this.alcada = canvas.height;
        this.totxoamplada = 120;
        this.totxoalcada = 20;
        this.totxocolor = "#0ad";
        this.bola = new Bola(new Punt(this.canvas.width/2,this.canvas.height/2),3,nivell);
        this.pala = new Pala(new Punt((this.canvas.width-60)/2,this.canvas.height-15),70,7);
        this.mur = new mur(nivell);
        this.mur.crearNivells(); 
        this.key = {
            LEFT:{code:37, pressed:false},
            RIGHT:{code:39, pressed:false},
            SPACE: {code:32, pressed:false}
        };
    }

    draw(){
        this.clearCanvas();
        this.pala.draw(this.ctx);
        this.bola.draw(this.ctx);
        this.mur.totxos.forEach(element => {element.draw(this.ctx)});
    }

    clearCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
    }

    inicialitza(){
        this.pala.draw(this.ctx);
        $(document).on("keydown",{joc:this}, function(e){
            if(e.keyCode == e.data.joc.key.LEFT.code){
                e.data.joc.key.LEFT.pressed = true;
            }
            else if(e.keyCode == e.data.joc.key.RIGHT.code){
                e.data.joc.key.RIGHT.pressed = true;
            }
            else if (e.keyCode == e.data.joc.key.SPACE.code){
                e.data.joc.key.SPACE.pressed = true;
            }
        });
        $(document).on("keyup", {joc:this}, function(e){
            if(e.keyCode == e.data.joc.key.RIGHT.code){
                e.data.joc.key.RIGHT.pressed = false;
            }
            else if(e.keyCode == e.data.joc.key.LEFT.code){
                e.data.joc.key.LEFT.pressed = false;
            }
            else if (e.keyCode == e.data.joc.key.SPACE.code){
                e.data.joc.key.SPACE.pressed = false;
            }
        });
        requestAnimationFrame(animacio);
    }

    update(){
        this.bola.update();
        this.pala.update();
        this.mur.totxos.forEach(element => {element.draw(this.ctx)});
        this.draw();
    }
    
}

function show(nivell){
    let n;
    $("#seleccio").fadeOut(300);
    $("#principal").fadeIn(3000);
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
}