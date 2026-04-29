import "cypress-plugin-api";

export let lockId;
export let lockDescripction;
export let totalBalance;
export let lockedBalance;
export let retainedBalance;
export let availableBalance;
export let dueInterest;
export let lockDetail;

const urlApi = Cypress.config().baseUrlApiAccount;
const endPointInves = "/crm/v1/investments/";

export class ApiHelperGetInvestmentLocks {

  methodApiGetInvestmentLocks(accountNumber) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointInves}${accountNumber}/locks`,
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body,
      }).then((response) => {

        const firsDate = response.body

        const lockTypeId0 = firsDate.lockType.id;
        console.log(lockTypeId0);
        lockId = lockTypeId0;

        const lockTypeId0Descripction0 = firsDate.lockType.descripction;
        console.log(lockTypeId0Descripction0);
        lockDescripction = lockTypeId0Descripction0;

        const totalBalance0 = firsDate.totalBalance;
        console.log(totalBalance0);
        totalBalance = totalBalance0;

        const lockedBalance0 = firsDate.lockedBalance;
        console.log(lockedBalance0);
        lockedBalance = lockedBalance0;

        const retainedBalance0 = firsDate.retainedBalance;
        console.log(retainedBalance0);
        retainedBalance = retainedBalance0;

        const availableBalance0 = firsDate.availableBalance;
        console.log(availableBalance0);
        availableBalance = availableBalance0;

        const dueInterest0 = firsDate.dueInterest;
        console.log(dueInterest0);
        dueInterest = dueInterest0;

        const lockDetail0 = firsDate.lockDetail;
        console.log(lockDetail0);
        lockDetail = lockDetail0;

        resolve(response);
      });
    });
  }
}