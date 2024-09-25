// OPERADORES RELACIONAIS || COMPARAÇÃO
// RESPOSTAS POSSÍVEIS: true ou false
divMessage = document.getElementById("message");
// < MENOR QUE
// > MAIOR QUE
// <= MENOR OU IGUAL QUE
// >= MAIOR OU IGUAL QUE
// == IGUAL QUE
// != DIFERENTE QUE
// === ESTRITAMENTE IGUAL QUE || VERIFICA O VALOR [E] O TIPO DA VARIÁVEL 
// !== ESTRITAMENTE DIFERENTE QUE || VERIFICA O VALOR [E] O TIPO DA VARIÁVEL

let numeroA = 5;
let numeroB = "10";
let strictDiff = numeroA !== numeroB
divMessage.innerHTML = `<p>Número A: ${numeroA}</p><p>Número B: ${numeroB}</p>`;
divMessage.innerHTML += `<p>Número A é um(a) ${typeof(numeroA)}</p><p>Número B é um(a) ${typeof(numeroB)}</p>`;
divMessage.innerHTML += `<p>Estritamente diferente? ${strictDiff}</p>`;