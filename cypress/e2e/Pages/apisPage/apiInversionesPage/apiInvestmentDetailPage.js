import "cypress-plugin-api";

export let invesStatusId; 
export let invesStatusDescription;
export let productType;
export let accountNumber;
export let denomination;
export let relationId;
export let relationDescription;
export let capital;
export let currency;
export let balance;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointInves = "/crm/v1/investments";

export class ApiHelperGetInvestmentDetails {

  methodApiGetInvestmentDetails(personaId) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointInves}?personId=${personaId}`,
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body,
      }).then((response) => {

        const firsDate = response.body.content[2]

        const id0 = firsDate.status.id;
        console.log(id0);
        invesStatusId = id0;

        const description0 = firsDate.status.description;
        console.log(description0);
        invesStatusDescription = description0;

        const productType0 = firsDate.productType;
        console.log(productType0);
        productType = productType0;

        const accountNumber0 = firsDate.accountNumber;
        console.log(accountNumber0);
        accountNumber = accountNumber0;

        const denomination0 = firsDate.denomination;
        console.log(denomination0);
        denomination = denomination0;

        const id1 = firsDate.relation.id;
        console.log(id1);
        relationId = id1;

        const description1 = firsDate.relation.description;
        console.log(description1);
        relationDescription = description1;

        const capital0 = firsDate.capital;
        console.log(capital0);
        capital = capital0;

        const currency0 = firsDate.currency;
        console.log(currency0);
        currency = currency0;

        const balance0 = firsDate.balance;
        console.log(balance0);
        balance = balance0;
      
        resolve(response);
      });
    });
  }
}