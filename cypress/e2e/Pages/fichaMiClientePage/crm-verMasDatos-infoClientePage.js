import Page from "../helper/page";
import { FichaMiCliente } from "./crm-fichaMiClientePage";

require("cypress-xpath");

export class VerMasDatos extends FichaMiCliente {
 
  //Datos Adicionales 
  infoClienteXpath = "//span[contains(text(),'Info del cliente')]" 
  datosAdiciXpath = "//h6[contains(text(),'Datos Adicionales')]";
  primerNombreXpath = "//h6[contains(text(),'Primer Nombre')]"; 
  segundoNombreXpath = "//h6[contains(text(),'Segundo Nombre')]";
  primerApellidoXpath = "//h6[contains(text(),'Primer Apellido')]";
  segundoApellidoXpath = "//h6[contains(text(),'Segundo Apellido')]";
  generoXpath = "//h6[contains(text(),'Género')]";
  estadoCivilXpath = "//h6[contains(text(),'Estado Civil')]";
  fechaNacimientoXpath = "//h6[contains(text(),'Fecha de nacimiento')]";
  nacionalidadXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[8]/h6[1]";
  razonSocialXpath = "//h6[contains(text(),'Razón Social')]";
  nombreComercialXpath = "//h6[contains(text(),'Nombre Comercial')]";
  aperturaXpath = "//h6[contains(text(),'Apertura')]";
  ramoXpath = "//h6[contains(text(),'Ramo')]";
  naturalezaXpath = "//h6[contains(text(),'Naturaleza')]";
  ivaXpath = "//h6[contains(text(),'Tipo de I.V.A')]";
  paisOrigenXpath = "//h6[contains(text(),'País Origen')]";
  ciudadOrigenXpath = "//h6[contains(text(),'Ciudad Origen')]";
  ingresoPjXpath = "//h6[contains(text(),'Ingreso')]";
  actividadPrimariaXpath = "//h6[contains(text(),'Actividad Primaria')]";
  actividaSecundariaXpath = "//h6[contains(text(),'Actividad Secundaria')]";
  actividadTerciariaXpath = "//h6[contains(text(),'Actividad Terciaria')]";
  actividadEconoXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[13]/h6[1]";

  //Datos Laborales
  datoslaboraXpath = "//h6[contains(text(),'Datos laborales')]";
  tipoLaboralXpath = "//h6[contains(text(),'Tipo Laboral')]";
  nivelEstudiosXpath = "//h6[contains(text(),'Nivel de Estudios')]";
  profesionXpath = "//h6[contains(text(),'Profesión')]";
  nombreEmpresaXpath = "//h6[contains(text(),'Nombre de la Empresa')]";
  salarioXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[5]/h6[1]";
  tipoEmpleoXpath = "//h6[contains(text(),'Tipo de Contrato/Empleo')]";
  fechaInicXpath = "//h6[contains(text(),'Fecha de inicio')]";
  cargoXpath = "//h6[contains(text(),'Cargo')]";
  
   //Datos de Contactabilidad
  datosContac2Xpath = "//h6[contains(text(),'Datos Contactabilidad')]";
  tipoContactoXpath = "//th[contains(text(),'Tipo Contacto')]";
  datoContacXpath = "//th[contains(text(),'Dato')]";
  tipoContacXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/table[1]/thead[1]/tr[1]/th[3]";
  estadoContacXpath = "//th[contains(text(),'Estado')]";
  canalRegisXpath = "//th[contains(text(),'Canal Registro')]";
 
  //Referencias Bancarias del Cliente
  referenciasXpath = "//h6[contains(text(),'Referencias bancarias del cliente')]";
  tipoRefXpath = "//th[contains(text(),'Tipo de referencia')]";
  nombreRefXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/table[1]/thead[1]/tr[1]/th[2]";
  ObservacionesRefXpath = "//th[contains(text(),'Observaciones')]";
  
  //Datos del Cónyugue
  conyugueXpath = "//h6[contains(text(),'Datos del cónyuge')]";
  nroDocConyuXpath = "//th[contains(text(),'No. Documento')]";
  nombreConyuXpath = "//th[contains(text(),'Nombre y apellido')]";
  ocupConyuXpath = "//th[contains(text(),'Ocupación')]";
  SepDeBienesXpath = "//th[contains(text(),'Separación de Bienes')]";
  CantHijosXpath = "//th[contains(text(),'Separación de Bienes')]";
  telefConyuXpath = "//th[contains(text(),'Telefonos')]";
   
  //Vinculos
  vinculosXpath = "//h6[contains(text(),'Vínculos')]";
  cpVinculosXpath = "//th[contains(text(),'Código persona')]";
  nombreVinculosXpath = "//th[contains(text(),'Nombre')]";
  tipoVínculoXpath = "//th[contains(text(),'Tipo Vínculo')]";
  vtoVinculosXpath = "//th[contains(text(),'Vencimiento')]";
  accionistaXpath = "//th[contains(text(),'Accionista')]";
  BeneficiarioFinalXpath = "//th[contains(text(),'Beneficiario final')]";

}