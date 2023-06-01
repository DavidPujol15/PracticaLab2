class Bola extends Rectangle {
    constructor(puntPosicio, amplada, alcada) {
        super(puntPosicio, amplada,alcada);       
        this.velocitatx = 2;
        this.velocitaty = 2;
        this.colorCercle = "#eee";
       
    };
    mou(mouX,mouY){
        this.puntPosicio.x += x;
        this.puntPosicio.y += y;
    }

    update(ampleCanva, altCanva, palaJugador, palaOrdinador){
    /********************************* 
     * Tasca. Actualitzar la posició de la bola tenin en compte
     * Si xoca o no amb els marges del canvas
     * Si xoca o no amb les pales dels jugadors 
    **********************************/  
       

    /********************************* 
     * Identifica el punt actual
     * Defineix el punt següent. On ha d'anar la bola
     * Definiex un SEGMENT que vagi del PuntActual al PuntSegüent
     * Revisar si xoca amb les vores del canvas 
     * Si xoca amb una vora superior o inferior, canviar el sentit i sortir
     * Si xoca amb una vora lateral, identificar punt aconseguit i reiniciar
     * Revisar si xoca amb una Pala
     * Si xoca, canviar el sentit en funció de si ha xocar
     * a dreta, esquerra, a dalt o a baix de la pala
     * canviar el sentit en funció d'on ha xocat i sortir
    **********************************/  
        let xoc = false; 

        let puntActual=this.puntPosicio;
        let puntSeguent = new Punt(this.puntPosicio.x + this.velocitatx,
                                this.puntPosicio.y+this.velocitaty);

        let segmentTrajectoria=new Segment(puntActual, puntSeguent);

     /********************************* 
     * Tasca. Revisar si xoca amb tots els marges del canva 
    **********************************/ 
        xoc = revisaXocTop(segmentTrajectoria);
        if(xoc){
              /********************************* 
             * Tasca. Revisar si xoca amb alguna pala i 
             * en quina vora de la pala xoca 
                **********************************/ 
            let xocPala = this.revisaXocPales(segmentTrajectoria,palaJugador, palaOrdinador);
            if(xocPala){
                xoc = true;
                 /********************************* 
                 * Tasca. Si xoca amb alguna pala 
                 * canviar el sentit en funció de si ha xocar
                * a dreta, esquerra, a dalt o a baix de la pala 
                * Poder heu de tenir en compte en quina pala s'ha produït el xoc
                **********************************/ 
                  switch(xocPala.vora){ 
                    case "vora??": //un case per cada situació
                        break; 
                    }
                }  
        }
        
        if(!xoc){
            //Si no hi ha xoc és mou on pertoca
            this.puntPosicio.x = segmentTrajectoria.puntB.x;
            this.puntPosicio.y = segmentTrajectoria.puntB.y;
         }
    }


        //Exemple de com identificar un xoc al marge superior
        //Com a paràmetre accepta un SEGMENT que heu de crear anteriorment
        //Fer un mètode per cada lateral que manca: esquerra, dret i inferior
        //El el cas dels laterals caldrà assignar puntuació i reiniciar un nou joc
        
        revisaXocTop(segmentTrajectoria){
            if(segmentTrajectoria.puntB.y <= 0){
                let exces = (segmentTrajectoria.puntB.y)/this.velocitaty;
                this.puntPosicio.x = segmentTrajectoria.puntB.x - exces*this.velocitatx;
                this.puntPosicio.y = 0;
                this.velocitaty = -this.velocitaty;
                return true;
            }
        }

        revisaXocBot(segmentTrajectoria){
            if(segmentTrajectoria.puntB.y + this.alcada >= altCanva){
                let exces = ((segmentTrajectoria.PuntB.y + this.alcada - altCanva)/this.velocitaty);
                this.puntPosicio.x = segmentTrajectoria.puntB.x - exces*this.velocitatx;
                this.puntPosicio.y = altCanva;
                this.velocitaty*=-1;
                return true;
            }
        }

        revisaXocLeft(segmentTrajectoria){
            if(segmentTrajectoria.puntB.x + this.amplada <= 0){
                let exces = ((segmentTrajectoria.PuntB.x + this.amplada)/this.velocitatx);
                this.puntPosicio.x = 0;
                this.puntPosicio.y = segmentTrajectoria.puntB.y - exces*this.velocitaty;
                return true;
            }
        }
        revisaXocRight(segmentTrajectoria){
            if(segmentTrajectoria.puntB.x + this.amplada >= ampladaCanva){
                let exces = ((segmentTrajectoria.PuntB.x + this.amplada - ampladaCanva)/this.velocitatx);
                this.puntPosicio.x = ampladaCanva;
                this.puntPosicio.y = segmentTrajectoria.puntB.y - exces*this.velocitaty;
                return true;
            }
        }
       
        
      
     /********************************* 
     * Tasca. Mètode que utilitza un objecte SEGMENT
     * i el seu mètode INTERSECCIOSEGMENTRECTANGLE per determinar
     * a quina vora del rectangle s'ha produït la col·lisió
     * i quin ha sigut el punt d'intersecció
     * Complemem la informació retornada amb la identificació
     * de quina pala (jugador o màquina) ha provocat el xoc
     * retorna PuntVora, que conté:
     * -El punt d'intersecció
     * -El costat de la pala on s'ha donat la col·lisió
     * -Un identificador de quina pala ha col.lisionat
    **********************************/ 

    revisaXocPales(segmentTrajectoria,palaJugador, palaOrdinador){
        let PuntVora 
        
        return PuntVora;
    }

   

  
}
