//entrada
// idade (anos, meses e dias)
//processamento(calculo ou transformação de anos, meses e dias em dias)
//saída
//dias

//7)
alert("Programa Calculo de dias vividos")
ano = parseInt(prompt("Digite a quantidade de anos vividos :"))
mes = parseInt(
  prompt("Digite a quantidade de meses passados do seu último aniversário :"),
)
dia = parseInt(
  prompt("Digite a quantidade de dias passados do seu último mesversário :"),
)
quantidadeDediasVividos = ano * 365 + mes * 30 + dia
alert("A quantidade de dias vividos é : " + quantidadeDediasVividos)
