# Frontend PetShop

Este é o frontend do sistema de gerenciamento de PetShop, desenvolvido com React.

## Funcionalidades

- Página inicial com informações sobre o petshop
- Sistema de autenticação (login/cadastro)
- Agendamento de serviços
- Painel administrativo para gerenciamento de clientes e agendamentos

## Requisitos

- Node.js (versão 14 ou superior)
- NPM ou Yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://seu-repositorio/frontend-petshop.git
cd frontend-petshop
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## Configuração

O projeto está configurado para se conectar com o backend na URL `http://localhost:8080`. 
Se necessário, você pode alterar esta configuração no arquivo `src/services/auth.js`.

## Executando o Projeto

1. Inicie o servidor de desenvolvimento:
```bash
npm start
# ou
yarn start
```

2. Acesse o projeto em `http://localhost:3000`

## Estrutura do Projeto

- `/src/components`: Componentes reutilizáveis
- `/src/pages`: Páginas da aplicação
- `/src/services`: Serviços e configurações de API

## Tecnologias Utilizadas

- React
- React Router DOM
- Bootstrap
- JWT para autenticação 