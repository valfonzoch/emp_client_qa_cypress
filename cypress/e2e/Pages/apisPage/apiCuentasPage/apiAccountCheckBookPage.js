import "cypress-plugin-api";

export let emissionDate ;
export let checkNumber ;
export let amountCheck ;  
export let statusCheck ;  

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointInves = "/crm/v1/accounts/";

export class ApiHelperGetAccountCheckBook {

  methodApiGetAccountCheckbooks(accountNumber, initialChecknumber, page, size) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointInves}${accountNumber}/checkbooks/${initialChecknumber}?page=${page}&size=${size}`, 
        headers: {
          Accept: "*/*",
         Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body,
      }).then((response) => {

        const firsDate = response.body.content[0]

        const emissionDate0 = firsDate.emissionDate;
        console.log(emissionDate0);
        emissionDate = emissionDate0;

        const checkNumber0 = firsDate.checkNumber;
        console.log(checkNumber0);
        checkNumber = checkNumber0;

        const amount0 = firsDate.amount;
        console.log(amount0);
        amountCheck = amount0;  // aquí se cambia el nombre porque el primer endPoint ya tiene un amount

        const status0 = firsDate.status;
        console.log(status0);
        statusCheck = status0;  // aquí se cambia el nombre porque permite quese llame status
        
        resolve(response);
      });
    });
  }

}