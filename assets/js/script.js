let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let filme = document.querySelector('#melhorFilme')

let nomeOk = false
let emailOk = false
let filmeOk = false

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'pink'
        nomeOk = false
    } else {
        txtNome.innerHTML = ""
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if ((email.value.indexOf('@') == -1) || (email.value.indexOf('.') == -1)) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'pink'
        emailOk = false
    } else {
        txtEmail.innerHTML = ''
        emailOk = true
    }
}

function validaFilme() {
    let txtFilme = document.querySelector('#txtFilme')
    if(filme.value.length == ''){
        txtFilme.innerHTML = 'Selecione um filme para votar'
        txtFilme.style.color = 'pink'
        filmeOk = false
    } else {
        txtFilme.innerHTML = ''
        filmeOk = true
    }

}

function enviar() {
    if (nomeOk && emailOk && filmeOk) {
        let voto = filme.value
        alert('Voto em ' + voto + ' computado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente.')
    }
}