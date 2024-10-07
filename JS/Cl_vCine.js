export default class Cl_vCine { 
    constructor (controlador){
    this.vista = document.getElementById("mainform");
    this.tabla = document.getElementById("mainform_table");
    this.lblFamilia = document.getElementById("mainform_lblFamilia");
    this.lblPromedio = document.getElementById("main_lblPromedio");
    this.lblTotal = document.getElementById("mainform_lblTotal");
    this.btAgregar = document.getElementById("mainform_btAgregar");
    this.btAgregar.onclick = () => controlador.mostrarVistaFamilia();
    }
    mostrarVCine(){
      this.vista.hidden = false;
      }
  
    ocultarVCine(){
      this.vista.hidden = true;
      }
    //verificar reportarCine
    reportarCine ({
      acumLunes, 
      contLunes, 
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
      this.lblPromedio.innerHTML = promLunes;
      this.lblTotal.innerHTML = totalCaja;
    }
     
    
    } 