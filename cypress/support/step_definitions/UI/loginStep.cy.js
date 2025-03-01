import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";



Given(/^que o usuário está na página de login$/, () => {
	cy.visit("/")
});




When(/^o usuário preenche o campo email com "([^"]*)"$/, (email) => {
	cy.Email(email)
});



When(/^o usuário preenche o campo senha com "([^"]*)"$/, (senha) => {
	cy.Senha(senha)
});


When(/^o usuário clica no botão de login$/, () => {
	cy.Logar()
});


Then(/^o sistema deve exibir a mensagem "([^"]*)"$/, (mensagem) => {
	cy.contains(mensagem).should('be.visible')
});
