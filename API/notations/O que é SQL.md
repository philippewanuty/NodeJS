 # O que é SQL


    SQL (Structured Query Language) é uma linguagem de programação usada para gerenciar dados em bancos de dados relacionais. É uma linguagem padrão para realizar tarefas como consultar dados, inserir novos registros, atualizar registros existentes e excluir registros de um banco de dados.

    O SQL é amplamente utilizado em sistemas de gerenciamento de banco de dados relacionais (RDBMS) como MySQL, PostgreSQL, SQL Server, Oracle, SQLite, entre outros. Ele fornece uma maneira padronizada e eficiente de interagir com bancos de dados, independentemente do sistema de gerenciamento subjacente.


## Declarações SQL


1. **DDL (Data Definition Language)**: 
>Manipulação da estrutura da tabela
   - As declarações DDL são usadas para definir a estrutura do banco de dados e dos objetos relacionados, como tabelas, índices e visões.
   - Exemplos de declarações DDL incluem: CREATE, ALTER e DROP.
   - Exemplos:
     - CREATE TABLE: Cria uma nova tabela no banco de dados.
     - ALTER TABLE: Modifica a estrutura de uma tabela existente.
     - DROP TABLE: Remove uma tabela ou coluna do banco de dados.
     - TRUNCATE TABLE: Remove todos os registros de uma tabela, mantendo sua estrutura.
     - RENAME TABLE : Renomeia uma tabela existente.
     - DESCRIBE: Ver tabela

   Para manipular colunas em uma tabela:

- Exemplos:
    - ALTER TABLE ADD COLUMN: Adiciona uma nova coluna a uma tabela existente.
       - Obs: Em Oracle se usa ADD sem o column
    - ALTER TABLE ALTER/ COLUMN: Modifica as propriedades de uma coluna existente em uma tabela.
      - Obs: Em Oracle se usa MODIFY sem o column
    - ALTER TABLE DROP COLUMN: Remove uma coluna existente de uma tabela.
    - ALTER TABLE RENAME COLUMN: Renomeia uma coluna existente em uma tabela.
      - Obs: Em Oracle se usa RENAME TO sem o column 

      ```sql 
      ALTER TABLE tabela RENAME TO nomenovo
      ```


2. **DML (Data Manipulation Language)**:
>Manipulação de dados da tabela - C R U D
   - As declarações DML são usadas para manipular os dados dentro do banco de dados, como inserir, atualizar, excluir e recuperar registros.
   - Exemplos de declarações DML incluem:  INSERT (CREATE), SELECT (READ), UPDATE (UPDATE) e DELETE (DELETE).
   - Exemplos:
     - INSERT INTO: Adiciona novos registros a uma tabela.
     - SELECT: Recupera dados de uma ou mais tabelas.
        - Mostrar tabela populada:
        ```sql
        SELECT * FROM TABELA
        ```
     - UPDATE: Modifica os dados existentes em uma tabela.
     - DELETE FROM: Remove registros de uma tabela.

3. **DCL (Control Language)**:
   - As declarações DCL são usadas para definir e gerenciar permissões de acesso e segurança no banco de dados.
   - Exemplos de declarações DCL incluem: GRANT e REVOKE.
   - Exemplos:
      - Exemplos:
     - GRANT: Concede permissões específicas a usuários ou papéis.
     - REVOKE: Revoga permissões anteriormente concedidas.

4. **TCL (Transaction Control Language)**:
   - As declarações TCL são usadas para gerenciar transações dentro do banco de dados, garantindo a consistência e a integridade dos dados.
   - Exemplos de declarações TCL incluem: COMMIT, ROLLBACK e SAVEPOINT.
   - Exemplos:
     - COMMIT: Confirma as alterações feitas em uma transação.
     - ROLLBACK: Desfaz as alterações feitas em uma transação e restaura o estado anterior.
     - SAVEPOINT: Define um ponto de salvamento dentro de uma transação para permitir a reversão parcial das alterações.

Essas categorias ajudam a organizar as diferentes funcionalidades das declarações SQL, tornando mais fácil entender seu propósito e aplicação dentro do contexto do banco de dados.

