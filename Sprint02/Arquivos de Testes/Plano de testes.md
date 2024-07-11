# Plano de teste
##	ServeRest
- Loja virtual

## Resumo
- Será feito um plano de teste na rota usuários da loja virual ServeRest, no intuito de melhorar a qualidade do projeto e agregar valor.

## Pessoas envolvidas
- **QA:** João Paulo de Moura Soares

## Funcionalidades ou Módulos a serem testados
- Será testado a rota de usuários
 
## Local de testes 
- Todos os testes serão feitos no software Postman

## Recursos Necessários
- Para a realização dos testes foi necessário:
  - Uma pessoa, que ficou responsavél pela documentação e a realização dos testes
  - Um computador com postman, node e npm instalados.
  - Uma rede wifi 

## Como os resultados dos testes serão divulgado
 - Testes que apresentarem bugs serão feitos issues no gitlab com um documento especificando o problema.

## Cenários de teste

### T1 - Cadastrar usuários 
- **T1-1 Ao cadastro ser realizado com sucesso, deverá ser retornado uma mensagem e o code 201.** 
- **T1-2 Usuários precisam conter todos os campos (NOME, E-MAIL, PASSWORD e ADMINISTRADOR).** 
- **T1-3 Não deve ser possível criar usuários com e-mail já utilizado. Ao haver uma tentativa, deverá ser retornado uma mensagem e o code 400.** 
- **T1-4 Não deve ser possível criar usuários com e-mails de provedor gmail e hotmail.**
- **T1-5 Para a realização do cadastro, o email deve seguir um padrão valido de e-mail.**
- **T1-6 As senhas devem possuír no mínimo 5 caracteres e no máximo 10 caracteres.**

### T2 - Listar Usuários
- **T2-1 Ao listar os usuários com sucesso, deverá ser retornado uma mensagem e o code 200.**
- **T2-2 Testar a listagem de usuários com os filtros (_ID, NOME, E-MAIL, PASSWORD e ADMINISTRADOR).**
- **T2-3 Não deve ser exibido na lista, usuários deletados.**

### T3 - Buscar Usuários por ID
- **T3-1 Ao achar o usuário pelo ID com sucesso, deverá ser retornado uma mensagem e o code 200.** 
- **T3-2 Se não achar o usuário pelo ID, deverá ser retornado uma mensagem e o code 400.**
- **T3-3 Não deve ser possível encontrar usuários deletados.**

### T4 - Editar usuários
- **T4-1 Ao editar o usuário com sucesso, deverá ser retornado uma mensagem e o code 200.** 
- **T4-2 - Caso não seja encontrado usuário com o ID informado no PUT, um novo usuário deverá ser criado, deverá ser retornado uma mensagem e o code 201.**
  - **T4-2-1 - Ao criar um novo usuário pelo PUT, o usuário precisa conter todos os campos (NOME, E-MAIL, PASSWORD e ADMINISTRADOR).**
  - **T4-2-2 - Ao criar um novo usuário pelo PUT, não deve ser possível criar usuários com e-mail já utilizado. Ao haver uma tentativa, deverá ser retornado uma mensagem e o code 400.**
  - **T4-2-3 - Ao criar um novo usuário pelo PUT, não deve ser possível criar usuários com e-mails de provedor gmail e hotmail.**
  - **T4-2-4 - Ao criar um novo usário pelo PUT, o email deve seguir um padrão valido de e-mail.**
  - **T4-2-5 - Ao criar um novo usuário pelo PUT, as senhas devem possuír no mínimo 5 caracteres e no máximo 10 caracteres.**
- **T4-3 Não deve ser possível editar usuários com e-mails já utilizados por outros usuários. Ao haver uma tentativa, deverá ser retornado uma mensagem e o code 400.**
- **T4-4 Não deve ser possível editar usuários deletados.** 


### T5 - Excluir usuários
- **T5-1 Ao deletar um usuários com sucesso, deverá ser retornado uma mensagem e o code 200.**
- **T5-2 Não deve ser possível deletar um usuário com um carrinho cadastrado, caso haja uma tentativa, deverá ser retornado uma mensagem e o code 400.**
- **T5-3 Não deve ser possível deletar novamente usuários já deletados** 

## Testes candidatos à automação
De acordo com o objetivo da aplicação, foi observado que os end points: **T1 - Cadastrar usuários** e **T4 - Editar usuários** precisam ser priorizados, o que torna eles candidatos a automação

## Critério de aceitação
- Os vendedores (usuários) deverão possuir os campos NOME, E-MAIL, PASSWORD e ADMINISTRADOR;
- Não deverá ser possível fazer ações e chamadas para usuários inexistentes;
- Não deve ser possível criar um usuário com e-mail já utilizado;
- Caso não seja encontrado usuário com o ID informado no PUT, um novo usuário deverá ser criado;
- Não deve ser possível cadastrar usuário com e-mail já utilizado utilizando PUT;
- Os testes executados deverão conter evidências;
- Não deverá ser possível cadastrar usuários com e-mails de provedor gmail e hotmail;
- Os e-mails devem seguir um padrão válido de e-mail para o cadastro;
- As senhas devem possuír no mínimo 5 caracteres e no máximo 10 caracteres;
- A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos.

## Matriz de rastreabilidade 

| ID do requisito | Descrição do requisito | Caso teste relacionado |
|---|---|---|
| R1 | Os vendedores (usuários) deverão possuir os campos NOME, E-MAIL, PASSWORD e ADMINISTRADOR; | T1-2 |
| R2 | Não deverá ser possível fazer ações e chamadas para usuários inexistentes; |  |
| R3 | Não deve ser possível criar um usuário com e-mail já utilizado; |  |
| R4 | Caso não seja encontrado usuário com o ID informado no PUT, um novo usuário deverá ser criado; |  |
| R5 | Não deve ser possível cadastrar usuário com e-mail já utilizado utilizando PUT; |  |
| R6 | Não deverá ser possível cadastrar usuários com e-mails de provedor gmail e hotmail; |  |
| R7 | Os e-mails devem seguir um padrão válido de e-mail para o cadastro; |  |
| R8 | As senhas devem possuír no mínimo 5 caracteres e no máximo 10 caracteres; |  | 
| R9 | A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos. |  |

## Mapa mental

![Mapa mental de testes](/Sprint02/Assets/Rota%20Usuários.png)

## Cronograma 

| Atividade | Data |
|---|---|
| Criação do plano de teste | 07/07 - 09/07 |
| Revisão do plano de teste | 09/07 |
| Escolha de testes candidatos a automação | 09/07 |
| Realização dos testes | 09/07 |
| Reporte de cada teste com bugs e melhorias | 10/07 |
| Apresentação sprint 2 | 11/07 |