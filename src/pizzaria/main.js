const valorDaContaDaPizza = parseFloat(prompt("Digite o valor da conta da mesa."));
const taxaDeServico = 0.1;
const valorTotalDaConta = valorDaContaDaPizza * (1 + taxaDeServico);
const numeroDePessoas = parseFloat(prompt("Digite o número de pessoas que irão dividir a conta."));
const valorParaCadaCliente = valorTotalDaConta / numeroDePessoas;

document.getElementById("total-consumido").innerHTML = `R$ ${valorDaContaDaPizza.toFixed(2)}`;
document.getElementById("valor-taxa").innerHTML = `R$ ${(valorTotalDaConta - valorDaContaDaPizza).toFixed(2)}`;
document.getElementById("valor-cobrado").innerHTML = `R$ ${valorTotalDaConta.toFixed(2)}`;
document.getElementById("valor-por-cliente").innerHTML = `R$ ${valorParaCadaCliente.toFixed(2)}`;
