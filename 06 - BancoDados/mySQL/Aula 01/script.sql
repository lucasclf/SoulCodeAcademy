CREATE DATABASE tecidos_ABC; --Criando a database
USE tecidos_ABC; --Acessando a database

DROP TABLE materia_prima; --Criando uma tabela
CREATE TABLE IF NOT EXISTS materia_prima(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(20),
nome_quimico VARCHAR(40),
estoque INT
);

DROP TABLE fornecedor;
CREATE TABLE IF NOT EXISTS fornecedor(
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
cnpj VARCHAR(14),
nome VARCHAR(40)
);

INSERT INTO fornecedor(cnpj, nome) values('12345678912345', 'heisenberg');
INSERT INTO materia_prima(nome, nome_quimico, estoque) values('blue sky', 'methamphetamine', 10);

