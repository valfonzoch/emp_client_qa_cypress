
import 'cypress-plugin-api'

let accessUserToken;

export class ApiTokenUser { 

     methodApiTokenUser() {     
        const tokenUrl = Cypress.env("KEYCLOAK_TOKEN_URL");
        if (!tokenUrl) {
            throw new Error("Missing KEYCLOAK_TOKEN_URL in Cypress env");
        }
        const body = {
            grant_type: 'password',
            username: Cypress.env("KEYCLOAK_USER_NAME"),
            password: Cypress.env("KEYCLOAK_USER_PASSWORD"),
            client_id: Cypress.env("KEYCLOAK_USER_CLIENT_ID")
        };  

        return new Cypress.Promise((resolve, reject)=>{
            cy.api({
                method: 'POST',
                url: tokenUrl,
                headers: { 
                    'Accept': '*/*',
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                form: true,
                body:body,
            }).then((response) => {
                accessUserToken = response.body.access_token; // Guarda el token en la variable global
                Cypress.env('bearerTokenUser', accessUserToken); // También guarda el token en Cypress.env 
                resolve(response);
                 
            });  
        }); 
    }    
} 