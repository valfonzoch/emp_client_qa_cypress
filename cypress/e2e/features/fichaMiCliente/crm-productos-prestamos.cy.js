import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataFmc from "../../../fixtures/dataFmc.json";
import dataApi from "../../../fixtures/dataApi.json";
import {   } from "../apis/apiPrestamos.cy"
import { Prestamos } from "../../Pages/fichaMiClientePage/crm-productos-prestamosPage";
import { } from "../../Pages/apisPage/apiPrestamosPage/apiLoanSummaryPage"
import { quantityProducts } from "../../Pages/apisPage/apiPrestamosPage/apiLoanSummaryPage";


let prestamos = new Prestamos()
let login = new Login();
let helper = new Assertions();

describe("Ficha mi Cliente - Producto Préstamos", () => {
  before(() => {
    login.loginbanco();
  });

  it("Préstamos", () => {
    prestamos.clickEnBuscar();
    helper.expectTitleToEqual(dataFmc.fmc.title);
    helper.expectTextToContainXpath(prestamos.tituloCtasXpath, dataFmc.fmc.ctas);
    prestamos.escribirCodCliente(dataApi.apiLoanDetail.cedula);
    helper.expectTextToContainXpath(prestamos.tituloResultadosBusquedaXpath, dataFmc.fmc.resultSearch);
    prestamos.clickEnCodCliente();
    prestamos.clickEnConsulta(dataFmc.fmc.textConsultation);
    helper.expectTextToContainXpath(prestamos.tituloProductosXpath, dataFmc.fmc.products);
    helper.expectTextToContainXpath(prestamos.tituloHistorialXpath, dataFmc.fmc.story);
    helper.expectTextToContainXpath(prestamos.titlePrioridadesXpath, dataFmc.fmc.priorities);
    helper.expectTextToContainXpath(prestamos.franjaPrestamosXpath, quantityProducts)
    prestamos.clickCajaPrestamo();
    prestamos.clickEnPrimerPrestamo();
    prestamos.clickEnCuotas();
    prestamos.clickEnGarantia();
  });
});
