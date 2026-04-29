import { FichaMiCliente } from "./crm-fichaMiClientePage";
import { descriptionAffinity, descriptionStatus, currencyId, availableNormalPur,  totalDebt,holderName, closingDate,  lastPaymentDate } from "../apisPage/apisTarjetasPage/apiCardPage"
import { interestRate, creditLine, descriptionStatusDetail, minPaymentPending, totalPayment, lastPaymentAmount, nextDueDate } from "../apisPage/apisTarjetasPage/apiCardDetailPage";
import { fullNameHolder, cardDueDateHolder, lastFourDigitHolder, descriptionStatusHolder} from "../apisPage/apisTarjetasPage/apiCardHoldersPage";
import { availableNormalPurchase, closingDateMove, minPaymentDueDate, minPayment, debtInstallmentPurchase, dueDebt, transactionType, operationDate, processDate, couponNumber, totalDebtMovement } from "../apisPage/apisTarjetasPage/apiCardMovementPage";
import { Utilities } from "../helper/utilities";
import { Assertions } from "../helper/assertions";

let helper = new Assertions();
let utilities = new Utilities();

require("cypress-xpath");

export class Tarjetas extends FichaMiCliente {
//Contenedor
boxCuentasXpath = "//h6[contains(text(),'Tarjetas')]";
cardStripXpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]";
//table
cardNumberClass = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/div[2]/div[2]/div[1]";
accountNumberClass = "body > :nth-child(1) > :nth-child(2)";
affinityBrandClass = "tbody > :nth-child(1) > :nth-child(3)";
relationClass = "tbody > :nth-child(1) > :nth-child(4)";
debtToDateClass = "nth-child(1) > .TableProductOperation__content_right___1UgR8 > .TableProductOperation__tableBalance___1e1RT";
availableBalanceTableClass = ":nth-child(1) > .TableProductOperation__content_right_red___Xw7yP";
//Cabecera
descriptionAffinityClass = '[style="margin-bottom: 5px;"] > h4';
descriptionStatusClass = ".productDetail__state___2vIZY";
currencyIdXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/div[2]/div[2]/div[1]/span[1]";
availableNormalPurXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/div[2]/div[2]/div[1]"
//specific card
availableBalanceXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/div[2]/div[2]/div[1]"
productInforXpath = "//span[contains(text(),'Info de Producto')]";
//Datos del producto                    
holderNameClass = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(1) > .sidebarTextElement__description___3CVOZ";
closingDateClass = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(2) > .sidebarTextElement__description___3CVOZ";
creditLineClass = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(3) > .sidebarTextElement__description___3CVOZ";
availableCashAdvanceClass = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(4) > .sidebarTextElement__description___3CVOZ";
interestRateClass = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(4) > .sidebarTextElement__description___3CVOZ";
//Estado del producto
descriptionStatusDetailClass = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(1) > .sidebarTextElement__description___3CVOZ";
totalDebtDetailClass = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(2) > .sidebarTextElement__description___3CVOZ";
minPaymentPendingClass = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(3) > .sidebarTextElement__description___3CVOZ";
totalPaymentClass = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(4) > .sidebarTextElement__description___3CVOZ";
advancePaymentRealizedClass = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(5) > .sidebarTextElement__description___3CVOZ";
lastPaymentAmountClass = ".InfoProduct__contColumnData___O1WhC > :nth-child(6) > .sidebarTextElement__description___3CVOZ";
lastPaymentDateClass = ".InfoProduct__contColumnData___O1WhC > :nth-child(7) > .sidebarTextElement__description___3CVOZ";
nextDueDateClass = ".InfoProduct__contColumnData___O1WhC > :nth-child(7) > .sidebarTextElement__description___3CVOZ";
//Intervinientes
fullNameHolderXpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/table[1]/tbody[1]/tr[1]/td[1]";
lastFourDigitHolderXpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/table[1]/tbody[1]/tr[1]/td[2]";
descriptionStatusHolderXpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/table[1]/tbody[1]/tr[1]/td[3]";
cardDueDateHolderXpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/table[1]/tbody[1]/tr[1]/td[4]";
//Extractos y movimientos 
extractsMovementsXpath = "//span[contains(text(),'Extractos y movimientos')]";
//Información del extracto
closingDateMoveClass = ":nth-child(1) > :nth-child(1) > .styles__extractInfoElementValue___3gMjU";
minPaymentDueDateClass = ":nth-child(1) > :nth-child(2) > .styles__extractInfoElementValue___3gMjU";
minPaymentClass = ":nth-child(1) > :nth-child(3) > .styles__extractInfoElementValue___3gMjU";
totalDebtClass = ":nth-child(4) > .styles__extractInfoElementValue___3gMjU";
availableNormalPurchaseClass = ":nth-child(2) > :nth-child(1) > .styles__extractInfoElementValue___3gMjU";
debtInstallmentPurchaseClass = ":nth-child(2) > :nth-child(2) > .styles__extractInfoElementValue___3gMjU";
dueDebtClass = ":nth-child(2) > :nth-child(3) > .styles__extractInfoElementValue___3gMjU";


