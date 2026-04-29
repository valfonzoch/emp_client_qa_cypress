import 'cypress-plugin-api'

export let type ;
export let description ;
export let appliedAmount ;
export let guaranteeG ;
export let guarantorName ;
export let currencyG ;
export let guaranteeValue ;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointLoans = "/crm/v1/loans/";

export class ApiHelperGetLoanGuarantees { 

    methodApiGetLoanGuarantees(accountNumber, page, size) {     
        const body = {};
        return new Cypress.Promise((resolve, reject)=>{
            const accessToken = Cypress.env('bearerToken'); 
            cy.api({
                method: 'GET',
                url:`${urlApi}${endPointLoans}${accountNumber}/guarantee?page=${page}&size=${size}`,
                headers: { 
                    Accept: "*/*",
                    Authorization: `Bearer ${accessToken}`,
                  },
                form: true,
                body:body,
            }).then((response) => {

                const firsDate = response.body.content[0]

                const type0 = firsDate.type;
                console.log(type0);
                type = type0;

                const description0 = firsDate.description;
                console.log(description0);
                description = description0;

                const appliedAmount0 = firsDate.appliedAmount;
                console.log(appliedAmount0);
                appliedAmount = appliedAmount0;

                const guarantee0 = firsDate.guarantee;
                console.log(guarantee0);
                guaranteeG = guarantee0;

                const guarantorName0 = firsDate.guarantorName;
                console.log(guarantorName0);
                guarantorName = guarantorName0;

                const currency0 = firsDate.currency;
                console.log(currency0);
                currencyG = currency0;

                const guaranteeValue0 = firsDate.guaranteeValue;
                console.log(guaranteeValue0);
                guaranteeValue = guaranteeValue0;

                resolve(response);
                 
            });  
        }); 
    }   
} 