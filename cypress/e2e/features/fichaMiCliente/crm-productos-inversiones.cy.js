import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataFmc from "../../../fixtures/dataFmc.json";
import dataApi from "../../../fixtures/dataApi.json";
import {   } from "../apis/apiInversiones.cy";
import { Inversiones } from "../../Pages/fichaMiClientePage/crm-productos-inversionesPage";
import { localTotalAmount } from "../../Pages/apisPage/apiInversionesPage/apiInvestmentSummaryPage";
import { } from "../../Pages/apisPage/apiPrestamosPage/apiLoanSummaryPage"
import { quantityProducts } from "../../Pages/apisPage/apiPrestamosPage/apiLoanSummaryPage";


let inversiones = new Inversiones();
let login = new Login();
let helper = new Assertions();


describe("Ficha mi Cliente - Producto Inversiones", () => {
  before(() => {
    login.loginbanco();
  });

  it("Inversiones", () => {
    inversiones.clickEnBuscar();
    helper.expectTitleToEqual(dataFmc.fmc.title);
    helper.expectTextToContainXpath(inversiones.tituloAgendaXpath, dataFmc.fmc.agenda);
    helper.expectTextToContainXpath(inversiones.tituloCtasXpath, dataFmc.fmc.ctas);
    inversiones.escribirCodCliente(dataApi.apiInvestmentDetail.personaId);
    helper.expectTextToContainXpath(inversiones.tituloResultadosBusquedaXpath, dataFmc.fmc.resultSearch);
    inversiones.clickEnNombreCliente();
    inversiones.clickEnConsulta(dataFmc.fmc.textConsultation);
    helper.expectTextToContainXpath(inversiones.tituloProductosXpath, dataFmc.fmc.products);
    helper.expectTextToContainXpath(inversiones.tituloHistorialXpath, dataFmc.fmc.story);
    helper.expectTextToContainXpath(inversiones.titlePrioridadesXpath, dataFmc.fmc.priorities);
    inversiones.clickCajaInversiones();
    inversiones.clickEnPrimeraInversion(); 
    inversiones.clickEnSolapaIntereses();
    inversiones.clickEnSolapaMovimientos();
    inversiones.clickEnSolapaBloqueos();
  });
});