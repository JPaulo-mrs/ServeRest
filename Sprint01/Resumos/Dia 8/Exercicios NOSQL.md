# Exercícicos NOSQL

## Exercícios com banco de dados de usuários
Foi entregue este banco de dados de usuários para realização de alguns exercícios:
~~~mongodb
[
  {
      "nome": "Teste Start",
      "email": "start@challenge.com"
  },
  {
      "nome": "Fulano de Tal",
      "email": "fulano@qa.com"
  },
  {
      "nome": "Carlos João",
      "email": "carlosjoao@qa.com"
  },
  {
      "nome": "Ghost Silva",
      "email": "ghost_silva@fantasma.com"
  },
  {
      "nome": "Peter Parker",
      "email": "peterparker@marvel.com"
  },
  {
      "nome": "Maria Aparecida",
      "email": "mariaaparecida@qa.com"
  },
  {
      "nome": "Sebastião Levi Nunes",
      "email": "sebastiao123@teste.com"
  },
  {
      "nome": "Maitê Giovana Regina Lopes",
      "email": "maite-lopes90@outershoes.com.br"
  },
  {
      "nome": "Filipe Renato Ribeiro",
      "email": "filipe.renato.ribeiro@cdcd.com.br"
  },
  {
      "nome": "Lucca Ryan Jesus",
      "email": "lucca_ryan_jesus@imoveisvillani.com.br"
  },
  {
      "nome": "Raimunda Luana Fabiana Nascimento",
      "email": "raimunda-nascimento98@cressem.com.br"
  },
  {
      "nome": "Luana Marina Araújo",
      "email": "luana-araujo72@expressotaubate.com.br"
  },
  {
      "nome": "Bruce Wayne",
      "email": "brucewayne@gothan.com"
  },
  {
      "nome": "Carla Mariah dos Santos",
      "email": "carla_dossantos@ept.com.br"
  },
  {
      "nome": "Jennifer Agatha Pires",
      "email": "jennifer.agatha.pires@macroengenharia.com",
  },
  {
      "nome": "Luan Anderson Gonçalves",
      "email": "luan_goncalves@moncoes.com.br"
  }
]
~~~

**exercícios:**
**1. Realizar uma consulta que conte o número de registros existentes.**

Resolução:
~~~mongodb 
db.collection.count() 
~~~
Resposta do compilador:
~~~mongodb 
[16];
~~~

**2. Realizar uma consulta para alterar o usuário com o nome "Teste Start" para "Teste Finish".**

Resolução:
~~~mongodb 
db.collection.updateOne({nome: "Teste Start"}, {$set: {nome: "Teste Finish"}});
~~~
Resposta do compilador:
~~~mongodb 
[
  {
    acknowledged: true,
    modifiedCount: 1,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1,
  },
];
~~~

**3. Realizar uma consulta para encontrar o usuário com o nome "Bruce Wayne".**

Resolução:
~~~mongodb 
db.collection.find({nome: "Bruce Wayne"});
~~~
Resposta do compilador:
~~~mongodb 
[
  {
    _id: "66757c41222a7dae662ff696",
    nome: "Bruce Wayne",
    email: "brucewayne@gothan.com",
  },
];
~~~

**4. Realizar uma consulta para encontrar o usuário com o e-mail "ghost_silva@fantasma.com".**

Resolução:
~~~mongodb 
db.collection.find({email: "ghost_silva@fantasma.com"});
~~~
Resposta do compilador:
~~~mongodb 
[
  {
    _id: "66757c0e5e823a037deb7de3",
    nome: "Ghost Silva",
    email: "ghost_silva@fantasma.com",
  },
];
~~~

**5. Realizar uma consulta para deletar o usuário com e-mail "peterparker@marvel.com".**

Resolução:
~~~mongodb 
db.collection.deleteOne({email: "peterparker@marvel.com"});
~~~
Resposta do compilador:
~~~mongodb 
[
  {
    acknowledged: true,
    deletedCount: 1,
  },
];
~~~

## Exercícios com banco de dados de produtos
Foi entregue este banco de dados de produtos para realização de alguns exercícios:

