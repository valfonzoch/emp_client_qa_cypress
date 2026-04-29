import "cypress-plugin-api";

export let initialCheckNumberReject;
export let checkNumberReject;
export let amountReject;
export let reason;
export let rejectedDate;
export let rejectedOrigin;
export let idReject;
export let descriptionReject;
export let subsidiaryDetail;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointInves = "/crm/v1/accounts/";

export class ApiHelperGetAccountCheckbooksRejected {

  methodApiGetAccountCheckbookRejected(accountNumber, page, size) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointInves}${accountNumber}/checkbooks/rejections?page=${page}&size=${size}`, 
        headers: {
          Accept: "*/*",
         Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body,
      }).then((response) => {

        const firsDate = response.body.content[0];

        const initialCheckNumber0 = firsDate.initialCheckNumber;
        console.log(initialCheckNumber0);
        initialCheckNumberReject = initialCheckNumber0;  // aquí se cambia el nombre porque se repite

        const checkNumber0 = firsDate.checkNumber;
        console.log(checkNumber0);
        checkNumberReject = checkNumber0;        // aquí se cambia el nombre porque se repite

        const amount0 = firsDate.amount;
        console.log(amount0);
        amountReject = amount0;  // aquí se cambia el nombre porque se repite

        const reason0 = firsDate.reason;
        console.log(reason0);
        reason = reason0; 
        
        const rejectedDate0 = firsDate.rejectedDate;
        console.log(rejectedDate0);
        rejectedDate = rejectedDate0; 
        
        const rejectedOrigin0 = firsDate.rejectedOrigin;
        console.log(rejectedOrigin0);
        rejectedOrigin = rejectedOrigin0; 

        const id0 = firsDate.rejectedOrigin.id;
        console.log(id0);
        idReject = id0;            // aquí se cambia el nombre porque se repite

        const description0 = firsDate.rejectedOrigin.description;
        console.log(description0);
        descriptionReject = description0;      // aquí se cambia el nombre porque se repite

        const subsidiaryDetail0 = firsDate.subsidiaryDetail;
        console.log(subsidiaryDetail0);
        subsidiaryDetail = subsidiaryDetail0; 
        
        resolve(response);
      });
    });
  }
}