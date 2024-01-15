# SLQ - COMANDOS DML
    Data Manipulation Language

    - C => Create => INSERT
    - R => Read   => SELECT
    - U => Update => UPDATE
    - D => Delete => DELETE

-- **INSERT:** 

    Insere novos registros em uma tabela.
    INSERT INTO table_name (column1, column2) VALUES (value1, value2);

-- **SELECT:** 

    Recupera dados de uma ou mais tabelas.
    SELECT column1, column2 FROM table_name WHERE condition;


-- **UPDATE:** 

    Atualiza registros existentes em uma tabela.
    UPDATE table_name SET column1 = value1 WHERE condition;

-- **DELETE:** 

    Remove registros de uma tabela.
    DELETE FROM table_name WHERE condition;

-- **ALTER TABLE:**     

    Modifica a estrutura de uma tabela existente.(usado antes para os outros codigos)
    ALTER TABLE table_name ADD column_name datatype;

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

-- **WHERE:** 

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

    SELECT * FROM users(selecione apenas)