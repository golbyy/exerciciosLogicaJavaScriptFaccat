alert("Programa Classificação de Z")
valor1 = parseFloat(prompt("Digite o valor de X: "))
valor2 = parseFloat(prompt("Digite o valor de Y: "))
z = valor1 * valor2 + 5
if (z <= 0) {
  resposta = "A"
} else if (z <= 100) {
  resposta = "B"
} else {
  resposta = "C"
}
alert("Z = " + z + ", Resposta = " + resposta)
