let contendor = document.getElementById("contenedor");
const productos = [
  { id: 1, nombre: "Torta de Chocolate", precio: 20, tamaño: "s", img: "./img/chocolate.jpg"},
  { id: 2, nombre: "Torta Tres Leches", precio: 30, tamaño: "m", img: "./img/leches.jpg" },
  { id: 3, nombre: "Torta Marmoleada", precio: 15, tamaño: "l", img: "./img/marmoleada.jpg" },
  { id: 4, nombre: "Torta Red Velvet", precio: 25, tamaño: "l", img: "./img/redvelvet.jpg" },
  { id: 5, nombre: "Torta de Banana", precio: 17, tamaño: "s", img: "./img/redvelvet.jpg" },
  { id: 6, nombre: "Torta de Zanahoria", precio: 23, tamaño: "m", img: "./img/redvelvet.jpg" },
];

let accion = prompt("Indiquede si desea buscar por tamaño o precio")
if(accion.toLowerCase() === "precio"){
 
    let precio = parseInt(prompt("Ingrese su presupuesto"));
let encontrados = productos.filter(item => item.precio <= precio);

encontrados.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>Precio: $${item.precio}</b>
    <img src=${item.img}/>
    <p><Tamaño: ${item.tamaño}/></p>
    <hr />
  `;

  contendor.append(div);
});

}
else if(accion.toLowerCase() === "tamaño"){
    
    let tamaño = parseInt(prompt("Ingrese el tamaño del pastel (x, m, l)"));
let encontrados = productos.filter(item => item.tamaño == tamaño);

encontrados.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <h4>Nombre: ${item.nombre}</h4>
    <p>Precio: $${item.precio}</p>
    <img src=${item.img}/>
    <p><Tamaño: ${item.tamaño}/></p>
    <hr />
  `;

  contendor.append(div);
});
 
}