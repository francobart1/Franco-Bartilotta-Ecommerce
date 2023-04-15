const signIn = document.getElementById('sign-in');
const navbarList = document.getElementById('navbar-list')




function renderHeaderLinks () {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));


if(currentUser) {
    signIn.innerHTML = `<div onclick='logout()' style="cursor: pointer;" class="navbar__nav-link">Logout</div>`

    const adminProductLink = createLinkElement('admin-product','Admin Product');
    adminProductLink.innerHTML = `<li class="navbar__nav-item"><a href="/pages/admin-product/admin-product.html" class="navbar__nav-link">Admin Product</a>
    </li>`

    const adminUserLink = createLinkElement('admin-user', 'Admin User');
    adminUserLink.innerHTML = `<li class="navbar__nav-item"><a href="/pages/user-product/user-product.html" class="navbar__nav-link">Admin User</a>
    <li>`
    
    
    navbarList.appendChild(adminProductLink)
    navbarList.appendChild(adminUserLink)


} else {
    const link = createLinkElement('login', 'Login');
    signIn.replaceChildren(link);
    //const link = document.createElement('a');
    //link.classList.add('navbar__nav-link');
    //link.href = '/pages/login/login.html';
    //link.setAttribute('target', '_blank')
    //signIn.innerHTML= 'login';
    //signIn.replaceChildren(link)



    signIn.innerHTML = `<a href="/pages/login/login.html" id="sign-in" class="navbar__nav-link">Login</a>`
}

}
function  createListItemElement(path, text) {
    const listItem = document.createElement('li');
    listItem.classList.add('navbar__nav-item');
    listItem.setAttribute('id',)
    link = createLinkElement(path, text);
    listItem.setAttribute('id', path);

    listItem.appendChild(link);
    return listItem;
}

function  createLinkElement(path, text) {
    //let li;
    
    const link = document.createElement('a');
    link.classList.add('navbar__nav-link');
    link.href = `/pages/${path}/${path}.html`;
    link.innerHTML = text;
    //if(type) {
     //   li = document.createElement(type);
     //   li.appenChild(link)
    //}
    return link;
}

function logout() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if(currentUser.role === 'ADMIN_ROLE') {
        document.getElementById('admin-product').remove();
        document.getElementById('user-product').remove();
    }

    localStorage.removeItem('currentUser')

    renderHeaderLinks();
}


renderHeaderLinks();