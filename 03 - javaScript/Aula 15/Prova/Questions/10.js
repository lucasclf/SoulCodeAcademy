/* 10. Usando switch case, faça um script que alertará "Olá" se a fruta for
"banana" e "Bem-vindo" se a fruta for "maçã". */

var fruta = 0;

fruta = prompt("Escolha entre banana ou maca.", "banana OU maca")

switch (fruta) {
    case "banana":
        alert("Olá")
        break
    case "maca":
        alert("Bem-vindo")
        break
    default:
        alert("Você não escolheu nem maçã, nem banana.")
}

document.write("<br>")