class Joc{
    constructor(myCanvas, myCtx){
        this.myCanvas = myCanvas;
        this.myCtx = myCtx;
        this.amplada = myCanvas.width;
        this.alcada = myCanvas.height;
        this.velocitatJoc=1;

        //Elements del joc
        /********************************* 
         * Tasca. Crear els elements del joc
         * Pales, bola, etc
        **********************************/
        this.palaJugador=new PalaRectangle(new Punt(15,this.alcada/3),7,30);
        this.palaOrdinador = new PalaRectangle(new Punt(this.amplada-15,this.alcada/3),7,30);
        this.bola = new Bola(new Punt(this.amplada/2,this.alcada/2),10,10);


        //Tecles de control
        //tecles del Joc. Només fem servir up i down
        this.key = {
            RIGHT: {code: 39, pressed: false},
            LEFT: {code: 37, pressed: false},
            DOWN: {code: 40, pressed: false},
            UP: {code: 38, pressed: false}
        }
    }

    set velocitat(velocitatJoc){
        this.velocitatJoc = velocitatJoc;
    }

    inicialitza(){
        $(document).on("keydown",{joc:this}, function(e){
            if(e.keyCode == e.data.joc.key.UP.code){
                e.data.joc.key.UP.pressed = true;
            }
            else if(e.keyCode == e.data.joc.key.DOWN.code){
                e.data.joc.key.DOWN.pressed = true;
            }
        });
        $(document).on("keyup", {joc:this}, function(e){
            if(e.keyCode == e.data.joc.key.UP.code){
                e.data.joc.key.UP.pressed = false;
            }
            else if(e.keyCode == e.data.joc.key.DOWN.code){
                e.data.joc.key.DOWN.pressed = false;
            }
        });

          /********************************* 
         * Tasca. Dibuixar inicialment els elements del joc
         * al canva: Pales, bola, etc
        **********************************/

        this.palaOrdinador.draw(this.myCtx)
        this.palaJugador.draw(this.myCtx)
        this.bola.draw(this.myCtx)
        //Màtode de crida recursiva per generar l'animació dels objectes
        requestAnimationFrame(animacio);
    }

    update(){
          /********************************* 
         * Tasca. Actualitzar les posicions 
         * dels elements del joc
         * al canva: Pales, bola, etc
        **********************************/      
        this.draw();
        this.palaOrdinador.updateAuto(this.alcada,this.velocitatJoc);
        this.palaJugador.update(this.key,this.alcada);
        this.bola.update(this.amplada,this.alcada,this.palaJugador,this.palaOrdinador);
    }

    draw(){
        this.clearCanvas();
        /********************************* 
         * Tasca. Dibuixar els elements del joc
         * al canva, un cop actualitzades
         * les seves posicions: Pales, bola, etc
        **********************************/
        this.palaOrdinador.draw(this.myCtx);
        this.palaJugador.draw(this.myCtx);
        this.bola.draw(this.myCtx)
        
    }
    //Neteja el canvas
    clearCanvas(){
        this.myCtx.clearRect(
            0,0,
            this.amplada, this.alcada
        )
    }


}