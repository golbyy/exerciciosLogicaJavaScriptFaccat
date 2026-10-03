alert("Programa Expressões Lógicas")
logico1 = prompt("Valor de A (V/F): ") == "V"
logico2 = prompt("Valor de B (V/F): ") == "V"
logico3 = prompt("Valor de C (V/F): ") == "V"
resultadoA = (logico1 && logico2) || logico1 != logico2
resultadoB = (logico1 || logico2) && logico1 && logico3
resultadoC = (logico1 || (logico3 && logico2)) != (logico1 && !logico2)
alert("a) " + resultadoA + " | b) " + resultadoB + " | c) " + resultadoC)
