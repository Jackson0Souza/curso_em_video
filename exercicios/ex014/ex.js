function carregar() {

    let hr = document.getElementById('horas')
    let img = document.getElementById('foto')
    let title = document.getElementById('titulo')
    let agora = new Date()
    let horas = agora.getHours()
    let minutos = agora.getMinutes()    

    hr.innerHTML = `<strong>${horas}:${minutos}</strong>`

    if (horas >= 5 && horas<12) {
        title.innerText  = 'Bom dia!'
        img.src = 'manha.png'
        document.body.style.background = 'rgb(95, 221, 238)'
    } else if (horas >= 12 && horas < 18) {
        title.innerText = 'Boa tarde!'
        img.src = "tarde.png"
        document.body.style.background = 'rgb(23, 99, 89)'
    } else{
        title.innerText = 'Boa noite!'
        img.src = 'noite.png'
        document.body.style.background = 'rgb(2, 2, 39)'
    }

}

