alert("Programa Classificação de Triângulo")
lado1 = parseFloat(prompt("Digite o lado A: "))
lado2 = parseFloat(prompt("Digite o lado B: "))
lado3 = parseFloat(prompt("Digite o lado C: "))
if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
  if (lado1 == lado2 && lado2 == lado3) {
    mens = "Triângulo Equilátero"
  } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
    mens = "Triângulo Isósceles"
  } else {
    mens = "Triângulo Escaleno"
  }
} else {
  mens = "Não é possível formar um triângulo"
}
alert(mens)
