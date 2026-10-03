alert("Programa Média de Aproveitamento")
nota1 = parseFloat(prompt("Digite a nota N1: "))
nota2 = parseFloat(prompt("Digite a nota N2: "))
nota3 = parseFloat(prompt("Digite a nota N3: "))
mediaExercicios = parseFloat(prompt("Digite a média dos exercícios: "))
mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7
if (mediaAproveitamento >= 9) {
  conceito = "A"
} else if (mediaAproveitamento >= 7.5) {
  conceito = "B"
} else if (mediaAproveitamento >= 6) {
  conceito = "C"
} else {
  conceito = "D"
}
alert("Média: " + mediaAproveitamento + " | Conceito: " + conceito)
