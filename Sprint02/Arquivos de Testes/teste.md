# Relatório dos testes
## Cenários de teste
### T1 - Cadastrar usuários 
**T1-1**  
Ao cadastro ser realizado com sucesso, deverá ser retornado uma mensagem e o code 201.

**Passos para reproduzir:**
Preencher os campos do cadastro

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T1-1.png)
Teste: **Aprovado**

**T1-2**
Usuários precisam conter todos os campos (NOME, E-MAIL, PASSWORD e ADMINISTRADOR).

**Passos para reproduzir:**
Deixar em branco cada campo por vez e depois também testar todos os campos vazios. 

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T1-2%20(1).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T1-2%20(2).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T1-2%20(3).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T1-2%20(4).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T1-2%20(5).png)
Teste: **Aprovado**

**T1-3**
Não deve ser possível criar usuários com e-mail já utilizado. Ao haver uma tentativa, deverá ser retornado uma mensagem e o code 400.

**Passos para reproduzir:**
Tentar cadastrar um usuário com e-mail já cadastrado. 

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T1-3.png)
Teste: **Aprovado**

**T1-4** 
Não deve ser possível criar usuários com e-mails de provedor gmail e hotmail.

**Passos para reproduzir:**
Tentar cadastrar um email de provedor gmail e hotmail.

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T1-4%20(1).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T1-4%20(2).png)
Teste: **Falha**

**T1-5**
Para a realização do cadastro, o email deve seguir um padrão valido de e-mail.

**Passos para reproduzir:**
Colocar uma barra no campo de email, na frente do @ 

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T1-5.png)
Teste: **Falha**

**T1-6** 
As senhas devem possuír no mínimo 5 caracteres e no máximo 10 caracteres.

**Passos para reproduzir:**
Colocar 4 caracteres e 11 caracteres.

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T1-6.png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T1-6%20(2).png)
Teste: **Falha**

### T2 - Listar Usuários
**T2-1**
Ao listar os usuários com sucesso, deverá ser retornado o code 200.

**Passos para reproduzir:**
Listar Usuários 

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T2-1.png)
Teste: **Aprovado**

**T2-2** 
Testar a listagem de usuários com os filtros (_ID, NOME, E-MAIL, PASSWORD e ADMINISTRADOR).

**Passos para reproduzir:**
Listar Usuários com cada filtro

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T2-2%20(2).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T2-2%20(3).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T2-2%20(4).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T2-2%20(5).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T2-2%20(6).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T2-2%20(7).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T2-2%20(1).png)
Teste: **Aprovado com observação**
**Observação:** Para o filtro de email, o email digitado tem que ser idêntico ao de um usuário cadastrado. Tornando impossível fazer o filtro de usuários com um determinado provedor.

**T2-3**
Não deve ser exibido na lista, usuários deletados.

**Passos para reproduzir:**
Excluir um usuário e logo em seguida procurar ele na lista

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T2-3%20(1).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T2-3%20(2).png)
Teste: **Aprovado**

### T3 - Buscar Usuários por ID
**T3-1**
Ao achar o usuário pelo ID com sucesso, deverá ser retornado uma mensagem e o code 200. 

**Passos para reproduzir:**
Colocar um ID de um cliente no campo ID do usuário

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T3-1.png)
Teste: **Aprovado**

**T3-2** 
Se não achar o usuário pelo ID, deverá ser retornado uma mensagem e o code 400.

**Passos para reproduzir:**
Colocar um ID inválido no campo ID do usuário

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T3-2.png)
Teste: **Aprovado**

**T3-3**
Não deve ser possível encontrar usuários deletados.

**Passos para reproduzir:**
Excluir um usuário e logo em seguida procurar o ID dele

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T3-3%20(1).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T3-3%20(2).png)
Teste: **Aprovado**

### T4 - Editar usuários
**T4-1**
Ao editar o usuário com sucesso, deverá ser retornado uma mensagem e o code 200. 

