// WHILE

let i = 0;
while (i < 5){
    console.log(i++);
}

let k = 10;
while (k >=0 ){
    console.log(k--);
}

let num = +prompt(" Adivinhe o número"); // O + na frente do prompt faz a função Number()

let tentativas = 3;

if (num == 5){
    console.log("De primeira!");
}
while (num != 5 && tentativas > 1){
    num = +prompt("Incorreto. Adivinhe o número");
    tentativas -= 1;
    if (num == 5){
        console.log("Parabéns!");
        break
    }
    if (tentativas == 1){
        console.log("Falhou...");
    }
}

