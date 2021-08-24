const btnAñadir = document.getElementById("btn-añadir");
const btnEdit = document.getElementById("btn-editar");
const BtnDelete = document.getElementById("");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let imagen = document.getElementById("imagen").value;
  let talla = document.getElementById("talla").value;
  let valor = document.getElementById("value").value;

  await fetch("http://localhost:4002/ropa", {
    method: "POST",
    body: JSON.stringify({
      nombre: name,
      imagen: imagen,
      talla: talla,
      valor: valor,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
});

btnAñadir.addEventListener("click", () => {
  let name = document.getElementById("name").value;

  let resp = await fetch("http://localhost:4002/ropa");
  let data = await resp.json();
  let Modify = data.find((user) => user.correo === name);
  const { imagen, Talla, valor, nombre, id } = Modify;
  document.getElementById("name").value = nombre;
  document.getElementById("imagen").value = imagen;
  document.getElementById("value").value = valor;
  document.getElementById("id").value = id;
  document.getElementById("Talla").value = Talla;
});
