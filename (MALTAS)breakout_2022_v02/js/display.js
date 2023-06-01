class display{
    constructor(ctx){
        this.ctx=ctx;
        this.amplada=10;
        this.alcada=3;
    }
    drawVida(ctx,posicioX,posicioY) {
        ctx.save();
        ctx.fillStyle = "#251685";
        ctx.fillRect(this.posicio.x, this.posicio.y, this.amplada, this.alcada);
        ctx.restore();
    }
    crearvides(nVides){
        if (nVides==null){
            nVides=3;
            let x=0,y=400;
            for (let i=0; i<nVides; i++){
                this.drawVida(this.ctx,x,y);
                x+=10;
            }
        }
        
    }
}