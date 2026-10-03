alert("Programa Percentual de Votos")
totalEleitores = parseInt(prompt("Digite o total de eleitores: "))
votosBrancos = parseInt(prompt("Digite o número de votos brancos: "))
votosNulos = parseInt(prompt("Digite o número de votos nulos: "))
votosValidos = parseInt(prompt("Digite o número de votos válidos: "))
percentualBrancos = (votosBrancos * 100) / totalEleitores
percentualNulos = (votosNulos * 100) / totalEleitores
percentualValidos = (votosValidos * 100) / totalEleitores
alert(
  "Brancos: " +
    percentualBrancos +
    "% | Nulos: " +
    percentualNulos +
    "% | Válidos: " +
    percentualValidos +
    "%",
)
