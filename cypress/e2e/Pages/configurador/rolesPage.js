import Page from "../helper/page";

require("cypress-xpath");

export class Roles extends Page {

    solapaRoles = "//header/div[1]/div[2]/div[1]/button[2]/span[1]";
    botonNvoRol = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/p[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/a[1]/div[1]/button[1]";
    inputNombreRol = "//input[@id='roleName']";
    botonAgregarPermisos = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[1]/button[1]";
    botonGuardarRol = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/button[1]";
    botonQuitarPermisos = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[2]/button[1]";
    busquedaRol = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/input[1]";
    iconoLapizRol = "//tbody/tr[1]/td[3]/div[1]/a[1]/button[1]";
    iconoBasuraRolId = ".listings__actionsContainer___1F-s7 > :nth-child(2)";
    botonConfirmarBorrado = "//button[contains(text(),'Borrar')]";

      clickEnSolapaRoles (){
        this.clickByXpathForce(this.solapaRoles);
      };

      clickEnNuevoRol (){
        this.clickByXpathForce(this.botonNvoRol);
      };

      escribirNombreRol(nombreRol) {
        this.typeByXpath(this.inputNombreRol, nombreRol);
      };

      clickEnAgregarPermiso (){
        this.clickByXpathForce(this.botonAgregarPermisos);
      };

      clickEnGuardarRol (){
        this.clickByXpathForce(this.botonGuardarRol);
      };

      buscarRol(nombreRol) {
        this.typeByXpath(this.busquedaRol, nombreRol);
      };

      enviarEnter(){
        this.sendEnterForXpath(this.busquedaRol)
      }

      clickEnEdición (){
        this.clickByXpathForce(this.iconoLapizRol);
      };

      clickEnQuitarPermisos (){
        this.clickByXpathForce(this.botonQuitarPermisos);
      };

      clickEnEliminarRol(){
        this.clickByElement(this.iconoBasuraRolId);
      };

      clickEnConfirmarEliminarRol (){
        this.clickByXpathForce(this.botonConfirmarBorrado);
      };
}