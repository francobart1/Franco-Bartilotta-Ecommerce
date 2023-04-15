
const badgeHTML = document.getElementById('cart-count')
let order = {
    products: [
        {
            productName: 'xbox', //name del producto es igual a un productName
            cantidad: 2,
            price: 1000
        },
        {
            productName: 'switch',
            cantidad: 1,
            price: 200000
        }
    ],
    user: 'email@gmail.com',
    total: 300000,
};

function actualizarBadge() {
    badgeHTML.innerHTML = order.products.reduce((acc, producto) => {
        return acc += producto.cantidad;
        
    }, 0)
}
actualizarBadge();

// ?agregar elemento

function addToOrder(indice) {
    
    
    //buscar el producto por indice dentro de mi local storage
}
//tener la posibilidad de que cuando apriete el boton comprar se anada el elemento al array oder.products
    // antes de hacer un push
    // deberia checkear con un find con un findindex si el producto ya se encuentra
    //si se encuentra incremento donde de ese producto su cantidad
    //sino hago un push de ese elemento
    //incrementar el total
    //volver a guardar en el sessionStorage

// ?eliminar elemento
    // pintamos en el boton de mi orden el index de el array orde.products y lo eliminamos(splice)
    // guardar el precio del producto por la cantidad y restarselo al total
    // actualizar el sessionstorage con el nuevo valor

// ?listar orden 
    //pintar los elementos en una nueva pagina.