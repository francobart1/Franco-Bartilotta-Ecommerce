const registerForm = document.querySelector('#registerForm');

const registerBtn = document.getElementById('registerSubmit');

registerForm.addEventListener('submit', (event)=> {


    console.log('submit event')

    event.preventDefault();

    const el = event.target.elements;

    if(el.password.value !== el.password2.value) {
        console.warn('El password no coinciden')
        return

    }

    const user = {
        fullName: el.fullName.value,
        email: el.email.value,
        password: el.password.value,
    }



})