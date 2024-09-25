console.log("Hello World!");

// DECLARAR VARIÁVEIS
// var - privada 
// let - global
// const - não pode(ria) ser alterado

let a = 12; //nubmer inteiro -> integer
let nomePessoa = "Juninho"; //strnig
console.log(a + " " + nomePessoa + "s à meia noite");
console.log(typeof(nomePessoa), nomePessoa);
console.log(typeof(a), a);

let preco = 10.30; //nubmer decimal -> flot ou doble
console.log(typeof(preco), preco);

let autenticado = true; //boolean
console.log(typeof(autenticado), autenticado);

let email; //indefinido, não foi passado nada
console.log(typeof(email), email);

let nur = null;
console.log(typeof(nur), nur);

email = "Xx_HeitorGamer_xX@hotmail.com";
console.log(typeof(email), email);

const CPF = "124.156.323-38";
console.log(typeof(CPF), CPF);
//CPF = "GAMER" --- como é uma constante, não pode ser alterada, resultando em erro


//---------------------------------------------------------------------------------------------------------------

// CONVERSÕES

// COERÇÃO IMPLÍCITA -- CONVERSÃO DE VALORES DE FORMA IMPLÍCITA

let variávelQualquer = "3" + 2; //forçou concatenar forçadamente transformando o int 2 em string
console.log(typeof(variávelQualquer), variávelQualquer);

// COERÇÃO EXPLÍCITA -- CONVERSÃO DE VALORES DE FORMA EXPLÍCITA

// Number()
let pontos = "120";
pontos = Number(pontos)
console.log(typeof(pontos), pontos);

// Boolean()
let valorLógico = "";
valorLógico = Boolean(valorLógico)
console.log(typeof(valorLógico), valorLógico);

// PEDIR VALORES P/ O USUÁRIO

let nome = prompt("Who calls for the shadow?")
alert(`Captain ${nome}.`)
alert('Hello ' + nome + '. Ecological Dead Zone. Retreat to Surface.')