# Estrutura de um banco de dados  

Banco de dados de loja
    
    Tabela de clientes
        - Cliente 1
        - Cliente 2
    Tabela de produtos
        - Produto 1
        - Produto 2
    Tabela de vendas
        - Venda 1
        - Venda 2

## Banco de dados relacional

tabela que se relacionam com tabela

## Data types

Em SQL (Structured Query Language), os tipos de dados são usados para definir o tipo de valor que uma coluna pode armazenar em uma tabela. Aqui estão alguns tipos de dados comuns em SQL:

**INT ou INTEGER:**

    Armazena números inteiros.
    Exemplo: INT, INTEGER.

**FLOAT ou DOUBLE:**

    Armazena números de ponto flutuante.
    Exemplo: FLOAT, DOUBLE.

**CHAR(n) ou VARCHAR(n):**

    CHAR(n) armazena uma string de comprimento fixo de tamanho n.
    VARCHAR(n) armazena uma string de comprimento variável com tamanho máximo n.
    Exemplo: CHAR(10), VARCHAR(255).

**DATE:**

    Armazena valores de data no formato "YYYY-MM-DD".
    Exemplo: DATE.

**TIME:**

    Armazena valores de tempo no formato "HH:MI:SS".
    Exemplo: TIME.

**DATETIME ou TIMESTAMP:**

    Armazena valores de data e tempo combinados.
    Exemplo: DATETIME, TIMESTAMP.

**BOOLEAN ou BOOL:**

    Armazena valores verdadeiro (true), falso (false) ou desconhecido (NULL).
    Exemplo: BOOLEAN, BOOL.

**BLOB (Binary Large Object):**

    Armazena dados binários, como imagens ou arquivos.
    Exemplo: BLOB.

**TEXT:**

    Armazena strings de comprimento variável, sem um limite específico.
    Exemplo: TEXT.

**ENUM:**

    Armazena um conjunto de valores permitidos.
    Exemplo: ENUM('valor1', 'valor2', 'valor3').

**DECIMAL ou NUMERIC:**

    Armazena números decimais precisos.
    Exemplo: DECIMAL(p, s), onde p é o número total de dígitos e s é o número de dígitos após o ponto decimal.

**JSON:**

    Armazena dados no formato JSON.
    Exemplo: JSON.

## SGBD = Sistema Gerenciador de Bando de Dados

## SQL = Structured Query Language ou linguagem de consulta estruturada

**DDL - Data Definition Language**

        - CREATE
        - DROP
        - ALTER