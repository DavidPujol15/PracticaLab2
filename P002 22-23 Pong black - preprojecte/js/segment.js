class Segment{
    constructor(puntA, puntB){
        this.puntA = puntA;
        this.puntB = puntB;
        this.color = "#3F3";
    }
    set colorSegment(color){
        this.color = color;
    }
    draw(ctx) {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.puntA.x, this.puntA.y);
        ctx.lineTo(this.puntB.x, this.puntB.y);
        ctx.stroke();
    }

    /************************************************ 
    INTERSECCIÓ SEGMENT - RECTANGLE
    Identifica la col·lisió de la bola amb un rectangle a partir de la trajectoria
    de la bola i de la posició del rectangle
    */

    interseccioSegmentRectangle(rectangle){
        //calcular punt d'intersecció amb les 4 vores del rectangle
        // necessitem coneixer els 4 segments del rectangle

        //vora superior
        let segmentVoraSuperior = new  Segment(rectangle.puntPosicio,
            new Punt(rectangle.puntPosicio.x + rectangle.amplada, rectangle.puntPosicio.y));

        //vora inferior
        let segmentVoraInferior = new  Segment(
            new Punt(rectangle.puntPosicio.x,
                    rectangle.puntPosicio.y+rectangle.alcada),
            new Punt(rectangle.puntPosicio.x + rectangle.amplada,
                rectangle.puntPosicio.y+rectangle.alcada));

        //vora esquerra
        let segmentVoraEsquerra = new  Segment(rectangle.puntPosicio,
            new Punt(rectangle.puntPosicio.x , rectangle.puntPosicio.y + rectangle.alcada));


        //vora dreta
        let segmentVoraDreta = new  Segment(
            new Punt(rectangle.puntPosicio.x + rectangle.amplada,
                rectangle.puntPosicio.y),
            new Punt(rectangle.puntPosicio.x + rectangle.amplada,
                rectangle.puntPosicio.y+rectangle.alcada));

        //2n REVISAR SI EXISTEIX UN PUNT D'INTERSECCIÓ EN UN DELS 4 SEGMENTS
        //SI EXISTEIX, QUIN ÉS AQUEST PUNT
        //si hi ha més d'n, el més ajustat
        let puntI;
        let distanciaI;
        let puntIMin;
        let distanciaIMin = Infinity;
        let voraI;



        //vora superior
        puntI = this.puntInterseccio(segmentVoraSuperior);
        if (puntI){
            //distancia entre dos punts, el punt inicial del segment i el punt d'intersecció
            distanciaI = Punt.distanciaDosPunts(this.puntA,puntI);
            if (distanciaI < distanciaIMin){
                distanciaIMin = distanciaI;
                puntIMin = puntI;
                voraI = "superior";
            }
        }
        /********************************* 
         * Tasca. Replicar la identificació del punt 
         * d'intersecció per a cada vora
        **********************************/
        //vora inferior
        
        //vora esquerra
        
        //vora dreta
       

        if(voraI){
            //Objecte que retorna e punt d'intersecció i en quina vora 
            //hem xocat (dreta, esquerra, superior, inferior)
            return {pI: puntIMin, vora: voraI};
        }
    }




     //retorna un punt d'intersecció entre dos segments. Null si no existeix
     puntInterseccio(segment){


        if (this.esTallen(segment)){
            // converteix segment1 a la forma general de recta: Ax+By = C
            var a1 = this.puntB.y - this.puntA.y;
            var b1 = this.puntA.x -  this.puntB.x;
            var c1 = a1 * this.puntA.x + b1 * this.puntA.y;

            // converteix segment2 a la forma general de recta: Ax+By = C
            var a2 = segment.puntB.y - segment.puntA.y;
            var b2 = segment.puntA.x - segment.puntB.x;
            var c2 = a2 * segment.puntA.x + b2 * segment.puntA.y;

            //Punt interssecció 2 rectes
            // calculem el punt intersecció
            var d = a1*b2 - a2*b1;
            // línies paral·leles quan d és 0
            if (d != 0) {

                var x = (b2 * c1 - b1 * c2) / d;
                var y = (a1 * c2 - a2 * c1) / d;
                var puntInterseccio = new Punt(x, y);	// aquest punt pertany a les dues rectes

                return puntInterseccio;

            }
        }

    }
    esTallen (segment){
        let s1p1 = this.puntA;
        let s1p2 = this.puntB;
        let s2p1 = segment.puntA;
        let s2p2 = segment.puntB;

        function control(punta, puntb, puntc){
            return(puntb.y-punta.y)*(puntc.x-punta.x)<(puntc.y-punta.y)*(puntb.x-punta.x);
        }
        return (control(s1p1,s1p2,s2p1) != control(s1p1,s1p2,s2p2) &&
                    control(s1p1,s2p1,s2p2) != control(s1p2,s2p1,s2p2));

    }
}