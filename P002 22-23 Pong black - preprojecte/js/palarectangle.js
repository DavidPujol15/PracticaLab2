class PalaRectangle extends Rectangle{
    constructor(puntPosicio, amplada, alcada){
        super(puntPosicio, amplada, alcada);
        this.velocitatX = 2;
        this.velocitatY = 2;
        this.cocolorRectangle = "#eee";
    }

    mou(mouX,mouY){
        this.puntPosicio.x += x;
        this.puntPosicio.y += y;
    }
    update(key, alcada){
        if(key.DOWN.pressed){
         /********************************* 
         * Tasca. Definir el moviment de la pala
         * en funció de la telca premuda
        **********************************/
        }
        if(key.UP.pressed){
       /********************************* 
         * Tasca. Definir el moviment de la pala
         * en funció de la telca premuda
        **********************************/
        }
    }
    updateAuto(alcada){
        /********************************* 
         * Tasca. Definir el moviment de la pala
         * automàtica en moviment constant 
         * o amb variacions aleatories
        **********************************/

    }

}