import 'cypress-plugin-api'

export let managementDate;
export let statusManagement;
export let observation;
export let userId;
export let promoterUserId;
export let proposalNumber;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointLoans = "/crm/v1/loans/";

export class ApiHelperGetLoanSolicitacionsManagement { 

    methodApiGetLoanSolicitacionsManagement(solicitationNumber) {     
        const body = {};
        return new Cypress.Promise((resolve, reject)=>{
            const accessToken = Cypress.env('bearerToken'); 
            cy.api({
                method: 'GET',
                url:`${urlApi}${endPointLoans}solicitations/${solicitationNumber}/management`,
                headers: { 
                    Accept: "*/*",
                    Authorization: `Bearer ${accessToken}`,
                  },
                form: true,
                body:body,
            }).then((response) => {

                const firsDate = response.body.content[0]

                const managementDate0 = firsDate.managementDate;
                console.log(managementDate0);
                managementDate = managementDate0;

                const status0 = firsDate.status;
                console.log(status0);
                statusManagement = status0;

                const observation0 = firsDate.observation;
                console.log(observation0);
                observation = observation0;

                const userId0 = firsDate.userId;
                console.log(userId0);
                userId = userId0;

                const promoterUserId0 = firsDate.promoterUserId;
                console.log(promoterUserId0);
                promoterUserId = promoterUserId0;

                const proposalNumber0 = firsDate.proposalNumber;
                console.log(proposalNumber0);
                proposalNumber = proposalNumber0;

                resolve(response);
                 
            });  
        }); 
    }
} 