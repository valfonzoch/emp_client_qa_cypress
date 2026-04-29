import { FichaMiCliente } from "./crm-fichaMiClientePage";
import { Assertions } from "../helper/assertions";
import { Utilities } from "../helper/utilities";
import { localTotalAmount} from "../apisPage/apiInversionesPage/apiInvestmentSummaryPage";
import { accountNumber, denomination, relationDescription, capital, currency, balance} from "../apisPage/apiInversionesPage/apiInvestmentDetailPage";
import { term, interestRate, cdaDescription, automaticCredit, creditAccount , beneficiary, serial, openingDate, cdaStatusdescription, expiration } from "../apisPage/apiInversionesPage/apiInvestmentCdasPage";
import { fullName, relation, personId, effectivenessDate } from "../apisPage/apiInversionesPage/apiInvestmentHoldersPage";
import { couponNumber, interestAmount, interestDescription, issueDate, expirationInt, paymentDate, locked } from "../apisPage/apiInversionesPage/apiInvestmentInterestePage";
import { movementDate, concept, amount, currencyMovement, type } from "../apisPage/apiInversionesPage/apiInvestmentMovmentPage";
import { lockDescripction, totalBalance, lockedBalance, retainedBalance, availableBalance, dueInterest, lockDetail } from "../apisPage/apiInversionesPage/apiInvestmentLockPage";

let helper = new Assertions();
let utilities = new Utilities();

require("cypress-xpath");

