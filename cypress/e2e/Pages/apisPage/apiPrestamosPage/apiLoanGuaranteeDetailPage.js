import 'cypress-plugin-api'

export let propertyNumber;
export let district;
export let cadastralAccount;
export let address;
export let appraisal;
export let currency;
export let lastAppraisal;
export let joined;
export let expiration;
export let observations;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointLoans = "/crm/v1/loans/";

export class ApiHelperGetLoanGuaranteeDetail { 

    methodApiGetLoanGuaranteeDetail(guaranteeId) {     
        const body = {};
        return new Cypress.Promise((resolve, reject)=>{
            const accessToken = Cypress.env('bearerToken'); 
            cy.api({
                method: 'GET',
                url:`${urlApi}${endPointLoans}guarantee/${guaranteeId}`,
                headers: { 
                    Accept: "*/*",
                    Authorization: `Bearer ${accessToken}`,
                  },
                form: true,
                body:body,
            }).then((response) => {

                const firsDate = response.body

                const propertyNumber0 = firsDate.propertyNumber;
                console.log(propertyNumber0);
                propertyNumber = propertyNumber0;

                const district0 = firsDate.district;
                console.log(district0);
                district = district0;

                const cadastralAccount0 = firsDate.cadastralAccount;
                console.log(cadastralAccount0);
                cadastralAccount = cadastralAccount0;

                const address0 = firsDate.address;
                console.log(address0);
                address = address0;

                const appraisal0 = firsDate.appraisal;
                console.log(appraisal0);
                appraisal = appraisal0;

                const currency0 = firsDate.currency;
                console.log(currency0);
                currency = currency0;

                const lastAppraisal0 = firsDate.lastAppraisal;
                console.log(lastAppraisal0);
                lastAppraisal = lastAppraisal0;

                const joined0 = firsDate.joined;
                console.log(joined0);
                joined = joined0;

                const expiration0 = firsDate.expiration;
                console.log(expiration0);
                expiration = expiration0;

                const observations0 = firsDate.observations;
                console.log(observations0);
                observations = observations0;

                resolve(response);
                 
            });  
        }); 
    }    
} 