5. **DQL (Data Query Language)**:
   - As declarações DQL são usadas para recuperar e consultar dados armazenados em tabelas de um banco de dados relacional.
   - O comando principal usado em DQL é o SELECT, que permite a seleção de dados específicos com base em critérios definidos.
   - Outras cláusulas frequentemente usadas em conjunto com o SELECT incluem WHERE, GROUP BY, HAVING e ORDER BY, que permitem filtrar, agrupar, filtrar os resultados agrupados e ordenar os resultados da consulta, respectivamente.

      - **SELECT**: O comando SELECT é usado para recuperar dados de uma ou mais tabelas em um banco de dados.

      - **WHERE**: A cláusula WHERE é usada em conjunto com o comando SELECT para filtrar os resultados com base em uma condição específica.

      - **GROUP BY**: A cláusula GROUP BY é usada em conjunto com o comando SELECT para agrupar os resultados com base em uma ou mais colunas.

      - **HAVING**: A cláusula HAVING é usada em conjunto com a cláusula GROUP BY para filtrar os resultados agrupados com base em uma condição específica.

      - **ORDER BY**: A cláusula ORDER BY é usada em conjunto com o comando SELECT para classificar os resultados em ordem ascendente ou descendente com base em uma ou mais colunas.

      - **JOIN**: A cláusula JOIN é usada em conjunto com o comando SELECT para combinar dados de duas ou mais tabelas com base em uma condição de associação.



   - Exemplo:
     ```sql
     SELECT nome, idade FROM Clientes WHERE idade >= 18 ORDER BY nome;
     ```
   - Este comando seleciona os nomes e idades dos clientes que têm pelo menos 18 anos da tabela "Clientes", e os ordena em ordem alfabética pelo nome.
   



## Operações SQL

1 - **Consultar Dados:** SELECT é usado para recuperar dados de uma ou mais tabelas em um banco de dados.

2 - **Inserir Registros:** INSERT INTO é usado para adicionar novos registros a uma tabela.

3 - **Atualizar Registros:** UPDATE é usado para modificar os dados existentes em uma tabela.

4 - **Excluir Registros:** DELETE FROM é usado para remover registros de uma tabela.

5 - **Criar Tabelas e Bancos de Dados:** CREATE TABLE e CREATE DATABASE são usados para criar novas tabelas e bancos de dados, respectivamente.

6 - **Modificar Tabelas:** ALTER TABLE é usado para adicionar, modificar ou excluir colunas de uma tabela existente.

7- **Definir Restrições:** Restrições como chaves primárias, chaves estrangeiras, restrições de integridade e restrições de verificação podem ser definidas para garantir a consistência e a integridade dos dados.

## Cláusulas

As cláusulas são partes importantes das instruções SQL que fornecem detalhes adicionais sobre como a consulta deve ser executada ou como os dados devem ser manipulados. Elas são usadas em conjunto com comandos **DML (Data Manipulation Language)** como SELECT, INSERT, UPDATE e DELETE para refinar o comportamento das consultas e operações de manipulação de dados. Aqui estão algumas das cláusulas mais comuns em SQL:

1. **WHERE**:
   - A cláusula WHERE é usada para filtrar os resultados de uma consulta com base em uma condição especificada.
   - Exemplo:
     ```sql
     SELECT * FROM Funcionarios WHERE Departamento = 'Vendas';
     ```

2. **ORDER BY**:
   - A cláusula ORDER BY é usada para classificar os resultados de uma consulta em ordem ascendente ou descendente com base em uma ou mais colunas.
   - Exemplo:
     ```sql
     SELECT * FROM Produtos ORDER BY Preco DESC;
     ```

3. **GROUP BY**:
   - A cláusula GROUP BY é usada para agrupar os resultados de uma consulta com base nos valores de uma ou mais colunas.
   - Exemplo:
     ```sql
     SELECT Departamento, COUNT(*) FROM Funcionarios GROUP BY Departamento;
     ```

4. **HAVING**:
   - A cláusula HAVING é usada em conjunto com a cláusula GROUP BY para filtrar os resultados de uma consulta com base em uma condição de grupo.
   - Exemplo:
     ```sql
     SELECT Departamento, COUNT(*) FROM Funcionarios GROUP BY Departamento HAVING COUNT(*) > 5;
     ```

5. **LIMIT** / **OFFSET**:
   - As cláusulas LIMIT e OFFSET são usadas para limitar o número de resultados retornados por uma consulta e para pular um número específico de linhas, respectivamente.
   - Exemplo:
     ```sql
     SELECT * FROM Clientes LIMIT 10 OFFSET 20;
     ```

Essas são apenas algumas das cláusulas mais comuns em SQL. Elas são fundamentais para refinar consultas e operações de manipulação de dados de acordo com os requisitos específicos de cada situação.


## Constraints

