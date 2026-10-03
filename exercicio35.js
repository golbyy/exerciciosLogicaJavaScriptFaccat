alert("Programa Combustível com Desconto")
tipoCombustivel = prompt(
  "Digite o tipo de combustível (A-álcool, G-gasolina): ",
)
litros = parseFloat(prompt("Digite o número de litros: "))
if (tipoCombustivel == "A") {
  precoLitro = 2.9
  if (litros <= 20) {
    percentualDesconto = 3
  } else {
    percentualDesconto = 5
  }
} else {
  precoLitro = 3.3
  if (litros <= 20) {
    percentualDesconto = 4
  } else {
    percentualDesconto = 6
  }
}
total = litros * precoLitro
desconto = (total * percentualDesconto) / 100
totalPagar = total - desconto
alert("Valor a pagar: " + totalPagar)
