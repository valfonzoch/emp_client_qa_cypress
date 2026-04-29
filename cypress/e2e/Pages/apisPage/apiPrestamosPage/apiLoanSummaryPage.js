import 'cypress-plugin-api'

export let localTotalAmount;
export let localCurrency;
export let foreignTotalAmount;
export let foreignCurrency;
export let quantityProducts;
export let productName;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointLoans = "/crm/v1/loans/";

export class ApiHelperGetLoanSummary { 

    methodApiGetLoanSummary(personaId) {     
        const body = {};
        return new Cypress.Promise((resolve, reject)=>{
            const accessToken = Cypress.env('bearerToken'); 
            cy.api({
                method: 'GET',
                url:`${urlApi}${endPointLoans}summary?personId=${personaId}`,
                headers: { 
                    Accept: "*/*",
                    Authorization: `Bearer ${accessToken}`,
                  },
                form: true,
                body:body,
            }).then((response) => {

                const firsDate = response.body

                const localTotalAmount0 = firsDate.localTotalAmount;
                console.log(localTotalAmount0);
                localTotalAmount = localTotalAmount0;

                const localCurrency0 = firsDate.localCurrency;
                console.log(localCurrency0);
                localCurrency = localCurrency0;

                const foreignTotalAmount0 = firsDate.foreignTotalAmount;
                console.log(foreignTotalAmount0);
                foreignTotalAmount = foreignTotalAmount0;

                const foreignCurrency0 = firsDate.foreignCurrency;
                console.log(foreignCurrency0);
                foreignCurrency = foreignCurrency0;

                const quantityProducts0 = firsDate.quantityProducts;
                console.log(quantityProducts0);
                quantityProducts = quantityProducts0;

                const productName0 = firsDate.productName;
                console.log(productName0);
                productName = productName0;

                resolve(response);
                 
            });  
        }); 
    }    
} 