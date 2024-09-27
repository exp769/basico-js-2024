document.getElementById("somar").addEventListener("click", function somar() {
    let num1 = document.getElementById("primeiro-numero").value;
    let num2 = document.getElementById("segundo-numero").value;
    num1 = Number(num1);
    num2 = Number(num2);
    let soma = num1 + num2;
    let pResultado = document.getElementById("resultado");
    pResultado.innerHTML = `O resultado da soma é : ${soma}`;
});
document.getElementById("subtrair").addEventListener("click", function subtrair() {
    let num1 = document.getElementById("primeiro-numero").value;
    let num2 = document.getElementById("segundo-numero").value;
    num1 = Number(num1);
    num2 = Number(num2);
    let subtracao = num1 - num2;
    let pResultado = document.getElementById("resultado");
    pResultado.innerHTML = `O resultado da subtração é : ${subtracao}`;
}
);
document.getElementById("multiplicar").addEventListener("click", function multiplicar() {
    let num1 = document.getElementById("primeiro-numero").value;
    let num2 = document.getElementById("segundo-numero").value;
    num1 = Number(num1);
    num2 = Number(num2);
    let multiplicacao = num1 * num2;
    let pResultado = document.getElementById("resultado");
    pResultado.innerHTML = `O resultado da multiplicação é : ${multiplicacao}`;
});
document.getElementById("dividir").addEventListener("click", function dividir() {
    let num1 = document.getElementById("primeiro-numero").value;
    let num2 = document.getElementById("segundo-numero").value;
    num1 = Number(num1);
    num2 = Number(num2);
    let divisao = num1 / num2;
    let pResultado = document.getElementById("resultado");
    if (num2 == 0){
        pResultado.innerHTML = `O divisor não pode ser 0. Reensira o número.`;
    } else {
        pResultado.innerHTML = `O resultado da divisão é : ${divisao}`;
    }
});
