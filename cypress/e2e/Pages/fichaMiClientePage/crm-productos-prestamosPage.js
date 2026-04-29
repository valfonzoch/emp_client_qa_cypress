import { FichaMiCliente } from "./crm-fichaMiClientePage";
import { Assertions } from "../helper/assertions";
import { Utilities } from "../helper/utilities";
import { localTotalAmount} from "../apisPage/apiPrestamosPage/apiLoanSummaryPage";
import { accountNumber, modalityDescription, relation, startDate, totalFee, feePaidQuantity, currency, amount, preStatus } from "../apisPage/apiPrestamosPage/apiLoanPage";
import { capitalTotalValue, debtTotalValue, capitalTotalCancelledValue, interestRateTNA, capitalPaidPercent, nextInstallmentValue, anticipatedCancellationToDate,  
         cancellationInsuranceReturn, associatedAccount, requiredCapital, guarantee, guaranteeDue, refinancing, status, balanceInArrears, dueInstallmentsDetail,
         nextPaymentDueDate, daysPastDue, paidInstallments, lastPaymentDate, maxDaysLate, averageDaysLate  } from "../apisPage/apiPrestamosPage/apiLoanDetailPage";
import { installment, dueDate, installmentValue, capitalBalance, statusInstallments, interestBalance, lastPaymentDateCuota, daysPastDueCuota } from "../apisPage/apiPrestamosPage/apiLoanInstallmentsPage";
import { type, description, appliedAmount, guaranteeG, guarantorName, currencyG, guaranteeValue } from "../apisPage/apiPrestamosPage/apiLoanGuaranteesPage";

let helper = new Assertions();
let utilities = new Utilities();

require("cypress-xpath");

export class Prestamos extends FichaMiCliente {
//Contenedor
montoXpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]";
franjaPrestamosXpath = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]/div[3]";
//Tabla de prestamos
montoAcumulado = ".infoProductBox__balance___3sMwB > div";
//Préstamos
tituloPrest = "//h3[contains(text(),'Préstamos')]";
estadoTipoNum = ":nth-child(2) > tbody > tr > :nth-child(1) > .TableProductOperation__stateNumber___3j9qi > div";
relacion = ":nth-child(2) > tbody > tr > :nth-child(2)";
inicio = ":nth-child(2) > tbody > tr > :nth-child(3)";
cuoPag = ":nth-child(4) > .TableProductOperation__fee_paid_quantity_content___2_m6P";
total = ":nth-child(2) > tbody > tr > :nth-child(5) > .TableProductOperation__fee_paid_quantity_content___2_m6P";
moneda = ":nth-child(2) > tbody > tr > :nth-child(6) > .TableProductOperation__fee_paid_quantity_content___2_m6P";
montoCap = ":nth-child(2) > tbody > tr > :nth-child(7)";
//Cabecera Prestamos
descripcion = ".productDetail__card___15xEY";
nroCuenta = ".productDetail__contInfoLeft___2ZBkY > :nth-child(2) > h5";
estado = ".productDetail__state___2vIZY";
monedaPrest = ".productDetail__contInfoLeft___2ZBkY > :nth-child(6)";
totalPrest = ".productDetail__balance___k3oP8";
//Solapa Info del Producto
//Datos del Producto
valorTotCap = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(1) > .sidebarTextElement__description___3CVOZ";
valorTotDeu = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(2) > .sidebarTextElement__description___3CVOZ";
valorTotCanCap = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(3) > .sidebarTextElement__description___3CVOZ";
interPagos= ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(4) > .sidebarTextElement__description___3CVOZ"; // Me hace falta el campo en la apis
tasaInteTna = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(5) > .sidebarTextElement__description___3CVOZ";
cuotasAbo = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(6) > .sidebarTextElement__description___3CVOZ";
valorProxCuo = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(7) > .sidebarTextElement__description___3CVOZ";
cancAnticip = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(8) > .sidebarTextElement__description___3CVOZ";
devSegurosCan = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(9) > .sidebarTextElement__description___3CVOZ";
//Estado del Producto
ctaAsociada = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(1) > .sidebarTextElement__description___3CVOZ";
capitalSol = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(2) > .sidebarTextElement__description___3CVOZ";
garantia = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(3) > .sidebarTextElement__description___3CVOZ";
vtogarantia = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(4) > .sidebarTextElement__description___3CVOZ";
refinanc = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(5) > .sidebarTextElement__description___3CVOZ";
capPago = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(6) > .sidebarTextElement__description___3CVOZ";
estadoProd = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(7) > .sidebarTextElement__description___3CVOZ";
saldoMora = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(8) > .sidebarTextElement__description___3CVOZ";
cuoasvenc = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(9) > .sidebarTextElement__description___3CVOZ";
fechaProxPago = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(10) > .sidebarTextElement__description___3CVOZ";
diasMora = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(11) > .sidebarTextElement__description___3CVOZ";
cuotasPagas = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(12) > .sidebarTextElement__description___3CVOZ";
ultPago = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(13) > .sidebarTextElement__description___3CVOZ";
maxDiasAtr = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(14) > .sidebarTextElement__description___3CVOZ";
promedDiasAtr = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(15) > .sidebarTextElement__description___3CVOZ";
//Solapa Cuotas
solapaCuotas = "#react-tabtab-tab-1 > .sc-gsFSXq";
cuota = "//tbody/tr[1]/td[1]/span[1]/span[1]/div[1]";
vencimiento = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/span[1]/span[1]/div[1]";
valorCuota = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/span[1]/span[1]/div[1]";
estadoCuota = "//tbody/tr[1]/td[4]/span[1]/span[1]/div[1]";
saldoCapital = "//tbody/tr[1]/td[5]/span[1]/span[1]/div[1]";
saldoInteres = "//tbody/tr[1]/td[6]/span[1]/span[1]/div[1]";
ultimoPagocuotas = "//tbody/tr[1]/td[7]";
diasMoraCuota = "//tbody/tr[1]/td[8]";
//Solapa Garantía
solapaGarantia = "//span[normalize-space()='Garantías']";
tipoGarantia = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/span[1]/span[1]/div[1]";
descripcionGarantia = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/span[1]/span[1]/div[1]";
montoAplicado = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/span[1]/span[1]/div[1]";
garantiaG ="/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[4]/span[1]/span[1]/div[1]";
nombreGarante = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[5]/span[1]/span[1]/div[1]";
monedaGarantia = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[6]/span[1]/span[1]/div[1]";
valorGarantia = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[7]/span[1]/span[1]/div[1]";




