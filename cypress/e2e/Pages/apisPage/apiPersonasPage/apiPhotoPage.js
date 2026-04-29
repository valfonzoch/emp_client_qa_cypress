import "cypress-plugin-api";

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointInves = "/crm/v1/persons/";

export class ApiPhoto {

  methodApiPhotoPerson(personId) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointInves}photo?personId=${personId}`, 
        headers: {
          Accept: "*/*",
         Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body,
      }).then((response) => {
        resolve(response);
      });
    });
  }
}