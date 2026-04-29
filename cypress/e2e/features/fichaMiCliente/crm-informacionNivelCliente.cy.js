

import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataFmc from "../../../fixtures/dataFmc.json"
import { FichaMiCliente } from "../../Pages/fichaMiClientePage/crm-fichaMiClientePage";


let fichaMiCliente = new FichaMiCliente();
let login = new Login();
let helper = new Assertions();

describe("Información FMC", () => {
  before(() => {
    login.loginbanco();
  });

   it("Información Nivel Cliente Persona Natural", () => {

    fichaMiCliente.write('Ingreso a FMC PN');
    //cy.wait(5000);
    fichaMiCliente.clickEnBuscar();
    helper.expectTitleToEqual(dataFmc.fmc.title);
    fichaMiCliente.escribirCodCliente(dataFmc.fmc.codCustomer);
    helper.expectTextToContainXpath(fichaMiCliente.tituloResultadosBusquedaXpath, dataFmc.fmc.resultSearch);
    fichaMiCliente.clickEnCodCliente();
    //cy.wait(10000)
    fichaMiCliente.clickEnConsulta(dataFmc.fmc.textConsultation);
   
    fichaMiCliente.write('Consulta Información Nivel Cliente PN ')
    fichaMiCliente.clickEnInfoCliente();
    helper.expectNotExistElementByXpath(fichaMiCliente.cedulaXpath);
    helper.expectNotExistElementByXpath(fichaMiCliente.codPersonaXpath);
    helper.expectNotExistElementByXpath(fichaMiCliente.nacionalidadXpath);
    helper.expectNotExistElementByXpath(fichaMiCliente.tipoClienteXpath);
    fichaMiCliente.clickEnSegYMar();
    helper.expectNotExistElementByXpath(fichaMiCliente.segmentoXpath);
    fichaMiCliente.clickEnContactabilidad();
    helper.expectNotExistElementByXpath(fichaMiCliente.principalXpath);
    fichaMiCliente.clickEnCartera();
    helper.expectNotExistElementByXpath(fichaMiCliente.sucursalXpath);
    fichaMiCliente.clickEnInfoCliente();
    helper.waitExpectVisibleByXpath(fichaMiCliente.cedulaXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.codPersonaXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.nacionalidadXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.tipoClienteXpath);
    fichaMiCliente.clickEnSegYMar();
    helper.waitExpectVisibleByXpath(fichaMiCliente.catRiesgoXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.nivelRiesgoXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.bancaXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.segmentoXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.pagaSalarioXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.pagoProveeXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.ingresosXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.homeBankXpath);
    fichaMiCliente.clickEnContactabilidad();
    helper.waitExpectVisibleByXpath(fichaMiCliente.direccionXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.principalXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.laboralXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.celularXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.correoXpath);
    fichaMiCliente.clickEnCartera();
    helper.waitExpectVisibleByXpath(fichaMiCliente.oficialXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.sucursalXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.gerenteXpath);
    fichaMiCliente.logout();
  });  
  
  it("Información Nivel Cliente Persona Jurídica", () => {

    fichaMiCliente.write('Ingreso a FMC PJ');
    login.loginbanco();
    fichaMiCliente.clickEnBuscar();
    fichaMiCliente.escribirEnElBuscador(dataFmc.fmc.codPjuridica);
    fichaMiCliente.clickEnIdCliente();
    fichaMiCliente.clickEnConsulta(dataFmc.fmc.textConsultation);

    fichaMiCliente.write('Consulta Información Nivel Cliente PJ')
    fichaMiCliente.clickEnInfoCliente();
    helper.expectNotExistElementByXpath(fichaMiCliente.tipoClienteXpath);
    fichaMiCliente.clickEnSegYMar();
    helper.expectNotExistElementByXpath(fichaMiCliente.segmentoXpath);
    fichaMiCliente.clickEnContactabilidad();
    helper.expectNotExistElementByXpath(fichaMiCliente.principalXpath);
    fichaMiCliente.clickEnCartera();
    helper.expectNotExistElementByXpath(fichaMiCliente.sucursalXpath);
    fichaMiCliente.clickEnInfoCliente();
    helper.waitExpectVisibleByXpath(fichaMiCliente.rucXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.codPersonaXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.actividadEcoXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.grupoEcoXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.nacionalidadXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.tipoClienteXpath);
    fichaMiCliente.clickEnSegYMar();
    helper.waitExpectVisibleByXpath(fichaMiCliente.catRiesgoXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.nivelRiesgoXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.bancaXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.segmentoXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.pagaSalarioXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.pagoProveeXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.homeBankXpath);
    fichaMiCliente.clickEnContactabilidad();
    helper.waitExpectVisibleByXpath(fichaMiCliente.direccionXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.principalXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.laboralXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.celularXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.correoXpath);
    fichaMiCliente.clickEnCartera();
    helper.waitExpectVisibleByXpath(fichaMiCliente.oficialXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.sucursalXpath);
    helper.waitExpectVisibleByXpath(fichaMiCliente.gerenteXpath);
    fichaMiCliente.logout();
  });  
});