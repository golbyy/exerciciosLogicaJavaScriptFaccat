alert("Programa Idades de Homens e Mulheres")
idadeHomem1 = parseInt(prompt("Digite a idade do 1º homem: "))
idadeHomem2 = parseInt(prompt("Digite a idade do 2º homem: "))
idadeMulher1 = parseInt(prompt("Digite a idade da 1ª mulher: "))
idadeMulher2 = parseInt(prompt("Digite a idade da 2ª mulher: "))
if (idadeHomem1 > idadeHomem2) {
  homemVelho = idadeHomem1
  homemNovo = idadeHomem2
} else {
  homemVelho = idadeHomem2
  homemNovo = idadeHomem1
}
if (idadeMulher1 > idadeMulher2) {
  mulherVelha = idadeMulher1
  mulherNova = idadeMulher2
} else {
  mulherVelha = idadeMulher2
  mulherNova = idadeMulher1
}
soma = homemVelho + mulherNova
produto = homemNovo * mulherVelha
alert("Soma: " + soma + " | Produto: " + produto)
