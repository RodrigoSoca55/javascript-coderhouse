



// PRECIO TOTAL
const iva = 0.22;
let descuento = 0.35;

function precioTotal(precio) {
    return ((precio * (1 + iva)) * (1 - descuento)).toFixed(2)

}

console.log(`El precio total es ${precioTotal(500)}$`)

// PRECIO PAGO FINANCIADO
function pagoFinanciado(precio, cuotas) {
    if (cuotas == 4) {
        return `Pague en 4 cuotas de ${((precioTotal(precio) / 4) * 1.25).toFixed(2)}$`
    }
    else if (cuotas == 6) {
        return `Pague en 6 cuotas de ${((precioTotal(precio) / 6) * 1.35).toFixed(2)}$`
    }
    else if (cuotas == 12) {
        return `Pague en 12 cuotas de ${((precioTotal(precio) / 12) * 1.6).toFixed(2)}$`
    }
    else if (cuotas > 12 && cuotas < 144) {
        return `Pague en ${cuotas} cuotas de ${((precioTotal(precio) / cuotas) * (1 + cuotas / 25)).toFixed(2)}$`
    }
    else {
        return `ingrese un numero de cuotas valido `
    }
}

console.log(pagoFinanciado(500, 4))
console.log(pagoFinanciado(500, 6))
console.log(pagoFinanciado(500, 12))
console.log(pagoFinanciado(500, 33))


// Elegir menor Precio

// function menorPrecio() {
//     let precio = prompt("ingrese el precio a comparar  o escriba finalizar para terminar")
//     let parsedPrecio = parseInt(precio)
//     let precioMinimo = parsedPrecio
//     while (precio !== "finalizar") {
//         precio = prompt("ingrese el precio a compara  o escriba finalizar para terminar")
//         parsedPrecio = parseInt(precio)
//         if (parsedPrecio <= precioMinimo) {
//             precioMinimo = parsedPrecio
//         }

//     }
//     return `El precio minimo es ${precioMinimo}`

// }

// console.log(menorPrecio())
// let disc = true
// function discount(){
//     if (disc){
//        return ("price"*0.75);
//     }
// }
 

