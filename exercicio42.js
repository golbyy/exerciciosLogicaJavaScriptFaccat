alert("Programa Aposentadoria")
codigoEmpregado = parseInt(prompt("Digite o código do empregado: "))
anoNascimento = parseInt(prompt("Digite o ano de nascimento: "))
anoIngresso = parseInt(prompt("Digite o ano de ingresso na empresa: "))
anoAtual = parseInt(prompt("Digite o ano atual: "))
idade = anoAtual - anoNascimento
tempoTrabalho = anoAtual - anoIngresso
if (
  idade >= 65 ||
  tempoTrabalho >= 30 ||
  (idade >= 60 && tempoTrabalho >= 25)
) {
  alert(
    "Idade: " +
      idade +
      " | Tempo de trabalho: " +
      tempoTrabalho +
      " - Requerer aposentadoria",
  )
} else {
  alert(
    "Idade: " +
      idade +
      " | Tempo de trabalho: " +
      tempoTrabalho +
      " - Não requerer",
  )
}
