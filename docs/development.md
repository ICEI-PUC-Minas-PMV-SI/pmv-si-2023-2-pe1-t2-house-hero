# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve exibir as notícias mais populares. | ALTA | index.html |
|RF-002| Usuários autenticados podem registrar novas notícias. | ALTA | cadastro-noticia.html |

## Descrição das estruturas:

## Consumer
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Texto  | Identificador único do usuário consumidor            | '1'                                              |
| name         | Texto             | Nome do Usuário                         | 'Lara'                                   |
| email       | Texto             | Email do Usuário                       | 'lara@gmail.com'                            |
| photo       | Texto             | Identificador da foto de perfil                       | '5f4dcc3b5aa765d61d8327deb882cf99'                            |
| password  | Texto  | Chave de segurança do usuário encriptada | '5f4dcc3b5aa765d61d8327deb882cf99'                                              |
| cpf  | Texto  | Documento identificador do usuário | '983.634.692-97'                                                |
| provided_reviews  | Lista de textos  | Lista com o id de todas as avaliações que o usuário já realizou | ['1', '1']                                                |


## Service Provider
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Texto  | Identificador único do usuário prestador de serviços            | '1'                                              |
| name         | Texto             | Nome do Usuário                         | 'Carpintaria ABC'                                   |
| description         | Texto             | Descrição do prestador de serviço e das atividades que ele realiza                         | 'Somos a Carpintaria ABC, trabalhamos a mais de 20 anos no setor...'                             |
| address         | Texto             | Endereço do prestador de serviço                         | 'Rua A, número 123, Bairro X, Cidade Y'                               |
| contact         | Texto             | Contato do prestador de serviço                         | '(99) 99999-9999'                               |
| email       | Texto             | Email do Prestador de Serviço                       | 'carpintariaabc@gmail.com'                            |
| password  | Texto  | Chave de segurança do prestador encriptada | '5f4dcc3b5aa765d61d8327deb882cf99'                                              |
| review_token  | Texto  | Chave de avaliação do prestador | '5f4dcc3b5aa765d61d8327deb882cf99'                                              |
| cnpj  | Texto  | Documento identificador do usuário | '58.390.322/0001-74'                                                |
| received_reviews  | Lista de textos  | Lista com o id de todas as avaliações que o usuário já recebeu | ['1', '1']                                                |
| services  | Lista de textos  | Lista com o id de todos os serviços que o usuário já cadastrou | ['1', '1']                                                |


## Service
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Texto  | Identificador único do serviço            | '1'                                              |
| name         | Texto             | Nome do Serviço                         | 'Lara'                                   |
| provider       | Texto             | Id do Prestador do Serviço                       | '1'                            |
| photo       | Texto             | Identificador da foto do perfil do serviço                      | '5f4dcc3b5aa765d61d8327deb882cf99'                            |


## Review
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Texto  | Identificador único da avaliação            | '1'                                              |
| title         | Texto             | Título da Avaliação                         | 'Excelente Serviço'                                   |
| description         | Texto             | Descrição da Avaliação                         | 'Atendimento excelente, prazo cumprido com antecedência e resultado perfeito.'                             |
| time_review         | Número(Decimal)             | Avaliação do cumprimento do prazo combinado                         | 4.6                                   |
| result_review         | Número(Decimal)             | Avaliação do resultado final do serviço                        | 4.7                                   |
| treatment_review         | Número(Decimal)             | Avaliação do tratamento                          | 4.8                                   |
| reviewed_id             | Texto  | Identificador único do usuário avaliado            | '1'                                              |
| reviewer_id             | Texto  | Identificador único do usuário avaliador            | '1'                                              |
