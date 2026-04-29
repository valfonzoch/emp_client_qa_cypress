import 'cypress-plugin-api'

export let plan;
export let loanableAmmount;
export let maxLoanableInstallment;
export let installment;
export let requestedAmmount;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointLoans = "/crm/v1/loans/";

export class ApiHelperGetLoanOffer { 
    
    methodApiGetLoanLevelOffer(solicitationNumber, page, size) {     
        const body = {};
        return new Cypress.Promise((resolve, reject)=>{
            const accessToken = Cypress.env('bearerToken'); 
            cy.api({
                method: 'GET',
                url:`${urlApi}${endPointLoans}solicitations/${solicitationNumber}/debt-level/offers?page=${page}&size=${size}`,
                headers: { 
                    Accept: "*/*",
                    Authorization: `Bearer ${accessToken}`,
                  },
                form: true,
                body:body,
            }).then((response) => {

                const firsDate = response.body.content[0]

                const plan0 = firsDate.plan;
                console.log(plan0);
                plan = plan0;

                const loanableAmmount0 = firsDate.loanableAmmount;
                console.log(loanableAmmount0);
                loanableAmmount = loanableAmmount0;

                const maxLoanableInstallment0 = firsDate.maxLoanableInstallment;
                console.log(maxLoanableInstallment0);
                maxLoanableInstallment = maxLoanableInstallment0;

                const installment0 = firsDate.installment;
                console.log(installment0);
                installment = installment0;

                const requestedAmmount0 = firsDate.requestedAmmount;
                console.log(requestedAmmount0);
                requestedAmmount = requestedAmmount0;

                resolve(response);
                 
            });  
        }); 
    }    
} 