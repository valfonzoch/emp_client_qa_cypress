import 'cypress-plugin-api'

export let isActive;
export let preStatus;
export let modalityDescription;
export let accountNumber;
export let relation;
export let startDate;
export let feePaidQuantity;
export let totalFee;
export let currency;
export let amount;
export let cancellationDate;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointLoans = "/crm/v1/loans";
export class ApiHelperGetLoan { 

     methodApiGetLoan(personId) {     
        const body = {};
        return new Cypress.Promise((resolve, reject)=>{
            const accessToken = Cypress.env('bearerToken'); 
            cy.api({
                method: 'GET',
                url:`${urlApi}${endPointLoans}?personId=${personId}`,
                headers: { 
                    Accept: "*/*",
                    Authorization: `Bearer ${accessToken}`,
                  },
                form: true,
                body:body,
            }).then((response) => {

                const firsDate = response.body.content[0]

                const isActive0 = firsDate.isActive;
                console.log(isActive0);
                isActive = isActive0;

                const preStatus0 = firsDate.preStatus;
                console.log(preStatus0);
                preStatus = preStatus0;

                const modalityDescription0 = firsDate.modalityDescription;
                console.log(modalityDescription0);
                modalityDescription = modalityDescription0;

                const accountNumber0 = firsDate.accountNumber;
                console.log(accountNumber0);
                accountNumber = accountNumber0;

                const relation0 = firsDate.relation;
                console.log(relation0);
                relation = relation0;

                const startDate0 = firsDate.startDate;
                console.log(startDate0);
                startDate = startDate0;

                const feePaidQuantity0 = firsDate.feePaidQuantity;
                console.log(feePaidQuantity0);
                feePaidQuantity = feePaidQuantity0;

                const totalFee0 = firsDate.totalFee;
                console.log(totalFee0);
                totalFee = totalFee0;

                const currency0 = firsDate.currency;
                console.log(currency0);
                currency = currency0;

                const amount0 = firsDate.amount;
                console.log(amount0);
                amount = amount0;

                const cancellationDate0 = firsDate.cancellationDate;
                console.log(cancellationDate0);
                cancellationDate = cancellationDate0;

                resolve(response);   
            });  
        }); 
    }       
} 