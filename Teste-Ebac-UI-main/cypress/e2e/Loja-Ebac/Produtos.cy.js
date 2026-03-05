/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Fluxo de Checkout - AppActions', () => {
    
    beforeEach(() => {
        // Visita o produto que você confirmou que funciona
        cy.visit('produtos/argus-all-weather-tank/') 
    });

    it('Deve completar o checkout com sucesso usando AppActions', () => {
        // 1. Adiciona ao carrinho (já configurado para 'Gray')
        cy.adicionarProdutos('M', 'Gray', 2)

        const telefoneFaker = faker.helpers.replaceSymbolWithNumber('(##) 9####-####')

        // 2. Preenche os dados de faturamento usando o comando que você criou
        // Passamos os dados na ordem definida no seu commands.js
        cy.preencherCheckout(
            faker.person.firstName(),    // nome
            faker.person.lastName(),     // sobrenome
            faker.location.streetAddress(), // endereco
            faker.location.city(),       // cidade
            '01001-000',                 // cep (exemplo fixo para evitar erro de máscara)
            telefoneFaker,               // telefone
            faker.internet.email()       // email
        )
        cy.wait(5000) // Espera um pouco para garantir que o pedido seja processado

        // 3. Validação final do pedido recebido
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
});














// import produtosPage from "../../support/page-objets/produtos.page";

// describe('Fucionalidade: Produtos', () => {


//     beforeEach(() => {
//         produtosPage.visitarUrl()
//     });


//     it('Deve Selecionar um Produto da Lista', () => {
//         produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
//         cy.get('#tab-title-description > a').should('contain', 'Descrição')
//     });

//     it('Deve buscar um produto com sucesso', () => {
//         let produto = 'Argus All-Weather Tank'
//         produtosPage.buscarProduto(produto)
//         cy.get('.product_title').should('contain' , produto)
//     });

//     it('Deve visitar a página de um produto', () => {
//         produtosPage.visitarProduto('Argus All Weather Tank')
//          cy.get('.product_title').should('contain' , 'Argus All-Weather Tank')
//     });

//     it('Deve adicionar produto ao carrinho', () => {
//         let qtd = 7
//         produtosPage.buscarProduto('Aether Gym Pant')
//         produtosPage.addProdutoCarrinho(33 , 'Blue' , qtd)

//         cy.get('.woocommerce-message').should('exist')
//     });

//      it('Deve adicionar produto ao carrinho - buscando na massa de dados', () => {
//        cy.fixture('produtos').then(dados => {
//             produtosPage.buscarProduto(dados[2].nomeProduto)
//             produtosPage.addProdutoCarrinho(
//                  dados[2].tamanho ,
//                  dados[2].cor , 
//                  dados[2].quantidade)
//             cy.get('.woocommerce-message').should('contain' , dados[2].nomeProduto)
//         });
//     });
// });