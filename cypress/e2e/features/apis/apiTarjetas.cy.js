import { ApiHelperPos } from "../../Pages/apisPage/apiTokenPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataApi from "../../../fixtures/dataApi.json";
import { ApiHelperGetDetailCard } from "../../Pages/apisPage/apisTarjetasPage/apiCardDetailPage";
import { ApiHelperGetCard } from "../../Pages/apisPage/apisTarjetasPage/apiCardPage";
import { ApiHelperGetMovementCard } from "../../Pages/apisPage/apisTarjetasPage/apiCardMovementPage";
import { ApiHelperGetSummaryCard } from "../../Pages/apisPage/apisTarjetasPage/apiCardSummaryPage";
import { ApiHelperGetHolderCard } from "../../Pages/apisPage/apisTarjetasPage/apiCardHoldersPage";

let apiHelperPos = new ApiHelperPos();
let apiHelperGet = new ApiHelperGetCard();
let apiDetail = new ApiHelperGetDetailCard();
let apiMovement = new ApiHelperGetMovementCard();
let apiSummary = new ApiHelperGetSummaryCard();
let apiHolder = new ApiHelperGetHolderCard();
let helper = new Assertions();

export const status = 200;

describe("banco - Prueba API - Tarjetas/Token", () => {
  it("Prueba - API - Tarjetas", () => {
    cy.wrap(apiHelperPos.methodApiPostCreate()).then((tokenAuthentication) => {
      console.log(tokenAuthentication.status);
      helper.methodApiExpectResponseStatus(tokenAuthentication.status, status);
    });
  });

  it("Prueba - API - Tarjetas/Tarjetas", () => {
    cy.wrap(
      apiHelperGet.methodApiGetCard(
        dataApi.apiCards.personId3,
        dataApi.general.page,
        dataApi.general.size
      )
    ).then((card) => {
      console.log(card.status);
      helper.methodApiExpectResponseStatus(card.status, status);
    });
  });

  it("Prueba - API - Tarjetas/Detalle", () => {
    cy.wrap(apiDetail.methodApiGetCardDetail(dataApi.apiCards.cardNumber3)).then(
      (cardDetail) => {
        console.log(cardDetail.status);
        helper.methodApiExpectResponseStatus(cardDetail.status, status);
      }
    );
  });

  it("Prueba - API - Tarjetas/Movimientos", () => {
    cy.wrap(
      apiMovement.methodApiGetCardMovement(
        dataApi.apiCards.cardNumber3,
        dataApi.apiCards.periodo,
        dataApi.general.page,
        dataApi.general.size
      )
    ).then((cardMovement) => {
      console.log(cardMovement.status);
      helper.methodApiExpectResponseStatus(cardMovement.status, status);
    });
  });

  it("Prueba - API - Tarjetas/Sumatoria", () => {
    cy.wrap(
      apiSummary.methodApiGetCardSummary(dataApi.apiCards.documentNumber3)
    ).then((cardSummary) => {
      console.log(cardSummary.status);
      helper.methodApiExpectResponseStatus(cardSummary.status, status);
    });
  });

  it("Prueba - API - Tarjetas/Holder", () => {
    cy.wrap(
      apiHolder.methodApiGetCardHolder(
        dataApi.apiCards.accountNumber3,
        dataApi.general.page,
        dataApi.general.size
      )
    ).then((cardHolder) => {
      console.log(cardHolder.status);
      helper.methodApiExpectResponseStatus(cardHolder.status, status);
    });
  });
});