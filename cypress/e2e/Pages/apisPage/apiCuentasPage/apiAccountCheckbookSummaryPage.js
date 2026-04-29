import "cypress-plugin-api";

export let emissionDateCheck;
export let idCheck;
export let descriptionCheck;
export let initialCheckNumber;
export let finalCheckNumber;
export let checkbookQuantity;
export let usagePercent;
export let availableQuantity;
export let paidQuantity;
export let annulledQuantity;
export let orderNoPaidQuantity;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointInves = "/crm/v1/accounts/";

export class ApiHelperGetAccountCheeckBoookSummary {

  methodApiGetAccountCheckbookSummary(accountNumber, page, size) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointInves}${accountNumber}/checkbooks/summaries?page=${page}&size=${size}`, 
        headers: {
          Accept: "*/*",
         Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body,
      }).then((response) => {

        const firsDate = response.body.content[0];

        const emissionDate0 = firsDate.emissionDate;
        console.log(emissionDate0);
        emissionDateCheck = emissionDate0;

        const id0 = firsDate.type.id;
        console.log(id0);
        idCheck = id0;        // aquí se cambia el nombre porque se repite

        const description0 = firsDate.type.description;
        console.log(description0);
        descriptionCheck = description0;  // aquí se cambia el nombre porque se repite

        const initialCheckNumber0 = firsDate.initialCheckNumber;
        console.log(initialCheckNumber0);
        initialCheckNumber = initialCheckNumber0; 
        
        const finalCheckNumber0 = firsDate.finalCheckNumber;
        console.log(finalCheckNumber0);
        finalCheckNumber = finalCheckNumber0; 

        const checkbookQuantity0 = firsDate.checkbookQuantity;
        console.log(checkbookQuantity0);
        checkbookQuantity = checkbookQuantity0; 

        const usagePercent0 = firsDate.usagePercent;
        console.log(usagePercent0);
        usagePercent = usagePercent0; 

        const availableQuantity0 = firsDate.availableQuantity;
        console.log(availableQuantity0);
        availableQuantity = availableQuantity0; 

        const paidQuantity0 = firsDate.paidQuantity;
        console.log(paidQuantity0);
        paidQuantity = paidQuantity0; 

        const annulledQuantity0 = firsDate.annulledQuantity;
        console.log(annulledQuantity0);
        annulledQuantity = annulledQuantity0; 

        const orderNoPaidQuantity0 = firsDate.orderNoPaidQuantity;
        console.log(orderNoPaidQuantity0);
        orderNoPaidQuantity = orderNoPaidQuantity0; 
        
        resolve(response);
      });
    });
  }
}