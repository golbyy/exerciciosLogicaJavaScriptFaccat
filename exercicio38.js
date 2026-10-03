alert("Programa Login")
codigo = parseInt(prompt("Digite o código: "))
if (codigo != 1234) {
  alert("Usuário inválido!")
} else {
  senhaDigitada = parseInt(prompt("Digite a senha: "))
  if (senhaDigitada != 9999) {
    alert("senha incorreta")
  } else {
    alert("Acesso permitido")
  }
}
