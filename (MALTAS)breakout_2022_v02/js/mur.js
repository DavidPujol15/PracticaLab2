
class mur{
    constructor (nivell){
        this.defineixNivells();
        this.nivell=this.nivells[nivell];
        this.totxos=[]; 
    }
    
    defineixNivells(){
        this.nivells = [
            {
                totxos:[
                    "aaaaa",
                    "bbbbb",
                    "ccccc",
                    "ddddd"
                ]
            },
            {
                totxos:[
                    "  e  ",
                    " fff ",
                    "ggggg",
                    " hhh "
                ]
            },
            {
                totxos:[
                    "i   i",
                    " jjj ",
                    "kk kk",
                    "  l  "
                ]
            }
        ]
    }

    crearNivells(){
        let espaiX=50;
        let espaiY=10;
        for (let z=0; z<this.nivell.totxos.length; z++){
            for (let i=0; i<5; i++){
                if (this.nivell.totxos[z].charAt(i)!=" "){
                    this.totxos[(z*5)+i]= new Totxo(new Punt(((i*130)+espaiX),espaiY), 120, 20, this.comprobarColors(this.nivell.totxos[z].charAt(i)));
                } 
            }
            espaiY+=40;
        }
    }
    comprobarColors(color){
        switch(color){
            case "a": return "#FFFF00"; break;
            case "b": return "#FF3300"; break;
            case "c": return "#CC0000"; break;
            case "d": return "#66FF00"; break;
            case "e": return "#66FFFF"; break;
            case "f": return "#000000"; break;
            case "g": return "#FF3366"; break;
            case "h": return "#CCCC99"; break;
            case "i": return "#99CC66"; break;
            case "j": return "#990066"; break;
            case "k": return "#009933"; break;
            case "l": return "#330099"; break;
        }
    }
}

/*
    TO-DO
    - crear div de vides, en format vides restants
    - Crear div de puntuacio
    - Detectar quan toca la part de baix
*/