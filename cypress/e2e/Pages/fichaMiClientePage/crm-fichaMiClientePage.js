import Page from "../helper/page";

require("cypress-xpath");

export class FichaMiCliente extends Page {

  buscarClienteXpath = "//input[@placeholder= 'Buscar cliente']";
  buscarClienteClass = ".prompt";
  customerIdDiesaXpath = "//div[@customerid='b748d814-ac6a-4b6d-9d6c-8cc3c374e268']";
  codClienteXpath = "//mark[@class= 'resultsListItem__highlight___1jZ83 ']";
  nombreCliente = ".resultsListItem__resultListItemTitle___3Ezwl > :nth-child(1) > span";
  consultaXpath = "//body/div[3]/div[3]/div[1]/div[2]/div[1]/div[5]/button[1]/span[1]";
  botonInfoCliente = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]";
  botonSegAndMar = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/button[1]";
  botonContactabilidad ="//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/button[1]";
  botonCarte = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/button[1]";
  botonRelLabXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/*[1]";
  botonRelPerXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/*[1]";
  escribirHistorial = "#timeline_creation_form" 
  botonHistorial ="span[id='history_button'] svg";
  tituloAgendaXpath = "//h3[contains(text(),'Agenda')]";
  tituloCtasXpath = "//h3[contains(text(),'CTAs')]"
  tituloResultadosBusquedaXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/h3[1]"
  tituloProductosXpath = "//h3[contains(text(),'Productos')]";
  tituloHistorialXpath = "//h3[contains(text(),'Historial')]";
  titlePrioridadesXpath = "//h3[contains(text(),'Prioridades')]";
  ctaComercialXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]";
  ctaAdminXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[2]/div[1]";
  ctaRiesgoXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[3]/div[1]";
  ctaServicioXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[1]/section[1]/div[2]/div[4]/div[1]";
  cedulaXpath = "//h6[contains(text(),'Cedula De Identidad')]";
  rucXpath = "//h6[contains(text(),'Registro Unico De Contribuyentes')]";
  actividadEcoXpath = "//h6[contains(text(),'Actividad Económica')]";
  grupoEcoXpath = "//h6[contains(text(),'Grupo Económico')]"
  codPersonaXpath = "//h6[contains(text(),'Código Persona')]";
  nacionalidadXpath = "//h6[contains(text(),'Nacionalidad')]";
  tipoClienteXpath = "//h6[contains(text(),'Tipo de Cliente')]";
  segYmarcasXpath = "//p[contains(text(),'Segmentos y Marcas')]";
  catRiesgoXpath = "//h6[contains(text(),'Categoría Riesgo Externo')]";
  nivelRiesgoXpath = "//h6[contains(text(),'Nivel De Riesgo')]";
  bancaXpath = "//h6[contains(text(),'Banca')]";
  segmentoXpath = "//h6[contains(text(),'Segmento')]";
  pagaSalarioXpath = "//h6[contains(text(),'Pago de Salarios')]";
  pagoProveeXpath = "//h6[contains(text(),'Pago de Proveedores')]";
  ingresosXpath = "//h6[contains(text(),'Ingresos')]";
  homeBankXpath = "//h6[contains(text(),'Banca Digital')]";
  datosContacXpath = "//p[contains(text(),'Datos Contactabilidad')]";
  principalXpath = "//h6[contains(text(),'Principal')]";
  laboralXpath = "//h6[contains(text(),'Laboral')]";
  celularXpath = "//h6[contains(text(),'Celular')]";
  correoXpath = "//h6[contains(text(),'Correo Electrónico')]";
  direccionXpath = "//h6[contains(text(),'Dirección')]";
  datoscarteXpath = "//p[contains(text(),'Datos Carterización')]";
  sucursalXpath = "//h6[contains(text(),'Sucursal')]";
  oficialXpath = "//h6[contains(text(),'Oficial')]";
  gerenteXpath = "//h6[contains(text(),'Gerente')]";
  botonSalirid = "#user_avatar";
  botonCerrarSessionXpath = "//span[contains(text(),'Cerrar Sesión')]";
  verMasData = "//span[contains(text(),'Ver más datos')]";

  clickEnBuscar() {
    this.clickByXpathForce(this.buscarClienteXpath);
  }

  escribirCodCliente(codCustomer) {
    this.typeAndEnter(this.buscarClienteClass, codCustomer);
  }

  escribirNombreCliente(nombre){
    this.typeAndEnter(this.buscarClienteClass, nombre);
  }

  escribirEnElBuscador(codCustomer){
    this.type(this.buscarClienteClass, codCustomer);
  }

  clickEnIdCliente (){
    this.clickByXpathForce(this.customerIdDiesaXpath);
  }

  clickEnCodCliente() {
    this.clickByXpathForce(this.codClienteXpath);
  }

  clickEnNombreCliente() {
    this.clickByElement(this.nombreCliente);
  }

  clickEnConsulta(text) {
    this.clickByXpathForce(this.consultaXpath);
  }

  clickEnInfoCliente() {
    this.clickByXpathForce(this.botonInfoCliente);
  }

  clickEnSegYMar() {
    this.clickByXpathForce(this.botonSegAndMar);
  }

  clickEnContactabilidad() {
    this.clickByXpathForce(this.botonContactabilidad);
  }

  clickEnCartera() {
    this.clickByXpathForce(this.botonCarte);
  }

  escribirEnHistorial(text) {
    this.type(this.escribirHistorial, text);
  }

  clickEnBotonHistorial() {
    this.clickByXpathForce(this.botonHistorial);
  }

  clickEnVerMasData() {
    this.clickByXpathForce(this.verMasData);
  }

  logout() {
    this.clickByElement(this.botonSalirid); 
    this.clickByXpathForce(this.botonCerrarSessionXpath);
  }
}