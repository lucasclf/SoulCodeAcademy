USE shopping_cqn;

DROP TABLE funcionarios;
DROP TABLE lojas;
DROP TABLE locais;
DROP TABLE proprietarios;

CREATE TABLE IF NOT EXISTS proprietarios(
    id_prop INT NOT NULL AUTO_INCREMENT,
    nome_prop VARCHAR(50) NOT NULL,
    cpf_prop VARCHAR(11) NOT NULL,
    PRIMARY KEY(id_prop),
    UNIQUE(cpf_prop)
);

CREATE TABLE IF NOT EXISTS locais(
    id_local INT NOT NULL AUTO_INCREMENT,
    desc_local VARCHAR(50) NOT NULL,
    PRIMARY KEY(id_local)
);

CREATE TABLE IF NOT EXISTS lojas(
    id_loja INT NOT NULL AUTO_INCREMENT,
    dono_loja INT NOT NULL,
    local_loja INT NOT NULL,
    cnpj_loja VARCHAR(14) NOT NULL,
    razao_loja VARCHAR(30) NOT NULL,
    tipo_loja VARCHAR(30) NOT NULL,
    PRIMARY KEY(id_loja),
    UNIQUE (cnpj_loja),
    FOREIGN KEY(dono_loja) REFERENCES proprietarios(id_prop),
    FOREIGN KEY(local_loja) REFERENCES locais(id_local)
);

CREATE TABLE IF NOT EXISTS funcionarios(
    id_func INT NOT NULL AUTO_INCREMENT,
    loja_func INT NOT NULL,
    nome_func VARCHAR(50) NOT NULL,
    cpf_func VARCHAR(14) NOT NULL,
    PRIMARY KEY(id_func),
    UNIQUE(cpf_func),
    FOREIGN KEY(loja_func) REFERENCES lojas(id_loja)
);

SELECT p.nome_prop, lj.razao_loja, lj.tipo_loja, lc.desc_local, f.nome_func FROM proprietarios AS p JOIN lojas AS lj JOIN locais AS lc JOIN funcionarios AS f ON p.id_prop = lj.dono_loja AND lj.local_loja = lc.id_local AND f.loja_func = lj.id_loja ORDER BY nome_prop;
