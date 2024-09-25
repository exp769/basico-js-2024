// OPERADORES LÓGICOS
divMessage = document.getElementById("message");
// E .... &&
// OU ... ||
// NOT .. !
divMessage.innerHTML = `<p>Hello World!</p><p>Olhar console...</p>`;

// SUPONHA UM SISTEMA DE LOGIN...

let email = "a@b.com";
let senha = "123";

let emailDigitado = prompt("Digite seu email: ");
let senhaDigitada = prompt("Digite sua senha: ");

console.log(`Verificação do e-mail: ${emailDigitado == email}`);
console.log(`verificação da senha: ${senha == senhaDigitada}`);

let statusLogin = (email == emailDigitado) && (senha == senhaDigitada);
console.log(`Status de login: ${statusLogin}`)

//SE TIVER SOL [OU] TIVER JOGO DO BRASIL [OU] ANIVERSÁRIO => CHURRASCO

let sol = false;
let jogoBr = false;
let aniversario = true;

console.log(`Status do churrasco: ${sol || jogoBr || aniversario}`);

// VERIFICAÇÃO DE IDADE DO VOTO OPCIONAL

let idade = 17;
let verificaMenorDeIdade = ((idade >= 16) && (idade < 18));
let verificaMaiorDeIdade = (idade >= 70);

console.log(`Verifica voto opcional para maior de idade: ${verificaMaiorDeIdade}`)
console.log(`Verifica voto opcional para menor de idade: ${verificaMenorDeIdade}`)
let votoOpcional = (verificaMenorDeIdade || verificaMaiorDeIdade);