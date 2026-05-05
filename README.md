# Automação de UI

Framework de automação de testes para interface de usuário utilizando Cypress como base para validação de cenários críticos em aplicações web.

## 📋 Sobre o Projeto

Este repositório contém a implementação de testes automatizados para UI com foco em qualidade e cobertura de funcionalidades. O projeto é estruturado para facilitar manutenção, escalabilidade e execução em ambientes de CI/CD.

## 🛠️ Tecnologias

- **Cypress** ^13.17.0 - Framework principal de automação
- **Faker.js** ^8.3.1 - Geração de dados aleatórios para testes
- **Node.js** - Runtime JavaScript

## 📦 Dependências

O projeto utiliza as seguintes dependências principais:

```
@faker-js/faker: ^8.3.1
cypress: ^13.17.0
```

## ⚙️ Instalação

### Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- npm ou yarn como gerenciador de pacotes

### Setup

1. Clone o repositório:
```bash
git clone https://github.com/Pedro001979/ATD-MOD22-Automacao-de-UI.git
cd ATD-MOD22-Automacao-de-UI
```

2. Navegue para o diretório do projeto:
```bash
cd Teste-Ebac-UI-main
```

3. Instale as dependências:
```bash
npm install
```

## 🚀 Executando os Testes

### Modo Interativo

Para abrir a interface do Cypress e executar testes interativamente:

```bash
npm run cypress:open
```

### Modo CLI

Para executar todos os testes em headless mode:

```bash
npm run test
```

## 📁 Estrutura do Projeto

```
Teste-Ebac-UI-main/
├── cypress/
│   ├── e2e/              # Testes end-to-end
│   ├── fixtures/         # Dados de teste
│   ├── support/          # Utilitários e configurações
│   └── ...
├── package.json
└── cypress.config.js
```

## 🧪 Abordagem de Testes

O projeto segue as melhores práticas de automação de UI:

- **Testes descritivos**: Cada teste possui títulos claros e estrutura legível
- **Dados dinâmicos**: Utilização do Faker.js para geração de dados realistas
- **Reutilização de código**: Support files e helpers compartilhados entre testes
- **Manutenibilidade**: Seletores organizados e funções auxiliares bem definidas

## 💡 Como Contribuir

1. Crie uma branch para sua feature (`git checkout -b feature/sua-funcionalidade`)
2. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
3. Push para a branch (`git push origin feature/sua-funcionalidade`)
4. Abra um Pull Request

## 📝 Notas

- Certifique-se de que todos os testes passam antes de fazer push
- Mantenha a consistência de nomenclatura e estrutura
- Adicione novos testes para funcionalidades novas ou correções de bugs

## 📄 Licença

ISC

## 👨‍💻 Autor

Pedro001979

---

**Última atualização**: 05/05/2026