~~~mongodb
[
  {
      "nome": "teste",
      "categoria": "start",
      "preco": 10,
      "descricao": "Start Challenge."
  },
  {
      "nome": "batata",
      "categoria": "frutas",
      "preco": 10,
      "descricao": "Batata rosa."
  },
  {
      "nome": "adesivo",
      "categoria": "utilitários",
      "preco": 0,
      "descricao": "desivo com precificação para produtos."
  },
  {
      "nome": "caneca",
      "categoria": "utilitários",
      "preco": 0,
      "descricao": "Caneca para café."
  },
  {
      "nome": "caneca chopp",
      "categoria": "utilitários",
      "preco": 25.50,
      "descricao": ""
  },
  {
      "nome": "copo grande térmico",
      "categoria": "utilitários",
      "preco": 35.90,
      "descricao": ""
  },
  {
      "nome": "mouse gamer",
      "categoria": "games",
      "preco": 101,
      "descricao": "Mouse com leds."
  },
  {
      "nome": "teclado gamer",
      "categoria": "games",
      "preco": 99,
      "descricao": "Teclado com leds."
  },
  {
      "nome": "monitor gamer",
      "categoria": "games",
      "preco": 1500,
      "descricao": "Monitor grande para jogar."
  },
  {
      "nome": "jogo batman",
      "categoria": "games",
      "preco": 150,
      "descricao": "Jogo do Batman para PC."
  },
  {
      "nome": "jogo tomb raider",
      "categoria": "games",
      "preco": 100,
      "descricao": "Jogo Tomb Raider para PC."
  },
  {
      "nome": "jogo spider-man",
      "categoria": "games",
      "preco": 200,
      "descricao": "Jogo Spider-man para PS4."
  },
  {
      "nome": "jogo pac-man",
      "categoria": "games",
      "preco": 180,
      "descricao": "Jogo Pac-man para Xbox One."
  },
  {
      "nome": "guarda-roupas lady bug",
      "categoria": "casa",
      "preco": 2500,
      "descricao": "Guarda-roupas gigante da Lady Bug."
  },
  {
      "nome": "cama solteiro",
      "categoria": "casa",
      "preco": 1800,
      "descricao": "Cama box solteiro."
  }
]
~~~

**exercícios:**
**1. Realizar uma consulta que apresente produtos com descrição vazia.**

Resolução:
~~~mongodb 
db.collection.find({descricao: ""});
~~~
Resposta do compilador:
~~~mongodb 
[
  {
    _id: "66757f455e823a037deb7eaf",
    nome: "caneca chopp",
    categoria: "utilitários",
    preco: 25.5,
    descricao: "",
  },
  {
    _id: "66757f455e823a037deb7eb0",
    nome: "copo grande térmico",
    categoria: "utilitários",
    preco: 35.9,
    descricao: "",
  },
];
~~~

**2. Realizar uma consulta que apresente produtos com a categoria "games".**

Resolução:
~~~mongodb 
db.collection.find({categoria: "games"});
~~~
Resposta do compilador:
~~~mongodb 
[
  {
    _id: "66757f775e823a037deb7ec7",
    nome: "mouse gamer",
    categoria: "games",
    preco: 101,
    descricao: "Mouse com leds.",
  },
  {
    _id: "66757f775e823a037deb7ec8",
    nome: "teclado gamer",
    categoria: "games",
    preco: 99,
    descricao: "Teclado com leds.",
  },
  {
    _id: "66757f775e823a037deb7ec9",
    nome: "monitor gamer",
    categoria: "games",
    preco: 1500,
    descricao:
      "Monitor grande para jogar.",
  },
  {
    _id: "66757f775e823a037deb7eca",
    nome: "jogo batman",
    categoria: "games",
    preco: 150,
    descricao:
      "Jogo do Batman para PC.",
  },
  {
    _id: "66757f775e823a037deb7ecb",
    nome: "jogo tomb raider",
    categoria: "games",
    preco: 100,
    descricao:
      "Jogo Tomb Raider para PC.",
  },
  {
    _id: "66757f775e823a037deb7ecc",
    nome: "jogo spider-man",
    categoria: "games",
    preco: 200,
    descricao:
      "Jogo Spider-man para PS4.",
  },
  {
    _id: "66757f775e823a037deb7ecd",
    nome: "jogo pac-man",
    categoria: "games",
    preco: 180,
    descricao:
      "Jogo Pac-man para Xbox One.",
  },
];
~~~

