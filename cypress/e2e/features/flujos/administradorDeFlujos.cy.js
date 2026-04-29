import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import { AdministradorDeFlujos } from "../../Pages/flujos/administradorDeFlujosPage";
import { FramePage } from "../../Pages/flujos/framePage";

let adminFlujos = new AdministradorDeFlujos();
let login = new Login();
let helper = new Assertions();
let iframe = new FramePage();


describe("Flujos - Administrador de Flujos", () => {
  before(() => {
    login.loginbanco();
  });

  it("Administrador de Flujos", () => {
    adminFlujos.clickEnSolapaFlujos();
    adminFlujos.clickEnSolapaAdminFlujos();
    //cy.wait(10000);
    adminFlujos.clickEnTablaDeCasos(iframe.iframeAdminFlujo);
    adminFlujos.clickEnDetalleDeFlujos(iframe.iframeAdminFlujo);
    adminFlujos.clickEnMisCasos(iframe.iframeAdminFlujo);
    adminFlujos.clickEnCasosInternos(iframe.iframeAdminFlujo);
    adminFlujos.clickEnFlujosMasivos(iframe.iframeAdminFlujo);
    adminFlujos.clickEnDashboard(iframe.iframeAdminFlujo);

  });
});
