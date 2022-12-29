const sortedProducts = sorted(productos);
const contenedor = document.querySelector(".contenedor")
const ofertas = document.getElementById("ofertas")
const searchBtn = document.getElementById("search")


function cards() {
  contenedor.innerHTML = "";
  for (let i = 0; i < productos.length; i++) {
    let result = applyPrice(i, productos, productos[i].disc);
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
    <div class="container-img">
        <img src=${productos[i].img} alt=${productos[i].name}>
    </div>
        <h2>
        ${productos[i].name}
        </h2>
        <h2>  
        ${result}$ 
        </h2> `
    
    contenedor.appendChild(card)

  }

}

cards(sortedProducts);


// descuento
function applyPrice(i, arr, flag) {
  if (flag) {
    return parseInt(arr[i].price) * 0.75;
  } else {
    return arr[i].price;
  }
}

// ordenar alfabeticamente

function sorted(arr) {
  return arr.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}


ofertas.onclick = () => {

  const filteredArray = productos.filter(producto => producto.disc === true);
  contenedor.innerHTML = "";
  for (let i = 0; i < filteredArray.length; i++) {
    let result = applyPrice(i, filteredArray, filteredArray[i].disc);
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
     <div class="container-img">
         <img src=${filteredArray[i].img} alt=${filteredArray[i].name}>
     </div>
         <h2>
         ${filteredArray[i].name}
            </h2>
         <h2>  
            ${result}$ 
         </h2> `
       contenedor.appendChild(card)
  }


}
function search() {
  const busqueda = searchBtn.value;
  const searchResult = productos.find(producto => producto.name === busqueda);
  const indexSearch = productos.indexOf(searchResult)
  if (searchResult) {
    contenedor.innerHTML = "";
    let result = applyPrice(indexSearch, productos, productos[indexSearch].disc);
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
     <div class="container-img">
         <img src=${searchResult.img} alt=${searchResult.name}>
     </div>
         <h2>
         ${searchResult.name}
            </h2>
         <h2>  
            ${result}$ 
         </h2> `
       contenedor.appendChild(card)

  } else {
      alert(`No se encontro el producto : ${busqueda}`)
  }
 }
