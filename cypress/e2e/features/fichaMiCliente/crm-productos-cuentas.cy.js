import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import { Cuentas } from "../../Pages/fichaMiClientePage/crm-productos-cuentasPage";
import dataFmc from "../../../fixtures/dataFmc.json";
import dataApi from "../../../fixtures/dataApi.json";
import {   } from "../apis/apiCuentas.cy"; //este import se usa implicitamente por archivos de javascript para ejecutar la prueba de consulta api. 

let cuentas = new Cuentas();
let login = new Login();
let helper = new Assertions();

describe("Ficha mi Cliente - Producto Cuentas", () => {
  before(() => {
    login.loginbanco();
  });

  it("Cuentas", () => {

    cuentas.clickEnBuscar();
    helper.expectTitleToEqual(dataFmc.fmc.title);
    helper.expectTextToContainXpath(cuentas.tituloAgendaXpath, dataFmc.fmc.agenda);
    helper.expectTextToContainXpath(cuentas.tituloCtasXpath, dataFmc.fmc.ctas);
    cuentas.escribirCodCliente(dataFmc.fmc.dniCustomerAccout);
    helper.expectTextToContainXpath(cuentas.tituloResultadosBusquedaXpath, dataFmc.fmc.resultSearch);
    cuentas.clickEnCodCliente();
    cuentas.clickEnConsulta(dataFmc.fmc.textConsultation);
    helper.expectTextToContainXpath(cuentas.tituloProductosXpath, dataFmc.fmc.products);
    helper.expectTextToContainXpath(cuentas.tituloHistorialXpath, dataFmc.fmc.story);
    helper.expectTextToContainXpath(cuentas.titlePrioridadesXpath, dataFmc.fmc.priorities);
    cuentas.clickEnCajaCuentas();
    cuentas.clickEnNumeroDeCuenta(dataApi.apiAccount.accountNumber);
    cuentas.clickEnInformacionDelProducto();
    cuentas.clickEnSolapaMovimiento();
    cuentas.escribirFechaDesde();
    cuentas.escribirFechaHasta();
    helper.expectElementIsPresentByElement(cuentas.searchMovementClass);
    cuentas.clickEnBuscarMovimientoPorFecha();
   
  });
});
