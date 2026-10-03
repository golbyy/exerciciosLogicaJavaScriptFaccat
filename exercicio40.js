alert("Programa Desconto por Quantidade")
nomeProduto = prompt("Digite o nome do produto: ")
quantidade = parseInt(prompt("Digite a quantidade adquirida: "))
precoUnitario = parseFloat(prompt("Digite o preço unitário: "))
total = quantidade * precoUnitario
if (quantidade <= 5) {
  percentualDesconto = 2
} else if (quantidade <= 10) {
  percentualDesconto = 3
} else {
  percentualDesconto = 5
}
desconto = (total * percentualDesconto) / 100
totalPagar = total - desconto
alert(
  "Total: " +
    total +
    " | Desconto: " +
    desconto +
    " | Total a pagar: " +
    totalPagar,
)
