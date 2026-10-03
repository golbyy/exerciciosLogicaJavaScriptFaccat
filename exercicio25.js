alert("Programa Saldo do Cliente")
numeroConta = parseInt(prompt("Digite o número da conta: "))
saldo = parseFloat(prompt("Digite o saldo: "))
debito = parseFloat(prompt("Digite o débito: "))
credito = parseFloat(prompt("Digite o crédito: "))
saldoAtual = saldo - debito + credito
if (saldoAtual >= 0) {
  alert("Saldo atual: " + saldoAtual + " - Saldo Positivo")
} else {
  alert("Saldo atual: " + saldoAtual + " - Saldo Negativo")
}
