function adicionarcompromisso() {
    const compromisso = document.getElementById('compromisso')
    const datainicio = document.getElementById('data_inicio')
    const datafim = document.getElementById('data_fim')
    const horainicio = document.getElementById('hora_inicio')
    const horafim = document.getElementById('hora_fim')

    const start = `${datainicio.value}T${horainicio.value}:00`
    const end = `${datafim.value}T${horafim.value}:00`

    const compromissocalendario = {
        title: compromisso.value,
        start: start,
        end: end
    }

    let compromissoLS = window.localStorage.getItem('compromissos')

    if (compromissoLS == undefined) {
        compromissoLS = []
    } else {
        compromissoLS = JSON.parse(compromissoLS)
    }

    compromissoLS.push(compromissocalendario)
    window.localStorage.setItem(
        'compromissos', JSON.stringify(compromissoLS)
    )

    alert('Compromisso cadastrado com sucesso (❁´◡`❁)!')
}

