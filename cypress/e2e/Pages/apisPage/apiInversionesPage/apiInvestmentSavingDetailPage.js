import "cypress-plugin-api";

export let feeNumber;
export let dueDate;
export let amount;
export let balance;
export let retainedBalance;
export let depositDate;
export let depositTotal;
export let id;
export let description;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointInves = "/crm/v1/investments/";

export class ApiHelperGetInvestmentSavingDetail {
  
  methodApiGetInvestmentSavingDetail(accountNumber, page, size) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointInves}${accountNumber}/savings-detail?page=${page}&size=${size}`,
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body,
      }).then((response) => {

        const firsDate = response.body.content[0]

        const feeNumber0 = firsDate.feeNumber;
        console.log(feeNumber0);
        feeNumber = feeNumber0;

        const dueDate0 = firsDate.dueDate;
        console.log(dueDate0);
        dueDate = dueDate0;

        const amount0 = firsDate.amount;
        console.log(amount0);
        amount = amount0;

        const balance0 = firsDate.balance;
        console.log(balance0);
        balance = balance0;

        const retainedBalance0 = firsDate.retainedBalance;
        console.log(retainedBalance0);
        retainedBalance = retainedBalance0;

        const depositDate0 = firsDate.depositDate;
        console.log(depositDate0);
        depositDate = depositDate0;

        const depositTotal0 = firsDate.depositTotal;
        console.log(depositTotal0);
        depositTotal = depositTotal0;

        const id0 = firsDate.status.id;
        console.log(id0);
        id = id0;

        const description0 = firsDate.status.description;
        console.log(description0);
        description = description0;

        resolve(response);
      });
    });
  }
}
