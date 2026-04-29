import Page from "../helper/page";

require("cypress-xpath");

export class IngresoFMC extends Page{

    buscarClienteXpath = "//input[@placeholder= 'Buscar cliente']";
    codClienteXpath = "//mark[@class= 'resultsListItem__highlight___1jZ83 ']";
    consultaXpath = "//p[contains(text(),'Consulta')]";

    ingresoFmcPersonaNatural(){
          this.clickByXpathForce(this.buscarClienteXpath)
    }

    clickEnCodCliente() {
        this.clickByXpathForce(this.codClienteXpath);
      }

    clickEnConsulta(text) {
        this.clickByXpathForce(this.consultaXpath);
      }
}