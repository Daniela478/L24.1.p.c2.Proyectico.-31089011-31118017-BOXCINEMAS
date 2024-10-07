import {Cl_mFamilia} from "./Cl_mFamilia.js";
export default class Cl_mCine { 
    constructor(acumlunes, contlunes, mayor, auxfamilia, acumtotal, dinero){ 
        this.acumLunes = 0;
        this.contLunes = 0;
        this.auxMayor = 0;
        this.auxfamilia = "";
        this.acumTotal = 0;
        this.dineroInicial = 0;
    }
    procesarFamilia (f) { 
        
        // familia que más pagó
        if (f.montoPagar() > this.auxMayor) { 
            this.mayor = f.montoPagar();
            this.auxfamilia = f.familia;
        }

        // acumulador de ventas lunes 

        if (f.dia == 1) {
        this.acumLunes =+ f.montoPagar();
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
        return (this.acumTotal + this.dineroInicial);
     }
     devolverAuxNombre() { 
        return this.auxMayor;
     } 
}