import { Login } from "../../Pages/loginPage/loginPage";
import { Assertions } from "../../Pages/helper/assertions";
import dataConfig from "../../../fixtures/dataConfig.json";
import { Usuarios } from "../../Pages/configurador/usuariosPage";
import { Carteras } from "../../Pages/configurador/carterasPage";


let usuarios = new Usuarios();
let cartera = new Carteras();
let login = new Login();
let helper = new Assertions();


describe("Carteras CRM ", () => {
  before(() => {
    login.loginbanco();
  });

  it("Carteras CRM Alta, Modificación y Desactivación", () => {

  usuarios.clickEnSolapaConf();
  usuarios.clickEnListadoUsuarios();
  cartera.clickEnSolapaCartera();
  cartera.clickEnAgregarCartera();
  cartera.generarNombreCartera(dataConfig.usuarios.email); 
  cartera.escribirNombreCartera();
  cartera.clickEnContinuarNombre();
  cartera.clickEnDesplegableNacionalidad();
  cartera.checkNacionalidadAlbania();
  cartera.clickEnContinuarClientes();
  cartera.escribirNombreRol(dataConfig.cartera.rol);
  cartera.seleccionDeRol();
  cartera.clickEnContinuarRol();
  cartera.clickEnConfirmarCreacion();
  cartera.clickEnBuscadorCart();
  cartera.buscarCartera();
  cartera.seleccionarCartera();
  cartera.clickEnPuntosDeEdicion();
  cartera.clickEnDeshabilitarOCofirmar();
  login.logout();
  }) 
 
});