alert("Programa Fruteira")
kgMorango = parseFloat(prompt("Digite a quantidade (Kg) de morango: "))
kgMaca = parseFloat(prompt("Digite a quantidade (Kg) de maçã: "))
if (kgMorango <= 5) {
  valorMorango = kgMorango * 2.5
} else {
  valorMorango = kgMorango * 2.2
}
if (kgMaca <= 5) {
  valorMaca = kgMaca * 1.8
} else {
  valorMaca = kgMaca * 1.5
}
total = valorMorango + valorMaca
kgTotal = kgMorango + kgMaca
if (kgTotal > 8 || total > 25) {
  total = total - (total * 10) / 100
}
alert("Valor a pagar: " + total)
