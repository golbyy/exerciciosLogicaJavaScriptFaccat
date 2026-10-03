alert("Programa Salário do Vendedor")
numeroCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos: "))
valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas: "))
salarioFixo = parseFloat(prompt("Digite o salário fixo: "))
valorPorCarroVendido = parseFloat(prompt("Digite o valor por carro vendido: "))
comissaoPorCarro = numeroCarrosVendidos * valorPorCarroVendido
comissaoVendas = (valorTotalVendas * 5) / 100
salarioFinal = salarioFixo + comissaoPorCarro + comissaoVendas
alert("Salário final do vendedor: " + salarioFinal)
