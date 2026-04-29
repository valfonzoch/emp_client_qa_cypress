import "cypress-plugin-api";

export let localTotalAmount;
export let localCurrency;
export let foreignTotalAmount;
export let foreignCurrency;
export let quantityProducts;
export let productName;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointInves = "/crm/v1/accounts/";

export class ApiHelperGetAccountSummary {

methodApiGetAccountSummary(personaId) {
  const body = {};
  return new Cypress.Promise((resolve, reject) => {
    const accessToken = Cypress.env("bearerToken");
    cy.api({
      method: "GET",
      url: `${urlApi}${endPointInves}summary?personId=${personaId}`, 
      headers: {
        Accept: "*/*",
       Authorization: `Bearer ${accessToken}`,
      },
      form: true,
      body: body,
    }).then((response) => {

      const dateBody = response.body

      const localTotalAmount0 = dateBody.localTotalAmount;
      console.log(localTotalAmount0);
      localTotalAmount = localTotalAmount0;  

      const localCurrency0 = dateBody.localCurrency;
      console.log(localCurrency0);
      localCurrency = localCurrency0; 

      const foreignTotalAmount0 = dateBody.foreignTotalAmount;
      console.log(foreignTotalAmount0);
      foreignTotalAmount = foreignTotalAmount0; 

      const foreignCurrency0 = dateBody.foreignCurrency;
      console.log(foreignCurrency0);
      foreignCurrency = foreignCurrency0; 

      const quantityProducts0 = dateBody.quantityProducts;
      console.log(quantityProducts0);
      quantityProducts = quantityProducts0; 

      const productName0 = dateBody.productName;
      console.log(productName0);
      productName = productName0; 
      
      resolve(response);
    });
  });
}

}