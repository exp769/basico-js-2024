//OPERADORES ARITMÉTICOS

let numeroA = 5;
let numeroB = 10;

divMessage = document.getElementById("message");
divMessage.innerHTML = `<p>Número A: ${numeroA}</p><p>Número B: ${numeroB}</p>`;

// SOMA
let soma = numeroA + numeroB;
divMessage.innerHTML += `<p>Soma: ${soma}</p>`;
//SUBTRAÇÃO
let subtracao = numeroA - numeroB;
divMessage.innerHTML += `<p>Subtração: ${subtracao}</p>`;
// MULTIPLICAÇÃO
let multiplicacao = numeroA * numeroB;
divMessage.innerHTML += `<p>Multiplicação: ${multiplicacao}</p>`;
//DIVISÃO
let divisao = numeroA / numeroB;
divMessage.innerHTML += `<p>Divisão: ${divisao}</p>`;

//OPERADOR RESTO
let resto = numeroA % numeroB; //também se chama módulo
divMessage.innerHTML += `<p>Resto da A/B: ${resto}</p>`;

//POTÊNCIA
let potencia = numeroA ** numeroB;
divMessage.innerHTML += `<p>Potência: ${potencia}</p>`;

//XOR?
let misterio = numeroA ^ numeroB; 
divMessage.innerHTML += `<p>XOR(?): ${misterio}</p>`;

let numeroC = 6;
numeroC += 1;
divMessage.innerHTML += `<p>Número C 1st: ${numeroC++}</p>`;
divMessage.innerHTML += `<p>Número C 2nd: ${++numeroC}</p>`;
divMessage.innerHTML += `<p>Número C 3rd: ${numeroC}</p>`;