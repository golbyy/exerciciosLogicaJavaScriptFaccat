alert("Programa Controle de Estoque")
quantidadeAtual = parseFloat(prompt("Digite a quantidade atual em estoque: "))
quantidadeMaxima = parseFloat(prompt("Digite a quantidade máxima em estoque: "))
quantidadeMinima = parseFloat(prompt("Digite a quantidade mínima em estoque: "))
quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2
if (quantidadeAtual >= quantidadeMedia) {
  alert("Quantidade média: " + quantidadeMedia + " - Não efetuar compra")
} else {
  alert("Quantidade média: " + quantidadeMedia + " - Efetuar compra")
}