clickCajaPrestamo() {
  this.clickByXpathForce(this.franjaPrestamosXpath);
  this.write("Monto Acumulado");
  const localTotalAmountFormater = utilities.formatearMonto(localTotalAmount);
  helper.expectTextToContainElement(this.montoAcumulado, localTotalAmountFormater);
  helper.expectVisibleByXpath(this.tituloPrest);
  this.write("Tabla");
  this.write("Estado");
  const preStatusFormater = `${modalityDescription} ${accountNumber}`;
  helper.expectTextToContainElement(this.estadoTipoNum, preStatusFormater);
  this.write("Relación");
  helper.expectTextToContainElement(this.relacion, relation);
  this.write("Inicio");
  const startDateFormater = utilities.transformarFecha(startDate);
  helper.expectTextToContainElement(this.inicio, startDateFormater);
  this.write("Cuo. Pag");
  helper.expectTextToContainElement(this.cuoPag, feePaidQuantity);
  this.write("Total");
  helper.expectTextToContainElement(this.total, totalFee);
  this.write("Moneda");
  const currencyFormater = utilities.transformarTexto(currency);
  helper.expectTextToContainElement(this.moneda, currencyFormater);
  this.write("Monto Capital");
  const amountFormater = utilities.formatearMonto(amount)
  helper.expectTextToContainElement(this.montoCap, amountFormater);
}

