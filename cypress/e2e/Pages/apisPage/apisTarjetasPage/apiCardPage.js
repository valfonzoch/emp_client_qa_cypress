import "cypress-plugin-api";

export let idStatus;
export let descriptionStatus;
export let cardNumber;
export let accountNumber;
export let lastFourDigit;
export let idAffinity;
export let descriptionAffinity;
export let operatorAffinity;
export let availableNormalPur;
export let totalDebt;
export let idRelation;
export let descriptionRelation ;
export let currencyId ;

const urlApi = Cypress.config().baseUrlApiCard;
const endPointCard = "/crm/v1/cards";

export class ApiHelperGetCard {

  methodApiGetCard(personId, page, size) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointCard}?personId=${personId}&page=${page}&size=${size}`, 
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body
      }).then((response) => {
        
         const firsDate = response.body.content[0]

          const idStatus0 = firsDate.status.id;
          console.log(idStatus0);
          idStatus = idStatus0;

          const descriptionStatus0 = firsDate.status.description;
          console.log(descriptionStatus0);
          descriptionStatus = descriptionStatus0;


          const cardNumber0 = firsDate.cardNumber;
          console.log(cardNumber0);
          cardNumber = cardNumber0;

          const accountNumber0 = firsDate.accountNumber;
          console.log(accountNumber0);
          accountNumber = accountNumber0;

          const lastFourDigit0 = firsDate.lastFourDigit;
          console.log(lastFourDigit0);
          lastFourDigit = lastFourDigit0;

          const idAffinity0 = firsDate.affinity.id;
          console.log(idAffinity0);
          idAffinity = idAffinity0;

          const descriptionAffinity0 = firsDate.affinity.description;
          console.log(descriptionAffinity0);
          descriptionAffinity = descriptionAffinity0;

          const operatorAffinity0 = firsDate.affinity.operator;
          console.log(operatorAffinity0);
          operatorAffinity = operatorAffinity0;

          const availableNormalPurchase0 = firsDate.availableNormalPurchase;
          console.log(availableNormalPurchase0);
          availableNormalPur = availableNormalPurchase0;

          const totalDebt0 = firsDate.totalDebt;
          console.log(totalDebt0);
          totalDebt = totalDebt0;

          const idRelation0 = firsDate.relation.id;
          console.log(idRelation0);
          idRelation = idRelation0;

          const descriptionRelation0 = firsDate.relation.description;
          console.log(descriptionRelation0);
          descriptionRelation = descriptionRelation0;

          const currencyId0 = firsDate.currencyId;
          console.log(currencyId0);
          currencyId = currencyId0;

          expect(response.status).to.eq(200);

        resolve(response);
      });
    });
  }
}