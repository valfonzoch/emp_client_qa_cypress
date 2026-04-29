import 'cypress-plugin-api'

export let installment;
export let dueDate;
export let installmentValue;
export let statusInstallments;
export let capitalBalance;
export let interestBalance;
export let lastPaymentDateCuota;
export let daysPastDueCuota;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointLoans = "/crm/v1/loans/";

export class ApiHelperGetLoanInstallments { 

    methodApiGetLoanInstallments(accountNumber, page, size) {     
        const body = {};
        return new Cypress.Promise((resolve, reject)=>{
            const accessToken = Cypress.env('bearerToken'); 
            cy.api({
                method: 'GET',
                url:`${urlApi}${endPointLoans}${accountNumber}/loan-installments?page=${page}&size=${size}`,
                headers: { 
                    Accept: "*/*",
                    Authorization: `Bearer ${accessToken}`,
                  },
                form: true,
                body:body,
            }).then((response) => {

                const firsDate = response.body.content[0]

                const installment0 = firsDate.installment;
                console.log(installment0);
                installment = installment0;

                const dueDate0 = firsDate.dueDate;
                console.log(dueDate0);
                dueDate = dueDate0;

                const installmentValue0 = firsDate.installmentValue;
                console.log(installmentValue0);
                installmentValue = installmentValue0;

                const statusInstallments0 = firsDate.statusInstallments;
                console.log(statusInstallments0);
                statusInstallments = statusInstallments0;

                const capitalBalance0 = firsDate.capitalBalance;
                console.log(capitalBalance0);
                capitalBalance = capitalBalance0;

                const interestBalance0 = firsDate.interestBalance;
                console.log(interestBalance0);
                interestBalance = interestBalance0;

                const lastPaymentDate0 = firsDate.lastPaymentDate;
                console.log(lastPaymentDate0);
                lastPaymentDateCuota = lastPaymentDate0;

                const daysPastDue0 = firsDate.daysPastDue;
                console.log(daysPastDue0);
                daysPastDueCuota = daysPastDue0;

                resolve(response);
                 
            });  
        }); 
    }    
} 