clickEnPrimerPrestamo(){
  
  this. clickByElement(this.estadoTipoNum);

  this.write("Cabecera");

  this.write("Nombre del Préstamo");
  const descriptionFormater = utilities.transformarTexto(modalityDescription)
  const modalityDescriptionFormater = `Préstamos / ${descriptionFormater}`;
  helper.expectTextToContainElement(this.descripcion, modalityDescriptionFormater);
  this.write("Número de Cuenta");
  const accountNumberFormater = `Número de cuenta: ${accountNumber}`;
  helper.expectTextToContainElement(this.nroCuenta, accountNumberFormater);
  this.write("Estado");
  const preStatusFormater = utilities.transformarTexto(preStatus)
  helper.expectTextToContainElement(this.estado, preStatusFormater);
  this.write("Moneda");
  const currencyPrestFormater = utilities.transformarTexto(currency);
  helper.expectTextToContainElement(this.monedaPrest, currencyPrestFormater);
  this.write("Monto");
  const amountPrestFormater = utilities.formatearMoneda(amount, "Gs")
  helper.expectTextToContainElement(this.totalPrest, amountPrestFormater);
  
  this.write("Pestaña Info del Producto / Datos del Producto");
 
  this.write("Valor Total del Capital");
  const capitalTotalValueFormater = utilities.formatearMonto(capitalTotalValue);
  helper.expectTextToContainElement(this.valorTotCap, capitalTotalValueFormater);
  this.write("Valor Total de la Deuda");
  const debtTotalValueFormater = utilities.formatearMonto(debtTotalValue);
  helper.expectTextToContainElement(this.valorTotDeu, debtTotalValueFormater);
  this.write("Valor Total cancelado del capital");
  const capitalTotalCancelledValueFormater = utilities.formatearMonto(capitalTotalCancelledValue);
  helper.expectTextToContainElement(this.valorTotCanCap, capitalTotalCancelledValueFormater);
  this.write("Intereses Pagos"); //No está el campo en la apis ERROR DEL CLIENTE
  this.write("Tasa de interés TNA");
  const interestRateTNAFormater = utilities.agregarSignoPorcentaje(interestRateTNA);
  helper.expectTextToContainElement(this.tasaInteTna, interestRateTNAFormater);
  this.write("Porcentaje de Cuotas Abonadas");
  const capitalPaidPercentFormater = utilities.agregarSignoPorcentaje(capitalPaidPercent);
  helper.expectTextToContainElement(this.cuotasAbo, capitalPaidPercentFormater);
  this.write("Valor Próxima Cuota");
  const nextInstallmentValueFormater = utilities.formatearMonto(nextInstallmentValue);
  helper.expectTextToContainElement(this.valorProxCuo, nextInstallmentValueFormater);
  this.write("Cancelación anticipada a la fecha");
  const anticipatedCancellationToDateFormater = utilities.formatearMonto(anticipatedCancellationToDate);
  helper.expectTextToContainElement(this.cancAnticip, anticipatedCancellationToDateFormater);
  this.write("Devolución de Seguros por Cancelación");
  const cancellationInsuranceReturnFormater = utilities.formatearMonto(cancellationInsuranceReturn);
  helper.expectTextToContainElement(this.devSegurosCan, cancellationInsuranceReturnFormater);

  this.write("Pestaña Info del Producto / Estado del Producto");
  
  this.write("Cuenta Asociada");
 // const associatedAccountFormater = utilities.formatearMonto(associatedAccount);
  helper.expectTextToContainElement(this.ctaAsociada, associatedAccount);
  this.write("Capital Solicitado");
  const requiredCapitalFormater = utilities.formatearMonto(requiredCapital);
  helper.expectTextToContainElement(this.capitalSol, requiredCapitalFormater);
  this.write("Garantía");
  const 	guaranteeFormater = utilities.formatearMonto(	guarantee);
  helper.expectTextToContainElement(this.garantia, 	guaranteeFormater);
  this.write("Vencimiento Garantía");
  const guaranteeDueFormater = utilities.transformarFecha(guaranteeDue);
  helper.expectTextToContainElement(this.vtogarantia, guaranteeDueFormater);
  this.write("Refinanciaciones");
  //const refinancingFormater = utilities.formatearMonto(refinancing);
  helper.expectTextToContainElement(this.refinanc, refinancing);
  this.write("Capital Pago");
  const capitalTotalCancelledValueEstFormater = utilities.formatearMonto(capitalTotalCancelledValue);
  helper.expectTextToContainElement(this.capPago, capitalTotalCancelledValueEstFormater);
  this.write("Estado");
  const statusFormater = utilities.transformarTexto(status);
  helper.expectTextToContainElement(this.estadoProd, statusFormater);
  this.write("Saldo en Mora");
  const balanceInArrearsFormater = utilities.formatearMonto(balanceInArrears);
  helper.expectTextToContainElement(this.saldoMora, balanceInArrearsFormater);
  this.write("Detalle cuotas vencidas");
  //const dueInstallmentsDetailFormater = utilities.formatearMonto(dueInstallmentsDetail);
  helper.expectTextToContainElement(this.cuoasvenc, dueInstallmentsDetail);
  this.write("Fecha próximo pago");
  const nextPaymentDueDateFormater = utilities.transformarFecha(nextPaymentDueDate);
  helper.expectTextToContainElement(this.fechaProxPago, nextPaymentDueDateFormater);
  this.write("Días en Mora");
  //const daysPastDueFormater = utilities.formatearMonto(daysPastDue);
  helper.expectTextToContainElement(this.diasMora, daysPastDue);
  this.write("Cuotas Pagas");
 // const paidInstallmentsFormater = utilities.formatearMonto(paidInstallments);
  helper.expectTextToContainElement(this.cuotasPagas, paidInstallments);
  this.write("Último Pago");
  const lastPaymentDateFormater = utilities.transformarFecha(lastPaymentDate);
  helper.expectTextToContainElement(this.ultPago, lastPaymentDateFormater);
  this.write("Max. Días de atraso");
  //const maxDaysLateFormater = utilities.formatearMonto(maxDaysLate);
  helper.expectTextToContainElement(this.maxDiasAtr, maxDaysLate);
  this.write("Promedio días de atraso");
  //const averageDaysLateFormater = utilities.formatearMonto(averageDaysLate);
  helper.expectTextToContainElement(this.promedDiasAtr, averageDaysLate);
 }

 clickEnCuotas(){
  this. clickByElement(this.solapaCuotas);
  this.write("Detalle de Cuotas");
  this.write("Cuota");
  const installmentFormater = utilities.formatearEntero(installment)
  helper.expectTextToContainXpath(this.cuota, installmentFormater);
  this.write("Vencimiento");
  const dueDateFormater = utilities.transformarFecha(dueDate);
  helper.expectTextToContainXpath(this.vencimiento, dueDateFormater);
  this.write("Valor de la Cuota");
  const installmentValueFormater = utilities.formatearMoneda(installmentValue, "Gs")
  helper.expectTextToContainXpath(this.valorCuota, installmentValueFormater);
 /* this.write("Estado");
  helper.expectTextToContainXpath(this.estadoCuota, statusInstallments);*/
  this.write("Saldo de Capital");
  const capitalBalanceFormater = utilities.formatearMoneda(capitalBalance, "Gs")
  helper.expectTextToContainXpath(this.saldoCapital, capitalBalanceFormater);
  this.write("Saldo de Interés");
 /*const interestBalanceFormater = utilities.formatearMoneda(interestBalance, "Gs")
  helper.expectTextToContainXpath(this.saldointeres, interestBalanceFormater);*/
  this.write("Último pago");
  const lastPaymentDateCuotaFormater = utilities.transformarFecha(lastPaymentDateCuota);
  helper.expectTextToContainXpath(this.ultimoPagocuotas, lastPaymentDateCuotaFormater);
  this.write("Días de Mora");
  const daysPastDueCuotaFormater = utilities.formatearEntero(daysPastDueCuota)
  helper.expectTextToContainXpath(this.diasMoraCuota, daysPastDueCuotaFormater);
}

