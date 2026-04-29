import { FichaMiCliente } from "./crm-fichaMiClientePage";
import { typeDescription, companyAssociated, transferLimit, openingDate, minimumBalance, interestRate, signatureRegime, balance, blockedBalance, balanceAvailable, averageBalance, blockingType, retainedBalance } from "../apisPage/apiCuentasPage/apiAccountDetailPage"
import { movementDate, documentNumber, type, description} from "../apisPage/apiCuentasPage/apiAccountMovementPage"
import { fullName, personId, relationHolder, effectivenessDate } from "../apisPage/apiCuentasPage/apiAccountHolderPage"
import { Assertions } from "../helper/assertions";
import { Utilities } from "../helper/utilities";

let helper = new Assertions();
let utilities = new Utilities();

require("cypress-xpath");

export class Cuentas extends FichaMiCliente {
//Contenedor
boxCuentasXpath = "//h6[contains(text(),'Cuentas')]";
accountStripXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]";
franjaCuentaClass = ":nth-child(1) > .productsItemBox__boxCont___1vaLG > .productsItemBox__contProduct___95NiG"
accountStriId = ":nth-child(1) > .productsItemBox__boxCont___1vaLG > .productsItemBox__contProduct___95NiG"
//Info de Producto
productInforXpath = "//span[contains(text(),'Info de Producto')]";
typeDescriptionClass = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(1) > .sidebarTextElement__description___3CVOZ";
companyAssociatedClass = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(2) > .sidebarTextElement__description___3CVOZ";
transferLimitClass = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(3) > .sidebarTextElement__description___3CVOZ";
openInDateClass = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(4) > .sidebarTextElement__description___3CVOZ";
minimunBalanceClass = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(5) > .sidebarTextElement__description___3CVOZ";
interesRateClass = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(6) > .sidebarTextElement__description___3CVOZ";
combinedAccountNumberClass = "" //Se necesita otro cliente para verificar el selector
signatureRegimeClass = ".InfoProduct__contColumnData___O1WhC > :nth-child(8) > .sidebarTextElement__description___3CVOZ";
balanceClass = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(1) > .sidebarTextElement__description___3CVOZ";
blokedBalanceClass = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(2) > .sidebarTextElement__description___3CVOZ";
balanceAviableClass = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(3) > .sidebarTextElement__description___3CVOZ";
averageBlanceClass = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(4) > .sidebarTextElement__description___3CVOZ";
blockingTypeClass = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(5) > .sidebarTextElement__description___3CVOZ";
retnainedBlanceClass = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(6) > .sidebarTextElement__description___3CVOZ";
fullNameClass = ".MuiTableBody-root-861 > :nth-child(1) > :nth-child(1)";
nombre1FirmanteXpath = "//td[contains(text(),'Puente Casa De Bolsa S.A.')]";
personaIdClass = ".MuiTableBody-root-861 > :nth-child(1) > :nth-child(2)";
relationHolderClass = ".MuiTableBody-root-861 > :nth-child(1) > :nth-child(3)";
effectivenessDateClass = ".MuiTableBody-root-861 > :nth-child(1) > :nth-child(4)";
//Movimientos 
flapMoveXpath = "//span[contains(text(),'Movimientos')]";
fromXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]";
untilXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/input[1]";
searchMovementClass = "#search_button_movement"
dateMoveXpath = "//tbody/tr[1]/td[1]/span[1]/span[1]/div[1]";
valueDateXpath = "//tbody/tr[1]/td[1]/span[1]/span[1]/div[1]"; 
voucherNroXpath = "//tbody/tr[1]/td[3]"; 
descripMoveXpath = "//tbody/tr[1]/td[4]";  
stateMoveXpath = "//tbody/tr[1]/td[5]";
amountMoveXpath = "//tbody/tr[1]/td[6]"; 

clickInBoxAccount() {
  this.clickByXpathForce(this.accountStripXpath);
}

clickEnCajaCuentas() {
  this.clickByElement(this.accountStriId);
}

