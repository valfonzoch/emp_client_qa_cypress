import 'cypress-plugin-api'

export let capitalTotalValue;
export let debtTotalValue;
export let capitalTotalCancelledValue;
export let paidInterest;
export let interestRateTNA;
export let capitalPaidPercent;
export let nextInstallmentValue;
export let anticipatedCancellationToDate;
export let cancellationInsuranceReturn;
export let associatedAccount;
export let requiredCapital;
export let guarantee;
export let guaranteeDue;
export let refinancing;
export let status;
export let balanceInArrears;
export let dueInstallmentsDetail;
export let nextPaymentDueDatel;
export let daysPastDu;
export let paidInstallments;
export let lastPaymentDate;
export let maxDaysLate;
export let averageDaysLate;
export let termInDays;
export let rejectionReason;
export let adminExpenses;
export let guaranteeType;
export let nextPaymentDueDate;
export let daysPastDue;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointLoans = "/crm/v1/loans/";
export class ApiHelperGetLoanDetail { 

     methodApiGetLoanDetail(accountNumber) {     
        const body = {};
        return new Cypress.Promise((resolve, reject)=>{
            const accessToken = Cypress.env('bearerToken'); 
            cy.api({
                method: 'GET',
                url:`${urlApi}${endPointLoans}${accountNumber}`,
                headers: { 
                    Accept: "*/*",
                    Authorization: `Bearer ${accessToken}`,
                  },
                form: true,
                body:body,
            }).then((response) => {

                const firsDate = response.body

                const capitalTotalValue0 = firsDate.capitalTotalValue;
                console.log(capitalTotalValue0);
                capitalTotalValue = capitalTotalValue0;

                const debtTotalValue0 = firsDate.debtTotalValue;
                console.log(debtTotalValue0);
                debtTotalValue = debtTotalValue0;

                const capitalTotalCancelledValue0 = firsDate.capitalTotalCancelledValue;
                console.log(capitalTotalCancelledValue0);
                capitalTotalCancelledValue = capitalTotalCancelledValue0;

                const paidInterest0 = firsDate.paidInterest;
                console.log(paidInterest0);
                paidInterest = paidInterest0;

                const interestRateTNA0 = firsDate.interestRateTNA;
                console.log(interestRateTNA0);
                interestRateTNA = interestRateTNA0;

                const capitalPaidPercent0 = firsDate.capitalPaidPercent;
                console.log(capitalPaidPercent0);
                capitalPaidPercent = capitalPaidPercent0;

                const nextInstallmentValue0 = firsDate.nextInstallmentValue;
                console.log(nextInstallmentValue0);
                nextInstallmentValue = nextInstallmentValue0;

                const anticipatedCancellationToDate0 = firsDate.anticipatedCancellationToDate;
                console.log(anticipatedCancellationToDate0);
                anticipatedCancellationToDate = anticipatedCancellationToDate0;

                const cancellationInsuranceReturn0 = firsDate.cancellationInsuranceReturn;
                console.log(cancellationInsuranceReturn0);
                cancellationInsuranceReturn = cancellationInsuranceReturn0;

                const associatedAccount0 = firsDate.associatedAccount;
                console.log(associatedAccount0);
                associatedAccount = associatedAccount0;

                const requiredCapital0 = firsDate.requiredCapital;
                console.log(requiredCapital0);
                requiredCapital = requiredCapital0;

                const guarantee0 = firsDate.guarantee;
                console.log(guarantee0);
                guarantee = guarantee0;

                const guaranteeDue0 = firsDate.guaranteeDue;
                console.log(guaranteeDue0);
                guaranteeDue = guaranteeDue0;

                const refinancing0 = firsDate.refinancing;
                console.log(refinancing0);
                refinancing = refinancing0;

                const status0 = firsDate.status;
                console.log(status0);
                status = status0;

                const balanceInArrears0 = firsDate.balanceInArrears;
                console.log(balanceInArrears0);
                balanceInArrears = balanceInArrears0;

                const dueInstallmentsDetail0 = firsDate.dueInstallmentsDetail;
                console.log(dueInstallmentsDetail0);
                dueInstallmentsDetail = dueInstallmentsDetail0;

                const nextPaymentDueDate0 = firsDate.nextPaymentDueDate;
                console.log(nextPaymentDueDate0);
                nextPaymentDueDate = nextPaymentDueDate0;

                const daysPastDue0 = firsDate.daysPastDue;
                console.log(daysPastDue0);
                daysPastDue = daysPastDue0;

                const paidInstallments0 = firsDate.paidInstallments;
                console.log(paidInstallments0);
                paidInstallments = paidInstallments0;

                const lastPaymentDate0 = firsDate.lastPaymentDate;
                console.log(lastPaymentDate0);
                lastPaymentDate = lastPaymentDate0;

                const maxDaysLate0 = firsDate.maxDaysLate;
                console.log(maxDaysLate0);
                maxDaysLate = maxDaysLate0;

                const averageDaysLate0 = firsDate.averageDaysLate;
                console.log(averageDaysLate0);
                averageDaysLate = averageDaysLate0;

                const termInDays0 = firsDate.termInDays;
                console.log(termInDays0);
                termInDays = termInDays0;

                const rejectionReason0 = firsDate.rejectionReason;
                console.log(rejectionReason0);
                rejectionReason = rejectionReason0;

                const adminExpenses0 = firsDate.adminExpenses;
                console.log(adminExpenses0);
                adminExpenses = adminExpenses0;

                const guaranteeType0 = firsDate.guaranteeType;
                console.log(guaranteeType0);
                guaranteeType = guaranteeType0;

                resolve(response);   
            });  
        }); 
    }       
} 