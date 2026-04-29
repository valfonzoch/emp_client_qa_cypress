import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataFmc from "../../../fixtures/dataFmc.json";
import dataApi from "../../../fixtures/dataApi.json";
import { Tarjetas } from "../../Pages/fichaMiClientePage/crm-productos-tarjetasPage";
import { quantityProducts } from "../../Pages/apisPage/apisTarjetasPage/apiCardSummaryPage";
import {   } from "../apis/apiTarjetas.cy"

let tarjetas = new Tarjetas()
let login = new Login();
let helper = new Assertions();

describe("Ficha mi Cliente - Producto Tarjetas", () => {
  before(() => {
    login.loginbanco();
  });

  it("Tarjetas", () => {
    tarjetas.clickEnBuscar()
 //   helper.expectTitleToEqual(dataFmc.fmc.title);
    helper.expectTextToContainXpath(tarjetas.tituloAgendaXpath, dataFmc.fmc.agenda);
    helper.expectTextToContainXpath(tarjetas.tituloCtasXpath, dataFmc.fmc.ctas);
    tarjetas.escribirCodCliente(dataApi.apiCards.documentNumber3);
    helper.expectTextToContainXpath(tarjetas.tituloResultadosBusquedaXpath, dataFmc.fmc.resultSearch);
    tarjetas.clickEnCodCliente();
    tarjetas.clickEnConsulta(dataFmc.fmc.textConsultation);
    helper.expectTextToContainXpath(tarjetas.tituloProductosXpath, dataFmc.fmc.products);
    helper.expectTextToContainXpath(tarjetas.tituloHistorialXpath, dataFmc.fmc.story);
    helper.expectTextToContainXpath(tarjetas.titlePrioridadesXpath, dataFmc.fmc.priorities);
    helper.expectTextToContainXpath(tarjetas.cardStripXpath, quantityProducts);
    tarjetas.clickInBoxCard();
    tarjetas.clickInProductInformation();
    tarjetas.clickInExtractsAndMovements();
  });
});