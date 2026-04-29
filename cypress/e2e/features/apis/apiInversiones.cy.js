
import { Assertions } from "../../Pages/helper/assertions";
import Page from "../../Pages/helper/page";
import dataApi from "../../../fixtures/dataApi.json";
import { ApiHelperGetInvestmentSavingInfo } from "../../Pages/apisPage/apiInversionesPage/apiInvestmentSavingInfoPage";
import { ApiHelperGetInvestmentSavingDetail } from "../../Pages/apisPage/apiInversionesPage/apiInvestmentSavingDetailPage";
import { ApiHelperGetInvestmentMovement } from "../../Pages/apisPage/apiInversionesPage/apiInvestmentMovmentPage";
import { ApiHelperGetInvestmentLocks } from "../../Pages/apisPage/apiInversionesPage/apiInvestmentLockPage";
import { ApiHelperGetInvestmentInterests } from "../../Pages/apisPage/apiInversionesPage/apiInvestmentInterestePage";
import { ApiHelperGetInvestmentHolders } from "../../Pages/apisPage/apiInversionesPage/apiInvestmentHoldersPage";
import { ApiHelperGetInvestmentCdas } from "../../Pages/apisPage/apiInversionesPage/apiInvestmentCdasPage";
import { ApiHelperGetInvestmentDetails } from "../../Pages/apisPage/apiInversionesPage/apiInvestmentDetailPage";
import { ApiHelperGetInvestmentSummary } from "../../Pages/apisPage/apiInversionesPage/apiInvestmentSummaryPage";
import { ApiHelperPos } from "../../Pages/apisPage/apiTokenPage";

let apiHelperPos = new ApiHelperPos();
let helper = new Assertions();
let page = new Page();
let apiSavingInfo = new ApiHelperGetInvestmentSavingInfo();
let apiSavingDetail = new ApiHelperGetInvestmentSavingDetail();
let apiMovement = new ApiHelperGetInvestmentMovement();
let apiBlock = new ApiHelperGetInvestmentLocks();
let apiInterests = new ApiHelperGetInvestmentInterests();
let apiHolders = new ApiHelperGetInvestmentHolders();
let apiCdas = new ApiHelperGetInvestmentCdas();
let apiDetails = new ApiHelperGetInvestmentDetails();
let apiSummary = new ApiHelperGetInvestmentSummary();
const status = 200;

describe("banco - Prueba API - Inversiones/Token", () => {
  it("Prueba - API - Inversiones", async () => {
    const tokenAuthentication = await apiHelperPos.methodApiPostCreate();
    console.log(tokenAuthentication.status);
    helper.methodApiExpectResponseStatus(tokenAuthentication.status, status);
  });

  it("Prueba - API - Inversiones/Información", async () => {
    page.write(
      "Inversiones Ahorro Programado - Pestaña Info Producto/Datos del producto"
    );
    const savingInfo = await apiSavingInfo.methodApiGetInvestmentSavingInfo(
      dataApi.apiInvestmentDetail.accountNumber
    );
    console.log(savingInfo.status);
    helper.methodApiExpectResponseStatus(savingInfo.status, status);
  });

  it("Prueba - API - Inversiones/Detalle APP", async () => {
    page.write("Inversiones Ahorro Programado - Pestaña Detalle de Ahorro");

    const savingDetail =
      await apiSavingDetail.methodApiGetInvestmentSavingDetail(
        dataApi.apiInvestmentDetail.accountNumber2,
        dataApi.apiInvestmentDetail.page,
        dataApi.apiInvestmentDetail.size
      );
    console.log(savingDetail.status);
    helper.methodApiExpectResponseStatus(savingDetail.status, status);
  });

  it("Prueba - API - Inversiones/Movimiento", async () => {
    page.write(
      "Inversiones CDA - Pestaña Movimiento/ Tabla detalle de movimiento"
    );

    const movements = await apiMovement.methodApiGetInvestmentMovement(
      dataApi.apiInvestmentDetail.accountNumber3,
      dataApi.apiInvestmentDetail.page,
      dataApi.apiInvestmentDetail.size
    );
    console.log(movements.status);
    helper.methodApiExpectResponseStatus(movements.status, status);
  });

  it("Prueba - API - Inversiones/Bloqueo", async () => {
    page.write("Inversiones CDA - Pestaña Bloqueo");

    const block = await apiBlock.methodApiGetInvestmentLocks(
      dataApi.apiInvestmentDetail.accountNumber3
    );
    console.log(block.status);
    helper.methodApiExpectResponseStatus(block.status, status);
  });

  it("Prueba - API - Inversiones/Intereses", async () => {
    page.write(
      "Inversiones CDA - Pestaña Intereses / Tabla detalle de intereses"
    );

    const interest = await apiInterests.methodApiGetInvestmentInterests(
      dataApi.apiInvestmentDetail.accountNumber3,
      dataApi.apiInvestmentDetail.page,
      dataApi.apiInvestmentDetail.size
    );
    console.log(interest.status);
    helper.methodApiExpectResponseStatus(interest.status, status);
  });

  it("Prueba - API - Inversiones/Intervinientes", async () => {
    page.write("Inversiones CDA - Pestaña Info Producto / Intervinientes");

    const holders = await apiHolders.methodApiGetInvestmentHolders(
      dataApi.apiInvestmentDetail.accountNumber3,
      dataApi.apiInvestmentDetail.page,
      dataApi.apiInvestmentDetail.size
    );
    console.log(holders.status);
    helper.methodApiExpectResponseStatus(holders.status, status);
  });

  it("Prueba - API - Inversiones/CDAs", async () => {
    page.write("Inversiones CDA - Pestaña Info Producto / Datos del producto");

    const cda = await apiCdas.methodApiGetInvestmentCdas(
      dataApi.apiInvestmentDetail.accountNumber3
    );
    console.log(cda.status);
    helper.methodApiExpectResponseStatus(cda.status, status);
  });

  it("Prueba - API - Inversiones/Detalle CDA", async () => {
    page.write("Inversiones CDA - Pestaña Info Producto / Datos del producto");

    const details = await apiDetails.methodApiGetInvestmentDetails(
      dataApi.apiInvestmentDetail.personaId
    );
    console.log(details.status);
    helper.methodApiExpectResponseStatus(details.status, status);
  });

  it("Prueba - API - Inversiones/Sumatoria", async () => {
    page.write("Inversiones CDA - Contenedor / Cabecera resumen - vencidos");

    const summary = await apiSummary.methodApiGetInvestmentSummary(
      dataApi.apiInvestmentDetail.personaId
    );
    console.log(summary.status);
    helper.methodApiExpectResponseStatus(summary.status, status);
  });
});