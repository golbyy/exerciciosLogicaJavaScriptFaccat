alert("Programa Custo Final do Carro")
custoFabrica = parseFloat(prompt("Digite o custo de fábrica: "))
percentualDistribuidor = (custoFabrica * 28) / 100
percentualImposto = (custoFabrica * 45) / 100
custoFinal = custoFabrica + percentualDistribuidor + percentualImposto
alert("Custo final ao consumidor: " + custoFinal)
