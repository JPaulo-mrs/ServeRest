# SQL

**Principais comandos SQL**

| Comando | Descrição | Exemplo |
|---|---|---|
| **SELECT** | Seleciona dados de uma ou mais tabelas | `SELECT * FROM tabela;` |
| **INSERT** | Insere novos dados em uma tabela | `INSERT INTO tabela (campo1, campo2) VALUES (valor1, valor2);` |
| **UPDATE** | Atualiza dados em uma tabela | `UPDATE tabela SET campo1 = valor1 WHERE campo2 = valor2;` |
| **DELETE** | Exclui dados de uma tabela | `DELETE FROM tabela WHERE campo = valor;` |
| **CREATE TABLE** | Cria uma nova tabela | `CREATE TABLE tabela (campo1 tipo1, campo2 tipo2, ...);` |
| **ALTER TABLE** | Altera uma tabela existente | `ALTER TABLE tabela ADD COLUMN campo3 tipo3;` |
| **DROP TABLE** | Exclui uma tabela | `DROP TABLE tabela;` |

**Comandos adicionais**

| Comando | Descrição | Exemplo |
|---|---|---|
| **WHERE** | Filtra os resultados de uma consulta | `SELECT * FROM tabela WHERE campo = valor;` |
| **ORDER BY** | Ordena os resultados de uma consulta | `SELECT * FROM tabela ORDER BY campo ASC/DESC;` |
| **GROUP BY** | Agrupa os resultados de uma consulta | `SELECT campo, COUNT(*) FROM tabela GROUP BY campo;` |
| **JOIN** | Combina dados de várias tabelas | `SELECT * FROM tabela1 JOIN tabela2 ON tabela1.campo1 = tabela2.campo2;` |

[Exercícios usando SQL](Exercicios%20SQL.md)