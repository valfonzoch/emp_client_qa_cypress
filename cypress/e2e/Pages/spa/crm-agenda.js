import Page from "../helper/page";

require("cypress-xpath");

export class Agenda extends Page {

  tituloAgendaXpath = "//h3[contains(text(),'Agenda')]";
  tituloCtasXpath = "//h3[contains(text(),'CTAs')]";
  diaXpath ="/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/span[1]/h1[1]";
  mesXpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/span[1]/span[1]/h6[1]";
  anioXpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/span[1]/span[1]/span[1]";
  btonMás = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/button[1]/span[1]";
  celdaSpaXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[3]/div[3]/div[1]";
  nuevoElemtXpath = ".speechFormControl__speechFormControl___3dwer > .fluid > input";
  buscarClienteXpath ="div.ui.page.modals.dimmer.transition.visible.active:nth-child(6) div.ui.modal.transition.visible.active.fade.in.calendarItemForm__wrapper___2XPj0 div.content form.ui.form div.calendarItemForm__customerField___1hYxP:nth-child(5) div.field div.customer-search-wrapper > div.ui.fluid.search:nth-child(1)";
  clienteVanessaXpath = "//body/div[3]/div[1]/div[1]/form[1]/div[5]/div[1]/div[1]/div[1]/div[2]/div[1]";
  modalDespleBusSpa = "/html/body/div[3]/div/div[1]/form/div[5]/div/div/div/div[2]/div"
  reunionXpath = "//div[contains(text(),'Reunión')]";
  mensajeSpa = "//body/div[3]/div[1]/div[1]/form[1]/div[8]/div[1]/textarea[1]";
  guardarSpa = "//button[contains(text(),'Guardar')]";
  eventoCreadoXpath = "//span[contains(text(),'Se crea nuevo Evento para prueba automática')]";
  modalNvoEventoXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]";
  botónEditarSpaXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/*[1]";
  inputTituloEventoXpath = "//body/div[3]/div[1]/div[1]/form[1]/div[3]/div[1]/div[1]/div[1]/input[1]";
  llamarXpath = "//body/div[3]/div[1]/div[1]/form[1]/div[7]/div[1]/label[2]";
  eliminarEventoXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/*[2]";
  confirmarEliminarXpath = "//button[contains(text(),'Sí')]";
  botonCtasEquipoId ="#metric"
  ctasEquipoXpath = "//span[contains(text(),'incluir ctas de mi equipo')]";
  comercialXpath = "//p[contains(text(),'comercial')]";
  administrativoXpath = "//p[contains(text(),'administrativo')]";
  riesgoXpath = "//p[contains(text(),'riesgos')]";
  serviciosXpath = "//p[contains(text(),'servicios')]";
  notificacionXpath = "//p[contains(text(),'notificación')]";
  propioXpath = "//p[contains(text(),'propio')]";
  //confirmarEliminarClass = ".primary"
  clickEnBotonMas (){
    this.clickByXpathForce(this.btonMás);
  };

  clickEnCeldaEvento (){
    this.clickByXpathForce(this.celdaSpaXpath);
  };

  escribirNvoEvento(nombreEvento) {
    this.type(this.nuevoElemtXpath, nombreEvento);
  };
  
  clickEnBusquedaCliente (){
    this.clickByElement(this.buscarClienteXpath);
  };

  escribirNombreCliente(nombreCliente) {
    this.type(this.buscarClienteXpath, nombreCliente);
  };

  clickEnResultadosCliente (){
    this.clickByXpathForce(this.modalDespleBusSpa);
  };

  clickEnReunion (){
    this.clickByXpathForce(this.reunionXpath);
  };

  clickEnGuardarSpa (){
    this.clickByXpathForce(this.guardarSpa);
  };
  
  clickEnEventoCreado (){
    this.clickByXpathForce(this.eventoCreadoXpath);
  };

  clickBotonEditarSpa (){
    this.clickByXpathForce(this.botónEditarSpaXpath);
  };

  escribirNvoTexto(nuevoTexto){
    this.sendKeyByXpath(this.inputTituloEventoXpath, nuevoTexto)
  };

  clickEnllamar (){
    this.clickByXpathForce(this.llamarXpath);
  };

  clickEnEliminarEvento(){
    this.clickByXpathForce(this.eliminarEventoXpath);
  };

  clickEnConfirmarEliminacion(){
    this.dblclickByXpathForce(this.confirmarEliminarXpath);
  };
 
}