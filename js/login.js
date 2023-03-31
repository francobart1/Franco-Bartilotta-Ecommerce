const  loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.dir(loginForm)
    const { email, password } = loginForm.elements;

    
    const users = JSON.parse(localStorage.getItem('users')) || [];


    const user = users.find((usr) =>{
        if(usr.email === email.value) {
            return true;
        }
        return false
    })

    if(!user || user.password !== password.value) {
        alert('Datos ingresados no son correctos');
        return;
    }

        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Login correcto')
    
    

    

});