export class Inversiones extends FichaMiCliente {
//Contenedor
montoXpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[3]/div[2]";
franjaInversiones = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[3]";
//Tabla de prestamos
saldoConsolidado = ".TableProductOperation__contHeader___1QJsI > .infoProductBox__contInfo___1I8uT > .infoProductBox__balance___3sMwB > div";
cuentaInversion = ":nth-child(2) > tbody > tr > :nth-child(1) > .TableProductOperation__stateNumberLoan___f_e1q > div";
denominacion = ":nth-child(2) > tbody > tr > :nth-child(2)";
relacion = ":nth-child(2) > tbody > tr > :nth-child(3)";
capitalInv = ":nth-child(2) > tbody > tr > :nth-child(4) > .TableProductOperation__tableBalanceInvesment___2Gfyk";
moneda = ":nth-child(2) > tbody > tr > :nth-child(5) > .TableProductOperation__fee_paid_quantity_content___2_m6P";
saldo = ":nth-child(2) > tbody > tr > .TableProductOperation__tableBalanceAccount___cFawd > .TableProductOperation__tableBalance___1e1RT";
//Cabecera
cuentaCabecera = ".productDetail__contInfoLeft___2ZBkY > :nth-child(1) > :nth-child(2)";
denominacionCabecera = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[1]/div[3]/div[1]/div[8]/h4[1]";
monedaCabecera = ":nth-child(9) > .productDetail__card___15xEY"; 
saldoInvertido = ".productDetail__balance___k3oP8";
//Solapa Info de Producto
plazo = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(1) > .sidebarTextElement__description___3CVOZ";
tasaInteres = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(2) > .sidebarTextElement__description___3CVOZ";
formaPago = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(3) > .sidebarTextElement__description___3CVOZ";
creditoAutomatico = ":nth-child(1) > .InfoProduct__contColumnData___O1WhC > :nth-child(4) > .sidebarTextElement__description___3CVOZ";
cuentaCredito = ".InfoProduct__contColumnData___O1WhC > :nth-child(5) > .sidebarTextElement__description___3CVOZ";
beneficiario = ".InfoProduct__contColumnData___O1WhC > :nth-child(6) > .sidebarTextElement__description___3CVOZ";
nroserie = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(1) > .sidebarTextElement__description___3CVOZ";
fechaApertura = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(2) > .sidebarTextElement__description___3CVOZ";
estadoActual = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(3) > .sidebarTextElement__description___3CVOZ";
vencimiento = ".InfoProduct__contState___dQN_O > .InfoProduct__contColumnData___O1WhC > :nth-child(4) > .sidebarTextElement__description___3CVOZ";
nombreInterviniente = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/table[1]/tbody[1]/tr[1]/td[1]";
relacionInter = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/table[1]/tbody[1]/tr[1]/td[2]";
codPerInter = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/table[1]/tbody[1]/tr[1]/td[3]";
fechaValidez = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/table[1]/tbody[1]/tr[1]/td[4]";
//Solapa Intereses
solapaIntereses = "#react-tabtab-tab-1 > .sc-gsFSXq";
numeroInt = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/span[1]/span[1]/div[1]";
interes = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/span[1]/span[1]/div[1]";
estadoInt = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/span[1]/span[1]/div[1]";
emisionInt = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[4]/span[1]/span[1]/div[1]";
vencimientoInt = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[5]/span[1]/span[1]/div[1]";
pagadoInt = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[6]/span[1]/span[1]/div[1]";
bloqueo = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[7]/span[1]/span[1]/div[1]";
//Solapa Movimientos 
solapaMovimientos = "#react-tabtab-tab-2 > .sc-gsFSXq";
fecha = "//body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/span[1]/span[1]/div[1]";
concepto = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/span[1]/span[1]/div[1]";
montoMovimiento = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/span[1]/span[1]/div[1]";
monedaMovimiento = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[4]/span[1]/span[1]/div[1]";
tipoMovimiento = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[5]/span[1]/span[1]/div[1]";
//Solapa Bloqueos
solapaBloqueos = "#react-tabtab-tab-3 > .sc-gsFSXq";
tipoBloqueo = ".InfoProduct__contColumnData___O1WhC > :nth-child(1) > .sidebarTextElement__description___3CVOZ";
saldoTotal = ".InfoProduct__contColumnData___O1WhC > :nth-child(2) > .sidebarTextElement__description___3CVOZ";
saldoBloqueado = ".InfoProduct__contColumnData___O1WhC > :nth-child(3) > .sidebarTextElement__description___3CVOZ";
saldoRetenido = ".InfoProduct__contColumnData___O1WhC > :nth-child(4) > .sidebarTextElement__description___3CVOZ";
saldoDisponible = ".InfoProduct__contColumnData___O1WhC > :nth-child(5) > .sidebarTextElement__description___3CVOZ";
saldoVencido = ".InfoProduct__contColumnData___O1WhC > :nth-child(6) > .sidebarTextElement__description___3CVOZ";
documento = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[4]/div[1]/div[3]/div[2]/table[1]/tbody[1]/tr[1]/td[1]";
inicio = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[4]/div[1]/div[3]/div[2]/table[1]/tbody[1]/tr[1]/td[2]/span[1]/span[1]/div[1]";
fin= "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[4]/div[1]/div[3]/div[2]/table[1]/tbody[1]/tr[1]/td[3]";
causaBloqueo = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[4]/div[1]/div[3]/div[2]/table[1]/tbody[1]/tr[1]/td[4]";

clickCajaInversiones() {

  const localTotalAmountFormater = utilities.formatearMonto(localTotalAmount);
  helper.expectTextToContainXpath(this.montoXpath,localTotalAmountFormater);
  this.clickByXpathForce(this.montoXpath);
  this.write("Desplegable");
  this.write("Saldo Consolidado");
  helper.expectTextToContainElement(this.saldoConsolidado, localTotalAmountFormater);
  this.write("Estado/Tipo/Número");
  helper.expectTextToContainElement(this.cuentaInversion, accountNumber);
  this.write("Denominación");
  helper.expectTextToContainElement(this.denominacion, denomination);
  this.write("Relación");
  helper.expectTextToContainElement(this.relacion, relationDescription);
  this.write("Capital");
  const capitalFormater = utilities.formatearMonto(capital);
  helper.expectTextToContainElement(this.capitalInv, capitalFormater);
  this.write("Moneda");
  const currencyFormater = utilities.transformarTexto(currency);
  helper.expectTextToContainElement(this.moneda, currencyFormater);
  this.write("Saldo");
  const balanceFormater = utilities.formatearMonto(balance);
  helper.expectTextToContainElement(this.saldo, balanceFormater);
 
}

clickEnPrimeraInversion(){
  
  this. clickByElement(this.cuentaInversion);

  this.write("Cabecera");

  this.write("Cuenta");
  helper.expectTextToContainElement(this.cuentaCabecera, accountNumber);
  this.write("Denominación");
  helper.expectTextToContainXpath(this.denominacionCabecera, denomination);
  this.write("Moneda");
  const currencyFormater = utilities.transformarTexto(currency);
  helper.expectTextToContainElement(this.monedaCabecera, currencyFormater);
  this.write("Saldo");
  const balanceFormater = utilities.formatearMonto(balance);
  helper.expectTextToContainElement(this.saldoInvertido, balanceFormater);

  this.write("Solapa Info Producto");

  this.write("Datos del Producto");
  this.write("Plazo");
  const termFormater = utilities.formatearEnteroConSepador(term)
  helper.expectTextToContainElement(this.plazo, termFormater);
  this.write("Tasa de Interés");
  const interestRateFormater = utilities.agregarSignoPorcentaje(interestRate);
  helper.expectTextToContainElement(this.tasaInteres, interestRateFormater);
  this.write("Forma de Pago");
  helper.expectTextToContainElement(this.formaPago, cdaDescription);
  this.write("Crédito Automático");
  const automaticCreditFormater = utilities.transformarSioNo(automaticCredit);
  helper.expectTextToContainElement(this.creditoAutomatico, automaticCreditFormater);
  this.write("Cuenta crédito");
  helper.expectTextToContainElement(this.cuentaCredito, creditAccount);
  this.write("Beneficiario");
  const beneficiaryFormater = utilities.transformarTexto(beneficiary)
  helper.expectTextToContainElement(this.beneficiario, beneficiaryFormater);
  this.write("Número de Serie del CDA");
  helper.expectTextToContainElement(this.nroserie, serial);
  this.write("Fecha de Apertura");
  const openingDateFormater = utilities.transformarFecha(openingDate);
  helper.expectTextToContainElement(this.fechaApertura, openingDateFormater);
  this.write("Estado Actual");
  const cdaStatusdescriptionFormater = utilities.transformarTexto(cdaStatusdescription)
  helper.expectTextToContainElement(this.estadoActual, cdaStatusdescriptionFormater);
  this.write("Vencimiento");
  const expirationFormater = utilities.transformarFecha(expiration);
  helper.expectTextToContainElement(this.vencimiento, expirationFormater);
  this.write("Nombre y Apellido");
 /* const fullNameFormater = utilities.transformarTexto2(fullName)
  helper.expectTextToContainXpath(this.nombreInterviniente, fullNameFormater);*/ //La respuesta viene correcta solo que la cuarta palabra la coloca en minuscula tengo que hacer una función para que valide ok
  this.write("Relación");
  helper.expectTextToContainXpath(this.relacionInter, relation);
  this.write("Cpdigo Persona");
  helper.expectTextToContainXpath(this.codPerInter, personId);
  this.write("Fecha de Validez");
  const effectivenessDateFormater = utilities.transformarFecha(effectivenessDate);
  helper.expectTextToContainXpath(this.fechaValidez, effectivenessDateFormater);
}

