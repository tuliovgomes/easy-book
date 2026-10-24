# Documentação das Atividades Desenvolvidas — Easy Book

## 1. Configuração e tecnologias utilizadas

* Iniciei o desenvolvimento utilizando o framework **Laravel**, por já possuir familiaridade com a tecnologia e experiência no desenvolvimento de aplicações com ele.
* Defini a stack do projeto utilizando **Laravel, Vue 3, Vite e TypeScript**, visando a organização do código e a separação entre backend e frontend.
* Configurei o ambiente de desenvolvimento utilizando Docker Compose.

## 2. Estrutura do backend

* Criei as migrations, models, controllers e factories referentes às entidades **Livro, Autor e Assunto**.
* Desenvolvi os controllers responsáveis pelas operações de cadastro, listagem, visualização, edição e exclusão dos registros.
* Implementei testes automatizados para os controllers utilizando PHPUnit e os recursos de testes do Laravel.
* Desenvolvi seeders para facilitar a inserção de dados iniciais no banco de dados e apoiar os testes da aplicação.

## 3. Desenvolvimento do módulo de Livros

* Desenvolvi as funcionalidades de cadastro, listagem, visualização e edição de livros no frontend.
* Implementei a integração entre o frontend e o backend para realizar as operações relacionadas aos livros.
* Executei os testes automatizados do controller de livros e confirmei que todos passaram.

**Comando utilizado:**

```bash
docker compose exec app php artisan test --filter=LivroControllerTest
```

## 4. Desenvolvimento do módulo de Autores

* Desenvolvi as telas de listagem, visualização e edição de autores, além da funcionalidade de exclusão.
* Integrei as operações do frontend com o backend.
* Durante a execução dos testes, identifiquei uma falha e realizei os ajustes necessários.
* Após a correção, todos os testes do controller de autores passaram.

**Comando utilizado:**

```bash
docker compose exec app php artisan test --filter=AutorControllerTest
```

## 5. Desenvolvimento do módulo de Assuntos

* Desenvolvi as telas de listagem, visualização e edição de assuntos, além da funcionalidade de exclusão.
* Integrei as funcionalidades do frontend com o backend.
* Durante a execução dos testes, identifiquei uma falha e ajustei o teste correspondente.
* Após a correção, todos os testes do controller de assuntos passaram.

**Comando utilizado:**

```bash
docker compose exec app php artisan test --filter=AssuntoControllerTest
```

## 6. Relatório de Livros por Autor

* Criei uma **VIEW no banco de dados** para fornecer os dados utilizados no relatório.
* Desenvolvi o controller responsável por consultar a VIEW e disponibilizar os dados para o frontend.
* Implementei a apresentação dos livros agrupados por autor, considerando que um mesmo livro pode possuir múltiplos autores.
* Criei testes automatizados para validar o comportamento do relatório.

## 7. Autenticação e ajustes finais

* Revisei as rotas da aplicação e identifiquei rotas de criação de livros, autores e assuntos que estavam sem autenticação.
* Ajustei a configuração de autenticação dessas rotas para proteger as operações de cadastro.
* Revisei e corrigi os testes afetados pelas alterações nas rotas.

## 8. Validação e testes automatizados

* Executei os testes automatizados dos módulos de livros, autores e assuntos.
* Corrigi as falhas identificadas durante a execução dos testes.
* Validei os controllers e os principais fluxos de funcionamento da aplicação por meio dos testes automatizados.
