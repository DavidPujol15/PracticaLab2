class Totxo{
    constructor(puntPosicio,w,h,color){
    this.posicio = puntPosicio;
    this.amplada=w; this.alcada=h;         
    this.color=color;
    }
    get area() {
        return this.amplada * this.alcada;
    }
    
    draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posicio.x, this.posicio.y, this.amplada, this.alcada);
        ctx.restore();
    }
    puntInteriorRectangle(punt){
        return (punt.x >= this.posicio.x &&
            punt.x <= this.posicio.x + this.amplada) &&
            (punt.y >= this.posicio.y &&
                punt.y<=this.posicio.y+this.alcada);
    }
};