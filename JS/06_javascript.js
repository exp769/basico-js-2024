// IF

let idade = 105;
let spanIdade = document.getElementById("span-idade");
spanIdade.innerHTML = idade;

let verificaIdade = document.getElementById("verifica-idade");

if (idade < 18)
    {
    verificaIdade.innerHTML = "O usuário é menor de idade";
    verificaIdade.className = "dark";
    } 
else if (idade < 60)
{
    verificaIdade.innerHTML = "O usuário é maior de idade";
    verificaIdade.className = "dark";
} 
else 
{
    verificaIdade.innerHTML = "O usuário é velho.";
    verificaIdade.className = "light";
}

let mes = 7;
let semestre;

if (mes <= 6){
    semestre = "Primeiro semestre"
} else {
    semestre = "Segundo semestre"
}

let semestreTernario = mes <= 6 ? "Primeiro semestre" : "Segundo semestre";

console.log(`Estamos no ${semestreTernario}`)