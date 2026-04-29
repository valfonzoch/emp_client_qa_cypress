
import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataFmc from "../../../fixtures/dataFmc.json"
import { FichaMiCliente } from "../../Pages/fichaMiClientePage/crm-fichaMiClientePage";
import { Infornconf } from "../../Pages/fichaMiClientePage/crm-verMasDatos-inforconfPage";


let fichaMiCliente = new FichaMiCliente();
let login = new Login();
let helper = new Assertions();
let masDatos = new Infornconf();

describe("Ver más Datos FMC", () => {
  before(() => {
    login.loginbanco();
  });

  it("Ver más Datos FMC Persona Natural", () => {

    fichaMiCliente.write('Ingreso a Ficha mi Cliente')
    fichaMiCliente.clickEnBuscar();
    helper.expectTitleToEqual(dataFmc.fmc.title);
    helper.expectTextToContainXpath(fichaMiCliente.tituloAgendaXpath, dataFmc.fmc.agenda);
    helper.expectTextToContainXpath(fichaMiCliente.tituloCtasXpath, dataFmc.fmc.ctas);
    fichaMiCliente.escribirCodCliente(dataFmc.fmc.codCustomer);
    helper.expectTextToContainXpath(fichaMiCliente.tituloResultadosBusquedaXpath, dataFmc.fmc.resultSearch);
    fichaMiCliente.clickEnCodCliente();
    fichaMiCliente.clickEnConsulta(dataFmc.fmc.textConsultation);
    fichaMiCliente.write('Ver más Datos PN')
    masDatos.clickEnVerMasData();
    fichaMiCliente.write('Infornconf');
    masDatos.clickEnInformcof();
    helper.waitExpectVisibleByXpath(masDatos.informconf);
    helper.waitExpectVisibleByXpath(masDatos.informconf2Xpath);
    helper.waitExpectVisibleByXpath(masDatos.fechaInformconfXpath);
    helper.waitExpectVisibleByXpath(masDatos.convoInforXpath);
    helper.waitExpectVisibleByXpath(masDatos.fajaInformconfXpath);
    helper.waitExpectVisibleByXpath(masDatos.inhabilitaciónXpath);
    helper.waitExpectVisibleByXpath(masDatos.inhibiciónXpath);
    helper.waitExpectVisibleByXpath(masDatos.quiebraXpath);
    helper.waitExpectVisibleByXpath(masDatos.remateXpath);
    helper.waitExpectVisibleByXpath(masDatos.demandaXpath);
    helper.waitExpectVisibleByXpath(masDatos.morosidadXpath); 
    masDatos.logout();
  });

  it("Ver más Datos FMC Persona Jurídica", () => {

    fichaMiCliente.write('Ingreso a FMC PJ');
    login.loginbanco();
    fichaMiCliente.clickEnBuscar();
    fichaMiCliente.escribirEnElBuscador(dataFmc.fmc.codPjuridica);
    fichaMiCliente.clickEnIdCliente();
    fichaMiCliente.clickEnConsulta(dataFmc.fmc.textConsultation);
    fichaMiCliente.write('Ver más Datos PJ');
    masDatos.clickEnVerMasData();
    fichaMiCliente.write('Infornconf');
    masDatos.clickEnInformcof();
    helper.waitExpectVisibleByXpath(masDatos.informconf);
    helper.waitExpectVisibleByXpath(masDatos.informconf2Xpath);
    helper.waitExpectVisibleByXpath(masDatos.fechaInformconfXpath);
    helper.waitExpectVisibleByXpath(masDatos.convoInforXpath);
    helper.waitExpectVisibleByXpath(masDatos.fajaInformconfXpath);
    helper.waitExpectVisibleByXpath(masDatos.inhabilitaciónXpath);
    helper.waitExpectVisibleByXpath(masDatos.inhibiciónXpath);
    helper.waitExpectVisibleByXpath(masDatos.quiebraXpath);
    helper.waitExpectVisibleByXpath(masDatos.remateXpath);
    helper.waitExpectVisibleByXpath(masDatos.demandaXpath);
    helper.waitExpectVisibleByXpath(masDatos.morosidadXpath); 
    masDatos.logout();
  }); 
});