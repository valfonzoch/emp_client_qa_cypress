import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataConfig from "../../../fixtures/dataConfig.json";
import { Usuarios } from "../../Pages/configurador/usuariosPage";
import { Roles } from "../../Pages/configurador/rolesPage";

let usuarios = new Usuarios();
let roles = new Roles();
let login = new Login();
let helper = new Assertions();

describe("Roles CRM ", () => {
  before(() => {
    login.loginbanco();
  });

  it("Roles CRM Alta, Modificación y Baja", () => {

  usuarios.clickEnSolapaConf();
  usuarios.clickEnListadoUsuarios();
  roles.clickEnSolapaRoles();
  roles.clickEnNuevoRol();
  roles.escribirNombreRol(dataConfig.usuarios.nombreUsuario);
  roles.clickEnAgregarPermiso();
  roles.clickEnGuardarRol();
  roles.buscarRol(dataConfig.usuarios.nombreUsuario);
  roles.enviarEnter();
  roles.clickEnEdición();
  roles.clickEnQuitarPermisos();
  roles.clickEnGuardarRol();
  roles.buscarRol(dataConfig.usuarios.nombreUsuario);
  roles.clickEnEliminarRol();
  roles.clickEnConfirmarEliminarRol();
  login.logout();
  }) 
 
});