const calendario = document.getElementById('calendario')

const opcoes = {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    width: 500,
    height: 500,
    headerToolbar: {
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        center: 'title',
        left: ''
    }
}

const calendarioJS = new FullCalendar.Calendar(calendario, opcoes)

let compromissosLS = window.localStorage.getItem('compromissos')
compromissosLS = JSON.parse(compromissosLS)

for (let i = 0; i < compromissosLS.length; i++) {

    const compromisso = compromissosLS[i]

    calendarioJS.addEvent({
        title: compromisso['title'],
        start: compromisso['start'],
        end: compromisso['end']
    })
}

calendarioJS.render()