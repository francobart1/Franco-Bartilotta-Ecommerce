
let Products = JSON.parse(localStorage.getItem("Products")) || []; //lo que hace es instanciarlo/ inicializarlo por si no llega haber nada en el array product, que cargue en el localStorage un array vacio

let favorites = [];


const productForm = document.getElementById('add-product')//Se puede escuchar eventos sin necesidad de poner el onsubmit en el html, siempre que los almacene en una variable, en el html voy a dejar eso escrito como deberia de estar y como está ahora es como dejó explicado el profesor *2
productForm.addEventListener('click', () => {
    console.dir(productForm.dataset) //un dataset es un conjunto de propiedad que yo puedo definir y puedo leer sobre mi HTML la propiedad custom
}) /* se lo pone a escuchar cierto evento, puede ser un click u otra cosa *2 */

// productForm.addEventListener('mouseover', () => {}
const submitBtn = document.getElementById('submit-btn') //?   #4

// swal({
//     title: 'Bienvenido a SweetAlert',
//     text: 'Este modal o dialogo es provisto por la libreria SweetAlert',
//     icon: 'info', //creemos que en sweetAlert2 se usa type en vez de icon dijo
//     className: ''
// });

//Obtener el body de la tabla para poder modificarlo desde JS
const tableBody = document.getElementById('table-body')
// const tableBody = document.querySelector('#table-body') tambien se puede usar este metodo

let editIndex; //?      #3

//definir una funcion para iterar el array
function renderizarTabla(){
    //iterar el array para acceder a cada producto
    tableBody.innerHTML = ""; //lo que hace esto o para lo que está es para que cada vez que se cargue la funcion, se borre toda la tabla

    if(Products.length === 0){
        tableBody.innerHTML = `<tr class="disabled"><td colspan="6">NO SE ENCONTRARON PRODUCTOS</td></tr>`; //colspan es para que ocupe hasta cierta cantidad de columnas

        return
    }
    Products.forEach((producto, index) =>{    
        let imageSrc = '/assets/images/no-product.png'; //se declara esto para que cuando no haya una imagen, se cargue esa imagen por defecto
        if(producto.image){ //esta es una de las formas de preguntar si tiene un valor 
            imageSrc = producto.image;       
        }

        const tableRow = `
                            <tr class="product">
                                <td class="product__img-cell">
                                    <img class= "product__img" src="${imageSrc}" width="120px" alt="${producto.name}">                    
                                </td>
                                <td class= "product__name">
                                    ${producto.name}
                                </td>
                                <td class= "product__desc">
                                    ${producto.description}    
                                </td>
                                <td class= "product__price">
                                    $ ${producto.price}
                                </td>
                                <td class= "product__info">
                                    <span class="product__info-icon ${producto.stock ? '' : 'disabled'}" >
                                        📦
                                    </span>
                                    <span class="product__info-icon ${producto.joystick ? '' : 'disabled'}" >
                                        🎮
                                    </span>                                    
                                </td>
                                <td class= "product__actions">
                                    <button class="product__action-btn" onclick="deleteProduct(${index})"> 
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                    <button class="product__action-btn btn-edit" onclick="editProduct(${index})">
                                        <i class="fa-solid fa-pencil"></i>
                                    </button>
                                    <button class="product__action-btn btn-favorite ${producto.favorite ? 'active' : ''}" onclick="setFavoriteProduct(${index})">
                                    <i class="fa-regular fa-star"></i>
                                </button>
                                </td>
                            </tr>`


        //data-index / data-indice sirve para darle un indice a cada boton *1
                            tableBody.innerHTML += tableRow
        //Introducir dentro del tbody una fila por producto con sus respectivas celdas
        
    // console.log(editButtons) *1
    })
}


renderizarTabla()



function addProduct(evt){
    evt.preventDefault(); //esto se pone porque la pagina se vive recargando, entonces se pone eso para que no se recargue la pagina
    console.dir(evt.target); //puedo ver las cosas que trae por defecto ese evento
    console.log(evt.target);

    const elements = evt.target.elements


    const newProduct = {
        name: elements.name.value,
        description: elements.description.value,
        price: elements.price.valueAsNumber, //la propiedad valueAsNumber, ahi esta el valor del numero en int, en value esta el valor en string, por eso con console.dir(evt.target.price) podemos ver todos los campos que tiene y sus valores
        image: elements.image.value,
        stock: elements.stock.checked,
        joystick: elements.joystick.checked,
        games: elements.games.value
    };

    const newFormData = new FormData(evt.target);
    const newProductFormData = Object.fromEntries(newFormData); //aca ya tengo el objeto ya armado
    newProductFormData.stock = newProductFormData.stock ? true : false //aca pregunta si tiene algo stock entonces que devuelva true, sino false
    newProductFormData.joystick = newProductFormData.joystick ? true : false //aca pregunta si tiene algo stock entonces que devuelva true, sino false
    newProductFormData.price = +newProductFormData.price; //lo convierte en int

    console.log(newProduct)

    if(editIndex >= 0){//! #3 se le pone editIndex >= 0 ya que el primero puede ingresar con 0 y un if(0) va a dar false entonces para que de true ponemos eso 
        Products[editIndex] = newProduct;
        swal({
            title: `El producto se edito correctamente`,
            icon: 'info'
        })
    } else{
        Products.push(newProduct)//lo que estamos haciendo es cargar nuestro producto en la lista de productos
        swal({
            title: `El producto se agrego correctamente`,
            icon: 'success'
        })
    }

    //Guardarlo  en el localStorage, si yo borro la cache se borra mi localStorage
    localStorage.setItem("Products",  JSON.stringify(Products)) //localStorage.setItem(nombreKey, dataValue) 
    // localStorage.setItem("Products", {message: "Hola local storage", value:1000) 
    //si ademas le cargo otro valor bajo esa key va a reemplazar el valor
    //pero si quiero guardar un objeto, ejemplo:  localStorage.setItem("Products", {message: "Hola local storage", value:1000})  tengo que convertir lo que iria de valores en un string y eso se haria con un JSON y se hace de la siguiente con lo siguiente JSON.stringify( {message: "Hola local storage", value:1000}) y quedaria asi: localStorage.setItem("Products",  JSON.stringify( {message: "Hola local storage", value:1000}))
    // y con JSON.parse(localStorage.getItem("Products")) lo que va a ser es descontruir el JSON y hacerlo legible

    editIndex = undefined //esto se lo declara para que no quede el id del que modificamos porque sino no vamos a poder editar otros
    // Products.push(newProduct)//lo que estamos haciendo es cargar nuestro producto en la lista de productos

    submitBtn.classList.remove('edit-btn') //le quita la clase al boton que le agregamos cuando lo editamos y si no existe no hace nada, tambien se puede preguntar, contains en vez de remove: nos va a indicar si contiene o no esa clase, va a ser un booleano; tambien esta toggle: es si no tiene la clase se la agrega y si la tiene se la quita
    submitBtn.innerText = 'Cargar Producto'

    console.log(Products)

    renderizarTabla()

    evt.target.reset() //resetea a la altura del form para que siga cargando

    elements.name.focus(); //esta tambien le deja el focus del puntero ahi en el elemento name de la tabla
}

