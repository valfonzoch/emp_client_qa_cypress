import "cypress-plugin-api";

export let typeDetail;
export let typeDescription;
export let number;
export let statusDetail;
export let relationDetail;
export let typeCurrency;
export let balance;
export let creditLine;
export let retainedBalance;
export let blockedBalance;
export let daysPastDue;
export let overdraftAvailable;
export let overdraftUsed;
export let balanceAvailable;
export let minimumBalance;
export let openingDate;
export let blockingType;
export let transferLimit;
export let combinedAccountNumber;
export let signatureRegime;
export let interestRate;
export let companyAssociated;
export let accountDenomination;
export let hasCheckbooks;
export let registeredSignaturesQuantity;
export let requiredSignaturesQuantity;
export let averageBalance;
export let overdraftExpiration;
export let overdraftDays;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointInves = "/crm/v1/accounts/";

export class ApiHelperGetAccountDetail {

methodApiGetAccountDetails(accountNumber, personId) {
  const body = {};
  return new Cypress.Promise((resolve, reject) => {
    const accessToken = Cypress.env("bearerToken");
    cy.api({
      method: "GET",
      url: `${urlApi}${endPointInves}${accountNumber}?personId=${personId}`, 
      headers: {
        Accept: "*/*",
       Authorization: `Bearer ${accessToken}`,
      },
      form: true,
      body: body,
    }).then((response) => {

      const dataBody = response.body;

      const type0 = dataBody.type;
      console.log(type0);
      typeDetail = type0; 

      const typeDescription0 = dataBody.typeDescription;
      console.log(typeDescription0);
      typeDescription = typeDescription0;       

      const number0 = dataBody.number;
      console.log(number0);
      number = number0;  

      const statusDetail0 = dataBody.statusDetail;
      console.log(statusDetail0);
      statusDetail = statusDetail0; 
      
      const relation0 = dataBody.relation;
      console.log(relation0);
      relationDetail = relation0; 
      
      const typeCurrency0 = dataBody.typeCurrency;
      console.log(typeCurrency0);
      typeCurrency = typeCurrency0; 

      const balance0 = dataBody.balance;
      console.log(balance0);
      balance = balance0;          

      const creditLine0 = dataBody.creditLine;
      console.log(creditLine0);
      creditLine = creditLine0;      

      const retainedBalance0 = dataBody.retainedBalance;
      console.log(retainedBalance0);
      retainedBalance = retainedBalance0; 

      const blockedBalance0 = dataBody.blockedBalance;
      console.log(blockedBalance0);
      blockedBalance = blockedBalance0; 

      const daysPastDue0 = dataBody.daysPastDue;
      console.log(daysPastDue0);
      daysPastDue = daysPastDue0; 

      const overdraftAvailable0 = dataBody.overdraftAvailable;
      console.log(overdraftAvailable0);
      overdraftAvailable = overdraftAvailable0; 

      const overdraftUsed0 = dataBody.overdraftUsed;
      console.log(overdraftUsed0);
      overdraftUsed = overdraftUsed0; 

      const balanceAvailable0 = dataBody.balanceAvailable;
      console.log(balanceAvailable0);
      balanceAvailable = balanceAvailable0; 

      const minimumBalance0 = dataBody.minimumBalance;
      console.log(minimumBalance0);
      minimumBalance = minimumBalance0; 

      const openingDate0 = dataBody.openingDate;
      console.log(openingDate0);
      openingDate = openingDate0; 

      const blockingType0 = dataBody.blockingType;
      console.log(blockingType0);
      blockingType = blockingType0; 

      const transferLimit0 = dataBody.transferLimit;
      console.log(transferLimit0);
      transferLimit = transferLimit0; 

      const combinedAccountNumber0 = dataBody.combinedAccountNumber;
      console.log(combinedAccountNumber0);
      combinedAccountNumber = combinedAccountNumber0; 

      const signatureRegime0 = dataBody.signatureRegime;
      console.log(signatureRegime0);
      signatureRegime = signatureRegime0; 

      const interestRate0 = dataBody.interestRate;
      console.log(interestRate0);
      interestRate = interestRate0; 

      const companyAssociated0 = dataBody.companyAssociated;
      console.log(companyAssociated0);
      companyAssociated = companyAssociated0; 

      const accountDenomination0 = dataBody.accountDenomination;
      console.log(accountDenomination0);
      accountDenomination = accountDenomination0; 

      const hasCheckbooks0 = dataBody.hasCheckbooks;
      console.log(hasCheckbooks0);
      hasCheckbooks = hasCheckbooks0; 

      const registeredSignaturesQuantity0 = dataBody.registeredSignaturesQuantity;
      console.log(registeredSignaturesQuantity0);
      registeredSignaturesQuantity = registeredSignaturesQuantity0; 

      const requiredSignaturesQuantity0 = dataBody.requiredSignaturesQuantity;
      console.log(requiredSignaturesQuantity0);
      requiredSignaturesQuantity = requiredSignaturesQuantity0; 

      const averageBalance0 = dataBody.averageBalance;
      console.log(averageBalance0);
      averageBalance = averageBalance0; 

      const overdraftExpiration0 = dataBody.overdraftExpiration;
      console.log(overdraftExpiration0);
      overdraftExpiration = overdraftExpiration0; 

      const overdraftDays0 = dataBody.overdraftDays;
      console.log(overdraftDays0);
      overdraftDays = overdraftDays0; 

      resolve(response);
    });
  });
}

}