# API REST com Node.js e TypeScript

API REST desenvolvida com Node.js, Express e TypeScript, aplicando boas práticas de organização de código com separação em rotas, controllers e middlewares.

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [tsx](https://github.com/privatenumber/tsx)

## Estrutura do Projeto

```
src/
├── controllers/
│   └── products-controller.ts  # Lógica das rotas de produtos
├── middlewares/
│   └── my-middlewares.ts        # Middlewares customizados
├── routes/
│   ├── index.ts                 # Agrupamento de rotas
│   └── products-routes.ts       # Rotas de produtos
├── types/
│   └── request.d.ts             # Tipagens customizadas do Express
├── utils/
│   └── app-error.ts             # Classe de erro customizado
└── server.ts                    # Entrada da aplicação
```

## Pré-requisitos

- Node.js >= 18
- npm

## Instalação

```bash
npm install
```

## Executar em desenvolvimento

```bash
npm run dev
```

O servidor iniciará na porta `3333`.

## Endpoints

### Produtos

| Método | Rota        | Descrição               |
|--------|-------------|-------------------------|
| GET    | /products   | Lista produtos paginados |
| POST   | /products   | Cria um novo produto     |

### GET /products

Parâmetros de query:

| Parâmetro | Tipo   | Descrição          |
|-----------|--------|--------------------|
| page      | number | Número da página   |
| limit     | number | Itens por página   |

### POST /products

Corpo da requisição (JSON):

```json
{
  "name": "Nome do produto",
  "price": 99.90
}
```

Validações:
- `name` é obrigatório e deve ter pelo menos 6 caracteres
- `price` é obrigatório e deve ser maior que zero

## Tratamento de Erros

A aplicação utiliza a classe `AppError` para erros esperados (ex: validações), retornando o status HTTP adequado. Erros inesperados retornam status `500`.

## Autor

Kassiane
