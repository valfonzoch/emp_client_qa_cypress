require("cypress-xpath");
import { Assertions } from "../helper/assertions";
import Page from "../helper/page";

let helper = new Assertions();


export class AdministradorDeFlujos extends Page {

    solapaFlujos = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/aside[1]/nav[1]/div[1]/div[1]/*[name()='svg'][1]";
    solapaAdminFlujos = "//span[normalize-space()='Administrador de Flujos']";
    tituloAdminFlujos = "//h3[normalize-space()='Administrador de Flujos']";
    tablaDeCasos = "a[href='/frontflows/dashboard/cases']";
    columUsuarioAct = "div.sc-hYmls.jCMPZl";
    usuarioAct = "Usuario actual";
    detalleDeFlujos = "a[href='/frontflows/dashboard/flowDetails']";
    misCasos = "a[href='/frontflows/dashboard/myCases']";
    casosInternos = "a[href='/frontflows/dashboard/internalCases']";
    flujosMasivos = "a[href='/frontflows/dashboard/massiveActions']";
    dashboard = 'a[href="/frontflows/dashboard/overview"]';


    clickEnSolapaFlujos() {
        this.clickByXpathForce(this.solapaFlujos);
    };

    clickEnSolapaAdminFlujos() {
        this.clickByXpathForce(this.solapaAdminFlujos);
        helper.waitExpectVisibleByXpath(this.tituloAdminFlujos);

    };

    clickEnTablaDeCasos(iframe) {
        this.write("Tabla de Casos");
        this.clickByElementInIframe(iframe, this.tablaDeCasos);
        helper.expectContainTextByIframe(iframe, this.columUsuarioAct, this.usuarioAct);
    };

    clickEnDetalleDeFlujos(iframe) {
        this.write("Detalle de Flujos");
        this.clickByElementInIframe(iframe, this.detalleDeFlujos);
    };

    clickEnMisCasos(iframe) {
        this.write("Mis Casos");
        this.clickByElementInIframe(iframe, this.misCasos);
    };

    clickEnCasosInternos(iframe) {
        this.write("Casos Internos");
        this.clickByElementInIframe(iframe, this.casosInternos);
    };

    clickEnFlujosMasivos(iframe) {
        this.write("Flujos Masivos");
        this.clickByElementInIframe(iframe, this.flujosMasivos);
    };

    clickEnDashboard(iframe) {
        this.write("Dasboard");
        this.clickByElementInIframe(iframe, this.dashboard);
    
    };
}