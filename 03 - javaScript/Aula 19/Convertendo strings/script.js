document.writeln(parseInt(" 0xF", 16),"<br>", parseInt(" F", 16),"<br>", parseInt("17", 8),"<br>", parseInt(021, 8),"<br>", parseInt("015", 10),"<br>", parseInt(15.99, 10),"<br>", parseInt("FXX123", 16),"<br>", parseInt("1111", 2),"<br>", parseInt("15*3", 10),"<br>", parseInt("15e2", 10),"<br>", parseInt("15px", 10),"<br>", parseInt("12", 13))

var num = 15.5
base10 = num.toString()
base2 = num.toString(2)
base8 = num.toString(8)
base16 = num.toString(16)


document.write("<br><br> 15.5 na base 2 é:", base2, "<br> 15.5 na base 8 é:", base8, "<br>15.5 na base 10 é :", base10, "<br> 15.5 na base 16 é:", base16)