clickEnGarantia(){
  this. clickByXpathForce(this.solapaGarantia);
  this.write("Detalle de Garantía");
  this.write("Tipo");
  const typeFormater = utilities.formatearEntero(type)
  helper.expectTextToContainXpath(this.tipoGarantia, typeFormater);
  this.write("Descripcion");
  const descriptionFormater = utilities.transformarTexto(description);
  helper.expectTextToContainXpath(this.descripcionGarantia, descriptionFormater);
  this.write("Monto Aplicado");
  const appliedAmountFormater = utilities.formatearMonto(appliedAmount)
  helper.expectTextToContainXpath(this.montoAplicado, appliedAmountFormater);
  this.write("Garantía");
  const guaranteeGFormater = utilities.formatearNullAGuion(guaranteeG)
  helper.expectTextToContainXpath(this.garantiaG, guaranteeGFormater);
  this.write("Nombre del Garante");
  const guarantorNameFormater = utilities.formatearNullAGuion(guarantorName)
  helper.expectTextToContainXpath(this.nombreGarante, guarantorNameFormater);
  this.write("Moneda");
  const currencyGFormater = utilities.transformarTexto(currencyG);
  helper.expectTextToContainXpath(this.monedaGarantia, currencyGFormater);
  this.write("Valor Garantía");
  const guaranteeValueFormater = utilities.formatearMonto(guaranteeValue)
  helper.expectTextToContainXpath(this.valorGarantia, guaranteeValueFormater);
}
}
