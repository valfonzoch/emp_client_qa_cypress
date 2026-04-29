import Page from "../helper/page";

require("cypress-xpath");

export class Jeraraquia extends Page {

    solapaJeraraquia = "//header/div[1]/div[2]/div[1]/button[3]";
    botonAgregar = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[3]/div[1]/p[1]/div[1]/div[1]/ul[1]/li[1]/ul[1]/li[1]/ul[1]/li[1]/ul[1]/li[1]/ul[1]/li[2]/div[1]/div[2]/button[1]/span[1]";
    continuarAgre = "//body/div[3]/div[3]/div[1]/div[3]/button[2]/span[1]";
    nombreDepart = "//body/div[3]/div[3]/form[1]/div[1]/div[1]/div[2]/div[1]/input[1]";
    tipoDepart = "//body/div[3]/div[3]/form[1]/div[1]/div[1]/div[3]/div[1]/input[1]";
    incluirGeo = "//body/div[3]/div[3]/form[1]/div[1]/div[2]/label[1]/span[1]/span[1]/span[1]/input[1]";
    checkSucursal = "//body/div[3]/div[3]/form[1]/div[1]/div[2]/div[1]/label[1]/span[1]/span[1]/input[1]";
    sitioSucursal = "//body/div[3]/div[3]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]";
    caracasVen = "//body/div[3]/div[3]/form[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]";
    agregarUsu = "//body/div[3]/div[3]/form[1]/div[1]/button[1]/span[1]";
    buscarUsu = "//input[@id='input-search-drawer']";
    primeraOpcion = "//body/div[4]/div[3]/div[1]/div[2]/div[2]/ul[1]/div[1]";
    salirModalUsu = "//body/div[4]/div[3]/div[1]/div[1]/h2[1]/button[1]";
    agregarDepart = "//body/div[3]/div[3]/form[1]/div[2]/button[2]";
    botonDetalle = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[3]/div[1]/p[1]/div[1]/div[1]/ul[1]/li[1]/ul[1]/li[1]/ul[1]/li[1]/ul[1]/li[1]/ul[1]/li[2]/ul[1]/li[1]/div[1]/div[1]/p[1]/*[1]";
    editarDepart = "/html[1]/body[1]/div[3]/div[3]/p[1]";  
    guardarEdicion2 = '.MuiButton-contained-378';

    edicionNombre = "//body/div[4]/div[3]/form[1]/div[1]/div[1]/div[2]/div[1]/input[1]"; //no lo localiza el elemento hace referencia que tiene otro elemento por encima que no permite interactuar con e´l
    checkGepgrafia = "//body/div[4]/div[3]/form[1]/div[1]/div[2]/label[1]/span[1]/span[1]/span[1]/input[1]";
    botConfirmarEdi = "//span[contains(text(),'Si, guardar')]";
    botonConfirmarEdi2 = '.styles-module__hierarchyActionButtons__btns___3ksA9 > .MuiButton-contained-378 > .MuiButton-label-371';// No siempre puede interactuar con él
    eliminarDepa = "//body/div[@id='mouse-click-popover']/div[3]/p[2]";
    confirmarElim = "//body/div[4]/div[3]/div[1]/button[2]/span[1]";


   
      clickEnSolapaJerarquia(){
        this.clickByXpathForce(this.solapaJeraraquia);
      };

      clickEnAgregarDepartamento(){
        this.clickByXpathForce(this.botonAgregar);
      };

      clickEnConfirmarNvoDepartamento(){
        this.clickByXpathForce(this.continuarAgre);
      };

      escribirNombreDepartamento(nombre){
        this.typeByXpath(this.nombreDepart, nombre);
      };

      escribirTipoDepartamento(tipo){
        this.typeByXpath(this.tipoDepart, tipo);
      };

      clickEnIncluirGeografia(){
        this.clickByXpathForce(this.incluirGeo);
      };

      clickEnCheckSucursal(){
        this.clickByXpathForce(this.checkSucursal);
      };

      escribirDireccionSucursal(direccion){
        this.typeByXpath(this.sitioSucursal, direccion);
      };

      seleccionarSucursal(){
        this.clickByXpathForce(this.caracasVen);
      };

      clickEnAgregarUsuario(){
        this.clickByXpathForce(this.agregarUsu);
      };

      seleccionarUsuario(){
        this.clickByXpathForce(this.primeraOpcion);
      };

      salirDelModal(esc){
        this.typeByXpath(this.primeraOpcion, esc);
      };

      clickEnGuardarDepartamento(){
        this.clickByXpathForce(this.agregarDepart);
      };

      clickEnBotonDetalle(){
        this.clickByXpathForce(this.botonDetalle);
      };

      clickEnEditarDepartamento(){
        this.clickByXpathForce(this.editarDepart);
      };

      editarNombreDepartamento(nombre){
        this.typeByXpath(this.editarDepart, nombre);
      };

      clickEnCheckIncluirGeograf(){
        this.clickByXpathForce(this.checkGepgrafia);
      };

      dobleClickEnGuardarCambios(){
      this.inovokeClickByElement(this.guardarEdicion2);
       // this.doubleClickByElement(this.guardarEdicion2);
      };

      clickEnBotConfirmarEdicion(){
        this.clickByElement(this.botonConfirmarEdi2);
      };

      clickEnEliminarDepa(){
        this.clickByXpathForce(this.eliminarDepa);
      };

      clickEnConfirmarEliminacion(){
        this.clickByXpathForce(this.confirmarElim);
      };

}