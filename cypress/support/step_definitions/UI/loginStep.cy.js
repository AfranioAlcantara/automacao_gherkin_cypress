import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";


Given(/^que o usuario acesse a paginda de login$/, () => {
	cy.visit("/")
});


When(/^preencher os campos de login e clicar em logar$/, () => {
	cy.logar(Cypress.env('email'), Cypress.env('password'))
});


Then(/^devera ser logado com sucesso$/, () => {
	cy.contains(Cypress.env('name'))
});
