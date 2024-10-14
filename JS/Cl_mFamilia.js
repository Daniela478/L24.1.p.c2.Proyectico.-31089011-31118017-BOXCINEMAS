export default class Cl_mFamilia { 

    constructor ({familia, personas, dia}) {
        this.familia = familia;
        this.personas = personas;
        this.dia = dia;
    }
    set familia(fA) { 
        this._familia = fA;
    }
    get familia() {
        return this._familia;
    }
    set personas(p) { 
        this._personas = +p;
    }
    get personas () { 
        return this._personas;
    }
    set dia (d) { 
        this._dia = +d;
    }
    get dia () { 
        return this._dia;
    }
    montoPagar() { 
        if (this.dia == 1) 
         return (this.personas * 3)/2;
        else 
            return (this.personas * 3);    
 }


}