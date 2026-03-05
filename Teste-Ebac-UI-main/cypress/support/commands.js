Cypress.Commands.add('login', (Usuario, Senha) => {
   cy.get('#username').type(Usuario)
   cy.get('#password').type(Senha)
   cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('preCadastro', (email, password, firstName, lastName) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(password)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(firstName)
    cy.get('#account_last_name').type(lastName)
    cy.get('.woocommerce-Button').click()
})

Cypress.Commands.add('detalhesConta', (firstName, lastName, Usuario) => {
    cy.get('#account_first_name').clear().type(firstName)
    cy.get('#account_last_name').clear().type(lastName)
    cy.get('#account_display_name').clear().type(Usuario)
    cy.get('.woocommerce-Button').click()
})



Cypress.Commands.add('adicionarProdutos', (tamanho, cor, quantidade) => {
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    
    // Como é checkout, vamos dar o próximo passo: ir para o carrinho
    cy.get('.woocommerce-message > .button').click() 
    cy.get('.checkout-button').click() 
})

Cypress.Commands.add('preencherCheckout', (nome, sobrenome, endereco, cidade, cep, telefone, email) => {
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobrenome)
    cy.get('#billing_address_1').type(endereco)
    cy.get('#billing_city').type(cidade)
    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(telefone)
    cy.get('#billing_email').type(email)
    cy.get('#terms').click({force: true})
    cy.get('#place_order').click()
})