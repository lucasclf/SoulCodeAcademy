var numDo = 0, numWhile = 0;

document.write("Repetição com <strong>for</strong>: <br><br>")

for (i = 0; i <= 100; i++) {
    document.writeln(i)
}

document.write("<br><br>Repetição com <strong>while</strong>: <br><br>")

while (numWhile <= 100) {
    document.writeln(numWhile)
    numWhile++
}

document.write("<br><br>Repetição com <strong>do while</strong>: <br><br>")

do {
    document.writeln(numDo)
    numDo++
} while (numDo <= 100)

document.write("<br>")