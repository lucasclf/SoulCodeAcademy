USE biblioteca_cqn;

CREATE TABLE livros(
    id_livro INT NOT NULL AUTO_INCREMENT,
    nome_livro VARCHAR(30) NOT NULL,
    isbn_livro VARCHAR(30) NOT NULL,
    autor_livro VARCHAR(30) NOT NULL,  
    PRIMARY KEY(id_livro)
);

INSERT INTO livros(nome_livro, isbn_livro, autor_livro) VALUES('1984', '0141182954', 'GEORGE ORWELL');