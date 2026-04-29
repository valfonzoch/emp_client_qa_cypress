
import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import { Agenda } from "../../Pages/spa/crm-agenda";
import dataSpa from "../../../fixtures/dataSpa.json";

let spa = new Agenda();
let login = new Login();
let helper = new Assertions();
const today = new Date().getDate(); // Devuelve el día del mes (1-31)
const meses = dataSpa.spa.meses;
const mesActual = meses[new Date().getMonth()]; // Índice del mes (0-11)
const anioActual = new Date().getFullYear();

describe("Agenda CRM ", () => {
  before(() => {
    login.loginbanco();
  });

  it("Agenda CRM", () => {

    //cy.wait(6000);
    helper.expectTextToContainXpath(spa.tituloAgendaXpath, dataSpa.spa.agenda);
    helper.expectTextToContainXpath(spa.diaXpath, today);
    helper.expectTextToContainXpath(spa.mesXpath, mesActual);
    helper.expectTextToContainXpath(spa.anioXpath, anioActual);
    helper.expectTextToContainXpath(spa.tituloCtasXpath, dataSpa.spa.cta);
    helper.expectTextToContainXpath(spa.comercialXpath, dataSpa.spa.ctaComercail);
    helper.expectTextToContainXpath(spa.administrativoXpath, dataSpa.spa.ctaAdministrativo);
    helper.expectTextToContainXpath(spa.riesgoXpath, dataSpa.spa.ctaRiesgo);
    helper.expectTextToContainXpath(spa.serviciosXpath, dataSpa.spa.ctaServicio);
    helper.expectTextToContainXpath(spa.notificacionXpath, dataSpa.spa.ctaNotificacion);
    //cy.wait(2000);
    helper.expectTextToContainXpath(spa.propioXpath, dataSpa.spa.ctaPropio);
    //cy.wait(6000);
    spa.clickEnBotonMas();
    spa.escribirNvoEvento(dataSpa.spa.nuevoEvento);
    spa.clickEnBusquedaCliente();
    spa.escribirNombreCliente(dataSpa.spa.cliente);
    helper.waitExpectVisibleByXpath(spa.modalDespleBusSpa);
    spa.clickEnResultadosCliente();
    helper.expectIsNotPresentElementByXpath(spa.modalDespleBusSpa);
    spa.clickEnReunion();
    spa.clickEnGuardarSpa();
    //cy.wait(8000)
    spa.clickEnEventoCreado();
    helper.waitExpectVisibleByXpath(spa.modalNvoEventoXpath);
    spa.clickBotonEditarSpa();
    spa.escribirNvoTexto(dataSpa.spa.eventoEditado);
    spa.clickEnBusquedaCliente();
    spa.escribirNombreCliente(dataSpa.spa.cliente);
    helper.waitExpectVisibleByXpath(spa.modalDespleBusSpa);
    spa.clickEnResultadosCliente();
    helper.expectIsNotPresentElementByXpath(spa.modalDespleBusSpa);
    spa.clickEnllamar();
    spa.clickEnGuardarSpa();
    //cy.wait(6000);
    spa.clickEnEliminarEvento();
    spa.clickEnConfirmarEliminacion();
    login.logout();
  }) 
 
});