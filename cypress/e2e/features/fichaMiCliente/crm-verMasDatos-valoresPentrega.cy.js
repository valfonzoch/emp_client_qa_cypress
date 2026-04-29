
//La pestaña fue retirada del proyecto por solicitud del cliente 

/*import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataFmc from "../../../fixtures/dataFmc.json"
import { FichaMiCliente } from "../../Pages/fichaMiClientePage/crm-fichaMiClientePage";
import { ValoresPendientesDeEntrega } from "../../Pages/fichaMiClientePage/crm-verMasDatos-valoresPentregaPage";

let fichaMiCliente = new FichaMiCliente();
let login = new Login();
let helper = new Assertions();
let masDatos = new ValoresPendientesDeEntrega();

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
    cy.wait(5000)
    fichaMiCliente.clickEnConsulta(dataFmc.fmc.textConsultation);
    fichaMiCliente.write('Ver más Datos PN')
    masDatos.clickEnVerMasData();
    fichaMiCliente.write('Valores Pendiente de Entrega');
    masDatos.clickEnValoresPendientesDeEntrega();
    helper.waitExpectVisibleByXpath(masDatos.entregaValores);
    helper.waitExpectVisibleByXpath(masDatos.tarPendEntreXpath);
    helper.waitExpectVisibleByXpath(masDatos.sucursalVpeXpath);
    helper.waitExpectVisibleByXpath(masDatos.canalVpeXpath);
    helper.waitExpectVisibleByXpath(masDatos.nroTarjVpeXpath);
    helper.waitExpectVisibleByXpath(masDatos.operacionVpeXpath);
    helper.waitExpectVisibleByXpath(masDatos.fecharEcepVpeXpath);
    helper.waitExpectVisibleByXpath(masDatos.instanciaVpeXpath);
    helper.waitExpectVisibleByXpath(masDatos.fechaInstaVpeXpath);
    masDatos.logout();
  });

  it("Ver más Datos FMC Persona Jurídica", () => {

    fichaMiCliente.write('Ingreso a FMC PJ');
    login.loginbanco();
    fichaMiCliente.clickEnBuscar();
    fichaMiCliente.escribirEnElBuscador(dataFmc.fmc.codPjuridica);
    cy.wait(5000)
    fichaMiCliente.clickEnIdCliente();
    cy.wait(8000)
    fichaMiCliente.clickEnConsulta(dataFmc.fmc.textConsultation);
    fichaMiCliente.write('Ver más Datos PJ');
    masDatos.clickEnVerMasData();
    fichaMiCliente.write('Valores Pendiente de Entrega');
    masDatos.clickEnValoresPendientesDeEntrega();
    helper.waitExpectVisibleByXpath(masDatos.entregaValores);
    helper.waitExpectVisibleByXpath(masDatos.tarPendEntreXpath);
    helper.waitExpectVisibleByXpath(masDatos.sucursalVpeXpath);
    helper.waitExpectVisibleByXpath(masDatos.canalVpeXpath);
    helper.waitExpectVisibleByXpath(masDatos.nroTarjVpeXpath);
    helper.waitExpectVisibleByXpath(masDatos.operacionVpeXpath);
    helper.waitExpectVisibleByXpath(masDatos.fecharEcepVpeXpath);
    helper.waitExpectVisibleByXpath(masDatos.instanciaVpeXpath);
    helper.waitExpectVisibleByXpath(masDatos.fechaInstaVpeXpath);
    masDatos.logout();
  }); 
});*/