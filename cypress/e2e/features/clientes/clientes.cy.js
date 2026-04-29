import { Clientes } from "../../Pages/clientes/clientesPage";
import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataClientes from "../../../fixtures/dataClientes.json";

let login = new Login();
let clientes = new Clientes();
let helper = new Assertions();

describe('Clientes - Filtros', () => {

    before(() => {
        login.loginbanco();
      });
   
    it('Clientes - Filtros Sin Grupo ', () => {
        clientes.clickEnSolapaClientes();
        clientes.clickEnDesplegableClienteAct();
        clientes.clickEnSiClienteAct();
        helper.expectContainTextByTwoElements (clientes.tolSiClienteActXpath, clientes.clientesFilXpath);
        clientes.clickEnNoClienteAct();
        helper.expectContainTextByTwoElements (clientes.tolNoClienteActXpath, clientes.clientesFilXpath);
        clientes.clickEnNiClienteAct(); //Bug 107678
        helper.expectContainTextByTwoElements (clientes.tolNiClienteActXpath, clientes.clientesFilXpath);
        clientes.clickEnLimpiarClienteAct();
        clientes.clickEnDesplegableTipoCliente();
        clientes.clickEnTipoCliFisico();
        helper.expectContainTextByTwoElements (clientes.tolfisicaXpath, clientes.clientesFilXpath);
        clientes.clickEnDesplegableDatosCliente();
        clientes.clickEnDesplegableIngresos();
        clientes.escribirMontoDesdeIngresos(dataClientes.filtros.desdeIngresos);
        clientes.escribirMontoHastaIngresos(dataClientes.filtros.hastaIngresos);
        clientes.clickEnAplicarIngresos();
        
    });
})