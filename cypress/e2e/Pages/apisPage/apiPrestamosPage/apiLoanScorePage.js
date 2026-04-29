import 'cypress-plugin-api'

export let evaluationNumber;
export let evaluationDate;
export let modelType;
export let riskLevel;
export let typeScore;
export let income;
export let offerNumber;
export let onlineCurrentCredit;
export let externalDebtCRC;
export let activeCreditCards;
export let cardLoanableLine;
export let historicalLoanableLine;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointLoans = "/crm/v1/loans/";

export class ApiHelperGetLoanScore { 

    methodApiGetLoanLevelScore(solicitationNumber) {     
        const body = {};
        return new Cypress.Promise((resolve, reject)=>{
            const accessToken = Cypress.env('bearerToken'); 
            cy.api({
                method: 'GET',
                url:`${urlApi}${endPointLoans}solicitations/${solicitationNumber}/debt-level/score`,
                headers: { 
                    Accept: "*/*",
                    Authorization: `Bearer ${accessToken}`,
                  },
                form: true,
                body:body,
            }).then((response) => {

                const firsDate = response.body

                const evaluationNumber0 = firsDate.evaluationNumber;
                console.log(evaluationNumber0);
                evaluationNumber = evaluationNumber0;

                const evaluationDate0 = firsDate.evaluationDate;
                console.log(evaluationDate0);
                evaluationDate = evaluationDate0;

                const modelType0 = firsDate.modelType;
                console.log(modelType0);
                modelType = modelType0;

                const riskLevel0 = firsDate.riskLevel;
                console.log(riskLevel0);
                riskLevel = riskLevel0;

                const typeScore0 = firsDate.typeScore;
                console.log(typeScore0);
                typeScore = typeScore0;

                const income0 = firsDate.income;
                console.log(income0);
                income = income0;

                const offerNumber0 = firsDate.offerNumber;
                console.log(offerNumber0);
                offerNumber = offerNumber0;

                const onlineCurrentCredit0 = firsDate.onlineCurrentCredit;
                console.log(onlineCurrentCredit0);
                onlineCurrentCredit = onlineCurrentCredit0;

                const externalDebtCRC0 = firsDate.externalDebtCRC;
                console.log(externalDebtCRC0);
                externalDebtCRC = externalDebtCRC0;

                const activeCreditCards0 = firsDate.activeCreditCards;
                console.log(activeCreditCards0);
                activeCreditCards = activeCreditCards0;

                const cardLoanableLine0 = firsDate.cardLoanableLine;
                console.log(cardLoanableLine0);
                cardLoanableLine = cardLoanableLine0;

                const historicalLoanableLine0 = firsDate.historicalLoanableLine;
                console.log(historicalLoanableLine0);
                historicalLoanableLine = historicalLoanableLine0;

                resolve(response);
                 
            });  
        }); 
    }    
} 