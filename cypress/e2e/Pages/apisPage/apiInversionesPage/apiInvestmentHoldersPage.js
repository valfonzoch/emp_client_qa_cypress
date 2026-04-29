import "cypress-plugin-api";

export let fullName;
export let personId;
export let relation;
export let effectivenessDate;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointInves = "/crm/v1/investments/";

export class ApiHelperGetInvestmentHolders {

  methodApiGetInvestmentHolders(accountNumber, page, size) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointInves}${accountNumber}/holders?page=${page}&size=${size}`,
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body,
      }).then((response) => {

        const firsDate = response.body.content[0]

        const fullName0 = firsDate.fullName;
        console.log(fullName0);
        fullName = fullName0;

        const personId0 = firsDate.personId;
        console.log(personId0);
        personId = personId0;

        const relation0 = firsDate.relation;
        console.log(relation0);
        relation = relation0;

        const effectivenessDate0 = firsDate.effectivenessDate;
        console.log(effectivenessDate0);
        effectivenessDate = effectivenessDate0;

        resolve(response);
      });
    });
  }
}
