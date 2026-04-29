import Page from "../helper/page";

require("cypress-xpath");

export class Carteras extends Page {

    solapaCartera = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/header[1]/div[1]/div[2]/div[1]/button[4]/span[1]";
    btnAgregarCart = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[4]/div[1]/p[1]/div[1]/div[1]/div[1]/div[1]/div[3]/button[2]/span[1]";
    nombreCartId = "#filled-basic";
    btnContNombre = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[2]/div[1]/div[1]/div[1]/div[2]/button[2]/span[1]";
    desplegNacionalidad = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[13]/div[1]/div[1]/div[2]/span[1]/*[1]";
    checkAlbania = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[13]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/label[1]/span[1]/span[1]/input[1]";
    btnContClientes = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[4]/button[2]";
    nombreRolId = "#outlined-user";
    seleccionRol = "(//div[contains(@class, 'MuiListItem-root')])[1]";
    btnContRol = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[2]/div[1]/div[1]/div[2]/button[2]/span[1]";
    btnConfirmarCart = "//span[contains(text(),'Ok')]";
    buscadorCart = "//button[@id='searcher-portfolio']";
    inputBuscadorCart = "//input[@id='searcher-portfolio']";
    tresPuntos = "//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[4]/div[1]/p[1]/div[1]/div[1]/div[1]/div[2]/ul[1]/li[1]/div[1]/div[2]/button[1]/span[1]/*[1]";
    deshabilitar = "//body/div[3]/div[3]/div[1]/div[4]/button[1]/span[1]";
    descarterizar = "//body/div[4]/div[3]/div[1]/label[2]/span[1]/span[1]/input[1]";
    confirmarDescarte = "//body/div[4]/div[3]/div[2]/button[2]/span[1]";
    cantClientesId = "#totalCustomersInPortfolio";

    ultimaCartera = "";

    generarNombreCartera(email) {
      const min = 16;
      const max = 999999;
      const aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
      this.ultimaCartera = `${email}${aleatorio}`;
  
      // Aquí guardo el nombre de la cartera generada para despues buscarla e interactuar con ella. 
      cy.wrap(this.ultimaCartera).as("ultimaCartera");
    }

      clickEnSolapaCartera(){
        this.clickByXpathForce(this.solapaCartera);
      };

      clickEnAgregarCartera(){
        this.clickByXpathForce(this.btnAgregarCart);
      };

      escribirNombreCartera(){
        this.sendKeyByElement(this.nombreCartId, this.ultimaCartera);
      };

      clickEnContinuarNombre(){
        this.clickByXpathForce(this.btnContNombre);
      };

      clickEnDesplegableNacionalidad(){
        this.clickByXpathForce(this.desplegNacionalidad);
      };

      checkNacionalidadAlbania(){
        this.clickByXpathForce(this.checkAlbania);
      };

      clickEnContinuarClientes(){
        this.dblclickByXpathForce(this.btnContClientes);
      };

      escribirNombreRol(rol){
        this.sendKeyByElement(this.nombreRolId, rol);
      };

      seleccionDeRol(){
        const roleEmail = Cypress.env("CONFIGURADOR_ROL_EMAIL");
        const roleSelector = roleEmail
          ? `//div[contains(@class, 'MuiListItem-root') and .//p[contains(text(), '${roleEmail}')]]`
          : this.seleccionRol;
        this.clickByXpathForce(roleSelector);
      };

      clickEnContinuarRol(){
        this.dblclickByXpathForce(this.btnContRol);
      };

      clickEnConfirmarCreacion(){
        this.dblclickByXpathForce(this.btnConfirmarCart);
      };

      clickEnBuscadorCart(){
        this.dblclickByXpathForce(this.buscadorCart);
      };

      buscarCartera() {
        cy.wrap(this.ultimaCartera).then((cartera) => {
          this.typeByXpath(this.inputBuscadorCart, cartera);
        });
      }
    
      seleccionarCartera() {
        cy.wrap(this.ultimaCartera).then((cartera) => {
          cy.contains(cartera).click(); 
        });
      }

      clickEnPuntosDeEdicion(){
        this.clickByXpathForce(this.tresPuntos);
      };

      clickEnDeshabilitarCartera(){
        this.clickByXpathForce(this.deshabilitar);
      };

      clickEnDescarterizar(){
        this.clickByXpathForce(this.descarterizar);
      };

      clickEnConfirmarDescarterizar(){
        this.clickByXpathForce(this.confirmarDescarte);
      };

      clickEnDeshabilitarOCofirmar() {
        cy.get(this.cantClientesId).invoke('text').then((text) => {
          const numero = parseInt(text.trim(), 10);
          if (numero > 0) {
            this.clickByXpathForce(this.deshabilitar);
            this.clickByXpathForce(this.descarterizar);
            cy.xpath(this.confirmarDescarte).should("be.visible");
            this.clickByXpathForce(this.confirmarDescarte);
          } else {
            this.clickByXpathForce(this.confirmarDescarte);
          }
        });
      }
      
    }