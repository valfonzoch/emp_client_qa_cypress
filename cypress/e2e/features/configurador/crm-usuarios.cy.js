import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataConfig from "../../../fixtures/dataConfig.json";
import { Usuarios } from "../../Pages/configurador/usuariosPage";

let usuarios = new Usuarios();
let login = new Login();
let helper = new Assertions();
const  min = 16;
const max = 999;
const aleatorio = Math.floor(Math.random()*(max-min+1)+min);
const correo =  `${dataConfig.usuarios.email}${aleatorio}${dataConfig.usuarios.emailComp}`;
const nroDoc =  `${dataConfig.usuarios.nroDocumento}${aleatorio}`;
const nombreUsuario = `${dataConfig.usuarios.nombreUsuario}${aleatorio}`;


describe("Usuarios CRM ", () => {
  before(() => {
    login.loginbanco();
  });

  it("Usuarios CRM Alta, Modificación y Baja", () => {

  usuarios.clickEnSolapaConf();
  usuarios.clickEnListadoUsuarios();
  usuarios.clickEnBotonNvoUsuario();
  usuarios.escribirNombre(dataConfig.usuarios.nombre);
  usuarios.escribirApellido(dataConfig.usuarios.apellido);
  usuarios.escribirNombreUsuario(nombreUsuario);
  usuarios.clickEnDesplegableTipoDoc();
  usuarios.clickEnCedulaTipoDoc();
  usuarios.escribirNumeroDoc(nroDoc);
  usuarios.escribirEmail(correo);
  usuarios.clickEnDespTipoUsuario();
  usuarios.seleccionTipoUsuario();
  usuarios.clickEnDespAreaNegocio();
  usuarios.seleccionAreaNegocio();
  usuarios.clickEnBotonGuardarNvoUsuario();
  usuarios.escribirEnBuscadorNombreUsuario(dataConfig.usuarios.nombreUsuario);
  usuarios.clickEnIconoEdicion();
  usuarios.eidicionNombreUsuario(dataConfig.usuarios.edicion);
  usuarios.clickEnBotonGuardarNvoUsuario();
  usuarios.escribirEnBuscadorNombreUsuario(dataConfig.usuarios.nombreUsuario);
  usuarios.clickEnIconoBasura();
  usuarios.clickConfirmarDesactivacion();
  login.logout();
  }) 
});