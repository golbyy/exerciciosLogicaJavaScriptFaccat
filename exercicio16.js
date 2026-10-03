//As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
//compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
//escreva o custo total da compra.
 
quantidade_macas = parseInt(prompt("Digite a quantidade de maçãs você comprou: "))
 
if (quantidade_macas >= 12) {
    preco = quantidade_macas * 1
    alert(`Você comprou ${quantidade_macas} maçãs por: R$${preco}`)
}
else {
    preco = quantidade_macas * 1.30
    alert(`Você comprou ${quantidade_macas} maçãs por: R$${preco}`)
}