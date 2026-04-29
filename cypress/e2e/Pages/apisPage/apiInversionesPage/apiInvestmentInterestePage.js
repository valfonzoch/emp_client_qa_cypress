import "cypress-plugin-api";

export let couponNumber;
export let interestAmount;
export let interestsId;
export let interestDescription;
export let issueDate;
export let expirationInt;
export let paymentDate;
export let locked;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointInves = "/crm/v1/investments/";


export class ApiHelperGetInvestmentInterests {

  methodApiGetInvestmentInterests(accountNumber, page, size) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointInves}${accountNumber}/interests?page=${page}&size=${size}`,
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body,
      }).then((response) => {
        // Ordenar el array de menor a mayor por couponNumber
        const sortedContent = response.body.content.sort((a, b) => a.couponNumber - b.couponNumber);

        const firsDate = sortedContent[0]

        const couponNumber0 = firsDate.couponNumber;
        console.log(couponNumber0);
        couponNumber = couponNumber0;

        const interestAmount0 = firsDate.interestAmount;
        console.log(interestAmount0);
        interestAmount = interestAmount0;

        const Id0 = firsDate.status.id;
        console.log(Id0);
        interestsId = Id0;

        const description0 = firsDate.status.description;
        console.log(description0);
        interestDescription = description0;

        const issueDated0 = firsDate.issueDate;
        console.log(issueDated0);
        issueDate = issueDated0;

        const expiration0 = firsDate.expiration;
        console.log(expiration0);
        expirationInt = expiration0;

        const paymentDate0 = firsDate.paymentDate;
        console.log(paymentDate0);
        paymentDate = paymentDate0;

        const locked0 = firsDate.locked;
        console.log(locked0);
        locked = locked0;

        resolve(response);
      });
    });
  }
}