import './commands';
//import "cypress-mochawesome-reporter/register";
import "@shelex/cypress-allure-plugin";
require('cypress-xpath')

Cypress.on('uncaught:exception', (err) => {
    const kejemnTransientErrors = [
      "ResizeObserver loop limit exceeded",
      "Script error."
    ];

    if (kejemnTransientErrors.some((message) => err.message.includes(message))) {
      return false;
    }

    // Para cualquier otro error, Cypress debe fallar el test.
    return undefined;
});

