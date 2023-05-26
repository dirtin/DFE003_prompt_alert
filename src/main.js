//exercício 01


const entradaDoNumero = prompt("Escreva um número, por favor."); 
const numeroDado = parseFloat(entradaDoNumero);
const dobro = numeroDado * 2;
const triplo = numeroDado * 3;
const resultado1 = document.getElementById("resultado1");

if (numeroDado % 2 === 0) {
  resultado1.innerHTML = `O número dado é ${numeroDado}, ele é par, e o seu dobro é ${dobro}!`;
} else {
  resultado1.innerHTML = "O número dado é " + numeroDado + ", ele é ímpar, e o seu triplo é " + triplo + "!";
}



// exercício 03

const valorDaConta = parseFloat(prompt("Digite o valor da conta."));
      const diaDaSemana = prompt("Escreva qual é o dia da semana?");
      
      const valorDoServiçoFds = 0.2;
      const valorFinalFds = valorDaConta * (1 + valorDoServiçoFds);
      
      const valorDoServiço = 0.1;
      const valorFinal = valorDaConta * (1 + valorDoServiço);
      const resultado2 = document.getElementById("resultado2");
      
      const diaSemanaFormatado = diaDaSemana.toUpperCase();
      
      if (diaSemanaFormatado === "SÁBADO" || diaSemanaFormatado === "DOMINGO" || diaSemanaFormatado === "SABADO") {
        resultado2.innerHTML = `Hoje é ${diaSemanaFormatado}, por isso a taxa do garçom é 20%. O valor total ficou em R$ ${valorFinalFds.toFixed(2)}`;
      } else {
        resultado2.innerHTML = `Hoje é ${diaSemanaFormatado}, por isso a taxa do garçom é 10%. O valor total ficou em R$ ${valorFinal.toFixed(2)}`;
      }
    
  
