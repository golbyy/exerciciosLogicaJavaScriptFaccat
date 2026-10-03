alert("Programa Soma dos 2 Maiores")
valor1 = parseFloat(prompt("Digite o 1º valor: "))
valor2 = parseFloat(prompt("Digite o 2º valor: "))
valor3 = parseFloat(prompt("Digite o 3º valor: "))
if (valor1 < valor2 && valor1 < valor3) {
  menor = valor1
} else if (valor2 < valor1 && valor2 < valor3) {
  menor = valor2
} else {
  menor = valor3
}
soma = valor1 + valor2 + valor3 - menor
alert("A soma dos 2 maiores é: " + soma)
