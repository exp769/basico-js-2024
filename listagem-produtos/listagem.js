document.addEventListener("DOMContentLoaded", function(){
    const produtos = [
        {nome: "Notebook Gamer", preco: 5000, categoria: "Eletrônicos"},
        {nome: "Rim da shoppee", preco: "rim", categoria: "Perecível"},
        {nome: "Churrasqueira", preco: 900, categoria: "Utilitários"}
    ];

    console.log(produtos);
    console.log(produtos[0]);
    console.log(produtos[1].preco);
    console.log(produtos[1]["nome"])

    function inserirProdutos() {
        let containerProdutos = document.getElementById("produtos");

        produtos.forEach(produto =>{
            console.log(produto);

            let produtoDiv = document.createElement("div")

            produtoDiv.innerHTML = `
                <h3>${produto.nome}</h3>
                <p>Preço: ${produto.preco}</p>
                <p>Categoria: ${produto.categoria}</p>
            `;

            containerProdutos.appendChild(produtoDiv);
        })
    }
})