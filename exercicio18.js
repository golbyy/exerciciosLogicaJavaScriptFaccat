//18) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
//poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

ano_nascimento = parseInt(prompt("Digite o ano que você nasceu: "))
ano_atual = parseInt(prompt("Digite o ano atual: "))
idade = ano_atual - ano_nascimento
if (idade >= 16) {
  alert(`Você tem ${idade}, você ja pode votar!`)
} else {
  alert(`Você tem ${idade}, você não pode votar!`)
}
