console.log("Array&Objects")


// creo una clase/objeto producto 

class tarjetaProducto {
    constructor (nombre, precio, id) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
}


const carrito = []

// va a recibir el array
let agregarProductos = () => {
    return carrito
}



// va a crear los objetos que se van a agregar al carrito
let crearProducto = (producto) => {
    carrito.push(producto)

}

const producto1 = new tarjetaProducto("Mini componente", 800, 1)
const producto2 = new tarjetaProducto("Canon D 60x", 1000, 1)

crearProducto (producto1)
crearProducto (producto2)
console.log(agregarProductos())


// de una lista de objetos, mostrar la Categoría de productos que el usuario quiera encontrar. 
// NO ME SALIO ! 

class tarjetaProducto2 {
    constructor (nombre, precio, id, categoría, stock) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
        this.categoría = categoría  // .toLowerCase() -- no me lo toma .. xq ??
        this.stock = stock
    }
}


const buscador = []

// va a recibir el array
let listaProductos = () => {
    return buscador
}
let crearBusqueda = (producto) => {
    buscador.push(producto)

}

// mis productos a la venta 

const product1 = new tarjetaProducto2 ("Mini componente", 800, 1, "audio",10)
const product2 = new tarjetaProducto2 ("Canon D 60x", 1000, 2, "fotografia") 
const product3 = new tarjetaProducto2 ("El conde de Montecristo", 700, 3, "literatura")



const findOne = (categorías)  => {

    const busquedaActiva = buscador.find ((tarjetaProducto2) => {
       if (tarjetaProducto2.categoría ===  categorías) {
                          return tarjetaProducto2 } 
    })


    return busquedaActiva 
}

// esto agrega a la lista
crearBusqueda (product1)
crearBusqueda (product2)
crearBusqueda (product3)

console.log(listaProductos())


function busqueda () {
    let  categoría = prompt("Ingresa una categoría que desea buscar (audio, fotografia o literatura")
        return  categoría

}

let categorías = busqueda()

console.log(categorías)

console.log(findOne(categorías))



let precio = 1 

function agregarProducto () {

    // en teoria ya eligio un producto y quiere agregar más del mismo item. 
        // por ahora me agrega 5 productos porque la variable precio aumenta. 

for (precio; precio < product1.stock ; precio++) {
    let ingresaProducto = prompt ("Desea agregar más cantidad")
    if  (ingresaProducto === "si") {
        alert ("El precio es " + precio*2)
            console.log(precio)
            if (precio === 5) {
                alert ("No hay más stock")
                break;
            }
    }
        else if (ingresaProducto === "no") { 
            break;
           
        }
        else {
            console.error("el usuario no eligio")

        }

} 

}

agregarProducto () 

console.log(product1.stock)