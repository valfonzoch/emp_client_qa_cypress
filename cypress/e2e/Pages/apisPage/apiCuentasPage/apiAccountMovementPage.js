import "cypress-plugin-api";

//movement
export let movementDate;
export let valueDate;
export let documentNumber;
export let type;
export let amount;
export let concept;
export let id;
export let description;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointInves = "/crm/v1/accounts/";

export class ApiHelperGetAccountMovement {
  methodApiGetAccountMovement(accountNumber) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointInves}${accountNumber}/movements`,
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body,
      }).then((response) => {
        const firsDate = response.body.content[0];

        const movementDate0 = firsDate.movementDate;
        console.log(movementDate0);
        movementDate = movementDate0;

        const valueDate0 = firsDate.valueDate;
        console.log(valueDate0);
        valueDate = valueDate0;

        const documentNumber0 = firsDate.documentNumber;
        console.log(documentNumber0);
        documentNumber = documentNumber0;

        const type0 = firsDate.type;
        console.log(type0);
        type = type0;

        const amount0 = firsDate.amount;
        console.log(amount0);
        amount = amount0;

        const concept0 = firsDate.concept;
        console.log(concept0);
        concept = concept0;

        const id0 = firsDate.status.id;
        console.log(id0);
        id = id0;

        const description0 = firsDate.status.description;
        console.log(description0);
        description = description0;

        resolve(response);
      });
    });
  }
}
