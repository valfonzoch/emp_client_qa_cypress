import { ApiHelperPos } from "../../Pages/apisPage/apiTokenPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataApi from "../../../fixtures/dataApi.json";
import { ApiHelperGetLoanInstallments } from "../../Pages/apisPage/apiPrestamosPage/apiLoanInstallmentsPage";
import { ApiHelperGetLoanGuarantees } from "../../Pages/apisPage/apiPrestamosPage/apiLoanGuaranteesPage";
import { ApiHelperGetLoanSummary } from "../../Pages/apisPage/apiPrestamosPage/apiLoanSummaryPage";
import { ApiHelperGetLoanSolicitation } from "../../Pages/apisPage/apiPrestamosPage/apiLoanSolicitationPage";
import { ApiHelperGetLoanSolicitacionsManagement } from "../../Pages/apisPage/apiPrestamosPage/apiLoanSolicitationsManagementPage";
import { ApiHelperGetLoanScore } from "../../Pages/apisPage/apiPrestamosPage/apiLoanScorePage";
import { ApiHelperGetLoanOffer } from "../../Pages/apisPage/apiPrestamosPage/apiLoanOfferPage";
import { ApiHelperGetLoanSolicitationDetail } from "../../Pages/apisPage/apiPrestamosPage/apiLoanSolicitationDetailPage";
import { ApiHelperGetLoanGuaranteeDetail } from "../../Pages/apisPage/apiPrestamosPage/apiLoanGuaranteeDetailPage";
import { ApiHelperGetLoanDetail } from "../../Pages/apisPage/apiPrestamosPage/apiLoanDetailPage";
import { ApiHelperGetLoan } from "../../Pages/apisPage/apiPrestamosPage/apiLoanPage";

let apiHelperPos = new ApiHelperPos();
let apiLoan = new ApiHelperGetLoan();
let apiDetail = new ApiHelperGetLoanDetail();
let apiInstallments = new ApiHelperGetLoanInstallments();
let apiGuarantees = new ApiHelperGetLoanGuarantees();
let apiSummary = new ApiHelperGetLoanSummary();
let apiSolicitation = new ApiHelperGetLoanSolicitation();
let apiManagement = new ApiHelperGetLoanSolicitacionsManagement();
let apiScore = new ApiHelperGetLoanScore();
let apiOffer = new ApiHelperGetLoanOffer();
let apiSolicDetail = new ApiHelperGetLoanSolicitationDetail();
let apiGuaranteeDetail = new ApiHelperGetLoanGuaranteeDetail();
let helper = new Assertions();
let status = 200;




describe("banco - Prueba API - Préstamos", () => {

  it("Prueba - API - Préstamos/Token", async () => {

    const tokenAuthentication = await apiHelperPos.methodApiPostCreate();
    console.log(tokenAuthentication.status);
    helper.methodApiExpectResponseStatus(tokenAuthentication.status, status);

  });

  it("Prueba - API - Préstamos", async () => {
    const detail = await apiLoan.methodApiGetLoan(
      dataApi.apiLoanDetail.personaId,
    );
    console.log(detail.status);
    helper.methodApiExpectResponseStatus(detail.status, status);
  });

  it("Prueba - API - Préstamos/Detalle", async () => {
    const detail = await apiDetail.methodApiGetLoanDetail(
      dataApi.apiLoanDetail.accountNumber,
    );
    console.log(detail.status);
    helper.methodApiExpectResponseStatus(detail.status, status);
  });

  it("Prueba - API - Préstamos/Cuotas", async () => {
    const installments = await apiInstallments.methodApiGetLoanInstallments(
      dataApi.apiLoanDetail.accountNumber,
      dataApi.apiLoanDetail.page,
      dataApi.apiLoanDetail.size
    );
    console.log(installments.status);
    helper.methodApiExpectResponseStatus(installments.status, status);
  });

  it("Prueba - API - Préstamos/Garantes", async () => {
    const guarantees = await apiGuarantees.methodApiGetLoanGuarantees(
      dataApi.apiLoanDetail.accountNumber,
      dataApi.apiLoanDetail.page,
      dataApi.apiLoanDetail.size
    );
    console.log(guarantees.status);
    helper.methodApiExpectResponseStatus(guarantees.status, status);
  });

  it("Prueba - API - Préstamos/Sumatoria", async () => {
    const summary = await apiSummary.methodApiGetLoanSummary(
      dataApi.apiLoanDetail.personaId
    );
    console.log(summary.status);
    helper.methodApiExpectResponseStatus(summary.status, status);
  });

  it("Prueba - API - Préstamos/Solicitudes", async () => {

    const solicitation = await apiSolicitation.methodApiGetLoanSolicitacions(
      dataApi.apiLoanDetail.personaId
    );
    console.log(solicitation.status);
    helper.methodApiExpectResponseStatus(solicitation.status, status);
  });

  it("Prueba - API - Préstamos/Gestion", async () => {
    const management = await apiManagement.methodApiGetLoanSolicitacionsManagement(
      dataApi.apiLoanDetail.solicitationNumber
    );
    console.log(management.status);
    helper.methodApiExpectResponseStatus(management.status, status);
  });

 it("Prueba - API - Préstamos/Score", async () => {
    const score = await apiScore.methodApiGetLoanLevelScore(
      dataApi.apiLoanDetail.solicitationNumber2 
    );
    console.log(score.status);
    helper.methodApiExpectResponseStatus(score.status, status);
  });

 it("Prueba - API - Préstamos/Oferta", async () => {
    const offer = await apiOffer.methodApiGetLoanLevelOffer(
      dataApi.apiLoanDetail.solicitationNumber2,
      dataApi.apiLoanDetail.page,
      dataApi.apiLoanDetail.size
    );
    console.log(offer.status);
    helper.methodApiExpectResponseStatus(offer.status, status);
  });

 it("Prueba - API - Préstamos/Detalle de Solicitud", async () => {
    const solicDetail = await apiSolicDetail.methodApiGetLoanSolicitationDetail(
      dataApi.apiLoanDetail.solicitationNumber,
      dataApi.apiLoanDetail.page,
      dataApi.apiLoanDetail.size
    );
    console.log(solicDetail.status);
    helper.methodApiExpectResponseStatus(solicDetail.status, status);
  });


 it("Prueba - API - Préstamos/ Detalle de Garantía", async () => {
    const guaranteeDetail = await apiGuaranteeDetail.methodApiGetLoanGuaranteeDetail(
      dataApi.apiLoanDetail.guaranteeId
    );
    console.log(guaranteeDetail.status);
    helper.methodApiExpectResponseStatus(guaranteeDetail.status, status);
    });

  });