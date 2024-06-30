# NoSQL
## MongoDB
**O que é MongoDB?**

O MongoDB é um banco de dados NoSQL orientado a documentos, que armazena dados em formato JSON.

**Principais comandos**

**Comandos básicos**

* `db.collection.count()` - Conta quantos documentos a coleção possui. 
* `db.collection.insert()` - Insere documentos em uma coleção.
* `db.collection.find()` - Busca documentos em uma coleção.
* `db.collection.update()` - Atualiza documentos em uma coleção.
* `db.collection.delete()` - Exclui documentos em uma coleção. 

É possível com os comandos acima colocar filtros e "One" para manipular apenas um documento.
**Comandos de índice**

* `db.collection.createIndex()` - Cria um índice em uma coleção para melhorar o desempenho das consultas.

**Comandos administrativos**

* `db.stats()` - Exibe estatísticas sobre o banco de dados.
* `db.dropDatabase()` - Exclui um banco de dados.
* `db.createUser()` - Cria um novo usuário.

**Exemplo de uso**

~~~mongodb
> db.users.insertOne({ nome: "João", idade: 30 })
> db.users.find({ nome: "João", idade: 30 })
> db.users.updateOne({ nome: "João" }, { $set: { idade: 31 } })
> db.users.find({ nome: "João", idade: 31 })
~~~

[Exercícios usando MongoDB](Exercicios%20NOSQL.md)
