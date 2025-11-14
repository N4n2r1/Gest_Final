function validarlogin() {
    const email = document.getElementById('email')
    const senha = document.getElementById('senha')

    let lista = window.localStorage.getItem('usuarios')

    lista = JSON.parse(lista)

    let logado = false

    for (let i = 0; i < lista.length; i++) {

        const usuario = lista[i]
        const emaillista = usuario.email
        const senhallista = usuario.password

        if (emaillista == email.value) {
            if (senhallista == senha.value) {
                logado = true

                window.location.href = '../pages/inicio.html'
                break
            } else {
                logado = false
            }
        } else {
            logado = false
        }

    }

    if (logado == false) {
        alert('Login inválido')
    }


    if (logado == false) {
        alert('Login inválido')
    } else {
        window.location.href = '../pages/inicio.html'
    }

}