function deleteProduct(id){
    swal({
        title: `Borrar Producto`,
        text: `Esta seguro que desea borrar el producto ${Products[id].name}`,
        icon: 'warning',
        buttons: {
            cancel: `Cancelar`,
            delete: `Borrar`
        }
    }).then(value => {
        if(value === `delete`){
            Products.splice(id, 1)
            
            localStorage.setItem("Products", JSON.stringify(Products));
        
            swal({
                title: `Elemento Borrado Correctamente`,
                icon: 'error'
            })
        
            renderizarTabla();    
        }else{
            return; //es como poner return null, incluso se podria dejar sin el else, para que no haga nada
        }
    })

    

}

// function editProduct(id){
//     let product = Products[id];
//     console.log(id, product)
// }

function editProduct(id){           //?     #3

    submitBtn.classList.add('edit-btn') //le agrega una clase al boton para que tome los estilos del css
    submitBtn.innerText = 'Modificar Producto' //va a cambiar lo que dice el boton

    let product = Products[id];
    console.table(product)
    const el = productForm.elements;
    el.name.value = product.name
    el.description.value = product.description
    el.price.value = product.price
    el.image.value = product.image
    el.stock.checked = product.stock
    el.joystick.checked = product.joystick
    

    editIndex = id; //esta declarado arriba de renderizarTabla y se hace para que podamos traernos el id del que estamos editando para mas tarde que se termine de modificar
}

//los id no necesariamente tienen que tener el mismo nombre, lo estoy haciendo asi porque quiero pero se podria mandar otro nombre

function setFavoriteProduct(id){ //?  #5

    //llamar a la funcion desde el boton favoritos


    //checkear si en el array productos hay algun producto cuyo indice sea distinto al elegido con la propi
    


    const favCount = 0; //esto sirve para lo de varios favoritos
    const prodFiltradosFavoritos = Products.forEach( prod =>{
        if(prod.favorite){
            favCount++
        }
    })

    Products.forEach((prod, index)=> {
        if(id === index) prod.favorite = true;
        else prod.favorite = false;
    })

    localStorage.setItem("favorites", JSON.stringify(favorites))

    renderizarTabla();
    
    //setear el producto elegido como favorite: true
    //!aldana hizo lo de abajo
    // Products.forEach((producto, index) =>{ 
    //     if(producto === ture){
    //         producto.favorite = false
    //         let fav = document.getElementById(`btn-fav-${index}`)
    //         fav.classList.remove('active')
    //     }
    // })
    // Product[index].favorite = true;

    // let fav = document.getElementById(`btn-fav-${id}`)
    // fav.classList.add('active')



    /*--------------------------si quisiese marcar varios favoritos seria de la siguiente forma ------------------------ #7
    if(favCount >= 3){
        favorites.shift();        
    }

    favorites.push(index);
    

    renderizarTabla();

    /*mi button quedaria asi ver min 30 maso o un poquito antes que pregunto yo esto <button class="product__action-btn btn-favorite ${producto.includes(index) ? 'active' : ''}" onclick="setFavoriteProduct(${index})">
                                        <i class="fa-regular fa-star"></i>
                                    </button>


                                    forma que anda
                                    <button class="product__action-btn btn-favorite ${producto.favorite ? 'active' : ''}" onclick="setFavoriteProduct(${index})">
                                        <i class="fa-regular fa-star"></i>
                                    </button>
    */
}

/*
<tr>
    <td>
        <img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/08/portada-ps5-scaled-1.jpeg?fit=2560%2c1707&quality=55&strip=all&ssl=1" width="120px" alt="">                    
    </td>
    <td>
        LAPTOP
    </td>
    <td>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quidem dolorem reprehenderit, atque laborum aperiam.
    </td>
    <td>
        $ 150000
    </td>
    <td>
        📦🎮
    </td>
    <td>
        🟥✏️⭐
    </td>
</tr>
*/
