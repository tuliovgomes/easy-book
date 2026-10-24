* Iniciei o projeto utilizando o framework laravel por estar melhor ambientado com a tecnologia e o desenolvimento utilizando o mesmo
* Utilizei laravel + vue + vite + typescript
* adicionado os recursos (migration, model, controller, factory) de livros autores e assunto
* criado teste para cada controller
* criado com base no test o código do controller (so backend por enquanto), 
* criado seeder
* criado a parte do front criação, visualização, edição e listagem dos livros. rodei os testes e todos passaram (docker compose exec app php artisan test --filter=LivroControllerTest)
* criado o front do autor, com listagem edição, visualização e deleção. rodei todos os testes um falhou, foi corrigido o teste e todos passaram (docker compose exec app php artisan test --filter=AutorControllerTest)
* criado o front do Assunto, com listagem edição, visualização e deleção. rodei todos os testes um falhou, foi corrigido o teste e todos passaram (docker compose exec app php artisan test --filter=AssuntoControllerTest)
* criado a view para o relatorio. criado teste para o relatorio, corrigi as rotas que estavam sem autenticação para criação de livro, autores e assuntos corrigi os tests.
