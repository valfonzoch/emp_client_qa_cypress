import "cypress-plugin-api";
import { cardNumber } from "./apiCardPage";

//get Card Detail 
export let movementType;
export let availableNormalPurchase;
export let closingDateMove;
export let minPaymentDueDate;
export let minPayment;
export let totalDebtMovement;
export let debtInstallmentPurchase;
export let dueDebt;
export let transactionType;
export let idtransaction;
export let descriptionTransaction;
export let operationDate;
export let processDate;
export let couponNumber;
export let descriptionMovement;
export let currencyDescription;
export let amount;


const urlApi = Cypress.config().baseUrlApiCard;
const endPointCard = "/crm/v1/cards/";

export class ApiHelperGetMovementCard {

  methodApiGetCardMovement(cardNumber, periodo, page, size) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointCard}${cardNumber}/movements?movementType=${periodo}&page=${page}&size=${size}`, 
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body,
      }).then((response) => {

        const firsDate = response.body;

        const movementType0 = firsDate.movementType;
        console.log(movementType0);
        movementType = movementType0;

        const availableNormalPurchase0 = firsDate.availableNormalPurchase;
        console.log(availableNormalPurchase0);
        availableNormalPurchase = availableNormalPurchase0;

        const closingDate1 = firsDate.closingDate;
        console.log(closingDate1);
        closingDateMove = closingDate1;

        const minPaymentDueDate0 = firsDate.minPaymentDueDate;
        console.log(minPaymentDueDate0);
        minPaymentDueDate = minPaymentDueDate0;

        const minPayment0 = firsDate.minPayment;
        console.log(minPayment0);
        minPayment = minPayment0;
        
        const totalDebt0 = firsDate.totalDebt;
        console.log(totalDebt0);
        totalDebtMovement = totalDebt0;
        
        const debtInstallmentPurchase0 = firsDate.debtInstallmentPurchase;
        console.log(debtInstallmentPurchase0);
        debtInstallmentPurchase = debtInstallmentPurchase0;

        const dueDebt0 = firsDate.dueDebt;
        console.log(dueDebt0);
        dueDebt = dueDebt0;

       /* const id0 = firsDate.movementPage.content[0].transactionType.id;
        console.log(id0);
        idtransaction = id0;

        const description0 = firsDate.movementPage.content[0].transactionType.description;
        console.log(description0);
        descriptionTransaction = description0;

        const operationDate0 = firsDate.movementPage.content[0].operationDate;
        console.log(operationDate0);
        operationDate = operationDate0;

        const processDate0 = firsDate.movementPage.content[0].processDate;
        console.log(processDate0);
        processDate = processDate0;

        const couponNumber0 = firsDate.movementPage.content[0].couponNumber;
        console.log(couponNumber0);
        couponNumber = couponNumber0;

        const description2 = firsDate.movementPage.content[0].description;
        console.log(description2);
        descriptionMovement = description2;

        const currencyDescription0 = firsDate.movementPage.content[0].currencyDescription;
        console.log(currencyDescription0);
        currencyDescription = currencyDescription0;

        const amount0 = firsDate.movementPage.content[0].amount;
        console.log(amount0);
        amount = amount0;*/

        resolve(response);
      });
    });
  }
}

