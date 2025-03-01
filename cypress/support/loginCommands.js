import {loginPage} from "./pages/loginPage";

const login = new loginPage();

Cypress.Commands.add('Email', (email,) => { 
    login.fillEmail(email); 
 });
 
Cypress.Commands.add('Senha', (password) => { 
    login.fillSenha(password);    
 });


 Cypress.Commands.add('Logar', () => { 
    login.submit();    
 });