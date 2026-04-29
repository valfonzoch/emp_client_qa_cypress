import "cypress-plugin-api";

const urlApi = Cypress.config().baseUrlApiPerson;
const endPointInves = "/crm/v1/persons/";

export class ApiInhibicions {

  methodApiInhibicions(personId, page, size) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointInves}${personId}/inhibitions?status=I&page=${page}&size=${size}`, 
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