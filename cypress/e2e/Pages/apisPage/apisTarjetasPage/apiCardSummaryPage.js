import "cypress-plugin-api";

export let totalAvailableAmount;
export let currency;
export let quantityProducts;
export let productName;


const urlApi = Cypress.config().baseUrlApiCard;
const endPointCard = "/crm/v1/cards/";

export class ApiHelperGetSummaryCard {

  methodApiGetCardSummary(documentNumber) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointCard}summary?documentNumber=${documentNumber}`, 
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body,
      }).then((response) => {

        const firsDate = response.body;

        const totalAvailableAmount0 = firsDate.totalAvailableAmount;
        console.log(totalAvailableAmount0);
        totalAvailableAmount = totalAvailableAmount0;

        const currency0 = firsDate.currency;
        console.log(currency0);
        currency = currency0;

        const quantityProducts0 = firsDate.quantityProducts;
        console.log(quantityProducts0);
        quantityProducts = quantityProducts0;

        const productName0 = firsDate.productName;
        console.log(productName0);
        productName = productName0;

        resolve(response);
      });
    });
  }
}

