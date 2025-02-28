

export class loginPage {
    elements = {

        nameInput: () =>  cy.get('#nome'),
        emailInput: () =>  cy.get('#email'),
        senhaImput: () =>  cy.get('#senha'),
        cadastrarButton: () =>  cy.get('.btn')

    };

    fillName(name){
        this.elements.nameInput().type(name)
    }
    fillEmail(email){
        this.elements.emailInput().type(email)
    }
    fillSenha(password){
        this.elements.senhaImput().type(password)
    }
    submit(){
        this.elements.cadastrarButton().click()
    }
}