window.onload = function() {
    const entradaDoNumero = prompt("Escreva um número, por favor.");
    const numeroDado = parseFloat(entradaDoNumero);
    const dobro = numeroDado * 2;
    alert("O dobro do número " + numeroDado + " é " + dobro + "!");
  }
  
  
  
  

  const valorDaConta = parseFloat(prompt("digite o valor da conta."));
  const valorDoServiço = 0.1;
  const valorFinal = valorDaConta * (1 + valorDoServiço);
  alert("o valor final é de R$ "  + valorFinal.toFixed(2) + ".");
    const resultado = document.getElementById("resultado");
  resultado.textContent = "O valor final é de R$ " + valorFinal.toFixed(2) + ".";
 

const valorDaContaDaPizza = parseFloat(prompt("Digite o valor da conta da mesa."));
const numeroDePessoas = parseFloat(prompt("digite o número de pessoas que irão dividir a Conta."));
const valorParaCadaCliente = valorDaContaDaPizza / numeroDePessoas;
alert("O Valor para cada cliente é de R$ " + valorParaCadaCliente.toFixed(2) + ".");



