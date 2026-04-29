import "cypress-plugin-api";

export let movementDate;
export let concept;
export let amount;
export let currencyMovement;
export let type;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointInves = "/crm/v1/investments/";

export class ApiHelperGetInvestmentMovement {

  methodApiGetInvestmentMovement(accountNumber, page, size) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointInves}${accountNumber}/movements?page=${page}&size=${size}`,
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body,
      }).then((response) => {
        // Ordenar el array de mayor a menor por movementDate
        const sortedContent = response.body.content.sort((a, b) => {
          return new Date(b.movementDate) - new Date(a.movementDate);
        });

      const firsDate = sortedContent[0];

        const movementDate0 = firsDate.movementDate;
        console.log(movementDate0);
        movementDate = movementDate0;

        const concept0 = firsDate.concept;
        console.log(concept0);
        concept = concept0;

        const amount0 = firsDate.amount;
        console.log(amount0);
        amount = amount0;

        const currency0 = firsDate.currency;
        console.log(currency0);
        currencyMovement = currency0;

        const type0 = firsDate.type;
        console.log(type0);
        type = type0;

        resolve(response);
      });
    });
  }
}
