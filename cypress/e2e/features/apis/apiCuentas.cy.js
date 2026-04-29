import { ApiHelperPos } from "../../Pages/apisPage/apiTokenPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataApi from "../../../fixtures/dataApi.json";
import { ApiHelperGetAccountDetail } from "../../Pages/apisPage/apiCuentasPage/apiAccountDetailPage";
import { ApiHelperGetAccountMovement } from "../../Pages/apisPage/apiCuentasPage/apiAccountMovementPage";
import { ApiHelperGetAccountHolder } from "../../Pages/apisPage/apiCuentasPage/apiAccountHolderPage";
import { ApiHelperGetAccountCheckBook } from "../../Pages/apisPage/apiCuentasPage/apiAccountCheckBookPage";
import { ApiHelperGetAccountCheeckBoookSummary } from "../../Pages/apisPage/apiCuentasPage/apiAccountCheckbookSummaryPage";
import { ApiHelperGetAccountCheckbooksRejected } from "../../Pages/apisPage/apiCuentasPage/apiAccountCheckbookRejectedPage";
import { ApiHelperGetAccountSummary } from "../../Pages/apisPage/apiCuentasPage/apiAccountSummaryPage";

let apiHelperPos = new ApiHelperPos();
let apiMovement = new ApiHelperGetAccountMovement();
let apiHolder = new ApiHelperGetAccountHolder();
let apiCheckBook = new ApiHelperGetAccountCheckBook();
let apiHelperGet = new ApiHelperGetAccountDetail();
let apiCheeckBooksSummary = new ApiHelperGetAccountCheeckBoookSummary();
let apiCheeckbookRejected = new ApiHelperGetAccountCheckbooksRejected();
let apiSummary = new ApiHelperGetAccountSummary();
let helper = new Assertions();


export const status = 200;

describe("banco - Prueba API - Cuentas", () => {

  it("Prueba - API - TokenForService", async () => {
    const tokenAuthentication = await apiHelperPos.methodApiPostCreate();
    console.log(tokenAuthentication.status);
    helper.methodApiExpectResponseStatus(tokenAuthentication.status, status);
  });
  
  it("Prueba - API - Cuentas/Movimientos ", async () => {
    const movement = await apiMovement.methodApiGetAccountMovement(
      dataApi.apiAccount.accountNumber
    );
    console.log(movement.status);
    helper.methodApiExpectResponseStatus(movement.status, status);
  });

  it("Prueba - API - Cuentas/Holders ", async () => {
    const holders = await apiHolder.methodApiGetAccountHolders(
      dataApi.apiAccount.accountNumber,
      dataApi.apiAccount.page,
      dataApi.apiAccount.size
    );
    console.log(holders.status);
    helper.methodApiExpectResponseStatus(holders.status, status);
  });

  it("Prueba - API - Cuentas/Cheques ", async () => {
    const checkbooks = await apiCheckBook.methodApiGetAccountCheckbooks(
      dataApi.apiAccount.accountNumberCC,
      dataApi.apiAccount.initialCheckNumber,
      dataApi.apiAccount.page,
      dataApi.apiAccount.size
    );
    console.log(checkbooks.status);
    helper.methodApiExpectResponseStatus(checkbooks.status, status);
  });

  it("Prueba - API - Cuentas/Sumatoria de Cheques ", async () => {
    const checkSummary =
      await apiCheeckBooksSummary.methodApiGetAccountCheckbookSummary(
        dataApi.apiAccount.accountNumberCC,
        dataApi.apiAccount.page,
        dataApi.apiAccount.size
      );
    console.log(checkSummary.status);
    helper.methodApiExpectResponseStatus(checkSummary.status, status);
  });

  it("Prueba - API - Cuentas/Cheques Rechazados ", async () => {
    const rejected =
      await apiCheeckbookRejected.methodApiGetAccountCheckbookRejected(
        dataApi.apiAccount.accountNumberCC,
        dataApi.apiAccount.page,
        dataApi.apiAccount.size
      );
    console.log(rejected.status);
    helper.methodApiExpectResponseStatus(rejected.status, status);
  });

  it("Prueba - API - Cuentas/Detalle ", async () => {
    const details = await apiHelperGet.methodApiGetAccountDetails(
      dataApi.apiAccount.accountNumber,
      dataApi.apiAccount.personaId
    );
    console.log(details.status);
    helper.methodApiExpectResponseStatus(details.status, status);
  });

  it("Prueba - API - Cuentas/Sumatoria ", async () => {
    const acoountSummary = await apiSummary.methodApiGetAccountSummary(
      dataApi.apiAccount.personaId
    );
    console.log(acoountSummary.status);
    helper.methodApiExpectResponseStatus(acoountSummary.status, status);
  });

});