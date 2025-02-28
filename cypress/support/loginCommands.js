import {loginPage} from "./pages/loginPage";

const login = new loginPage();

Cypress.Commands.add('logar', (email, password) => { 
    login.fillEmail(email);
    login.fillSenha(password);
    login.submit();
    
 })