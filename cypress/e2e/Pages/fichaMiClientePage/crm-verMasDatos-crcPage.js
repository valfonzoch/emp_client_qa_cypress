import Page from "../helper/page";
import { FichaMiCliente } from "./crm-fichaMiClientePage";

require("cypress-xpath");

export class Crc extends FichaMiCliente {

  crc = "//span[contains(text(),'CRC')]";
  //CRC Diario - Interno
  diarioIntXpath = "//h6[contains(text(),'CRC Diario - Interno')]";
  nombreEntidadXpath = "//th[contains(text(),'Nombre Entidad')]";
  deudaDiaInterXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/table[1]/thead[1]/tr[1]/th[2]"; 
  codeudoDiaInterXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/table[1]/thead[1]/tr[1]/th[3]";
  deudaFideicomisoXpath = "//th[contains(text(),'Deuda Fideicomiso')]";
  continDiaInterXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/table[1]/thead[1]/tr[1]/th[5]";
  clasDiaInterfXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/table[1]/thead[1]/tr[1]/th[6]";
  //CRC Diario - Externo
  diarioExtXpath= "//h6[contains(text(),'CRC Diario - Externo')]";
  periodoDiaExtXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[4]/table[1]/thead[1]/tr[1]/th[1]";
  deudaDiaExtXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[4]/table[1]/thead[1]/tr[1]/th[2]"; 
  codeudoDiaExtXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[4]/table[1]/thead[1]/tr[1]/th[3]";
  totalRiesgoXpath = "//th[contains(text(),'Total Riesgo')]";
  entidadesDiaExtXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[4]/table[1]/thead[1]/tr[1]/th[5]";
  clasificaciónExternaXpath = "//th[contains(text(),'Clasificación Externa')]";
  //CRC Mensual - Interno
  menIntXpath = "//h6[contains(text(),'CRC Mensual - Interno')]";
  periodoMenIntXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[6]/table[1]/thead[1]/tr[1]/th[1]";
  deudaMenIntXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[6]/table[1]/thead[1]/tr[1]/th[2]"; 
  codeudoMenIntXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[6]/table[1]/thead[1]/tr[1]/th[3]";
  continMenIntXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[6]/table[1]/thead[1]/tr[1]/th[4]";
  clasifMenIntXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[6]/table[1]/thead[1]/tr[1]/th[5]";
  //CRC Mensual - Externo
  menExtXpath = "//h6[contains(text(),'CRC Mensual - Externo')]";
  periodoMenExtXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[8]/table[1]/thead[1]/tr[1]/th[1]";
  deudaEntidadXpath = "//th[contains(text(),'Deuda Entidad')]"; 
  otrasEntidadesXpath = "//th[contains(text(),'Otras Entidades')]";
  contiMenExtXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[8]/table[1]/thead[1]/tr[1]/th[4]";
  contEntidadesXpath = "//th[contains(text(),'Cont. O/Entidades')]";
  codeudoMenExtXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[8]/table[1]/thead[1]/tr[1]/th[6]";
  clasificaciónSistemaXpath = "//th[contains(text(),'Clasificación Sistema')]";
  //Datos Generales de Riesgo
  datosGenXpath = "//h6[contains(text(),'Datos Generales de Riesgo')]";
  scoreCredXpath = "//h6[contains(text(),'Score Bureau de Crédito')]";
  scoreIntXpath = "//h6[contains(text(),'Score Bureau Interno')]";

  clickEnCrc() {
    this.clickByXpathForce(this.crc);
  }
}