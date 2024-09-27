// ARRAYS

let lista1 = new Array("elemento1", "elemento2");
console.log(lista1);

let lista2 = ["elemento1", "elemento2", 3, true, false, ["corsa", "gamer"]];
console.log(lista2);

let frutas = ["banana", "melão", "kiwi", "ameixa", "pitaya"];
console.log(frutas);

let qntFrutas = frutas.length;
console.log(`Qnt de frutas: ${qntFrutas}`);

console.log(frutas[2]);

console.log(lista2[5][1]);

let gradeProdutos = [
    ["Nome 1", "Marca 1", 10],
    ["Nome 2", "Marca 2", 20],
    ["Nome 3", "Marca 3", 300]
];

console.table(gradeProdutos);

console.log(gradeProdutos[2][0]);

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// for (let i = 0; i < gradeProdutos.length; i++) {
//     for (let j = 0; j < gradeProdutos[i].length; j++){
//         console.log(gradeProdutos[i][j]);
//     }
// }
console.log("---separator---")
for (let x in frutas){
    console.log(frutas[x]);
}