**3. Realizar uma consulta que apresente produtos com preço "0".**

Resolução:
~~~mongodb 
db.collection.find({preco: 0});
~~~
Resposta do compilador:
~~~mongodb 
[
  {
    _id: "66757faa222a7dae662ff737",
    nome: "adesivo",
    categoria: "utilitários",
    preco: 0,
    descricao:
      "desivo com precificação para produtos.",
  },
  {
    _id: "66757faa222a7dae662ff738",
    nome: "caneca",
    categoria: "utilitários",
    preco: 0,
    descricao: "Caneca para café.",
  },
];
~~~

**4. Realizar uma consulta que apresente produtos com o preço maior que "100.00".**

Resolução:
~~~mongodb 
db.collection.find({preco: {$gt: 100.00}});
~~~
Resposta do compilador:
~~~mongodb 
[
  {
    _id: "66757ff4222a7dae662ff753",
    nome: "mouse gamer",
    categoria: "games",
    preco: 101,
    descricao: "Mouse com leds.",
  },
  {
    _id: "66757ff4222a7dae662ff755",
    nome: "monitor gamer",
    categoria: "games",
    preco: 1500,
    descricao:
      "Monitor grande para jogar.",
  },
  {
    _id: "66757ff4222a7dae662ff756",
    nome: "jogo batman",
    categoria: "games",
    preco: 150,
    descricao:
      "Jogo do Batman para PC.",
  },
  {
    _id: "66757ff4222a7dae662ff758",
    nome: "jogo spider-man",
    categoria: "games",
    preco: 200,
    descricao:
      "Jogo Spider-man para PS4.",
  },
  {
    _id: "66757ff4222a7dae662ff759",
    nome: "jogo pac-man",
    categoria: "games",
    preco: 180,
    descricao:
      "Jogo Pac-man para Xbox One.",
  },
  {
    _id: "66757ff4222a7dae662ff75a",
    nome: "guarda-roupas lady bug",
    categoria: "casa",
    preco: 2500,
    descricao:
      "Guarda-roupas gigante da Lady Bug.",
  },
  {
    _id: "66757ff4222a7dae662ff75b",
    nome: "cama solteiro",
    categoria: "casa",
    preco: 1800,
    descricao: "Cama box solteiro.",
  },
];
~~~

**5. Realizar uma consulta que apresente produtos com o preço entre "1000.00" e "2000.00".**

Resolução:
~~~mongodb 
db.collection.find({$and: [{preco: {$gte: 1000.00}}, {preco: {$lte: 2000.00}}]});
~~~
Resposta do compilador:
~~~mongodb 
[
  {
    _id: "6675812f222a7dae662ff780",
    nome: "monitor gamer",
    categoria: "games",
    preco: 1500,
    descricao:
      "Monitor grande para jogar.",
  },
  {
    _id: "6675812f222a7dae662ff786",
    nome: "cama solteiro",
    categoria: "casa",
    preco: 1800,
    descricao: "Cama box solteiro.",
  },
];
~~~

**6. Realizar uma consulta que apresente produtos em que o nome contenha a palavra "jogo".**

Resolução:
~~~mongodb 
db.produtos.find({nome: "jogo"}).pretty()
~~~
Resposta do compilador:
~~~mongodb 
{
  "_id" : ObjectId("6675845f5e823a037deb7f89"),
  "nome" : "jogo batman",
  "categoria" : "games",
  "preco" : 150,
  "descricao" : "Jogo do Batman para PC."
}
{
  "_id" : ObjectId("6675845f5e823a037deb7f8a"),
  "nome" : "jogo tomb raider",
  "categoria" : "games",
  "preco" : 100,
  "descricao" : "Jogo Tomb Raider para PC."
}
{
  "_id" : ObjectId("6675845f5e823a037deb7f8b"),
  "nome" : "jogo spider-man",
  "categoria" : "games",
  "preco" : 200,
  "descricao" : "Jogo Spider-man para PS4."
}
{
  "_id" : ObjectId("6675845f5e823a037deb7f8c"),
  "nome" : "jogo pac-man",
  "categoria" : "games",
  "preco" : 180,
  "descricao" : "Jogo Pac-man para Xbox One."
}
~~~


