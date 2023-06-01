class Bola {
    constructor(puntPosicio, radi,nivell) {
        this.radi = radi;
        this.posicio = puntPosicio;
        this.vx = 0;
        this.vy = 0;
        this.color = "#000000";
        this.totxoamplada = 120;
        this.totxoalcada = 20;
        this.vida=3;
        this.puntuacio=0;
        this.nivell=nivell;
    };

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.posicio.x, this.posicio.y, this.radi, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
    mou(x,y){
        this.posicio.x += x;
        this.posicio.y += y;
    }
    update(){
        $("#numVides").html(this.vida);
        let puntActual = this.posicio;
        let puntSeguent= new Punt(this.posicio.x + this.vx,
                            this.posicio.y + this.vy);
        let trajectoria= new Segment(puntActual, puntSeguent);
        let exces;
        let xoc = false;

         //Xoc amb les cantonades del canvas
         // vora inferior regular i canviar vides
         if(trajectoria.puntB.y + this.radi > joc.alcada){
            exces= (trajectoria.puntB.y + this.radi - joc.alcada)/this.vy;
            this.posicio.x = trajectoria.puntB.x - exces*this.vx;
            this.posicio.y = joc.alcada - this.radi;
            this.vy = 0;
            this.vx = 0;
            xoc = true;
            joc.pala.ColocarAlMig();
            joc.bola.ColocarAlMigBola();
            this.vida--;
            $("#numVides").html(this.vida);
        }
        if(trajectoria.puntB.y - this.radi < 0){
            exces= (trajectoria.puntB.y - this.radi)/this.vy;
            this.posicio.x = trajectoria.puntB.x - exces*this.vx;
            this.posicio.y = this.radi;
            xoc = true;
            this.vy = -this.vy;

        }

        if(trajectoria.puntB.x +this.radi > joc.amplada){
            exces = (trajectoria.puntB.x + this.radi - joc.amplada)/this.vx;
            this.posicio.x = joc.amplada - this.radi;
            this.posicio.y = trajectoria.puntB.y -exces * this.vy;
            xoc = true;
            this.vx = -this.vx;
        }

        if(trajectoria.puntB.x -this.radi < 0){
            exces= (trajectoria.puntB.x -this.radi)/this.vx;
            this.posicio.x = this.radi;
            this.posicio.y = trajectoria.puntB.y -exces *this.vy;
            xoc = true;
            this.vx = -this.vx;
        }
        if (joc.key.SPACE.pressed && this.vx==0 && this.vy==0){
            this.vx = 2;
            this.vy = 4;
            this.posicio.x=this.radi;
            this.posicio.y=300;
        }

        for (let i=0; i<joc.mur.totxos.length;i++){
            if(joc.mur.totxos[i]!=null){
                let xocTotxo = this.interseccioSegmentRectangle(trajectoria, {
                    posicio: {x: joc.mur.totxos[i].posicio.x - this.radi, y: joc.mur.totxos[i].posicio.y - this.radi},
                    amplada: joc.mur.totxos[i].amplada + 2 * this.radi,
                    alcada: joc.mur.totxos[i].alcada + 2 * this.radi 
                });
                    
                if (xocTotxo){
                    xoc = true;
                    this.posicio.x = xocTotxo.pI.x;
                    this.posicio.y = xocTotxo.pI.y;
                    switch(xocTotxo.vora){
                        case "superior":
                        case "inferior": this.vy = -this.vy;
                            break;
                        case "esquerra":
                        case "dreta": this.vx = -this.vx;
                            break;
                    }
                    joc.mur.totxos[i]=new Totxo(new Punt(((999),999), 120, 20));
                    this.puntuacio++;
                    $("#numPunts").html(this.puntuacio);
                }
            }
        }
        let xocPala = this.interseccioSegmentRectangle(trajectoria, {
            posicio: {x: joc.pala.posicio.x - this.radi, y: joc.pala.posicio.y - this.radi},
            amplada: joc.pala.amplada + 2 * this.radi,
            alcada: joc.pala.alcada + 2 * this.radi 
        });

        if (xocPala){
            xoc=true;
            this.posicio.x=xocPala.pI.x;
            this.posicio.y=xocPala.pI.y;
            switch(xocPala.vora){
                case "superior": 
                case "inferior":this.vy = -this.vy;
                break;
                case "esquerra": 
                case "dreta":this.vx = -this.vx;
                break;
            }

        }
        if (this.nivell==0 && this.puntuacio==20){
            joc.pala.ColocarAlMig();
            joc.bola.ColocarAlMigBola();
            $("#principal").fadeOut(100);
            $("#vides").fadeOut(100);
            $("#puntuacio").fadeOut(100);
            $("#win").fadeIn(3000);
            
        }
        else if (this.nivell==1 && this.puntuacio==12){
            joc.pala.ColocarAlMig();
            joc.bola.ColocarAlMigBola();
            $("#principal").fadeOut(100);
            $("#vides").fadeOut(100);
            $("#puntuacio").fadeOut(100);
            $("#win").fadeIn(3000);
            
        }
        else if (this.nivell==2 && this.puntuacio==10){
            joc.pala.ColocarAlMig();
            joc.bola.ColocarAlMigBola();
            $("#principal").fadeOut(100);
            $("#vides").fadeOut(100);
            $("#puntuacio").fadeOut(100);
            $("#win").fadeIn(3000);
            
        }
        if (!xoc){
            this.posicio.x = trajectoria.puntB.x;
            this.posicio.y = trajectoria.puntB.y;
        } 
        
        if(this.vida==0){
            joc.pala.ColocarAlMig();
            joc.bola.ColocarAlMigBola();
            $("#principal").fadeOut(100);
            $("#vides").fadeOut(100);
            $("#puntuacio").fadeOut(100);
            $("#lose").fadeIn(3000);
            
        }         
    }
    ColocarAlMigBola(){
        this.posicio.x=joc.amplada/2;
        this.posicio.y=300;
    }

    interseccioSegmentRectangle(segment, rectangle){

        //REVISAR SI EXISTEIX UN PUNT D'INTERSECCIÓ EN UN DELS 4 SEGMENTS
        //SI EXISTEIX, QUIN ÉS AQUEST PUNT
        //si hi ha més d'un, el més ajustat
        let puntI;
        let distanciaI;
        let puntIMin;
        let distanciaIMin = Infinity;
        let voraI;

        //calcular punt d'intersecció amb les 4 vores del rectangle
        // necessitem coneixer els 4 segments del rectangle
        //vora superior
        let segmentVoraSuperior = new  Segment(rectangle.posicio,
            new Punt(rectangle.posicio.x + rectangle.amplada, rectangle.posicio.y));
        //vora inferior
        let segmentVoraInferior = new  Segment(
            new Punt(rectangle.posicio.x,
                    rectangle.posicio.y+rectangle.alcada),
            new Punt(rectangle.posicio.x + rectangle.amplada,
                rectangle.posicio.y+rectangle.alcada));

        //vora esquerra
        let segmentVoraEsquerra = new  Segment(rectangle.posicio,
            new Punt(rectangle.posicio.x , rectangle.posicio.y + rectangle.alcada));


        //vora dreta
        let segmentVoraDreta = new  Segment(
            new Punt(rectangle.posicio.x + rectangle.amplada,
                rectangle.posicio.y),
            new Punt(rectangle.posicio.x + rectangle.amplada,
                rectangle.posicio.y+rectangle.alcada));

      
     
        //vora superior
        puntI = segment.puntInterseccio(segmentVoraSuperior);
        if (puntI){
            //distancia entre dos punts, el punt inicial del segment i el punt d'intersecció
            distanciaI = Punt.distanciaDosPunts(segment.puntA,puntI);
            if (distanciaI < distanciaIMin){
                distanciaIMin = distanciaI;
                puntIMin = puntI;
                voraI = "superior";
            }
        }
        //vora inferior
        puntI = segment.puntInterseccio(segmentVoraInferior);
        if (puntI){
            //distancia entre dos punts, el punt inicial del segment i el punt d'intersecció
            distanciaI = Punt.distanciaDosPunts(segment.puntA,puntI);
            if (distanciaI < distanciaIMin){
                distanciaIMin = distanciaI;
                puntIMin = puntI;
                voraI = "inferior";
            }
        }
        //vora esquerra
        puntI = segment.puntInterseccio(segmentVoraEsquerra);
        if (puntI){
            //distancia entre dos punts, el punt inicial del segment i el punt d'intersecció
            distanciaI = Punt.distanciaDosPunts(segment.puntA,puntI);
            if (distanciaI < distanciaIMin){
                distanciaIMin = distanciaI;
                puntIMin = puntI;
                voraI = "esquerra";
            }
        }
        //vora dreta
        puntI = segment.puntInterseccio(segmentVoraDreta);
        if (puntI){
            //distancia entre dos punts, el punt inicial del segment i el punt d'intersecció
            distanciaI = Punt.distanciaDosPunts(segment.puntA,puntI);
            if (distanciaI < distanciaIMin){
                distanciaIMin = distanciaI;
                puntIMin = puntI;
                voraI = "dreta";
            }
        }

        if(voraI){
            return {pI: puntIMin, vora: voraI};
        }
    }
}

