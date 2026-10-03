//19) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.

valor1 = parseInt(prompt("Digite o valor 1: "))
valor2 = parseInt(prompt("Digite o valor 2: "))

if (valor1 > valor2) {
  alert(`O numero ${valor1} é maior do que o ${valor2}`)
} else if (valor1 == valor2) {
  alert(`O numero ${valor1} é igual a o ${valor2}`)
} else {
  alert(`O numero ${valor2} é maior do que o ${valor1}`)
}
