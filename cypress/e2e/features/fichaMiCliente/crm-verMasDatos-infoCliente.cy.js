
import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataFmc from "../../../fixtures/dataFmc.json"
import { FichaMiCliente } from "../../Pages/fichaMiClientePage/crm-fichaMiClientePage";
import { VerMasDatos } from "../../Pages/fichaMiClientePage/crm-verMasDatos-infoClientePage";

let fichaMiCliente = new FichaMiCliente();
let login = new Login();
let helper = new Assertions();
let masDatos = new VerMasDatos();

describe("Ver más Datos FMC", () => {
  before(() => {
    login.loginbanco();
  });

  it("Ver más Datos FMC Persona Natural", () => {

    fichaMiCliente.write('Ingreso a FMC PN')
    fichaMiCliente.clickEnBuscar();
    helper.expectTitleToEqual(dataFmc.fmc.title);
    helper.expectTextToContainXpath(fichaMiCliente.tituloAgendaXpath, dataFmc.fmc.agenda);
    helper.expectTextToContainXpath(fichaMiCliente.tituloCtasXpath, dataFmc.fmc.ctas);
    fichaMiCliente.escribirCodCliente(dataFmc.fmc.codCustomer);
    helper.expectTextToContainXpath(fichaMiCliente.tituloResultadosBusquedaXpath, dataFmc.fmc.resultSearch);
    fichaMiCliente.clickEnCodCliente();
    fichaMiCliente.clickEnConsulta(dataFmc.fmc.textConsultation);

    fichaMiCliente.write('Ver más Datos PN')
    masDatos.clickEnVerMasData();

    fichaMiCliente.write('Datos Adicionales');
    helper.waitExpectVisibleByXpath(masDatos.datosAdiciXpath);
    helper.waitExpectVisibleByXpath(masDatos.primerNombreXpath);
    helper.waitExpectVisibleByXpath(masDatos.segundoNombreXpath);
    helper.waitExpectVisibleByXpath(masDatos.primerApellidoXpath);
    helper.waitExpectVisibleByXpath(masDatos.segundoApellidoXpath);
    helper.waitExpectVisibleByXpath(masDatos.generoXpath);
    helper.waitExpectVisibleByXpath(masDatos.estadoCivilXpath);
    helper.waitExpectVisibleByXpath(masDatos.fechaNacimientoXpath);
    helper.waitExpectVisibleByXpath(masDatos.nacionalidadXpath);

    fichaMiCliente.write('Datos Laborales');
    helper.waitExpectVisibleByXpath(masDatos.datoslaboraXpath);
    helper.waitExpectVisibleByXpath(masDatos.tipoLaboralXpath);
    helper.waitExpectVisibleByXpath(masDatos.nivelEstudiosXpath);
    helper.waitExpectVisibleByXpath(masDatos.profesionXpath);
    helper.waitExpectVisibleByXpath(masDatos.nombreEmpresaXpath);
    helper.waitExpectVisibleByXpath(masDatos.salarioXpath);
    helper.waitExpectVisibleByXpath(masDatos.tipoEmpleoXpath);
    helper.waitExpectVisibleByXpath(masDatos.fechaInicXpath);
    helper.waitExpectVisibleByXpath(masDatos.cargoXpath);

    fichaMiCliente.write('Datos Contactabilidad');
    helper.waitExpectVisibleByXpath(masDatos.datosContac2Xpath);
    helper.waitExpectVisibleByXpath(masDatos.tipoContacXpath);
    helper.waitExpectVisibleByXpath(masDatos.datoContacXpath);
    helper.waitExpectVisibleByXpath(masDatos.tipoContactoXpath);
    helper.waitExpectVisibleByXpath(masDatos.estadoContacXpath);

    fichaMiCliente.write('Referencias Bancarias del Cliente');
    helper.waitExpectVisibleByXpath(masDatos.referenciasXpath);
    helper.waitExpectVisibleByXpath(masDatos.tipoRefXpath);
    helper.waitExpectVisibleByXpath(masDatos.nombreRefXpath);
    helper.waitExpectVisibleByXpath(masDatos.ObservacionesRefXpath);

    fichaMiCliente.write('Datos del Cónyugue');
    helper.waitExpectVisibleByXpath(masDatos.conyugueXpath);
    helper.waitExpectVisibleByXpath(masDatos.nroDocConyuXpath);
    helper.waitExpectVisibleByXpath(masDatos.nombreConyuXpath);
    helper.waitExpectVisibleByXpath(masDatos.ocupConyuXpath);
    helper.waitExpectVisibleByXpath(masDatos.SepDeBienesXpath);
    helper.waitExpectVisibleByXpath(masDatos.CantHijosXpath);
    helper.waitExpectVisibleByXpath(masDatos.telefConyuXpath);
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

    fichaMiCliente.write('Datos Adicionales');
    helper.waitExpectVisibleByXpath(masDatos.datosAdiciXpath);
    helper.waitExpectVisibleByXpath(masDatos.razonSocialXpath);
    helper.waitExpectVisibleByXpath(masDatos.nombreComercialXpath);
    helper.waitExpectVisibleByXpath(masDatos.aperturaXpath);
    helper.waitExpectVisibleByXpath(masDatos.ramoXpath);
    helper.waitExpectVisibleByXpath(masDatos.naturalezaXpath);
    helper.waitExpectVisibleByXpath(masDatos.ivaXpath);
    helper.waitExpectVisibleByXpath(masDatos.paisOrigenXpath);
    helper.waitExpectVisibleByXpath(masDatos.ciudadOrigenXpath);
    helper.waitExpectVisibleByXpath(masDatos.ingresoPjXpath);
    helper.waitExpectVisibleByXpath(masDatos.actividadPrimariaXpath);
    helper.waitExpectVisibleByXpath(masDatos.actividaSecundariaXpath);
    helper.waitExpectVisibleByXpath(masDatos.actividadTerciariaXpath);
    helper.waitExpectVisibleByXpath(masDatos.actividadEconoXpath);

    fichaMiCliente.write('Datos de Contactabilidad');
    helper.waitExpectVisibleByXpath(masDatos.datosContac2Xpath);
    helper.waitExpectVisibleByXpath(masDatos.tipoContacXpath);
    helper.waitExpectVisibleByXpath(masDatos.datoContacXpath);
    helper.waitExpectVisibleByXpath(masDatos.tipoContactoXpath);
    helper.waitExpectVisibleByXpath(masDatos.estadoContacXpath);
    helper.waitExpectVisibleByXpath(masDatos.canalRegisXpath);
    
    fichaMiCliente.write('Vinculos');
    helper.waitExpectVisibleByXpath(masDatos.vinculosXpath);
    helper.waitExpectVisibleByXpath(masDatos.cpVinculosXpath);
    helper.waitExpectVisibleByXpath(masDatos.nombreVinculosXpath);
    helper.waitExpectVisibleByXpath(masDatos.tipoVínculoXpath);
    helper.waitExpectVisibleByXpath(masDatos.vtoVinculosXpath);
    helper.waitExpectVisibleByXpath(masDatos.accionistaXpath);
    helper.waitExpectVisibleByXpath(masDatos.BeneficiarioFinalXpath);
    masDatos.logout();
  }); 
});