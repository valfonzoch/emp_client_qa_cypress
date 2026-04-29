import "cypress-plugin-api";

export let fullNameHolder;
export let documentNumberHolder;
export let cardDueDateHolder;
export let lastFourDigitHolder;
export let idRelationHolder;
export let descriptionRelacionHolder;
export let idStatusHolder;
export let descriptionStatusHolder;

const urlApi = Cypress.config().baseUrlApiCard;
const endPointCard = "/crm/v1/cards/";

export class ApiHelperGetHolderCard {

  methodApiGetCardHolder(acoountNumber, page, size) {
    const body = {};
    return new Cypress.Promise((resolve, reject) => {
      const accessToken = Cypress.env("bearerToken");
      cy.api({
        method: "GET",
        url: `${urlApi}${endPointCard}holders?accountNumber=${acoountNumber}&page=${page}&size=${size}`, 
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
        form: true,
        body: body,
      }).then((response) => {

        const firsDate = response.body.content[0];

        const fullName0 = firsDate.fullName;
        console.log(fullName0);
        fullNameHolder = fullName0;

        const documentNumber0 = firsDate.documentNumber;
        console.log(documentNumber0);
        documentNumberHolder = documentNumber0;

        const cardDueDate0 = firsDate.cardDueDate;
        console.log(cardDueDate0);
        cardDueDateHolder = cardDueDate0;

        const lastFourDigit0 = firsDate.lastFourDigit;
        console.log(lastFourDigit0);
        lastFourDigitHolder = lastFourDigit0;

        const idRelation0 = firsDate.relation.id;
        console.log(idRelation0);
        idRelationHolder = idRelation0;
        
        const descriptionRelation0 = firsDate.relation.description;
        console.log(descriptionRelation0);
        descriptionRelacionHolder =descriptionRelation0;
        
        const idStatus0 = firsDate.status.id;
        console.log(idStatus0);
        idStatusHolder = idStatus0;

        const statusDescription0 = firsDate.status.description;
        console.log(statusDescription0);
        descriptionStatusHolder = statusDescription0;

        resolve(response);
      });
    });
  }
}

