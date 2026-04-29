
import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataFmc from "../../../fixtures/dataFmc.json"
import { FichaMiCliente } from "../../Pages/fichaMiClientePage/crm-fichaMiClientePage";
import { DatosBancarios } from "../../Pages/fichaMiClientePage/crm-verMasDatos-datosBancariosPage";


let fichaMiCliente = new FichaMiCliente();
let login = new Login();
let helper = new Assertions();
let masDatos = new DatosBancarios();

describe("Ver más Datos FMC", () => {
  before(() => {
    login.loginbanco();
  });

  it("Ver más Datos FMC Persona Natural", () => {

    fichaMiCliente.write('Ingreso a FMC PN')
    fichaMiCliente.clickEnBuscar();
    helper.expectTitleToEqual(dataFmc.fmc.title);
    helper.expectTextToContainXpath(fichaMiCliente.tituloAgendaXpath, dataFmc.fmc.agenda);
    helper.expectTextToContainXpath(fichaMiCliente.tituloCtasXpath, dataFmc.fmc.ctas);
    fichaMiCliente.escribirCodCliente(dataFmc.fmc.codCustomer);
    helper.expectTextToContainXpath(fichaMiCliente.tituloResultadosBusquedaXpath, dataFmc.fmc.resultSearch);
    fichaMiCliente.clickEnCodCliente();
    fichaMiCliente.clickEnConsulta(dataFmc.fmc.textConsultation);
    fichaMiCliente.write('Ver más Datos / Datos Bancarios PN')
    masDatos.clickEnVerMasData();
    fichaMiCliente.write('Segementos y Marcas')
    masDatos.clickEnDatosBancarios();
    helper.waitExpectVisibleByXpath(masDatos.segYmarcas2Xpath);
    helper.waitExpectVisibleByXpath(masDatos.fechaVinculaciónXpath);
    helper.waitExpectVisibleByXpath(masDatos.bancaVerMasXpath);
    helper.waitExpectVisibleByXpath(masDatos.sucursalVerMasXpath);
    fichaMiCliente.write('Cheques Rechazados')
    helper.waitExpectVisibleByXpath(masDatos.chequesRechazadosXpath);
    helper.waitExpectVisibleByXpath(masDatos.totalRechazadosXpath);
    helper.waitExpectVisibleByXpath(masDatos.insuficienciaFondosXpath);
    helper.waitExpectVisibleByXpath(masDatos.cuentaCanceladaXpath);
    helper.waitExpectVisibleByXpath(masDatos.fallatecnicaXpath);
    fichaMiCliente.write('Banca Electrónica')
    helper.waitExpectVisibleByXpath(masDatos.bancaElecXpath);
    helper.waitExpectVisibleByXpath(masDatos.claveElectronicaXpath);
    helper.waitExpectVisibleByXpath(masDatos.claveMobileXpath);
  /*  fichaMiCliente.write('Información del paquete')
    helper.waitExpectVisibleByXpath(masDatos.infoPaqXpath);
    helper.waitExpectVisibleByXpath(masDatos.paqueteXpath);
    helper.waitExpectVisibleByXpath(masDatos.tipoPaqueteXpath);
    helper.waitExpectVisibleByXpath(masDatos.característicasXpath);
    helper.waitExpectVisibleByXpath(masDatos.fechaVtoXpath);
    fichaMiCliente.write('Experiencia del Cliente')
    helper.waitExpectVisibleByXpath(masDatos.expClienteXpath);
    helper.waitExpectVisibleByXpath(masDatos.npsGlobalXpath);
    helper.waitExpectVisibleByXpath(masDatos.npsVinculaciónXpath);
    masDatos.logout();*/ //Cmabios solicitados por el cliente (La infoemación ya no aparece) 
  });

  it("Ver más Datos FMC Persona Jurídica", () => {

    fichaMiCliente.write('Ingreso a FMC PJ');
    login.loginbanco();
    fichaMiCliente.clickEnBuscar();
    fichaMiCliente.escribirEnElBuscador(dataFmc.fmc.codPjuridica);
    fichaMiCliente.clickEnIdCliente();
    fichaMiCliente.clickEnConsulta(dataFmc.fmc.textConsultation);
    masDatos.clickEnVerMasData();
    fichaMiCliente.write('Segementos y Marcas')
    masDatos.clickEnDatosBancarios();
    helper.waitExpectVisibleByXpath(masDatos.segYmarcas2Xpath);
    helper.waitExpectVisibleByXpath(masDatos.fechaVinculaciónXpath);
    helper.waitExpectVisibleByXpath(masDatos.bancaVerMasXpath);
    helper.waitExpectVisibleByXpath(masDatos.sucursalVerMasXpath);
    fichaMiCliente.write('Cheques Rechazados')
    helper.waitExpectVisibleByXpath(masDatos.chequesRechazadosXpath);
    helper.waitExpectVisibleByXpath(masDatos.totalRechazadosXpath);
    helper.waitExpectVisibleByXpath(masDatos.insuficienciaFondosXpath);
    helper.waitExpectVisibleByXpath(masDatos.cuentaCanceladaXpath);
    helper.waitExpectVisibleByXpath(masDatos.fallatecnicaXpath);
    fichaMiCliente.write('Banca Electrónica')
    helper.waitExpectVisibleByXpath(masDatos.bancaElecXpath);
    helper.waitExpectVisibleByXpath(masDatos.claveElectronicaXpath);
    helper.waitExpectVisibleByXpath(masDatos.claveMobileXpath);
   /* fichaMiCliente.write('Información del paquete')
    helper.waitExpectVisibleByXpath(masDatos.infoPaqXpath);
    helper.waitExpectVisibleByXpath(masDatos.paqueteXpath);
    helper.waitExpectVisibleByXpath(masDatos.tipoPaqueteXpath);
    helper.waitExpectVisibleByXpath(masDatos.característicasXpath);
    helper.waitExpectVisibleByXpath(masDatos.fechaVtoXpath);
    fichaMiCliente.write('Experiencia del Cliente')
    helper.waitExpectVisibleByXpath(masDatos.expClienteXpath);
    helper.waitExpectVisibleByXpath(masDatos.npsGlobalXpath);
    helper.waitExpectVisibleByXpath(masDatos.npsVinculaciónXpath);*/ //Cmabios solicitados por el cliente (La infoemación ya no aparece) 
    masDatos.logout();
  }); 
});