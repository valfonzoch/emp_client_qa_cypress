import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataFmc from "../../../fixtures/dataFmc.json"
import { FichaMiCliente } from "../../Pages/fichaMiClientePage/crm-fichaMiClientePage";


let fichaMiCliente = new FichaMiCliente();
let login = new Login();
let helper = new Assertions();

describe("Ingreso Ficha mi Cliente ", () => {
  before(() => {
    login.loginbanco();
  });

  it("Ingreso a FMC Persona Natural", () => {

    fichaMiCliente.clickEnBuscar();
    helper.expectTitleToEqual(dataFmc.fmc.title);
    helper.expectTextToContainXpath(fichaMiCliente.tituloAgendaXpath, dataFmc.fmc.agenda);
    helper.expectTextToContainXpath(fichaMiCliente.tituloCtasXpath, dataFmc.fmc.ctas);
    fichaMiCliente.escribirCodCliente(dataFmc.fmc.codCustomer);
    helper.expectTextToContainXpath(fichaMiCliente.tituloResultadosBusquedaXpath, dataFmc.fmc.resultSearch);
    fichaMiCliente.clickEnCodCliente();
    fichaMiCliente.clickEnConsulta(dataFmc.fmc.textConsultation);
    helper.expectTextToContainXpath(fichaMiCliente.tituloProductosXpath, dataFmc.fmc.products);
    helper.expectTextToContainXpath(fichaMiCliente.tituloHistorialXpath, dataFmc.fmc.story);
    helper.expectTextToContainXpath(fichaMiCliente.titlePrioridadesXpath, dataFmc.fmc.priorities);
    helper.waitExpectVisibleByXpath(fichaMiCliente.ctaComercialXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.ctaAdminXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.ctaRiesgoXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.ctaServicioXpath); 
    fichaMiCliente.logout();
  })

  it("Ingreso FMC Persona Jurídica", () => {

    fichaMiCliente.write('Ingreso a FMC');
    login.loginbanco();
    fichaMiCliente.clickEnBuscar();
    //helper.expectTitleToEqual(dataFmc.fmc.title);
    helper.expectTextToContainXpath(fichaMiCliente.tituloAgendaXpath, dataFmc.fmc.agenda);
    helper.expectTextToContainXpath(fichaMiCliente.tituloCtasXpath, dataFmc.fmc.ctas);
    fichaMiCliente.escribirEnElBuscador(dataFmc.fmc.codPjuridica);
    fichaMiCliente.clickEnIdCliente();
    fichaMiCliente.clickEnConsulta(dataFmc.fmc.textConsultation);
    helper.expectTextToContainXpath(fichaMiCliente.tituloProductosXpath, dataFmc.fmc.products);
    helper.expectTextToContainXpath(fichaMiCliente.tituloHistorialXpath, dataFmc.fmc.story);
    helper.expectTextToContainXpath(fichaMiCliente.titlePrioridadesXpath, dataFmc.fmc.priorities);
    helper.waitExpectVisibleByXpath(fichaMiCliente.ctaComercialXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.ctaAdminXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.ctaRiesgoXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.ctaServicioXpath); 
    fichaMiCliente.logout();
  })
});