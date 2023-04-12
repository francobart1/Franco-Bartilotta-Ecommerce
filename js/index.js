const user = JSON.parse(localStorage.getItem('currentUser'));
const cardContainer = document.querySelector('#card-caontainer');

const productsLS = JSON.parse(localStorage.getItem('products')) || [];

function renderProducts(products) {
    products.forEach((product, index) => {
        cardContainer.innerHTML = '';
        const card = document.createElement('article');
        card.classList.add('card');
        card.innerHTML = `<div class="card__header">
        <img src="${product.image}" alt="${product.image}"  class="card__img">
    </div>
    <div class="card__body">
        <div class="card__title">
            ${product.name}
        </div>
        <p class="card__description">
            ${product.description}
        </p>
        <div class="card__price">
        ${product.price}
        </div>
    </div>
    <div class="card__footer">
        <button class="card__btn-container" onclick"addToOrder(${index})" $(user)
        comprar
        </button>
        <div class="card__date">
        ${product.date}
        </div>
        <div class="card__btn-container">
            <a id=${index} class="card__btn" href="/pages/product-detail/product-detail.html">
                Detalle
            </a>
        </div>
    </div>`

    cardContainer.appendChild(card);

    })
}

renderProducts(productsLS);