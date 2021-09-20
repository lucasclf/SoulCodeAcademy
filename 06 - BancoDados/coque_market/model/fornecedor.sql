USE coque_market


DROP TABLE entrada;
DROP TABLE estoque;
DROP TABLE saida;
DROP TABLE fornecedor;

CREATE TABLE IF NOT EXISTS fornecedor(
    forn_id INT NOT NULL AUTO_INCREMENT,
    forn_cnpj VARCHAR(14) NOT NULL,
    forn_nome VARCHAR(50) NOT NULL,
    PRIMARY KEY(forn_id)
);

CREATE TABLE IF NOT EXISTS saida(
    saida_id INT NOT NULL AUTO_INCREMENT,
    saida_cpf VARCHAR(11),
    saida_quant INT NOT NULL,
    saida_produto INT NOT NULL,
    saida_valor FLOAT NOT NULL,
    PRIMARY KEY(saida_id),
    FOREIGN KEY(saida_produto) REFERENCES estoque(estoque_id)
);

CREATE TABLE IF NOT EXISTS estoque(
    estoque_id INT NOT NULL AUTO_INCREMENT,
    estoque_forn INT NOT NULL,
    estoque_nome VARCHAR(50) NOT NULL,
    estoque_quant INT NOT NULL,
    estoque_valor FLOAT NOT NULL,
    PRIMARY KEY(estoque_id),
    FOREIGN KEY(estoque_forn) REFERENCES fornecedor(forn_id)
);

CREATE TABLE IF NOT EXISTS entrada(
    entrada_id INT NOT NULL AUTO_INCREMENT,
    entrada_forn INT NOT NULL,
    entrada_produto INT NOT NULL,
    entrada_quant INT NOT NULL,
    PRIMARY KEY(entrada_id),
    FOREIGN KEY(entrada_forn) REFERENCES fornecedor(forn_id),
    FOREIGN KEY(entrada_produto) REFERENCES estoque(estoque_id)
);

CREATE TABLE IF NOT EXISTS usuario(
    usuario_id INT NOT NULL AUTO_INCREMENT,
    usuario_login VARCHAR(30) NOT NULL UNIQUE,
    usuario_perm INT NOT NULL,
    usuario_nome VARCHAR(50) NOT NULL UNIQUE,
    usuario_senha VARCHAR(10) NOT NULL,
    PRIMARY KEY(usuario_id)
);