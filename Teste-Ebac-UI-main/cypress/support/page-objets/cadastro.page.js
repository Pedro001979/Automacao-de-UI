import { faker } from '@faker-js/faker';
class CadastroPage {


    visitarCadastro() {
        cy.visit('minha-conta')
    }

    preencherCadastro(email, password, firstName, lastName) {
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(password)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(firstName)
        cy.get('#account_last_name').type(lastName)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('exist')
    }

    preencherCadastroVariaveis(email, password, firstName, lastName) {
        var firstName = faker.person.firstName()
        var lastName = faker.person.lastName()
        var email = faker.internet.email(firstName, lastName)
        var password = faker.internet.password()


        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(password)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(firstName)
        cy.get('#account_last_name').type(lastName)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('exist')
    }

    preencherCadastroCustom() {
        cy.preCadastro(faker.internet.email(), faker.internet.password(), faker.person.firstName(), faker.person.lastName())
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    }
}


export default new CadastroPage()