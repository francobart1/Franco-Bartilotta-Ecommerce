const params = window.location.search;

console.log(params)

const paramsUrl= new URLSearchParams(params)

const paramsEntries = Object.fromEntries(paramsUrl)

const indice = paramsEntries.id;


console.log(paramsEntries)

const products = JSON.parse(localStorage.getItem('products'));

const product = products[indice];

document.body.innerText = `<p>${JSON.stringify(product)}</p>`

`<img src="${product.image}></img>`