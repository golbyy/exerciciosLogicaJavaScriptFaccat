alert("Programa Divisão Validada")
valor1 = parseFloat(prompt("Digite o primeiro valor: "))
do {
  valor2 = parseFloat(prompt("Digite o segundo valor (diferente de zero): "))
} while (valor2 == 0)
divisao = valor1 / valor2
alert("Resultado da divisão: " + divisao)
