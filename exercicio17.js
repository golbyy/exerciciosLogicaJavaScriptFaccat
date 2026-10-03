alert("Programa Média e Aprovação")
nota1 = parseFloat(prompt("Digite a nota 1: "))
nota2 = parseFloat(prompt("Digite a nota 2: "))
media = (nota1 + nota2) / 2
if (media >= 6) {
  alert("Aluno aprovado! Média: " + media)
} else {
  alert("Aluno reprovado! Média: " + media)
}
