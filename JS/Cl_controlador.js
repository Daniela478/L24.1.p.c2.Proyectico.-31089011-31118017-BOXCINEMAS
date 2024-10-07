import Cl_mCine from "./Cl_mCine,js";
import  Cl_mFamilia from "./Cl_mFamilia,js";
import  Cl_vCine from "./Cl_vCine,js";
import  Cl_vFamilia from "./Cl_vFamilia,js";
export default class Cl_controlador{

    constructor (){
        this.mCine = new this.Cl_mCine();
        this.vCine = new this.Cl_mCine(this);      // Se envía acceso al controlador 
        this.vFamilia = new this.Cl_vFamilia(this); // (this) para que cada vista pueda invocar sus métodos
    }

mostrarVistaFamilia() {//oculta la vista cine y muestra la vista familia
this.vCine.ocultar();
this.vFamilia.mostrar();
    }
    
mostrarVistaCine(){//oculta la vista familia y muestra la vista cine 
    this.vFamilia.Ocultar();
    this.vCine.mostrar();
    }

    agregarFamilia ({ familia, personas, dia }) {
        let family = new Cl_mFamilia  ({ familia, personas, dia });
        this.mCine.procesarFamilia (family);
        this.vCine.reportarFamilia ({ 
            familia: family.familia, // creo que el famlia del medio debería ser family pero no estoy segura
            personas: family.personas,
            dia: family.dia,
            montoPagar: family.montoPagar(),
            promLunes: this.mCine.promLunes(),
            totalCaja: this.mCine.totalCaja(),
            devolverAuxNombre: this.mCine.devolverAuxNombre(),
        });
        this.mostrarVistaCine(); 
    }
//5
} 