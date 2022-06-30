let Usuario = document.querySelector('#reguser')
let labelUser = document.querySelector('#labelUser')
let validUser = false

let senha = document.querySelector('#regpass')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confsenha = document.querySelector('#regconfpass')
let labelConfSenha = document.querySelector('#labelConfSenha')
let validConfSenha = false


Usuario.addEventListener('keyup', () => {
    if(Usuario.value.lenght <= 5){
        labelUser.innerHTML = 'MANO'
    } else{
        labelUser.setAttribute('style', 'color: green')
        validUser = true
    }
})

senha.addEventListener('keyup', () => {
    if(user.value.lenght <= 6){
        labelUser.setAttribute('style', 'color: red')
    } else{
        labelUser.setAttribute('style', 'color: green')
        validUser = true
    }
})

confsenha.addEventListener('keyup', () => {
    if(senha.value != confsenha.value){
        labelUser.setAttribute('style', 'color: red')
    } else{
        labelUser.setAttribute('style', 'color: green')
        validUser = true
    }
})


function cadastrar(){
    if(validUser && validConfSenha && validSenha){
        alert('Parabens')
    } else{
        alert('try again kk')
    }
}