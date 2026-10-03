alert("Programa Comissão por Faixa de Vendas")
salarioFixo = parseFloat(prompt("Digite o salário fixo: "))
valorVendas = parseFloat(prompt("Digite o valor das vendas: "))
if (valorVendas <= 1500) {
  comissao = valorVendas * 0.03
} else {
  comissao = 1500 * 0.03 + (valorVendas - 1500) * 0.05
}
salarioTotal = salarioFixo + comissao
alert("Salário total: " + salarioTotal)
