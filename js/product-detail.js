const params = window.location.search;
const user = JSON.parse(localStorage.getItem('currentUser'));

console.log(params)

const paramsUrl= new URLSearchParams(params);

const paramsEntries = Object.fromEntries(paramsUrl);

const indice = paramsEntries.id;


console.log(paramsEntries)

const products = JSON.parse(localStorage.getItem('Products'));

const product = products[indice];

function renderizarProductos(products) {


    products.forEach((product, index) => {

document.body.innerHTML = 

`<header class="header">
<nav class="navbar">
    <a href="/index.html" class="navbar__nav-link">
        <img class="navbar__logo" src="/assets/images/logo-smartphone.svg.png" alt="Logo del ecommerce">
    </a>
    <div class="user-navbar">
        <div class="product-search-header">
            <input type="text" class="product-search__input" placeholder="Buscar...">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div class="user-navbar__cart-icon-container">
            <a href="/pages/order/order.html">
            <i class="fa-solid fa-cart-shopping"></i>
            <div class="user-navbar__cart-badge" id="cart-count">0

            </div>
            </a>
        </div>
        <div class="user-navbar__user-avatar-container">
            <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/50px-Default_pfp.svg.png" class="user-navbar__user-avatar" alt="Imagen de usuario">
            </a>
        </div>
        <!-- TODO: avatar de la persona logueada o nombre -->
    </div>
    
    <input type="checkbox" class="navbar__menu-btn" id="menu-btn">

    <label for="menu-btn" class="navbar__menu-label">
        <span class="navbar__menu-icon"></span>
    </label>


    <ul class="navbar__nav-links-container" id="navbar-list">
        <li class="navbar__nav-item">
            <a href="/index.html" class="navbar__nav-link">Inicio</a>
        </li>
        <li class="navbar__nav-item">
            <a href="/pages/contact/contact.html" class="navbar__nav-link">Contacto</a>
        </li>
        <li class="navbar__nav-item">
            <a href="/pages/about-us/about-us.html" class="navbar__nav-link">Nosotros</a>
        </li>
        <li class="navbar__nav-item">
            <a href="/pages/register/register.html" class="navbar__nav-link">Registro</a>
        </li>
        <li class="navbar__nav-item" id="sign-in">
            <a href="/pages/login/login.html"  class="navbar__nav-link">Login</a>
        </li>
    </ul>
</nav>

</header>

<main class= "main">
    <div class= "container-detail">
        <div class= "container-detail__img-container">
            <img src="${product.image}"></img>
        </div>
        <div class= "container-detail__important-container">
            <div class= "container-detail__header">
                <h1 class= "container-detail__title">
                    ${product.name}
                </h1>
            </div>
            <div class= "container-detail__body">
                <div class= "container-detail__description-container">
                    <p class="container-detail__description">${product.description}</p>
                </div>
                <div class= "container-detail__price-container">
                    <h1 class= "container-detail__price"> $${product.price} </h1>
                </div>
            </div>

            <div class= "container-detail__footer">
                <div class= "container-detail__cant-container">
                    <h3 class= "container-detail__cant"> Cantidad</h3>
                    <button id="boton-menos">-</button>
                    <span id="cantidad-productos">0</span>
                    <button id="boton-mas">+</button>
                </div>
                <div class= "container-detail__comprar-container">
                    <a class="container-detail__btn" onclick="addToOrder(${index})" ${user ? "" : "disabled"} >
                        Comprar ahora
                    </a>
                </div>

                <div class= "container-detail__agregar-container">
                    <a class="container-detail__btn" href="/pages/product-detail/product-detail.html?id=${index}">
                        Agregar al carrito
                    </a>
                </div>
            </div>
        </div>
    </div>

</main>
<footer class="footer">
        <div class="footer__column">
            <ul class="footer__contact-container">
                <li class="footer__contact-item"> 
                    <a href="https://www.facebook.com/" class="footer__contact-link">
                        <i class="fa-brands fa-facebook footer__contact-icon footer__contact-icon--facebook"></i>
                        Facebook
                    </a>
                </li>
                <li class="footer__contact-item">
                    <a href="https://www.instagram.com/?hl=es-la" class="footer__contact-link">
                        <i class="fa-brands fa-instagram 
                        footer__contact-icon
                        footer__contact-icon--instagram"></i>
                        Instagram
                    </a>
                </li>
                <li class="footer__contact-item">
                    <a href="https://ar.linkedin.com/" class="footer__contact-link">
                        <i class="fa-brands fa-linkedin 
                        footer__contact-icon
                        footer__contact-icon--linkedin"></i>
                        LinkedIn
                    </a>
                </li>
            </ul>
        </div>
        <div class="footer__column">
            <img src="/assets/images/logo-smartphone.svg.png" alt="Company Logo" class="footer__logo" width="50">
            <h2 class="footer__company-name" style="color: white;">
                DATATECH
            </h2>
            <p class="footer__copyrigth" style="color: white;">
                Todos los derechos reservados a DATATECH
            </p>
        </div>
        <div class="footer__column">
            <ul class="footer__contact-container">
                <li class="footer__contact-item">
                    <a href="#" class="footer__contact-link">
                        <i class="fa-solid fa-square-phone-flip footer__contact-icon"></i>
                        Teléfono
                    </a>
                </li>
                <li class="footer__contact-item">
                    <a href="#" class="footer__contact-link">
                        <i class="fa-solid fa-location-dot footer__contact-icon"></i>
                        Localización
                    </a>
                </li>
                <li class="footer__contact-item">
                    <a href="#" class="footer__contact-link">
                        <i class="fa-solid fa-envelope footer__contact-icon"></i>
                        Email
                    </a>
                </li>
            </ul>
        </div>
    </footer>`


    })

}

renderizarProductos(products);

