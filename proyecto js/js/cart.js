let cartList = localStorage.getItem("cart");

let arrResultados = [];


let sanitized = '[' + cartList.replace(/}{/g, '},{') + ']';
let res = JSON.parse(sanitized);



let cardContainer = document.getElementById("cardsContainer")

for (i = 0; i < res.length; i++) {
    let filteredArr = productos.filter((prod) => prod.id === res[i].id)
    arrResultados.push(filteredArr)
}


for (j = 0; j < res.length; j++) {
    cardContainer.innerHTML +=
    `<div class="cart-card d-flex justify-content-between">
        <div class="cart-img d-inline-block">
            <img src=${arrResultados[j][0]?.img} alt="">
            </div>
            <h3> ${arrResultados[j][0]?.name}</h3>
            <span>${res[j]?.price}</span>
            <span>cant: 5</span>
            <i onclick="deleteProd(${arrResultados[j][0]?.id})" class="bi bi-trash3"></i>
                    
                                        </div>`
}
let result= []

function deleteProd(id){
    
    console.log(arrResultados)
    for(i=0; i<arrResultados.length; i++){
         result = arrResultados[i].filter(prod => prod.id !== id);
     }
        console.log(result)
        localStorage.removeItem("cart")
        localStorage.setItem("cart", JSON.stringify(result))
    
        for(j=0; j<res.length; j++){
            cardContainer.innerHTML = ""
        cardContainer.innerHTML +=`                     
                           <div class="cart-card d-flex justify-content-between">
                            <div class="cart-img d-inline-block">
                                <img src="${result[j][0]?.img}" alt="">
                            </div>
                            <h3> ${result[j][0]?.name}</h3>
                            <span>${res[j]?.price}</span>
                            <span>cant: 5</span>
                            <i onclick="deleteProd(${result[j][0]?.id})"  class="bi bi-trash3"></i>
    
                        </div>`
    }
        
    }