alert("Programa Verificação de Triângulo")
lado1 = parseFloat(prompt("Digite a medida do lado 1: "))
lado2 = parseFloat(prompt("Digite a medida do lado 2: "))
lado3 = parseFloat(prompt("Digite a medida do lado 3: "))
if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
  alert("Os valores formam um triângulo")
} else {
  alert("Os valores NÃO formam um triângulo")
}