clickEnNumeroDeCuenta(accountNumber) {
  const accountNumberXpath = `//div[contains(text(),'CA ${accountNumber}')]`;
  this.clickByXpathForce(accountNumberXpath);
}

clickEnSolapaMovimiento() {
  this.clickByXpathForce(this.flapMoveXpath);
}

escribirFechaDesde(){
  this.typeByXpath(this.fromXpath, movementDate);
}

escribirFechaHasta(){
  this.typeByXpath(this.untilXpath, movementDate);
}

clickEnBuscarMovimientoPorFecha() {
  this.clickByElementForce(this.searchMovementClass);
  helper.expectTextToContainXpath(this.voucherNroXpath, documentNumber);
  helper.expectTextToContainXpath(this.descripMoveXpath, type);
  helper.expectTextToContainXpath(this.stateMoveXpath, description);
}

clickEnInformacionDelProducto(){
  this. clickByXpathForce(this.productInforXpath);

  const typeDescriptionFormater = utilities.transformarTexto(typeDescription);
  helper.expectTextToContainElement(this.typeDescriptionClass, typeDescriptionFormater);

  const companyAssociatedFormater = utilities.transformarTexto(companyAssociated);
  helper.expectTextToContainElement(this.companyAssociatedClass, companyAssociatedFormater); 

  const transferLimitFormater = utilities.formatearMoneda(transferLimit, "Gs")
  helper.expectTextToContainElement(this.transferLimitClass, transferLimitFormater); // Bug 83309

  const openingDateFormater = utilities.transformarFecha(openingDate)
  helper.expectTextToContainElement(this.openInDateClass, openingDateFormater); 

  const minimumBalanceFormater = utilities.formatearNullEnMoneda(minimumBalance, "Gs")
  helper.expectTextToContainElement(this.minimunBalanceClass, minimumBalanceFormater); // Bug 83309
  helper.expectTextToContainElement(this.interesRateClass, interestRate);
 // helper.expectTextToContainElement(this.combinedAccountNumberClass, combinedAccountNumber); //  se necesita un cliente que tenga el dato para poder verificar el selector 

  const signatureRegimeFormater = utilities.transformarTexto(signatureRegime)
  helper.expectTextToContainElement(this.signatureRegimeClass, signatureRegimeFormater); 

  const balanceFormater = utilities.formatearMoneda(balance, "Gs");
  helper.expectTextToContainElement(this.balanceClass, balanceFormater); // Bug 83309

  const blockedBalanceFormater = utilities.formatearMoneda(blockedBalance, "Gs");
  helper.expectTextToContainElement(this.blokedBalanceClass, blockedBalanceFormater); // Bug 83309

  const balanceAvailableFormater = utilities.formatearMoneda(balanceAvailable, "Gs");
  helper.expectTextToContainElement(this.balanceAviableClass, balanceAvailableFormater); // Bug 83309

  const averageBalanceFormater = utilities.formatearMoneda(averageBalance, "Gs")
//  helper.expectTextToContainElement(this.averageBlanceClass, averageBalanceFormater); // Bug 83309 Registrar nuevo error no tiene punto por miles
  helper.expectTextToContainElement(this.blockingTypeClass, blockingType);

  const  retainedBalanceFormater = utilities.formatearMoneda( retainedBalance, "Gs")
  helper.expectTextToContainElement(this.retnainedBlanceClass, retainedBalanceFormater); // Bug 83309

  const fullNameFormater = utilities.transformarTexto(fullName)
 /* helper.expectTextToContainElement(this.nombre1FirmanteXpath, fullNameFormater); //26.08.2024
  helper.expectTextToContainElement(this.personaIdClass, personId);
  helper.expectTextToContainElement(this.relationHolderClass, relationHolder);
  const effectivenessDateFormater = utilities.transformarFecha(effectivenessDate)
  helper.expectTextToContainElement(this.effectivenessDateClass, effectivenessDateFormater);*/
 } 
}