Constraints (restrições) são regras aplicadas a uma ou mais colunas em uma tabela de banco de dados para garantir a integridade dos dados armazenados. Essas restrições são usadas para impor regras de negócios, garantir a precisão dos dados e manter a consistência do banco de dados. As constraints são uma parte fundamental do design de banco de dados relacional.

1. **NOT NULL**:
   - A constraint NOT NULL é usada para garantir que um valor não seja nulo em uma coluna.
   - Isso significa que a coluna não pode conter valores nulos, ou seja, cada linha deve ter um valor definido para essa coluna.
   - Exemplo:
     ```sql
     CREATE TABLE Funcionarios (
         ID INT PRIMARY KEY,
         Nome VARCHAR(50) NOT NULL,
         Email VARCHAR(100) NOT NULL
     );
     ```

2. **DEFAULT**:
   - A constraint DEFAULT é usada para especificar um valor padrão para uma coluna quando nenhum valor é fornecido durante a inserção de um novo registro.
   - Se nenhum valor for fornecido para a coluna durante a inserção, o valor padrão será usado.
   - Exemplo:
     ```sql
     CREATE TABLE Produtos (
         ID INT PRIMARY KEY,
         Nome VARCHAR(50) NOT NULL,
         Preco DECIMAL(10, 2) DEFAULT 0.00
     );
     ```

3. **UNIQUE**:
   - A constraint UNIQUE é usada para garantir que todos os valores em uma coluna ou conjunto de colunas sejam únicos em todas as linhas da tabela.
   - Diferentemente da chave primária, uma tabela pode ter várias constraints UNIQUE.
   - Exemplo:
     ```sql
     CREATE TABLE Funcionarios (
         ID INT PRIMARY KEY,
         CPF VARCHAR(11) UNIQUE,
         Email VARCHAR(100) UNIQUE
     );
     ```

4. **Chave Primária (Primary Key)**:
   - Uma chave primária é uma constraint que garante que os valores em uma ou mais colunas identifiquem de forma única cada linha na tabela.
   - Isso significa que não pode haver valores duplicados na(s) coluna(s) definida(s) como chave primária.
   - Exemplo:
     ```sql
     CREATE TABLE Exemplo (
         ID INT PRIMARY KEY,
         Nome VARCHAR(50)
     );
     ```

5. **Chave Estrangeira (Foreign Key)**:
   - Uma chave estrangeira é uma constraint que estabelece uma relação entre duas tabelas, garantindo que os valores em uma coluna correspondam aos valores em outra coluna em outra tabela.
   - A chave estrangeira geralmente faz referência à chave primária de outra tabela.
   - Exemplo:
     ```sql
     CREATE TABLE Pedidos (
         ID INT PRIMARY KEY,
         ClienteID INT,
         FOREIGN KEY (ClienteID) REFERENCES Clientes(ID)
     );
     ```

6. **Restrição de Unicidade (Unique Constraint)**:
   - Uma restrição de unicidade garante que os valores em uma coluna ou conjunto de colunas sejam únicos em todas as linhas da tabela.
   - Diferentemente da chave primária, uma tabela pode ter várias restrições de unicidade.
   - Exemplo:
     ```sql
     CREATE TABLE Clientes (
         ID INT PRIMARY KEY,
         Email VARCHAR(50) UNIQUE
     );
     ```

7. **Restrição de Verificação (Check Constraint)**:
   - Uma restrição de verificação é usada para garantir que os valores em uma coluna atendam a uma condição específica.
   - Por exemplo, você pode usar uma restrição de verificação para garantir que a idade de um cliente seja maior que 18 anos.
   - Exemplo:
     ```sql
     CREATE TABLE Clientes (
         ID INT PRIMARY KEY,
         Nome VARCHAR(50),
         Idade INT CHECK (Idade >= 18)
     );
     ```


8. **Índice (Index)**:
   - Um índice é uma estrutura de dados que melhora o desempenho das consultas em uma ou mais colunas de uma tabela.
   - Índices são usados para localizar rapidamente os registros com valores específicos nessas colunas, tornando as consultas mais eficientes.
   - Exemplo:
     ```sql
     CREATE INDEX idx_id_funcionario ON Funcionarios(ID);
     ```

      >  Este comando cria um índice chamado "idx_id_funcionario" na coluna "ID" da tabela "Funcionarios". Isso pode acelerar significativamente as consultas que envolvem a busca por funcionários pelo seu ID.



Essas são apenas algumas das constraints mais comuns em SQL. Elas desempenham um papel fundamental na garantia da integridade dos dados em um banco de dados relacional, ajudando a manter os dados consistentes e precisos ao longo do tempo.