fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then(renderizarLista);

function renderizarLista(produtos) {
  for (let produto of produtos) {
    console.log(produto.title);
    console.log(produto.price);
  }
}
