export default class Cl_mCine { 
    constructor( { dineroInicial } ){ 
        this.acumLunes = 0;
        this.contLunes = 0;
        this.auxMayor = 0;
        this.auxFamilia = "";
        this.acumTotal = 0;
        this.dineroInicial = dineroInicial;
    
}
set dineroInicial (d) { 
    this._dineroInicial = +d;
}
get dineroInicial () { 
    return this._dineroInicial;
}

    procesarFamilia (f) { 
        
        // familia que más pagó
        if (f.montoPagar() > this.auxMayor) { 
            this.auxMayor = f.montoPagar();
            this.auxFamilia = f.familia;
        }

        // acumulador de ventas lunes 

        if (f.dia == 1) {
        this.acumLunes += f.montoPagar();
        this.contLunes++;
        }

        // acumulador de todas las ventas
        this.acumTotal += f.montoPagar();
    }
    promLunes() {
        if (this.contLunes > 0)
            return (this.acumLunes/this.contLunes);
        else
        return 0;
     }
     totalCaja() { 
        return this.acumTotal + this.dineroInicial;
     }
     devolverAuxNombre() { 
        return this.auxFamilia;
     } 
}