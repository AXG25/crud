
let carta = document.getElementById("carta");

const viewProduct = async () => {
  carta.innerHTML = '';
  const resp = await fetch("http://localhost:4000/ropa");
  const data = await resp.json();
  data.map((productos) => {
    const { imagen, Talla, valor, nombre } = productos;
    carta.innerHTML = `
    <div class="card bg-dark text-white" style="width: 18rem;">
    <img src="${imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">
      Precio:${valor}
      Talla:${Talla}
      </p>
      <a href="#" class="btn btn-light">Borrar</a>
      <a href="#" class="btn btn-light">Editar</a>
    </div>
       `;
  });
};
