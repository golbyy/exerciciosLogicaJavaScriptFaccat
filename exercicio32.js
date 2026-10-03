alert("Programa Vencedor da Partida")
nomeTime1 = prompt("Digite o nome do 1º time: ")
golsTime1 = parseInt(prompt("Digite os gols do " + nomeTime1 + ": "))
nomeTime2 = prompt("Digite o nome do 2º time: ")
golsTime2 = parseInt(prompt("Digite os gols do " + nomeTime2 + ": "))
if (golsTime1 > golsTime2) {
  alert("O vencedor é: " + nomeTime1)
} else if (golsTime2 > golsTime1) {
  alert("O vencedor é: " + nomeTime2)
} else {
  alert("EMPATE")
}
