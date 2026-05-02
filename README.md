# API REST com Node.js e TypeScript

API REST desenvolvida com Node.js, Express e TypeScript, aplicando boas práticas de organização de código com separação em rotas, controllers e middlewares. Validação de dados com Zod.

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/) — validação de schema
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

Validações (via Zod):
- `name` é obrigatório e deve ter pelo menos 6 caracteres
- `price` é obrigatório e deve ser maior que zero

## Tratamento de Erros

| Tipo           | Status | Descrição                              |
|----------------|--------|----------------------------------------|
| `AppError`     | variável | Erros esperados (ex: regras de negócio) |
| `ZodError`     | 400    | Falha na validação do corpo da requisição |
| Outros         | 500    | Erro interno do servidor               |

## Autor

Kassiane
