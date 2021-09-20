CREATE DATABASE escola_CQN;
USE escola_CQN;

DROP TABLE alunos;
    CREATE TABLE IF NOT EXISTS funcionarios(
    id_func INT NOT NULL AUTOINCREMENT,
    nome_func VARCHAR(20) NOT NULL ,
    cargo_func VARCHAR(50) NOT NULL,
    PRIMARY KEY(id_func)
);

DROP TABLE turmas;
CREATE TABLE IF NOT EXISTS turmas(
    id_turma INT NOT NULL AUTOINCREMENT,
    professor_turma INT NOT NULL,
    sala_turma INT NOT NULL,
    PRIMARY KEY(id_turma),
    FOREIGN KEY(professor_turma) REFERENCES funcionarios(id_func)
);

DROP TABLE alunos;
CREATE TABLE IF NOT EXISTS alunos(
    id_aluno INT NOT NULL AUTOINCREMENT,
    nome_aluno VARCHAR(50),
    turmas_aluno 
)

INSERT INTO funcionarios(nome_func, cargo_func) VALUES('Pedro', 'professor');
INSERT INTO funcionarios(nome_func, cargo_func) VALUES('Amelia', 'professor');
INSERT INTO turmas(professor_turma, sala_turma) VALUES(1, 10);