INSERT INTO proprietarios(nome_prop, cpf_prop) VALUES('MARIO', '11111111111'), ('WALTER', '22222222222'), ('ANTONIA', '33333333333'), ('JOANA', '44444444444');

INSERT INTO locais(desc_local) VALUES('SALA01'), ('SALA02'), ('SALA03'), ('SALA04'), ('SALA05'), ('SALA06'), ('SALA07');

INSERT INTO lojas(dono_loja, local_loja, cnpj_loja, razao_loja, tipo_loja) VALUES(1, 1, '11111111111111', 'PIZZARIA IRMAOS LTDA', 'ALIMENTICIO'), (2, 2, '22222222222222', 'LAVA JATO HEISENBERG', 'SERVICOS'), (3, 3, '33333333333333', 'A&A ROUPAS', 'MODA'), (4, 4, '44444444444444', 'J&J CONSTRUÇÃO', 'CONSTRUCAO'), (2, 5, '55555555555555', 'HEISENBERG QUIMICOS', 'LABORATORIO'), (1, 6, '66666666666666', 'DESENTOPE AGORA', 'SERVICOS');

INSERT INTO funcionarios(loja_func, nome_func, cpf_func) VALUES(1, 'CARLOS', '12345678912'), (2, 'MARIA', '78945612345'), (3, 'JAMIRE', '45678912345'), (4, 'LETICIA', '65498732149'), (5, 'SERAFINA', '34876519752'), (6, 'MIGUEL', '79421356879');
