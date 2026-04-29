import "cypress-plugin-api";
import { cardNumber } from "./apiCardPage";

//get Card Detail 
export let idAffinityDetail;
export let descriptionAffinityDetail;
export let operatorAffinityDetail;
export let idStatusDetail;
export let descriptionStatusDetail;
export let availableBalance;
export let holderName;
export let closingDate;
export let creditLine;
export let availableCashAdvance;
export let interestRate;
export let totalDebtDetail;
export let minPaymentPending;
export let totalPayment;
export let advancePaymentRealized;
export let lastPaymentAmount;
export let lastPaymentDate;
export let nextDueDate;
export let accountNumberDetail;


const urlApi = Cypress.config().baseUrlApiCard;
const endPointCard = "/crm/v1/cards/";

export class ApiHelperGetDetailCard {

  methodApiGetCardDetail(cardNumber) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointCard}${cardNumber}`, 
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body
      }).then((response) => {

        const firsDate = response.body;

        const idAffinity0 = firsDate.affinity.id;
        console.log(idAffinity0);
        idAffinityDetail = idAffinity0;

        const descriptionAffinity0 = firsDate.affinity.description;
        console.log(descriptionAffinity0);
        descriptionAffinityDetail = descriptionAffinity0;

        const operatorAffinity0 = firsDate.affinity.operator;
        console.log(operatorAffinity0);
        operatorAffinityDetail = operatorAffinity0;

        const idStatus0 = firsDate.status.id;
        console.log(idStatus0);
        idStatusDetail = idStatus0;

        const descriptionStatus0 = firsDate.status.description;
        console.log(descriptionStatus0);
        descriptionStatusDetail = descriptionStatus0;
        
        const availableBalance0 = firsDate.availableBalance;
        console.log(availableBalance0);
        availableBalance = availableBalance0;

        const holderName0 = firsDate.holderName;
        console.log(holderName0);
        holderName = holderName0;

        const closingDate0 = firsDate.closingDate;
        console.log(closingDate0);
        closingDate = closingDate0;

        const creditLine0 = firsDate.creditLine;
        console.log(creditLine0);
        creditLine = creditLine0;

        const availableCashAdvance0 = firsDate.availableCashAdvance;
        console.log(availableCashAdvance0);
        availableCashAdvance = availableCashAdvance0;

        const interestRate0 = firsDate.interestRate;
        console.log(interestRate0);
        interestRate = interestRate0;

        const totalDebtDetail0 = firsDate.totalDebt;
        console.log(totalDebtDetail0);
        totalDebtDetail = totalDebtDetail0;

        const minPaymentPending0 = firsDate.minPaymentPending;
        console.log(minPaymentPending0);
        minPaymentPending = minPaymentPending0;

        const totalPayment0 = firsDate.totalPayment;
        console.log(totalPayment0);
        totalPayment = totalPayment0;

        const advancePaymentRealized0 = firsDate.advancePaymentRealized;
        console.log(advancePaymentRealized0);
        advancePaymentRealized = advancePaymentRealized0;

        const lastPaymentAmount0 = firsDate.lastPaymentAmount;
        console.log(lastPaymentAmount0);
        lastPaymentAmount = lastPaymentAmount0;

        const lastPaymentDate0 = firsDate.lastPaymentDate;
        console.log(lastPaymentDate0);
        lastPaymentDate = lastPaymentDate0;

        const nextDueDate0 = firsDate.nextDueDate;
        console.log(nextDueDate0);
        nextDueDate = nextDueDate0;

        const accountNumberDetail0 = firsDate.accountNumber;
        console.log(accountNumberDetail0);
        accountNumberDetail = accountNumberDetail0;

        resolve(response);
      });
    });
  }
}