**Passos para reproduzir:**
Editar algum campo do usuário. 

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-1%20(1).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-1%20(2).png)
Teste: **Aprovado**

**T4-2**
Caso não seja encontrado usuário com o ID informado no PUT, um novo usuário deverá ser criado, deverá ser retornado uma mensagem e o code 201.

**Passos para reproduzir:**
Colocar um id que não pertence ao banco de dados

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-2.png)
Teste: **Aprovado**

**T4-2-1**
Ao criar um novo usuário pelo PUT, o usuário precisa conter todos os campos (NOME, E-MAIL, PASSWORD e ADMINISTRADOR).

**Passos para reproduzir:**
Ao colocar um id que não pertence ao banco de dados, deixar em branco cada campo por vez e depois também testar todos os campos juntos vazios. 

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-2-1%20(1).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-2-1%20(2).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-2-1%20(3).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-2-1%20(4).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-2-1%20(5).png)
Teste: **Aprovado**

**T4-2-2**
Ao criar um novo usuário pelo PUT, não deve ser possível criar usuários com e-mail já utilizado. Ao haver uma tentativa, deverá ser retornado uma mensagem e o code 400.

**Passos para reproduzir:**
Ao colocar um id que não pertence ao banco de dados, tentar cadastrar um email que já pertence a um usuário cadastrado.

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-2-2.png)
Teste: **Aprovado**

**T4-2-3**
Ao criar um novo usuário pelo PUT, não deve ser possível criar usuários com e-mails de provedor gmail e hotmail.

**Passos para reproduzir:**
Ao colocar um id que não pertence ao banco de dados, tentar cadastrar emails de provedores gmail e hotmail.

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-2-3%20(1).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-2-3%20(2).png)
Teste: **Falha**

**T4-2-4**
Ao criar um novo usário pelo PUT, o email deve seguir um padrão valido de e-mail.

**Passos para reproduzir:**
Ao colocar um id que não pertence ao banco de dados, coloque uma barra no campo de email, na frente do @ 

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-2-4.png)
Teste: **Falha**

**T4-2-5**
Ao criar um novo usuário pelo PUT, as senhas devem possuír no mínimo 5 caracteres e no máximo 10 caracteres.

**Passos para reproduzir:**
Ao colocar um id que não pertence ao banco de dados, coloque 4 caracteres e 11 caracteres.

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-2-5%20(1).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-2-5%20(2).png)
Teste: **Falha**

**T4-3**
Não deve ser possível editar usuários com e-mails já utilizados por outros usuários. Ao haver uma tentativa, deverá ser retornado uma mensagem e o code 400.

**Passos para reproduzir:**
Colocar um email já cadastrado na edição de um usuário. 

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-3.png)
Teste: **Aprovado**

**T4-4**
Não deve ser possível editar usuários deletados.

**Passos para reproduzir:**
Deletar um usuário e logo em seguida tentar editar o mesmo.

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-4%20(1).png)
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T4-4%20(2).png)
Teste: **Aprovado**

### T5 - Excluir usuários
**T5-1**
Ao deletar um usuários com sucesso, deverá ser retornado uma mensagem e o code 200.

**Passos para reproduzir:**
Colocar o id de um usuário para deletar ele. 

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T5-1.png)
Teste: **Aprovado**

**T5-2** 
Não deve ser possível deletar um usuário com um carrinho cadastrado, caso haja uma tentativa, deverá ser retornado uma mensagem e o code 400.

**Passos para reproduzir:**
Colocar o id de um usuário com carrinho cadastrado para deletar ele. 

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T5-2.png)
Teste: **Aprovado**

**T5-3** 
Não deve ser possível deletar novamente usuários já deletados

**Passos para reproduzir:**
Colocar o id de um usuário para deletar ele e tentar deletar de novo. 

**Resultado:**
![banner](/Sprint02/Arquivos%20de%20Testes/Assets/T5-3.png)
Teste: **Aprovado**