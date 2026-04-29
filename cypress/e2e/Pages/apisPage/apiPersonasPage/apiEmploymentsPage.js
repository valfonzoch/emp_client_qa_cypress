import "cypress-plugin-api";

const urlApi = Cypress.config().baseUrlApi;
const endPointInves = "/crm/v1/persons/";

export class ApiEmployments {

  methodApiEmployments(personId) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointInves}${personId}/employments`, 
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