alert("Programa Maior Entre 3 Valores")
valor1 = parseFloat(prompt("Digite o 1º valor: "))
valor2 = parseFloat(prompt("Digite o 2º valor: "))
valor3 = parseFloat(prompt("Digite o 3º valor: "))
if (valor1 > valor2 && valor1 > valor3) {
  alert("O maior valor é: " + valor1)
} else if (valor2 > valor1 && valor2 > valor3) {
  alert("O maior valor é: " + valor2)
} else {
  alert("O maior valor é: " + valor3)
}
