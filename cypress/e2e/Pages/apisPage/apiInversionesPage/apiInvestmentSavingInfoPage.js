import "cypress-plugin-api";

export let term;
export let feeAmount;
export let depositedFees;
export let interestRate;
export let beneficiary;
export let opening;
export let expiration;
export let relatedAccountNumber;
export let relatedAccountName;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointInves = "/crm/v1/investments/";

export class ApiHelperGetInvestmentSavingInfo {
  
  methodApiGetInvestmentSavingInfo(accountNumber) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointInves}${accountNumber}/savings-info`,
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body,
      }).then((response) => {

        const firsDate = response.body

        const term0 = firsDate.term;
        console.log(term0);
        term = term0;

        const feeAmount0 = firsDate.feeAmount;
        console.log(feeAmount0);
        feeAmount = feeAmount0;

        const depositedFees0 = firsDate.depositedFees;
        console.log(depositedFees0);
        depositedFees = depositedFees0;

        const interestRate0 = firsDate.interestRate;
        console.log(interestRate0);
        interestRate = interestRate0;

        const beneficiary0 = firsDate.beneficiary;
        console.log(beneficiary0);
        beneficiary = beneficiary0;

        const opening0 = firsDate.opening;
        console.log(opening0);
        opening = opening0;

        const expiration0 = firsDate.expiration;
        console.log(expiration0);
        expiration = expiration0;

        const relatedAccountNumber0 = firsDate.relatedAccountNumber;
        console.log(relatedAccountNumber0);
        relatedAccountNumber = relatedAccountNumber0;

        const relatedAccountName0 = firsDate.relatedAccountName;
        console.log(relatedAccountName0);
        relatedAccountName = relatedAccountName0;

        resolve(response);
      });
    });
  }
}