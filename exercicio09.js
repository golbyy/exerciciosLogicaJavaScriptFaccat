alert("Programa Novo Salário")
salarioAtual = parseFloat(prompt("Digite o salário atual: "))
percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste: "))
aumento = (percentualReajuste * salarioAtual) / 100
salarioNovo = salarioAtual + aumento
alert("Novo salário: " + salarioNovo)
