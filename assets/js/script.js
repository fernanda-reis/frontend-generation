
let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

let nomeOk = false
let emailOk = false
let assuntoOk = false

let mapa = document.querySelector('#mapa')

nome.style.width = '100%'

email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
        nomeOk = false
    } else {
        txtNome.innerHTML = ""
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    //indexOf -> -1 se elemento não estiver presente; senão 1.
    if((email.value.indexOf('@') == -1) || (email.value.indexOf('.') == -1)) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    } else {
        txtEmail.innerHTML = '';
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    let contCaracteres = assunto.value.length

    txtAssunto.innerHTML = contCaracteres

    if(assunto.value.length > 200) {
        txtAssunto.style.color = 'red'
        assuntoOk = false
    } else {
        txtAssunto.style.color = 'black'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk && emailOk && assuntoOk) {
        alert('Formulário enviado!')
    } else {
        alert('Preencha o formulário corretamente.')
    }
}

function mapaZoom() {
    mapa.style.width = '550px'
    mapa.style.height = '300px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}