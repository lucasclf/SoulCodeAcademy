CREATE DATABASE padaria_CQN;
USE padaria_CQN;

DROP TABLE produtos;
CREATE TABLE IF NOT EXISTS produtos(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20),
    setor VARCHAR(20),
    valor VARCHAR(40)
);

DROP TABLE funcionarios;
CREATE TABLE IF NOT EXISTS funcionarios(
    ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(40),
    cpf VARCHAR(11),
    cargo VARCHAR(40)
);

INSERT INTO produtos(nome, setor, valor) values('pao','padaria', 45), ('sonho','padaria', 50), ('mucarela','frios', 320), ('prato','frios', 300), ('salame', 'frios', 400), ('mortadela', 'frios', 300);

INSERT INTO funcionarios(nome, cpf, cargo) values('saul goodman', '11111111111', 'atendente'), ('jesse pinkman', '22222222222', 'padeira'), ('gus fring', '33333333333', 'atendente'), ('heisenberg', '44444444444', 'cozinheiro');

