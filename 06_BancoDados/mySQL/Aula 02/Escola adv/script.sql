USE escola_cqn;

DROP TABLE notas;
DROP TABLE alunos;
DROP TABLE turmas;
DROP TABLE locais;
DROP TABLE funcionarios;

CREATE TABLE IF NOT EXISTS funcionarios(
    id_func INT NOT NULL AUTO_INCREMENT,
    cpf_func VARCHAR(11) NOT NULL,
    nome_func VARCHAR(50) NOT NULL,
    cargo_func VARCHAR(50) NOT NULL,
    PRIMARY KEY(id_func),
    UNIQUE(cpf_func)
);

CREATE TABLE IF NOT EXISTS locais(
    id_local INT NOT NULL AUTO_INCREMENT,
    descricao_local VARCHAR(50) NOT NULL,
    responsavel_local INT NOT NULL,
    PRIMARY KEY(id_local),
    FOREIGN KEY(responsavel_local) REFERENCES funcionarios(id_func)
);

CREATE TABLE IF NOT EXISTS turmas(
    id_turma INT NOT NULL AUTO_INCREMENT,
    professor_turma INT NOT NULL,
    local_turma INT NOT NULL,
    PRIMARY KEY(id_turma),
    FOREIGN KEY(professor_turma) REFERENCES funcionarios(id_func),
    FOREIGN KEY(local_turma) REFERENCES locais(id_local)
);

CREATE TABLE IF NOT EXISTS alunos(
    id_aluno INT NOT NULL AUTO_INCREMENT,
    matricula_aluno VARCHAR(20) NOT NULL,
    nome_aluno VARCHAR(50) NOT NULL,
    turma_aluno INT NOT NULL,
    PRIMARY KEY(id_aluno),
    UNIQUE(matricula_aluno),
    FOREIGN KEY(turma_aluno) REFERENCES turmas(id_turma)
);

CREATE TABLE IF NOT EXISTS notas(
    id_nota INT NOT NULL AUTO_INCREMENT,
    materia_nota VARCHAR(20) NOT NULL,
    professor_nota INT NOT NULL,
    aluno_nota INT NOT NULL,
    valor_nota FLOAT NOT NULL,
    turma_nota INT NOT NULL,
    PRIMARY KEY(id_nota),
    FOREIGN KEY(professor_nota) REFERENCES funcionarios(id_func),
    FOREIGN KEY(aluno_nota) REFERENCES alunos(id_aluno),
    FOREIGN KEY(turma_nota) REFERENCES turmas(id_turma)
);

INSERT INTO funcionarios(cpf_func, nome_func, cargo_func) values('11111111111', 'debora rodrigues', 'reitor'), ('22222222222', 'antonia mel', 'professor'), ('33333333333', 'michel rodrigues', 'professor'), ('44444444444', 'melissa macarena', 'professor');

INSERT INTO locais(descricao_local, responsavel_local) values('sala01', 2), ('sala02', 3), ('sala03', 4), ('reitoria', 1);

INSERT INTO turmas(professor_turma, local_turma) values(2, 1), (3, 2), (4, 3);

INSERT INTO alunos(matricula_aluno, nome_aluno, turma_aluno) values('AA1', 'cleiton mane', 1), ('BB2', 'joao augusto', 2), ('CC3', 'seu jorge', 3);

INSERT INTO notas(materia_nota, professor_nota, aluno_nota, valor_nota, turma_nota) VALUES('quimica', 2, 1, 45.6, 1), ('matematica', 3, 1, 87.5, 1), ('quimica', 2, 2, 00, 2), ('matematica', 3, 2, 00, 2), ('quimica', 2, 3, 100, 3), ('matematica', 3, 3, 42, 3);