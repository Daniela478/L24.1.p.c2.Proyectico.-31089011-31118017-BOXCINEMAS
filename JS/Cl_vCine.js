export default class Cl_vCine { 
  constructor (controlador){
  this.vista = document.getElementById("mainform");
  this.table = document.getElementById("mainform_table");
  this.lblFamilia = document.getElementById("mainform_lblFamilia");
  this.lblPromedio = document.getElementById("main_lblPromedio");
  this.lblTotal = document.getElementById("mainform_lblTotal");
  this.inDineroInicial = document.getElementById("mainform_inDineroInicial")
  this.btAgregar = document.getElementById("mainform_btAgregar");
  this.btAceptar = document.getElementById("mainform_btAceptar");
  
    this.btAceptar.onclick = () =>
      controlador.agregarCine({
      dineroInicial: this.inDineroInicial.value,
      });    

    this.btAgregar.onclick = () => 
      controlador.mostrarVistaFamilia();
    } 
  mostrarVCine(){
    this.vista.hidden = false;
    }

  ocultarVCine(){
    this.vista.hidden = true;
    }
  
  reportarCine({
    familia,
    personas,
    dia,
    montoPagar,
    devolverAuxNombre,
    promLunes,
    totalCaja,
  }) {
    this.table.innerHTML += `
    <tr>
    <td>${familia}</td>
    <td>${personas}</td>
    <td>${dia}</td>
    <td>${montoPagar}</td>
    </tr>`; 
  
    this.lblFamilia.innerHTML = devolverAuxNombre;
    this.lblPromedio.innerHTML = promLunes;
    this.lblTotal.innerHTML = totalCaja;
  }    
  } 