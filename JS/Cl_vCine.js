export default class Cl_vCine { 
    constructor (controlador){
    this.vista = document.getElementById("mainform");
    this.table = document.getElementById("mainform_table");
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
    reportarCine({
      familia,
      personas,
      día,
      monto,
      auxFamilia,
      promLunes,
      totalCaja,
    }) {
      this.table.innerHTML += `
      <tr>
      <td>${familia}</td>
      <td>${personas}</td>
      <td>${día}</td>
      <td>${monto}</td>
      </tr>`; 
    
      this.lblFamilia.innerHTML = auxFamilia;
      this.lblPromedio.innerHTML = promLunes;
      this.lblTotal.innerHTML = totalCaja;
    }
     
    
    } 