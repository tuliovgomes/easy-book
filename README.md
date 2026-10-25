# Easy Book

Sistema de cadastro de **Livros**, **Autores** e **Assuntos**, com autenticação de usuários e um relatório de livros agrupados por autor (gerado a partir de uma VIEW no banco de dados).

> O histórico das atividades desenvolvidas está em [doc.md](doc.md).

---

## Stack utilizada

### Backend
| Tecnologia | Versão | Uso |
|---|---|---|
| PHP | 8.4 (mínimo 8.3) | Linguagem do backend |
| Laravel | 13 | Framework web (rotas, controllers, Eloquent, migrations) |
| Laravel Fortify | 1.x | Autenticação (login, registro, 2FA, passkeys) |
| Inertia.js (Laravel) | 3 | Ponte entre o Laravel e o frontend Vue, sem API separada |
| Laravel Wayfinder | 0.1 | Gera funções TypeScript tipadas para as rotas/controllers |
| MySQL | 8.4 | Banco de dados (via Docker) |
| PHPUnit | 12 | Testes automatizados |
| Pint / Larastan (PHPStan) | — | Padronização de código e análise estática |

### Frontend
| Tecnologia | Versão | Uso |
|---|---|---|
| Vue | 3 | Framework das telas |
| TypeScript | 5 | Tipagem do código frontend |
| Vite (Vite+) | — | Build e servidor de desenvolvimento com hot reload |
| Tailwind CSS | 4 | Estilização |
| reka-ui / shadcn-vue | — | Componentes de interface |
| Lucide | — | Ícones |
| SweetAlert2 / vue-sonner | — | Confirmações e notificações |

### Infraestrutura
| Serviço (docker-compose) | Imagem | Porta no host |
|---|---|---|
| `app` | PHP 8.4 + Apache (Dockerfile) | `8000` |
| `mysql` | mysql:8.4 | `3307` |
| `node` | node:22-alpine (Vite dev server) | `5173` |

---

## Pré-requisitos

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) e Docker Compose

> Para rodar **sem Docker**, veja a seção [Rodando sem Docker](#rodando-sem-docker).

---

## Passo a passo (com Docker)

### 1. Clonar o repositório

```bash
git clone git@github.com:tuliovgomes/easy-book.git
# ou via HTTPS:
# git clone https://github.com/tuliovgomes/easy-book.git

cd easy-book
```

### 2. Criar o arquivo `.env`

```bash
cp .env.example .env
```

Edite o `.env` e configure a conexão com o MySQL do Docker (substituindo a linha `DB_CONNECTION=sqlite` e as linhas `DB_*` comentadas):

```dotenv
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=laravel123
```

> `DB_HOST=mysql` é o nome do serviço dentro da rede do Docker. Para acessar o banco a partir da sua máquina (DBeaver, TablePlus etc.), use `127.0.0.1:3307`.

### 3. Subir os containers

```bash
docker compose up -d --build
```

Na primeira execução o container `node` roda `npm install` automaticamente e depois inicia o Vite. Acompanhe com:

```bash
docker compose logs -f node
```

### 4. Instalar as dependências PHP

```bash
docker compose exec app composer install
```

### 5. Gerar a chave da aplicação

```bash
docker compose exec app php artisan key:generate
```

### 6. Criar as tabelas e popular o banco

```bash
docker compose exec app php artisan migrate --seed
```

Isso cria as tabelas, a VIEW do relatório (`vw_relatorio_livros`) e insere dados de exemplo (livros, autores e assuntos), além de um usuário de teste.

### 7. Gerar as rotas tipadas do Wayfinder (se necessário)

O container `node` não tem PHP, então o plugin do Wayfinder fica desativado nele. Sempre que criar ou alterar rotas/controllers, gere os arquivos TypeScript pelo container `app`:

```bash
docker compose exec app php artisan wayfinder:generate --with-form
```

### 8. Acessar a aplicação

Abra **http://localhost:8000**.

Usuário criado pelo seeder:

| E-mail | Senha |
|---|---|
| `test@example.com` | `password` |

Também é possível criar uma conta pela tela de registro.

---

## Comandos úteis

```bash
# Rodar todos os testes
docker compose exec app php artisan test

# Rodar os testes de um controller específico
docker compose exec app php artisan test --filter=LivroControllerTest
docker compose exec app php artisan test --filter=AutorControllerTest
docker compose exec app php artisan test --filter=AssuntoControllerTest

# Recriar o banco do zero com dados de exemplo
docker compose exec app php artisan migrate:fresh --seed

# Padronizar o código PHP (Pint)
docker compose exec app ./vendor/bin/pint

# Análise estática (PHPStan / Larastan)
docker compose exec app ./vendor/bin/phpstan analyse

# Gerar o build de produção do frontend
docker compose exec node npm run build

# Parar os containers
docker compose down

# Parar e apagar também o volume do banco
docker compose down -v
```

> Os testes usam SQLite em memória (configurado em [phpunit.xml](phpunit.xml)), portanto não alteram os dados do MySQL.

---

## Rodando sem Docker

Requisitos: PHP 8.3+, Composer 2 e Node.js 22+.

```bash
git clone git@github.com:tuliovgomes/easy-book.git
cd easy-book

composer install
cp .env.example .env          # por padrão usa SQLite
php artisan key:generate
touch database/database.sqlite
php artisan migrate --seed
npm install

composer run dev              # sobe o servidor Laravel e o Vite juntos
```

Acesse **http://localhost:8000**.

---

## Funcionalidades

- Autenticação (login, registro, recuperação de senha, 2FA)
- CRUD de **Livros**, com vínculo a vários autores e assuntos
- CRUD de **Autores**
- CRUD de **Assuntos**
- **Dashboard / Relatório** de livros agrupados por autor, a partir da VIEW `vw_relatorio_livros`

## Estrutura principal

```
app/Http/Controllers/     Controllers (Livro, Autor, Assunto, Dashboard)
app/Models/               Models Eloquent
database/migrations/      Tabelas e VIEW do relatório
database/seeders/         Dados iniciais
resources/js/pages/       Telas Vue (Livros, Autores, Assuntos, Dashboard)
resources/js/components/  Componentes reutilizáveis
routes/web.php            Rotas da aplicação
tests/Feature/            Testes dos controllers
```
