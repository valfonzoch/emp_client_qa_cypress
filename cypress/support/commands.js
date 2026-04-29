//comando para iniciar sesión en ejem con cualquier usuario
Cypress.Commands.add('logIn', (usuario, contrasena)=>{
    cy.get("#signin_input_username").clear().type(usuario);
    cy.get("#signin_input_password").clear().type(contrasena, { log: false });
    cy.get("#sign_in_button").click();
});

Cypress.Commands.add('changeWindowLocation', (url) => {
    cy.window().then((win) => {
        win.location.href = url;
    });
});

    

    