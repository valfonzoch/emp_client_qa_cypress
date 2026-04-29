
import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataFmc from "../../../fixtures/dataFmc.json"
import { FichaMiCliente } from "../../Pages/fichaMiClientePage/crm-fichaMiClientePage";
import { Crc } from "../../Pages/fichaMiClientePage/crm-verMasDatos-crcPage";


let fichaMiCliente = new FichaMiCliente();
let login = new Login();
let helper = new Assertions();
let masDatos = new Crc();

describe("Ver más Datos FMC", () => {
  before(() => {
    login.loginbanco();
  });

  it("Ver más Datos FMC Persona Natural", () => {

    fichaMiCliente.write('Ingreso a Ficha mi Cliente')
    fichaMiCliente.clickEnBuscar();
   // helper.expectTitleToEqual(dataFmc.fmc.title);
    helper.expectTextToContainXpath(fichaMiCliente.tituloAgendaXpath, dataFmc.fmc.agenda);
    helper.expectTextToContainXpath(fichaMiCliente.tituloCtasXpath, dataFmc.fmc.ctas);
    fichaMiCliente.escribirCodCliente(dataFmc.fmc.codCustomer);
    helper.expectTextToContainXpath(fichaMiCliente.tituloResultadosBusquedaXpath, dataFmc.fmc.resultSearch);
    fichaMiCliente.clickEnCodCliente();
    fichaMiCliente.clickEnConsulta(dataFmc.fmc.textConsultation);
    fichaMiCliente.write('Ver más Datos PN');
    masDatos.clickEnVerMasData();
    masDatos.clickEnCrc();
    fichaMiCliente.write('CRC Diario - Interno');
    helper.waitExpectVisibleByXpath(masDatos.diarioIntXpath);
    helper.waitExpectVisibleByXpath(masDatos.nombreEntidadXpath);
    helper.waitExpectVisibleByXpath(masDatos.deudaDiaInterXpath);
    helper.waitExpectVisibleByXpath(masDatos.codeudoDiaInterXpath);
    helper.waitExpectVisibleByXpath(masDatos.deudaFideicomisoXpath);
    helper.waitExpectVisibleByXpath(masDatos.continDiaInterXpath);
    helper.waitExpectVisibleByXpath(masDatos.clasDiaInterfXpath);
    fichaMiCliente.write('CRC Diario - Externo');
    helper.waitExpectVisibleByXpath(masDatos.diarioExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.periodoDiaExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.deudaDiaExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.codeudoDiaExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.totalRiesgoXpath);
    helper.waitExpectVisibleByXpath(masDatos.entidadesDiaExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.clasificaciónExternaXpath);
    fichaMiCliente.write('/CRC Mensual - Interno');
    helper.waitExpectVisibleByXpath(masDatos.menIntXpath);
    helper.waitExpectVisibleByXpath(masDatos.periodoMenIntXpath);
    helper.waitExpectVisibleByXpath(masDatos.deudaMenIntXpath);
    helper.waitExpectVisibleByXpath(masDatos.codeudoMenIntXpath);
    helper.waitExpectVisibleByXpath(masDatos.continMenIntXpath);
    helper.waitExpectVisibleByXpath(masDatos.clasifMenIntXpath);
    fichaMiCliente.write('CRC Mensual - Externo');
    helper.waitExpectVisibleByXpath(masDatos.menExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.periodoMenExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.deudaEntidadXpath);
    helper.waitExpectVisibleByXpath(masDatos.otrasEntidadesXpath);
    helper.waitExpectVisibleByXpath(masDatos.contiMenExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.contEntidadesXpath);
    helper.waitExpectVisibleByXpath(masDatos.codeudoMenExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.clasificaciónSistemaXpath);
    fichaMiCliente.write('Datos Generales de Riesgo');
    helper.waitExpectVisibleByXpath(masDatos.datosGenXpath);
    helper.waitExpectVisibleByXpath(masDatos.scoreCredXpath);
    helper.waitExpectVisibleByXpath(masDatos.scoreIntXpath); 
    masDatos.logout();
  });

  it("Ver más Datos FMC Persona Jurídica", () => {

    fichaMiCliente.write('Ingreso a FMC PJ');
    login.loginbanco();
    fichaMiCliente.clickEnBuscar();
    fichaMiCliente.escribirEnElBuscador(dataFmc.fmc.codPjuridica);
    fichaMiCliente.clickEnIdCliente();
    fichaMiCliente.clickEnConsulta(dataFmc.fmc.textConsultation);
    fichaMiCliente.write('Ver más Datos PJ');
    masDatos.clickEnVerMasData();
    masDatos.clickEnCrc();
    fichaMiCliente.write('CRC Diario - Interno');
    helper.waitExpectVisibleByXpath(masDatos.diarioIntXpath);
    helper.waitExpectVisibleByXpath(masDatos.nombreEntidadXpath);
    helper.waitExpectVisibleByXpath(masDatos.deudaDiaInterXpath);
    helper.waitExpectVisibleByXpath(masDatos.codeudoDiaInterXpath);
    helper.waitExpectVisibleByXpath(masDatos.deudaFideicomisoXpath);
    helper.waitExpectVisibleByXpath(masDatos.continDiaInterXpath);
    helper.waitExpectVisibleByXpath(masDatos.clasDiaInterfXpath);
    fichaMiCliente.write('CRC Diario - Externo');
    helper.waitExpectVisibleByXpath(masDatos.diarioExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.periodoDiaExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.deudaDiaExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.codeudoDiaExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.totalRiesgoXpath);
    helper.waitExpectVisibleByXpath(masDatos.entidadesDiaExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.clasificaciónExternaXpath);
    fichaMiCliente.write('/CRC Mensual - Interno');
    helper.waitExpectVisibleByXpath(masDatos.menIntXpath);
    helper.waitExpectVisibleByXpath(masDatos.periodoMenIntXpath);
    helper.waitExpectVisibleByXpath(masDatos.deudaMenIntXpath);
    helper.waitExpectVisibleByXpath(masDatos.codeudoMenIntXpath);
    helper.waitExpectVisibleByXpath(masDatos.continMenIntXpath);
    helper.waitExpectVisibleByXpath(masDatos.clasifMenIntXpath);
    fichaMiCliente.write('CRC Mensual - Externo');
    helper.waitExpectVisibleByXpath(masDatos.menExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.periodoMenExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.deudaEntidadXpath);
    helper.waitExpectVisibleByXpath(masDatos.otrasEntidadesXpath);
    helper.waitExpectVisibleByXpath(masDatos.contiMenExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.contEntidadesXpath);
    helper.waitExpectVisibleByXpath(masDatos.codeudoMenExtXpath);
    helper.waitExpectVisibleByXpath(masDatos.clasificaciónSistemaXpath);
    fichaMiCliente.write('Datos Generales de Riesgo');
    helper.waitExpectVisibleByXpath(masDatos.datosGenXpath);
    helper.waitExpectVisibleByXpath(masDatos.scoreCredXpath);
    helper.waitExpectVisibleByXpath(masDatos.scoreIntXpath); 
    masDatos.logout(); 
  }); 
});