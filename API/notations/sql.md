# O que é SLQ ?

Structured Query Language  
Linguagem de Consulta Estruturada

_É a linguagem padrão para banco de dados relacionais, o conhecimento aprendido é reaproveitado para todos os bancos relacionais_

# SLQ - COMANDOS DML

    Data Manipulation Language

    - C => Create => INSERT
    - R => Read   => SELECT
    - U => Update => UPDATE
    - D => Delete => DELETE

## CRIANDO UMA TABELA
    CREATE TABLE users (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    name VARCHAR,

    email VARCHAR,

    password VARCHAR,

    avatar VARCHAR NULL,

    created at TIMESTAMP DEFAULT CURRENT TIMESTAMP,

    updated at TIMESTAMP DEFAULT CURRENT TIMESTAMP
    ) "
*Lembrar do auto incremento(adiciona sozinho os ids) e do primary key (torna os id únicos)*

-- **INSERT:**

    Insere novos registros em uma tabela.

    INSERT INTO table_name
    (column1, column2)
    VALUES
    ('value1', 'value2');

-- **SELECT:** (sempre usar o WHERE)

    Recupera dados de uma ou mais tabelas.
    SELECT column1, column2 FROM table_name WHERE condition;

-- **UPDATE:** (sempre usar o WHERE)

    Atualiza registros existentes em uma tabela.
    UPDATE table_name SET column1 = value1 WHERE id = 1;

-- **DELETE:** (sempre usar o WHERE)

    Remove registros de uma tabela.
    DELETE FROM table_name WHERE condition;

-- **ALTER TABLE:**

    Modifica a estrutura de uma tabela existente.(usado antes para os outros codigos)
    ALTER TABLE table_name
    ADD column_name datatype;

-- **CREATE TABLE:**

    Cria uma nova tabela no banco de dados.
    CREATE TABLE table_name (
        column1 datatype,
        column2 datatype,
        ...
    );

-- **DROP TABLE:**

    Exclui uma tabela e seus dados permanentemente.
    DROP TABLE table_name;

-- **CREATE INDEX:**

    Cria um índice em uma ou mais colunas para melhorar a eficiência.
    CREATE INDEX index_name ON table_name (column1, column2);

-- **SELECT DISTINCT:**

    Retorna valores distintos de uma coluna.
    SELECT DISTINCT column1 FROM table_name;

-- **WHERE:** (IMPORTANTE!!!)

    Filtra registros em conjunto com SELECT, UPDATE e DELETE.
    SELECT column1, column2 FROM table_name WHERE condition;

-- **GROUP BY:**

    Agrupa registros com base nos valores de uma ou mais colunas.
    SELECT column1, COUNT(*) FROM table_name GROUP BY column1;

-- **HAVING:**

    Filtra grupos resultantes em conjunto com GROUP BY.
    SELECT column1, COUNT(*) FROM table_name GROUP BY column1 HAVING COUNT(*) > 1;

**EX: RENOMEAR**

    ALTER TABLE nome_tabela
    RENAME COLUNM nome_coluna1 TO nome_coluna2

**EX2: DELETE**

    ALTER TABLE nome_tabela
    DROP COLUNM nome_coluna

**VER DADOS NA TABELA**

    SELECT * FROM users (retorna todos os campos)

    SELECT id, name, email FROM users (retorna apenas as colunas listadas)

.
**EXEMPLO CRUDE BANCO DE DADOS**

    INSERT INTO users
    (name, email, password)

    VALUES
      ('Costa', 'contact3@philippewanuty.com', '12347');



    SELECT * FROM users;
    SELECT id, name, email FROM users;


    UPDATE users SET
    avatar = 'wanuty.png'
    WHERE id = 2


    DELETE FROM users

    WHERE id = 3

**Lembrar de no beekeeper selecionar a linha de codigo que voce deseja dar Run**
