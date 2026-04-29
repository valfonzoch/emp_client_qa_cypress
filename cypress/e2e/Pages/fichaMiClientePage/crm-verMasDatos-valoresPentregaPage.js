import { FichaMiCliente } from "./crm-fichaMiClientePage";

require("cypress-xpath");

export class ValoresPendientesDeEntrega extends FichaMiCliente {

  entregaValores = "//span[contains(text(),'Valores pendientes de entrega')]";
  tarPendEntreXpath = "//h6[contains(text(),'Tarjetas pendientes de entrega')]";
  sucursalVpeXpath = "//th[contains(text(),'Sucursal')]";
  canalVpeXpath = "//th[contains(text(),'Canal')]";
  nroTarjVpeXpath = "//th[contains(text(),'NO. de Tarjeta')]";
  operacionVpeXpath = "//th[contains(text(),'Operación')]";
  fecharEcepVpeXpath = "//th[contains(text(),'Fecha Recepción')]";
  instanciaVpeXpath = "//thead/tr[1]/th[6]";
  fechaInstaVpeXpath = "//th[contains(text(),'Fecha Instancia')]";

  clickEnValoresPendientesDeEntrega() {
    this.clickByXpathForce(this.entregaValores);
  }
}