import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataConfig from "../../../fixtures/dataConfig.json";
import { Usuarios } from "../../Pages/configurador/usuariosPage";
import { Jeraraquia } from "../../Pages/configurador/jerarquiaPage";

let usuarios = new Usuarios();
let jerarquia = new Jeraraquia();
let login = new Login();
let helper = new Assertions();

describe("Jeraraquía CRM ", () => {
  before(() => {
    login.loginbanco();
  });

  it("Jeraraquía CRM Alta, Modificación y Baja", () => {

  usuarios.clickEnSolapaConf();
  usuarios.clickEnListadoUsuarios();
  jerarquia.clickEnSolapaJerarquia();
  jerarquia.clickEnAgregarDepartamento();
  jerarquia.clickEnConfirmarNvoDepartamento();
  jerarquia.escribirNombreDepartamento(dataConfig.usuarios.email);
  jerarquia.escribirTipoDepartamento(dataConfig.usuarios.tipoUusario);
  jerarquia.clickEnIncluirGeografia();
  jerarquia.clickEnCheckSucursal();
  jerarquia.escribirDireccionSucursal(dataConfig.jerarquia.direccion);
  jerarquia.seleccionarSucursal();
  jerarquia.clickEnAgregarUsuario();
  jerarquia.seleccionarUsuario();
  jerarquia.salirDelModal(dataConfig.jerarquia.escape);
  jerarquia.clickEnGuardarDepartamento();
  jerarquia.clickEnBotonDetalle();
  jerarquia.clickEnEditarDepartamento();
  jerarquia.clickEnCheckIncluirGeograf();
  jerarquia.dobleClickEnGuardarCambios();
  jerarquia.clickEnBotConfirmarEdicion();
  jerarquia.clickEnBotonDetalle();
  jerarquia.clickEnEliminarDepa();
  jerarquia.clickEnConfirmarEliminacion();
  login.logout();
  }) 
});