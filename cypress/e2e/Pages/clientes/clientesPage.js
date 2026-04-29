import Page from "../helper/page";

require("cypress-xpath");

export class Clientes extends Page {

  solapaClientesXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/aside[1]/nav[1]/a[2]";
  totalClientesXpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/h4[1]/span[1]";
  clientesFilXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/h2[1]/span[1]";
  limpiarFiltrosXpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[2]/span[1]";
  clickEnSolapaClientes() {
    this.clickByXpathForce(this.solapaClientesXpath);
  }
 
  //Filtros sin grupo
  clienteActXpath = "//span[contains(text(),'Cliente Activo')]";
  botonClienteActXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[3]/div[1]/span[2]/*[1]";
  siClienteActXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/label[1]";
  tolSiClienteActXpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/label[1]/span[1]";
  noClienteActXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/label[1]";
  tolNoClienteActXpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/label[1]/span[1]";
  niClienteActXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[3]/div[1]/div[1]/label[1]";
  tolNiClienteActXpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[3]/div[1]/div[1]/label[1]/span[1]";
  botonTipoClienteXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[7]/div[1]/span[2]/*[1]";
  fisicaXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[7]/div[2]/div[1]/div[1]/div[1]/label[1]";
  tolfisicaXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[7]/div[2]/div[1]/div[1]/div[1]/label[1]/span[1]";
  juridicaXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[7]/div[2]/div[2]/div[1]/div[1]/label[1]";
  toljuridicaXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[7]/div[2]/div[2]/div[1]/div[1]/label[1]/span[1]";
 //Datos del cliente
 botonDatosClienteXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[9]/div[1]/div[1]/div[2]";
 botonIngresosXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[9]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/span[2]/*[1]";
 inputDesdeIngXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[9]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[7]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]";
 inputHastaIngXpath  = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/aside[1]/div[1]/div[1]/div[9]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[7]/div[2]/div[1]/div[1]/div[2]/div[1]/input[1]";
 aplicarIngresosClass = ".openRangeFilter__apply___2Ny3_"; 

  clickEnDesplegableClienteAct() {
    this.clickByXpathForce(this.botonClienteActXpath);
  }

  clickEnSiClienteAct() {
    this.clickByXpathForce(this.siClienteActXpath);
  }

  clickEnNoClienteAct() {
    this.clickByXpathForce(this.noClienteActXpath);
  }

  clickEnNiClienteAct() {
    this.clickByXpathForce(this.niClienteActXpath);
  }

  clickEnLimpiarClienteAct() {
    this.clickByXpathForce(this.limpiarFiltrosXpath);
  }

  clickEnDesplegableTipoCliente() {
    this.clickByXpathForce(this.botonTipoClienteXpath);
  }

  clickEnTipoCliFisico() {
    this.clickByXpathForce(this.fisicaXpath);
  }

  clickEnTipoCliJuridico() {
    this.clickByXpathForce(this.juridicaXpath);
  }

  clickEnDesplegableDatosCliente() {
    this.clickByXpathForce(this.botonDatosClienteXpath);
  }

  clickEnDesplegableIngresos() {
    this.clickByXpathForce(this.botonIngresosXpath);
  }

  escribirMontoDesdeIngresos(montoDesde) {
    this.typeByXpath(this.inputDesdeIngXpath, montoDesde);
  };

  escribirMontoHastaIngresos(montoHasta) {
    this.typeByXpath(this.inputHastaIngXpath, montoHasta);
  };

  clickEnAplicarIngresos() {
    this.clickByElement(this.aplicarIngresosClass);
  }
}