clickInBoxCard() {
  this.clickByXpathForce(this.cardStripXpath);

  this.write("Cabecera") 

  this.write("Marca")
  const descriptionAffinityFormater = utilities.transformarTexto3(descriptionAffinity);
  helper.expectTextToContainElement(this.descriptionAffinityClass, descriptionAffinityFormater);
  this.write("Estado")
  helper.expectTextToContainElement(this.descriptionStatusClass, descriptionStatus);
  this.write("Signo de la Moneda")
  const currencyIdFormater = utilities.transformarTexto(currencyId);
  helper.expectTextToContainXpath(this.currencyIdXpath, currencyIdFormater);
  this.write("Saldo Disponible")
  const availableNormalPurFormater = utilities.formatearMonto(availableNormalPur);
  helper.expectTextToContainXpath(this.availableNormalPurXpath, availableNormalPurFormater); 
}

clickInProductInformation(){
  let sigMon = "Gs";
  this. clickByXpathForce(this.productInforXpath);

  this.write("Datos del Producto")

  this.write("Titular de la Tarjeta")
  const holderNameFormater = utilities.transformarTexto2(holderName);
  helper.expectTextToContainElement(this.holderNameClass, holderNameFormater);
  this.write("Fecha de Cierre")
  const closingDateFormater = utilities.transformarFecha(closingDate);
  helper.expectTextToContainElement(this.closingDateClass, closingDateFormater);
  this.write("Linea de Crédito")
  const creditLineFormater = utilities.formatearMoneda(creditLine, sigMon);
  helper.expectTextToContainElement(this.creditLineClass, creditLineFormater) 
  this.write("Tasa de Interés")
  helper.expectTextToContainElement(this.interestRateClass, interestRate);

  this.write("Estado del Producto")

  this.write("Estado");
  helper.expectTextToContainElement(this.descriptionStatusDetailClass, descriptionStatusDetail);
  this.write("Deuda a la fecha");
  const totalDebtDetailFormater = utilities. formatearMoneda(totalDebt, sigMon);
  helper.expectTextToContainElement(this.totalDebtDetailClass, totalDebtDetailFormater); 
  this.write("Pago Mínimo");
  const minPaymentPendingFormater = utilities. formatearMoneda(minPaymentPending, sigMon);
  helper.expectTextToContainElement(this.minPaymentPendingClass, minPaymentPendingFormater); 
  this.write("Pago Total");
  const totalPaymentFormater = utilities. formatearMoneda(totalPayment, sigMon);
  helper.expectTextToContainElement(this.totalPaymentClass, totalPaymentFormater); 
  this.write("Monto último Pago");
  const lastPaymentAmountFormater = utilities. formatearNullEnMoneda(lastPaymentAmount, sigMon);
  helper.expectTextToContainElement(this.advancePaymentRealizedClass, lastPaymentAmountFormater); 
  this.write("último Pago "); 
  const lastPaymentDateFormater = utilities.transformarFecha(lastPaymentDate, sigMon);
  helper.expectTextToContainElement(this.lastPaymentDateClass, lastPaymentDateFormater); 
  this.write("Próximo Vencimiento"); 
  const nextDueDateFormater = utilities.transformarFecha(nextDueDate, sigMon);
  helper.expectTextToContainElement(this.nextDueDateClass, nextDueDateFormater); 

  this.write("Intervinientes/Titulares");

  this.write("Nombre y Apellido") 
  const fullNameHolderFormater = utilities.transformarTexto(fullNameHolder);
  helper.expectTextToContainXpath(this.fullNameHolderXpath, fullNameHolderFormater);
  this.write("4 últimos días de la tarjeta"); 
  helper.expectTextToContainXpath(this.lastFourDigitHolderXpath, lastFourDigitHolder); 
  this.write("Estado"); 
  helper.expectTextToContainXpath(this.descriptionStatusHolderXpath, descriptionStatusHolder); 
  this.write("Fecha de Vencimiento");
  const cardDueDateHolderFormater = utilities.tranformarFechaISOaDDMMYYYY(cardDueDateHolder);
  helper.expectTextToContainXpath(this.cardDueDateHolderXpath, cardDueDateHolderFormater); 
}

 clickInExtractsAndMovements(){
  this. clickByXpathForce(this.extractsMovementsXpath);

  this.write("Fecha de Cierre");
  const closingDateMoveFormater = utilities.formatearNullAGuion(closingDateMove);
  helper.expectTextToContainElement(this.closingDateMoveClass, closingDateMoveFormater);
  this.write("Vto. Pago mínimo");
  const minPaymentDueDateFormater = utilities.transformarFecha(minPaymentDueDate);
  helper.expectTextToContainElement(this.minPaymentDueDateClass, minPaymentDueDateFormater);
  this.write("Pago mínimo");
  const minPaymentFormater = utilities.formatearMonto(minPayment);
  helper.expectTextToContainElement(this.minPaymentClass, minPaymentFormater); 
  this.write("Deuda Total");
  const totalDebtMovFormater = utilities.formatearMonto(totalDebtMovement);
  helper.expectTextToContainElement(this.totalDebtClass, totalDebtMovFormater);
  this.write("Deuda Compra Normal"); 
  const availableNormalPurchaseFormater = utilities.formatearMonto(availableNormalPurchase);
  helper.expectTextToContainElement(this.availableNormalPurchaseClass, availableNormalPurchaseFormater); 
  this.write("Deuda en Cuotas");
  const debtInstallmentPurchaseFormater = utilities.formatearMonto(debtInstallmentPurchase);
  helper.expectTextToContainElement(this.debtInstallmentPurchaseClass, debtInstallmentPurchaseFormater); 
  this.write("Deuda en Mora");
  const dueDebtFormater = utilities.formatearMonto(dueDebt);
  helper.expectTextToContainElement(this.dueDebtClass, dueDebtFormater);
}
}
