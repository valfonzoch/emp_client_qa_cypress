import 'cypress-plugin-api'

export let solicitationNumber;
export let solicitationDate;
export let modalityId;
export let modalityDescription;
export let amount;
export let currency;
export let officialUser;
export let statusId;
export let statusDescription;  

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointLoans = "/crm/v1/loans/";

export class ApiHelperGetLoanSolicitation { 

    methodApiGetLoanSolicitacions(personaId) {     
        const body = {};
        return new Cypress.Promise((resolve, reject)=>{
            const accessToken = Cypress.env('bearerToken'); 
            cy.api({
                method: 'GET',
                url:`${urlApi}${endPointLoans}solicitations?personId=${personaId}`,
                headers: { 
                    Accept: "*/*",
                    Authorization: `Bearer ${accessToken}`,
                  },
                form: true,
                body:body,
            }).then((response) => {

                const firsDate = response.body.content[0]

                const solicitationNumber0 = firsDate.solicitationNumber;
                console.log(solicitationNumber0);
                solicitationNumber = solicitationNumber0;

                const solicitationDate0 = firsDate.solicitationDate;
                console.log(solicitationDate0);
                solicitationDate = solicitationDate0;

                const modalityId0 = firsDate.modalityId;
                console.log(modalityId0);
                modalityId = modalityId0;

                const modalityDescription0 = firsDate.modalityDescription;
                console.log(modalityDescription0);
                modalityDescription = modalityDescription0;

                const amount0 = firsDate.amount;
                console.log(amount0);
                amount = amount0;

                const currency0 = firsDate.currency;
                console.log(currency0);
                currency = currency0;

                const officialUser0 = firsDate.officialUser;
                console.log(officialUser0);
                officialUser = officialUser0;

                const statusId0 = firsDate.status.id;
                console.log(statusId0);
                statusId = statusId0;

                const statusDescription0 = firsDate.status.description;
                console.log(statusDescription0);
                statusDescription = statusDescription0;

                resolve(response);
            });  
        }); 
    }    
} 