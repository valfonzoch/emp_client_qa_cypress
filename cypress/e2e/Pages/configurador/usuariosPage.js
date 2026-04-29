import Page from "../helper/page";

require("cypress-xpath");

export class Usuarios extends Page {

    solapaConf = "//body/div[@id='root']/div[1]/div[1]/div[1]/aside[1]/nav[1]/div[2]/div[1]/*[1]";
    listUsu = "//span[contains(text(),'Listado de usuarios')]";
    botonNvoUsuario = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/p[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[2]/div[1]/button[1]/span[1]";
    inputNombre = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]";
    inputApellidoUsuario = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/input[1]";
    inputNombreUsuario = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]/input[1]";
    despTipoDocXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]";
    cedulatipoDoc = "//body/div[@id='menu-']/div[3]/ul[1]/li[1]";
    inputNroDoc = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/div[1]/div[1]/input[1]";
    inputEmail = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[6]/div[1]/div[1]/input[1]";
    deslTipoUsuario ="//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]/div[1]/div[1]/div[1]/button[2]/span[1]/*[1]";
    gerente ="//li[@id='autocomplete-multiple-userType-option-1']";
    despAreaNegocio = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[9]/div[1]/div[1]/div[1]/div[1]/div[1]/button[2]/span[1]/*[1]";
    perNatural = "//li[@id='autocomplete-multiple-businessArea-option-1']";
    botonGuardarNvoUsuario = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/button[1]";
    buscadorUsuario = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/p[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/input[1]";
    editarUsuarios = "//tbody/tr[1]/td[4]/div[1]/a[2]/button[1]/span[1]/span[1]";
    editarNombre = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/input[1]";
    desactivarUsuario = "//tbody/tr[1]/td[4]/div[1]/button[1]/span[1]/span[1]";
    confirmarEliminacion = "//body/div[3]/div[3]/div[1]/button[2]";
  
      clickEnSolapaConf (){
        this.clickByXpathForce(this.solapaConf);
      };

      clickEnListadoUsuarios (){
        this.clickByXpathForce(this.listUsu);
      };

      clickEnBotonNvoUsuario (){
        this.clickByXpathForce(this.botonNvoUsuario);
      };

      escribirNombre(nombre) {
        this.typeByXpath(this.inputNombre, nombre);
      };

      escribirApellido(apellido) {
        this.typeByXpath(this.inputApellidoUsuario, apellido);
      };

      escribirNombreUsuario(escribirNombreUsuario) {
        this.typeByXpath(this.inputNombreUsuario, escribirNombreUsuario);
      };

      clickEnDesplegableTipoDoc (){
        this.clickByXpathForce(this.despTipoDocXpath);
      };

      clickEnCedulaTipoDoc (){
        this.clickByXpathForce(this.cedulatipoDoc);
      };

      escribirNumeroDoc(nroDoc) {
        this.typeByXpath(this.inputNroDoc, nroDoc);
      };

      escribirEmail(Email) {
        this.typeByXpath(this.inputEmail, Email);
      };

      clickEnDespTipoUsuario (){
        this.clickByXpathForce(this.deslTipoUsuario);
      };

      seleccionTipoUsuario (){
        this.clickByXpathForce(this.gerente);
      };

      clickEnDespAreaNegocio (){
        this.clickByXpathForce(this.despAreaNegocio);
      };

      seleccionAreaNegocio(){
        this.clickByXpathForce(this.perNatural);
      }

      clickEnBotonGuardarNvoUsuario (){
        this.clickByXpathForce(this.botonGuardarNvoUsuario);
      };

      escribirEnBuscadorNombreUsuario(nombre) {
        this.typeByXpath(this.buscadorUsuario, nombre);
      };

      clickEnIconoEdicion (){
        this.clickByXpathForce(this.editarUsuarios);
      };

      eidicionNombreUsuario(nombre) {
        this.sendKeyByXpath(this.editarNombre, nombre);
      };

      clickEnIconoBasura (){
        this.clickByXpathForce(this.desactivarUsuario);
      };

      clickConfirmarDesactivacion (){
        this.clickByXpathForce(this.confirmarEliminacion);
      };

}