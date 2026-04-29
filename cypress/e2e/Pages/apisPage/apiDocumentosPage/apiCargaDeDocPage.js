import "cypress-plugin-api";

const urlApi = Cypress.config().baseUrlApiDocument;
const endPointDocument = "/crm/v1/document-manager/";

Cypress.config('log', true);

export class ApiUploadDocument {
  methodApiPostUploadDocument(jsonDocuments) {
    return new Cypress.Promise((resolve, reject) => {
      const accessUserToken = Cypress.env("bearerTokenUser");

      cy.fixture('cedVene.pdf', 'binary').then((fileBinary) => {
        // Convierte el archivo en un Blob
        const blob = Cypress.Blob.binaryStringToBlob(fileBinary, 'application/pdf');
        const formData = new FormData();
        
        // Añade el archivo al FormData
        formData.append("file", blob, "cedVene.pdf");

        // Se uso este método para poder subir un json en forma de blob por medio del servicio. 
        formData.append(
          "body",
          new Blob(
            [
              JSON.stringify(
                jsonDocuments
              ),
            ],
            { type: "application/json" }
          )
        );

        // `cy.request()` para manejar multipart/form-data correctamente
        cy.request({
          method: "POST",
          url: `${urlApi}${endPointDocument}files`,
          headers: {
            Authorization: `Bearer ${accessUserToken}`,
            Accept: "*/*",
          },
          body: formData, // Enviamos el FormData con archivo y JSON. Los dos se tuvieron que enviar tipo blob para poder ser procesados
          timeout: 0,
          failOnStatusCode: false, // Para manejar errores manualmente
          insecure: true, 
        }).then((response) => {
          console.log(response);
          resolve(response); 
        })
      });
    });
  }
}