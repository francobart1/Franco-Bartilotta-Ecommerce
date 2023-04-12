const params = window.location.search;


const paramsUrl= new URLSearchParams(params)

const paramsEntries = Object.fromEntries(paramsUrl)

const indice = paramsEntries.id;

const products = JSON.parse(localStorage.getItem('products'));

const product = products[id];

document.body.innerText = `<p>${JSON.stringify(product)}</p>`

`<img src="${product.image}></img>`