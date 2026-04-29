import "cypress-plugin-api";

const urlApi = Cypress.config().baseUrlApiDocument;
const endPointDocument = "/crm/v1/document-manager/";

export class ApiDocument {

  methodApiDocument() {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointDocument}document-types?flowDefinition=APERTURA_CUENTA_CORRIENTE_PERSONA_FISICA&documentRelation=P&page=0&size=10000`, 
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