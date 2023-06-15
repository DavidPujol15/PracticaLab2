class PalaRectangle extends Rectangle{
    constructor(puntPosicio, amplada, alcada){
        super(puntPosicio, amplada, alcada);
        this.velocitatY = 2;
        this.colorRectangle = "#eee";
    }

    mou(mouX,mouY){
        this.puntPosicio.x += x;
        this.puntPosicio.y += y;
    }
    update(key,alcada){
        if(key && key.DOWN && key.DOWN.pressed){
         /********************************* 
         * Tasca. Definir el moviment de la pala
         * en funció de la telca premuda
        **********************************/
            this.puntPosicio.y = Math.min(alcada-this.alcada,
                this.puntPosicio.y + this.velocitatY)
        }
        if(key && key.UP && key.UP.pressed){
       /********************************* 
         * Tasca. Definir el moviment de la pala
         * en funció de la telca premuda
        **********************************/
            this.puntPosicio.y = Math.max(0,this.puntPosicio.y - this.velocitatY)
        }
    }
    updateAuto(alcada){
        /*********************************
         * Tasca. Definir el moviment de la pala
         * automàtica en moviment constant
         * o amb variacions aleatories
        **********************************/
        const speed=1;
        if (!this.direction || this.puntPosicio.y <= 0) {
            this.direction = 1; // Establecer la dirección hacia abajo
        } else if (this.puntPosicio.y >= alcada - this.alcada) {
            this.direction = -1; // Establecer la dirección hacia arriba
        }
        // Mover la pala en la dirección actual
        this.puntPosicio.y += this.direction * speed;
    }
    ColocarAlMig(){
        this.puntPosicio.y=joc.alcada/3
    }
}