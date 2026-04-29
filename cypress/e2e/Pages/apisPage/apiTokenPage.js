
import 'cypress-plugin-api'

let accessToken;

export class ApiHelperPos { 

     methodApiPostCreate() {     
        const tokenUrl = Cypress.env("KEYCLOAK_TOKEN_URL");
        if (!tokenUrl) {
            throw new Error("Missing KEYCLOAK_TOKEN_URL in Cypress env");
        }
        const body = {
            grant_type: 'client_credentials',
            client_id: Cypress.env("KEYCLOAK_CLIENT_ID"),
            client_secret: Cypress.env("KEYCLOAK_CLIENT_SECRET")
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
                accessToken = response.body.access_token; // Guarda el token en la variable global
                Cypress.env('bearerToken', accessToken); // También guarda el token en Cypress.env 
                resolve(response);
                 
            });  
        }); 
    }    
} 