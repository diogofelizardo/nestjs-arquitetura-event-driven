## README para GitHub

# NestJS Event-Driven Architecture

## Descrição

Este projeto demonstra a implementação de uma arquitetura orientada a eventos utilizando NestJS. A aplicação permite a criação e listagem de usuários, emitindo eventos quando um novo usuário é criado para acionar ações adicionais, como o envio de emails de boas-vindas.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js (v14 ou superior)
- npm

### Passos

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nestjs-event-driven.git
   ```

2. **Acesse o diretório do projeto:**

   ```bash
   cd nestjs-event-driven
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie a aplicação:**

   ```bash
   npm run start
   ```

5. **Acesse a API:**
   
   - Crie um usuário: `POST http://localhost:3000/users`
   - Liste os usuários: `GET http://localhost:3000/users`

## Principais Comandos

- **Iniciar o servidor em modo de desenvolvimento:**

  ```bash
  npm run start:dev
  ```

- **Executar testes:**

  ```bash
  npm run test
  ```

- **Construir o projeto para produção:**

  ```bash
  npm run build
  ```