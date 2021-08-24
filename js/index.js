const main = document.getElementById("main");

const viewProduct = async () => {
  main.innerHTML = "";
  const resp = await fetch(" http://localhost:4000/ropa");
  const data = resp.json();
  data.forEach((productos) => {
    const { imagen, talla, valor, nombre } = productos;
    main.innerHTML = `
       <div class="card" style="width: 18rem">
        <img src="${imagen}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">
           Precio: ${valor}
           Talla: ${talla}
          </p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
       `;
  });
};
