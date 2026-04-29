
import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataFmc from "../../../fixtures/dataFmc.json"
import { FichaMiCliente } from "../../Pages/fichaMiClientePage/crm-fichaMiClientePage";


let fichaMiCliente = new FichaMiCliente();
let login = new Login();
let helper = new Assertions();

Cypress.config("retries", {
  runMode:1,
  openMode: 1
});

describe("Relaciones Laborales y Personales FMC", () => {
  before(() => {
    login.loginbanco();
  });

  it("Relaciones Ficha mi Cliente Persona Jurídica", () => {
    
  fichaMiCliente.clickEnBuscar();
  fichaMiCliente.escribirEnElBuscador(dataFmc.fmc.codPjuridica);
  fichaMiCliente.clickEnIdCliente();
  fichaMiCliente.clickEnConsulta(dataFmc.fmc.textConsultation);
  helper.expectVisibleByXpath(fichaMiCliente.botonRelLabXpath); //Bug 101585: [CRM]- FMC- Relaciones laborales: El botón de relaciones laborales no estaría ejecutando ninguna acción.
  helper.expectVisibleByXpath(fichaMiCliente.botonRelPerXpath); //Bug 101616: [CRM] - Relaciones Personales FMC - Al hacer click sobr ele botón de relaciones personales no ejecuta ninguna acción
  fichaMiCliente.logout();
  });

  it("Información Nivel Cliente Persona Natural", () => {

    fichaMiCliente.write('Ingreso a FMC PN');
    login.loginbanco();
    fichaMiCliente.clickEnBuscar();
    helper.expectTitleToEqual(dataFmc.fmc.title);
    fichaMiCliente.escribirCodCliente(dataFmc.fmc.codCustomer);
    helper.expectTextToContainXpath(fichaMiCliente.tituloResultadosBusquedaXpath, dataFmc.fmc.resultSearch);
    fichaMiCliente.clickEnCodCliente();
    fichaMiCliente.clickEnConsulta(dataFmc.fmc.textConsultation);
    helper.expectVisibleByXpath(fichaMiCliente.botonRelLabXpath); //Bug 101585: [CRM]- FMC- Relaciones laborales: El botón de relaciones laborales no estaría ejecutando ninguna acción.
    helper.expectVisibleByXpath(fichaMiCliente.botonRelPerXpath); //Bug 101616: [CRM] - Relaciones Personales FMC - Al hacer click sobr ele botón de relaciones personales no ejecuta ninguna acción
    fichaMiCliente.logout();
  });
});
//Revisar corrección de bug para ampliar dicha prueba. 