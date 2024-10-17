
import Cl_mCine from "./Cl_mCine.js";
import Cl_mFamilia from "./Cl_mFamilia.js";

import Cl_vCine from "./Cl_vCine.js";
import  Cl_vFamilia from "./Cl_vFamilia.js";

export default class Cl_controlador {

    constructor (){
        this.mCine = new Cl_mCine(this);
        this.vFamilia = new Cl_vFamilia(this); 
        this.vCine = new Cl_vCine(this);      
    }

mostrarVistaFamilia() {//oculta la vista cine y muestra la vista familia
this.vCine.ocultarVCine();
this.vFamilia.mostrarVFamilia();
    }
    
mostrarVistaCine(){//oculta la vista familia y muestra la vista cine 
    this.vFamilia.ocultarVFamilia();
    this.vCine.mostrarVCine();
    }

agregarFamilia ({familia, personas, dia}) {
let family = new Cl_mFamilia  ({ familia, personas, dia });
this.mCine.procesarFamilia(family);
    this.vCine.reportarCine ({ 
        familia: family.familia, 
        personas: family.personas,
        dia: family.dia,
        montoPagar: family.montoPagar(),
        promLunes: this.mCine.promLunes(),
        totalCaja: this.mCine.totalCaja(),
        devolverAuxNombre: this.mCine.devolverAuxNombre(),
    });
    this.mostrarVistaCine(); 
    }
    
agregarCine( { dineroInicial } ) {
    this.mCine.dineroInicial = dineroInicial
};
} 