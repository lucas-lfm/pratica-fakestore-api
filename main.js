// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then(renderizarLista);

const renderizarProduto = (produto) => {
  const cardProduto = document.createElement("article");
  cardProduto.classList.add("product-card");

  const imgProduto = document.createElement("img");
  imgProduto.src = produto.image;
  imgProduto.alt = produto.title;

  const tituloProduto = document.createElement("h3");
  tituloProduto.textContent = produto.title;

  const descricaoProduto = document.createElement("p");
  descricaoProduto.textContent = produto.description;
  descricaoProduto.classList.add("product-description");

  const precoProduto = document.createElement("p");
  precoProduto.textContent = produto.price;
  precoProduto.classList.add("product-price");

  const btnAdd = document.createElement("button");
  btnAdd.classList.add("add-to-cart");
  btnAdd.textContent = "Adicionar ao Carrinho";

  cardProduto.appendChild(imgProduto);
  cardProduto.appendChild(tituloProduto);
  cardProduto.appendChild(descricaoProduto);
  cardProduto.appendChild(precoProduto);
  cardProduto.appendChild(btnAdd);

  return cardProduto;
};

function renderizarLista(produtos) {
  produtos.forEach((produto) => {
    const cardProduto = renderizarProduto(produto);
    document.getElementById("product-list").appendChild(cardProduto);
  });
}

async function fetchProdutos() {
  const response = await fetch("https://fakestoreapi.com/products");
  const produtos = await response.json();
  renderizarLista(produtos);
}

fetchProdutos();
