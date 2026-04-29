import Page from "../../Pages/helper/page";

export class Login extends Page {
 
    usernameId= "#signin_input_username";
    passwordId= "#signin_input_password";
    loginButtonId= "#sign_in_button";
    errorMessage='.signIn__signInErrors___2ouyk';
    usernameCampaings= "//input[@type='text']";
    passwordCampaings= "//input[@type='password']";
    loginCampaingsButton= "//div[3]//div[1]";
    user = Cypress.env("LOGIN_USER_banco");
    user3 = Cypress.env("LOGIN_USER_CAMPAIGNS");
    botonSalirid = "#user_avatar";
    botonCerrarSessionXpath = "//span[contains(text(),'Cerrar Sesión')]";
    pass = Cypress.env("LOGIN_PASSWORD_banco");
    pass3 = Cypress.env("LOGIN_PASSWORD_CAMPAIGNS");
    url  = Cypress.config().baseUrl;
    campaings = Cypress.config().baseUrlCampaing;

    loginbanco() {
       
       // this.clearAll();
        this.visitUrl(this.url); 
        this.type(this.usernameId, this.user);
        this.type(this.passwordId, this.pass);
        this.clickByElement(this.loginButtonId);
    };

    loginCampañas() {
       
        // this.clearAll();
         this.visitUrl(this.campaings); 
         this.typeByXpath(this.usernameCampaings, this.user3);
         this.typeByXpath(this.passwordCampaings, this.pass3);
         this.clickByXpathForce(this.loginCampaingsButton);
     };

    logout() {
        this.clickByElement(this.botonSalirid); 
        this.clickByXpathForce(this.botonCerrarSessionXpath);
      }
}