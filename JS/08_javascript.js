// FOR

let qntProduto = +prompt("Digite a qnt de produto que deseja exibir")

for (i = 0; i < qntProduto; i++) {
    console.log (`Produto ${i+1}`);

    let pProduto = document.createElement("p");
    console.log(pProduto);

    pProduto.innerHTML = `Produto ${i+1}`;

    document.body.appendChild(pProduto);
}