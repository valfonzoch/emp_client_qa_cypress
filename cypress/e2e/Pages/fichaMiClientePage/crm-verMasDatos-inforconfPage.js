import { FichaMiCliente } from "./crm-fichaMiClientePage";

require("cypress-xpath");

export class Infornconf extends FichaMiCliente {

  informconf = "//span[contains(text(),'Informconf')]";
  informconf2Xpath = "//h6[contains(text(),'Informconf')]";
  fechaInformconfXpath = "//th[contains(text(),'Fecha Informconf')]";
  convoInforXpath = "//th[contains(text(),'Convocatoria')]";
  fajaInformconfXpath = "//th[contains(text(),'Faja Informconf')]";
  inhabilitaciónXpath = "//th[contains(text(),'Inhabilitación')]";
  inhibiciónXpath = "//th[contains(text(),'Inhibición')]";
  quiebraXpath = "//th[contains(text(),'Quiebra')]";
  remateXpath = "//th[contains(text(),'Remate')]";
  demandaXpath = "//th[contains(text(),'Demanda')]";
  morosidadXpath = "//th[contains(text(),'Morosidad')]";

  clickEnInformcof() {
    this.clickByXpathForce(this.informconf);
  }
}