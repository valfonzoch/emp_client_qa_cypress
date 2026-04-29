import "cypress-plugin-api";

export let term;
export let interestRate;
export let cdaId;
export let cdaDescription;
export let automaticCredit;
export let creditAccount;
export let beneficiary;
export let serial;
export let certificateNumber;
export let openingDate;
export let cdaStatusid;
export let cdaStatusdescription;
export let expiration;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointInves = "/crm/v1/investments/";

export class ApiHelperGetInvestmentCdas {

  methodApiGetInvestmentCdas(accountNumber) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointInves}${accountNumber}/cda`,
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

        const interestRate0 = firsDate.interestRate;
        console.log(interestRate0);
        interestRate = interestRate0;

        const id0 = firsDate.paymentMethod.id;
        console.log(id0);
        cdaId = id0;

        const description0 = firsDate.paymentMethod.description;
        console.log(description0);
        cdaDescription = description0;

        const automaticCredit0 = firsDate.automaticCredit;
        console.log(automaticCredit0);
        automaticCredit = automaticCredit0;

        const creditAccount0 = firsDate.creditAccount;
        console.log(creditAccount0);
        creditAccount = creditAccount0;

        const beneficiary0 = firsDate.beneficiary;
        console.log(beneficiary0);
        beneficiary = beneficiary0;

        const serial0 = firsDate.serial;
        console.log(serial0);
        serial = serial0;

        const certificateNumber0 = firsDate.certificateNumber;
        console.log(certificateNumber0);
        certificateNumber = certificateNumber0;

        const openingDate0 = firsDate.openingDate;
        console.log(openingDate0);
        openingDate = openingDate0;

        const id1 = firsDate.status.id;
        console.log(id1);
        cdaStatusid = id1;

        const description1 = firsDate.status.description;
        console.log(description1);
        cdaStatusdescription = description1;

        const expiration0 = firsDate.expiration;
        console.log(expiration0);
        expiration = expiration0;

        resolve(response);
      });
    });
  }
}