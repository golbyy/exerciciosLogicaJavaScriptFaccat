alert("Programa Salário com Hora Extra")
horasTrabalhadas = parseFloat(
  prompt("Digite o número de horas trabalhadas no mês: "),
)
valorHora = parseFloat(prompt("Digite o valor da hora trabalhada: "))
horasNormais = 40 * 4
if (horasTrabalhadas > horasNormais) {
  horasExtras = horasTrabalhadas - horasNormais
  salarioNormal = horasNormais * valorHora
  salarioExtra = horasExtras * (valorHora * 1.5)
  salarioTotal = salarioNormal + salarioExtra
} else {
  salarioTotal = horasTrabalhadas * valorHora
}
alert("O salário total do funcionário é: " + salarioTotal)
