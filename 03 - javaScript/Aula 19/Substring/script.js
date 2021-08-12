var txt = "A turma bcw5 é maravilhosa!"

document.write(txt, "<br><br>")

document.write("<br><br>Usando o substring, apenas com um atributo dentro, de numero 4: <br>", txt.substring(4))

document.write("<br><br>Usando o slice, apenas com um atributo dentro, de numero 4: <br>", txt.slice(4))

document.write("<br><br>Usando o substring, com dois atributos dentro, de numero 8 e 11: <br>", txt.substring(8, 12))

document.write("<br><br>Usando o substring, com dois atributos dentro, de numero 6 e -5: <br>", txt.substring(7, -5))