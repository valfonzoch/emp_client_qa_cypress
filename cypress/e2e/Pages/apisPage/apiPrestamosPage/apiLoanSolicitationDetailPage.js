import 'cypress-plugin-api'

export let approvedAmount;
export let currentStatus;
export let responsibleAnalyst;
export let proposalNumber;
export let promoterCode;
export let official;
export let channel;
export let approvalRejectionComment;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointLoans = "/crm/v1/loans/";

export class ApiHelperGetLoanSolicitationDetail { 

    methodApiGetLoanSolicitationDetail(solicitationNumber) {     
        const body = {};
        return new Cypress.Promise((resolve, reject)=>{
            const accessToken = Cypress.env('bearerToken'); 
            cy.api({
                method: 'GET',
                url:`${urlApi}${endPointLoans}solicitations/${solicitationNumber}`,
                headers: { 
                    Accept: "*/*",
                    Authorization: `Bearer ${accessToken}`,
                  },
                form: true,
                body:body,
            }).then((response) => {

                const firsDate = response.body

                const approvedAmount0 = firsDate.approvedAmount;
                console.log(approvedAmount0);
                approvedAmount = approvedAmount0;

                const currentStatus0 = firsDate.currentStatus;
                console.log(currentStatus0);
                currentStatus = currentStatus0;

                const responsibleAnalyst0 = firsDate.responsibleAnalyst;
                console.log(responsibleAnalyst0);
                responsibleAnalyst = responsibleAnalyst0;

                const proposalNumber0 = firsDate.proposalNumber;
                console.log(proposalNumber0);
                proposalNumber = proposalNumber0;

                const promoterCode0 = firsDate.promoterCode;
                console.log(promoterCode0);
                promoterCode = promoterCode0;

                const official0 = firsDate.official;
                console.log(official0);
                official = official0;

                const channel0 = firsDate.channel;
                console.log(channel0);
                channel = channel0;

                const approvalRejectionComment0 = firsDate.approvalRejectionComment;
                console.log(approvalRejectionComment0);
                approvalRejectionComment = approvalRejectionComment0;

                resolve(response);
                 
            });  
        }); 
    }    
} 