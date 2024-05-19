# Backend utilizando Node.js TypeScript com Bancos de Dados no JSON Server

Este projeto consiste em um backend desenvolvido em Node.js com TypeScript e utiliza o JSON Server como banco de dados. Ele oferece as seguintes funcionalidades:

- Leitura de uma API de CEP para obter os dados do endereço correspondente ao CEP inserido.
- Verificação de palíndromos, indicando se um número é ou não palíndromo.
- Disponibiliza um endpoint para cadastro de veículos.
- Retorno de troco de valor inserido

## Funcionalidades

1. **Leitura de API de CEP:**
   - A aplicação efetua a leitura de uma API de CEP para obter os dados do endereço correspondente ao CEP inserido.

2. **Verificação de Palíndromos:**
   - A aplicação verifica se um número é ou não palíndromo e fornece essa informação.

3. **Endpoint para Cadastro de Veículos:**
   - Disponibiliza um endpoint para cadastro de veículos, permitindo a integração com o frontend.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- JSON Server

## Como Usar

1. Clone o repositório do projeto.

2. Instale as dependências do projeto utilizando npm ou yarn:

3. Inicie o servidor JSON Server para simular o banco de dados:

4. Inicie o servidor do backend:

## Documentação de Endpoints

### API de CEP

- **GET /verificaCep**
- Retorna os dados do endereço correspondente ao CEP fornecido.

### Verificação de Troco
- POST /compras**
- Efetua o cadastro das compras e retorna o valor do troco

### Verificação de Palíndromos

- **POST /palindromo**
- Corpo da Requisição: {"number": "12321"}
- Retorna se o número fornecido é palíndromo ou não.

### Cadastro de Veículos

- **POST /veiculos**
- Corpo da Requisição: {"brand": "Ford", "model": "Focus", "year": 2020}
- Cadastra um novo veículo no banco de dados.

## Frontend

No frontend, é realizada a comunicação com o backend para renderizar as funcionalidades mencionadas acima.


