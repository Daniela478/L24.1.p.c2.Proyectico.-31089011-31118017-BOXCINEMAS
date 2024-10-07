export class Cl_vCine { 
    constructor (controlador){
    this.vista = document.getElementById("mainform");
    this.tabla = document.getElementById("mainform_table");
    this.lblFamilia = document.getElementById("mainform_lblFamilia");
    this.lblPromedio = document.getElementById("main_lblPromedio");
    this.lblTotal = document.getElementById("mainform_lblTotal");
    this.btAgregar = document.getElementById("mainform_btAgregar");
    this.btAgregar.onclick = () => controlador.mostrarVFamilia();
    }
    //verificar reportarCine
    reportarCine({
      acumlunes, 
      contlunes, 
      auxMayor, 
      devolverAuxNombre, 
      acumtotal, 
      dineroInicial,
      totalCaja,
      promLunes
    }) {
      this.tabla.innerHTML += `
      <tr>
      <td>${Familia}</td>
      <td>${Personas}</td>
      <td>${Día}</td>
      <td>${Monto}</td>
      </tr>`; 
    
      this.lblFamilia.innerHTML = auxFamilia;
      this.lblPromdeio.innerHTML = promLunes;
      this.lbltotal.innerHTML =totalCaja;
    }
      mostrarVCine(){
        this.vista.hidden = false;
        }
    
      ocultarVCine(){
        this.vista.hidden = true;
        }
    
    } 