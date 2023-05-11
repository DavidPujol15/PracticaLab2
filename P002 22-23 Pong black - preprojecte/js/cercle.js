class Cercle {
    constructor(puntPosicio, radi){
        this.puntPosicio = puntPosicio;
        this.radi = radi;

    }
    set colorCercle(color){
        this.color = color;
    }
    get area() {
       return Math.PI * Math.pow(this.radi,2);
    }
    puntInteriorCercle(punt){
        return (this.puntPosicio.distanciaDosPunts(this.puntPosicio,punt) < this.radi) ;
    }

    colisioCercles(cercle){
        return (Punt.distanciaDosPunts(
            this.puntPosicio,cercle.puntPosicio) < this.radi + cercle.radi);
    }

   draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.puntPosicio.x, this.puntPosicio.y, this.radi, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
    
    mou(x,y){
        this.puntPosicio.x += x;
        this.puntPosicio.y += y;
    }
}