  clickEnSolapaIntereses(){
  
    this. clickByElement(this.solapaIntereses);
  
    this.write("Solapa Intereses");
    this.write("Número");
    const couponNumberFormater = utilities.formatearEnteroConSepador(couponNumber)
    helper.expectTextToContainXpath(this.numeroInt, couponNumberFormater);
    this.write("Interés");
    const interestAmountFormater = utilities.formatearMonto(interestAmount);
    helper.expectTextToContainXpath(this.interes, interestAmountFormater);
    this.write("Estado");
    helper.expectTextToContainXpath(this.estadoInt, interestDescription);
    this.write("Emisión");
    const issueDateFormater = utilities.transformarFecha(issueDate);
    helper.expectTextToContainXpath(this.emisionInt, issueDateFormater);
    this.write("Vencimiento");
    const expirationIntFormater = utilities.transformarFecha(expirationInt);
    helper.expectTextToContainXpath(this.vencimientoInt, expirationIntFormater);
    this.write("Pagado el");
    const paymentDateFormater = utilities.transformarFecha(paymentDate);
    helper.expectTextToContainXpath(this.pagadoInt, paymentDateFormater);
    this.write("Bloqueo");
    helper.expectTextToContainXpath(this.bloqueo, locked);

  }  

  clickEnSolapaMovimientos(){
  
    this. clickByElement(this.solapaMovimientos);
  
    this.write("Solapa Movimientos");
    this.write("Fecha");
    const movementDateFormater = utilities.transformarFecha(movementDate);
    helper.expectTextToContainXpath(this.fecha, movementDateFormater);
    this.write("Concepto");
    helper.expectTextToContainXpath(this.concepto, concept);
    this.write("Monto");
    const amountFormater = utilities.formatearMonto(amount);
    helper.expectTextToContainXpath(this.montoMovimiento, amountFormater);
    this.write("Moneda");
    const currencyMovementFormater = utilities.transformarTexto(currencyMovement);
    helper.expectTextToContainXpath(this.monedaMovimiento, currencyMovementFormater);
    this.write("Tipo");
    const typeFormater = utilities.transformarTexto(type);
    helper.expectTextToContainXpath(this.tipoMovimiento, typeFormater);
  }  
  clickEnSolapaBloqueos(){
  
    this. clickByElement(this.solapaBloqueos);
  
    this.write("Solapa Bloqueos");
    this.write("Detalles / Datos del Producto");
    this.write("Tipo de Bloqueo");
    const lockDescripctionFormater = utilities.transformarTexto(lockDescripction);
    helper.expectTextToContainElement(this.tipoBloqueo, lockDescripctionFormater);
    this.write("Saldo Total");
    const totalBalanceFormater = utilities.formatearMoneda(totalBalance, "Gs" );
    helper.expectTextToContainElement(this.saldoTotal, totalBalanceFormater);
    this.write("Saldo Bloqueado");
    const lockedBalanceFormater = utilities.formatearMoneda(lockedBalance, "Gs" );
    helper.expectTextToContainElement(this.saldoBloqueado, lockedBalanceFormater);
    this.write("Saldo Retenido");
    const retainedBalanceFormater = utilities.formatearMoneda(retainedBalance, "Gs" );
    helper.expectTextToContainElement(this.saldoRetenido, retainedBalanceFormater);
    this.write("Saldo Disponible");
    const availableBalanceFormater = utilities.formatearMoneda(availableBalance, "Gs" );
    helper.expectTextToContainElement(this.saldoDisponible, availableBalanceFormater);
    this.write("Saldo Vencido");
    const dueInterestFormater = utilities.formatearMoneda(dueInterest, "Gs" );
    helper.expectTextToContainElement(this.saldoVencido, dueInterestFormater);
    this.write("Detalle Bloqueos");
    this.write("Documentos");//error que se le notificó al cliente. Acá se reporto un array y el campo solo trae una info. 
    this.write("Inicio");
    this.write("Fin");
    this.write("Causa Bloqueo");

      

  
  }  



 
 }



