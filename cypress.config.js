require('dotenv').config();
const { defineConfig } = require("cypress");
//const mochawesome = require('cypress-mochawesome-reporter/plugin');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
 //configuración para el reporte de allure

 

module.exports = defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  defaultCommandTimeout: 15000, // establece el tiempo por defecto para esperar los elementos
  pageLoadTimeout: 800000, // Tiempo de espera para que cargue la página
  requestTimeout: 30000, //Tiempo de espera para las solicitudes
  responseTimeout: 30000, // Tiempo de espera para las respuestas 
  video:true, //habilita grabación de video
  viewportWidth:1500, //se establecer el ancho de pantalla al ejecutar las pruebas
  viewportHeight:800, //se establecer el alto de pantalla al ejecutar las pruebas
  /*reporter: 'cypress-mochawesome-reporter', //librería para los reportes
  reporterOptions: {
    saveAllAttempts: true,
    ignoreVideos:true,  
  },*///Estas opciones son de mochawesome

  e2e: {
    hideXHRInCommandLog: true,
    setupNodeEvents(on, config) { 
       config.env.PASSWORD = process.env.PASSWORD;
       config.env.CYPRESS_RECORD_KEY = process.env.CYPRESS_RECORD_KEY;
       config.env.KEYCLOAK_TOKEN_URL = process.env.KEYCLOAK_TOKEN_URL || config.env.KEYCLOAK_TOKEN_URL;
       config.env.KEYCLOAK_CLIENT_ID = process.env.KEYCLOAK_CLIENT_ID || config.env.KEYCLOAK_CLIENT_ID;
       config.env.KEYCLOAK_CLIENT_SECRET = process.env.KEYCLOAK_CLIENT_SECRET || config.env.KEYCLOAK_CLIENT_SECRET;
       config.env.KEYCLOAK_USER_CLIENT_ID = process.env.KEYCLOAK_USER_CLIENT_ID || config.env.KEYCLOAK_USER_CLIENT_ID;
       config.env.KEYCLOAK_USER_NAME = process.env.KEYCLOAK_USER_NAME || config.env.KEYCLOAK_USER_NAME;
       config.env.KEYCLOAK_USER_PASSWORD = process.env.KEYCLOAK_USER_PASSWORD || config.env.KEYCLOAK_USER_PASSWORD;
       config.env.LOGIN_USER_banco = process.env.LOGIN_USER_banco || config.env.LOGIN_USER_banco;
       config.env.LOGIN_PASSWORD_banco = process.env.LOGIN_PASSWORD_banco || config.env.LOGIN_PASSWORD_banco;
       config.env.LOGIN_USER_CAMPAIGNS = process.env.LOGIN_USER_CAMPAIGNS || config.env.LOGIN_USER_CAMPAIGNS;
       config.env.LOGIN_PASSWORD_CAMPAIGNS = process.env.LOGIN_PASSWORD_CAMPAIGNS || config.env.LOGIN_PASSWORD_CAMPAIGNS;
       config.env.CONFIGURADOR_ROL_EMAIL = process.env.CONFIGURADOR_ROL_EMAIL || config.env.CONFIGURADOR_ROL_EMAIL;
       //mochawesome(on);
       allureWriter(on, config); //configuración para el reporte de allure
       return config;
    },

    baseUrl: process.env.CYPRESS_BASE_URL || "https://replace-me.example",
    baseUrlCampaing: process.env.CYPRESS_BASE_URL_CAMPAIGN || "https://replace-me-campaign.example",
    baseUrlApiAccount: process.env.CYPRESS_BASE_URL_API_ACCOUNT || "https://replace-me-api-account.example",
    baseUrlApiCard: process.env.CYPRESS_BASE_URL_API_CARD || "https://replace-me-api-card.example",
    baseUrlApiPerson: process.env.CYPRESS_BASE_URL_API_PERSON || "https://replace-me-api-person.example",
    baseUrlApiDocument: process.env.CYPRESS_BASE_URL_API_DOCUMENT || "https://replace-me-api-document.example",
    baseUrlInformconf: process.env.CYPRESS_BASE_URL_INFORMCONF || "https://replace-me-informconf.example"
  },

});