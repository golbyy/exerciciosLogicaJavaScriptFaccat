alert("Programa Peso Ideal")
nome = prompt("Digite o nome: ")
altura = parseFloat(prompt("Digite a altura: "))
sexo = prompt("Digite o sexo (M/F): ")
if (sexo == "M") {
  pesoIdeal = 72.7 * altura - 58
} else {
  pesoIdeal = 62.1 * altura - 44.7
}
alert(nome + ", seu peso ideal é: " + pesoIdeal)
