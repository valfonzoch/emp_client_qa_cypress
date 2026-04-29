import "cypress-plugin-api";


const urlApi = Cypress.config().baseUrlInformconf;
const endPointInformconf = "/equifax/v1/informconf/";

export class ApiRemates{

methodApiGetRemates(docNumber, personId, solicitationNumber) {
  const body = {};
  return new Cypress.Promise((resolve, reject) => {
    const accessToken = Cypress.env("bearerToken");
    cy.api({
      method: "GET",
      url: `${urlApi}${endPointInformconf}/personas/remates?numeroDocumento=${docNumber}&codigoPersona=${personId}&numeroSolicitud=${solicitationNumber}`, 
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