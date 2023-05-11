class Rectangle {
    constructor(puntPosicio, amplada, alcada){
        this.puntPosicio = puntPosicio;
        this.amplada = amplada;
        this.alcada = alcada;
    }
    set colorRectangle(color){
        this.color = color;
    }
    get area() {
        return this.amplada * this.alcada;
    }
    puntInteriorRectangle(punt){
        return (punt.x >= this.puntPosicio.x &&
            punt.x <= this.puntPosicio.x + this.amplada) &&
            (punt.y >= this.puntPosicio.y &&
                punt.y<=this.puntPosicio.y+this.alcada);
    }

    colisioRectangle(rectangle){
        return !(this.puntPosicio.x + this.amplada < rectangle.puntPosicio.x ||
            this.puntPosicio.x > rectangle.puntPosicio.x + rectangle.amplada||
            this.puntPosicio.y + this.alcada < rectangle.puntPosicio.y ||
            this.puntPosicio.y > rectangle.puntPosicio.y + rectangle.alcada  );
    }
    draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.puntPosicio.x, this.puntPosicio.y, this.amplada, this.alcada);
        ctx.stroke();
        ctx.restore();

    }
   
    mou(x,y){
        this.puntPosicio.x += x;
        this.puntPosicio.y += y;
    }

}