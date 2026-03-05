///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPage from "../../support/page-objets/cadastro.page";

describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
        cadastroPage.visitarCadastro()
    });

    it('Deve completar o cadastro com sucesso', () => {
        const email = faker.internet.email()
        const password = faker.internet.password()
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()

        cadastroPage.preencherCadastro(email, password, firstName, lastName)
        cy.get('.woocommerce-MyAccount-content').should('be.visible')
    });


    it('Deve completar o cadastro com sucesso - Usando Variaveis', () => {
        var email = faker.internet.email()
        var password = faker.internet.password()
        var firstName = faker.person.firstName()
        var lastName = faker.person.lastName()


        cadastroPage.preencherCadastroVariaveis(email, password, firstName, lastName)
        cy.get('.woocommerce-MyAccount-content').should('be.visible')


    });

    it('Deve completar o cadastro com sucesso - usando comandos customizados', () => {

        cadastroPage.preencherCadastroCustom()
        cy.get('.woocommerce-MyAccount-content').should('be.visible')
    })



});














































// describe('Fucionalidade: Cadastro', () => {
//     beforeEach(() => {
//         cy.visit('minha-conta')
//     });

//     it('Deve completar o cadastro com sucesso', () => {
//         // cy.get('#reg_email').type(faker.internet.email())
//         // cy.get('#reg_password').type(faker.internet.password())
//         // cy.get(':nth-child(4) > .button').click()

//         // cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

//         // cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

//         // cy.get('#account_first_name').type(faker.person.firstName())
//         // cy.get('#account_last_name').type(faker.person.lastName())
//         // cy.get('.woocommerce-Button').click()

//         // cy.get('.woocommerce-message').should('exist')
//     });

//     it('Deve completar o cadastro com sucesso - Usando Variaveis', () => {
//         var firstName = faker.person.firstName()
//         var lastName = faker.person.lastName()
//         var email = faker.internet.email(firstName, lastName)
//         var password = faker.internet.password()


//         cy.get('#reg_email').type(email)
//         cy.get('#reg_password').type(password)
//         cy.get(':nth-child(4) > .button').click()

//         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

//         cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

//         cy.get('#account_first_name').type(firstName)
//         cy.get('#account_last_name').type(lastName)
//         cy.get('.woocommerce-Button').click()

//         cy.get('.woocommerce-message').should('exist')
//     });

//     it('Deve completar o cadastro com sucesso - usando comandos customizados', () => {
//         cy.preCadastro(faker.internet.email(), faker.internet.password(), faker.person.firstName(), faker.person.lastName())
//         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

//     });
// });