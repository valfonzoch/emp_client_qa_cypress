import Page from "../helper/page";
import { FichaMiCliente } from "./crm-fichaMiClientePage";

require("cypress-xpath");

export class DatosBancarios extends FichaMiCliente {

  bankData = "//span[contains(text(),'Datos Bancarios')]";
  segYmarcas2Xpath = "//h6[contains(text(),'Segmentos y marcas')]";
  fechaVinculaciónXpath = "//h6[contains(text(),'Fecha de vinculación')]";
  bancaVerMasXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/h6[1]";
  sucursalVerMasXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[3]/h6[1]";
  chequesRechazadosXpath = "//h6[contains(text(),'Cheques rechazados')]";
  totalRechazadosXpath = "//th[contains(text(),'Total rechazados')]";
  insuficienciaFondosXpath = "//th[contains(text(),'Insuficiencia De Fondos')]";
  cuentaCanceladaXpath = "//th[contains(text(),'Cuenta Cancelada')]";
  fallatecnicaXpath = "//th[contains(text(),'Falla técnica')]";
  bancaElecXpath = "//h6[contains(text(),'Banca electrónica')]";
  claveElectronicaXpath = "//h6[contains(text(),'Clave electrónica')]";
  claveMobileXpath = "//h6[contains(text(),'Clave mobile')]";
  infoPaqXpath = "//h6[contains(text(),'Información del paquete')]";
  paqueteXpath = "//h6[contains(text(),'Paquete')]";
  tipoPaqueteXpath = "//h6[contains(text(),'Tipo de paquete')]";
  característicasXpath = "//h6[contains(text(),'Características de paquete')]";
  fechaVtoXpath = "//h6[contains(text(),'Fecha de Vencimiento')]";
  expClienteXpath = "//h6[contains(text(),'Experiencia del cliente')]";
  npsGlobalXpath = "//h6[contains(text(),'NPS Global')]";
  npsVinculaciónXpath = "//h6[contains(text(),'NPS por canal de vinculación')]";

  clickEnDatosBancarios() {
    this.clickByXpathForce(this.bankData);
  }

}