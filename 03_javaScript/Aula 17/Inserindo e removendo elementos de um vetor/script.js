function solucao1() {
    var s = ["A", "b", "B", "C", "c", "1", "2", "3"];

    document.write("Variavel s inicial é: [", s, "]<br><br><br>")

    s.unshift("a")

    document.write("Variavel s após a primeira alteração é: [", s, "]<br><br><br>")

    s.push("4")
   
    document.write("Variavel s após a segunda alteração é: [", s, "]<br><br><br>")

    s.pop()
    s.pop()
    s.pop()
    s.pop()
    s.pop()
    s.push("1", "2", "3", "4")

    document.write("Variavel s após a terceira alteração é: [", s, "]<br><br><br>")

    s.shift()

    document.write("Variavel s após a quarta alteração é: [", s, "]<br><br><br>")

    s.pop()

    document.write("Variavel s após a quinta alteração é: [", s, "]<br><br><br>")
}

function solucao2() {
    var s = ["A", "b", "B", "C", "c", "1", "2", "3"];

    document.write("Variavel s inicial é: [", s, "]<br><br><br>")

    s.unshift("a")

    document.write("Variavel s após a primeira alteração é: [", s, "]<br><br><br>")

    s.push("4")
   
    document.write("Variavel s após a segunda alteração é: [", s, "]<br><br><br>")
;

    for(i in s){
        if(i>4)
            s[i] = s[parseInt(i) + 1]
    }
    s.pop();

    document.write("Variavel s após a terceira alteração é: [", s, "]<br><br><br>")

    s.shift()

    document.write("Variavel s após a quarta alteração é: [", s, "]<br><br><br>")

    s.pop()

    document.write("Variavel s após a quinta alteração é: [", s, "]<br><br><br>")
}

function solucao3(){
    var s = ["A", "b", "B", "C", "c", "1", "2", "3"];

    document.write("Variavel s inicial é: [", s, "]<br><br><br>")

    s.unshift("a")

    document.write("Variavel s após a primeira alteração é: [", s, "]<br><br><br>")

    s.push("4")
   
    document.write("Variavel s após a segunda alteração é: [", s, "]<br><br><br>")
    
    s.splice(5,1)
    
    document.write("Variavel s após a terceira alteração é: [", s, "]<br><br><br>")

    s.shift()

    document.write("Variavel s após a quarta alteração é: [", s, "]<br><br><br>")

    s.pop()

    document.write("Variavel s após a quinta alteração é: [", s, "]<br><br><br>")
}
