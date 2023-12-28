const form = document.getElementById("form")
const input_username = document.getElementById('username')
const input_email = document.getElementById('email')
const input_password = document.getElementById('password')
const input_confirmPassword = document.getElementById('password-confirm')

form.addEventListener("submit",(evt)=>{
    evt.preventDefault()
    checkUsername()
    checkEmail()
    checkPassword()
    checkConfirmPassword()
    let isValid = checkForm()
    if(isValid){
        alert("Cadastrado com sucesso")
    }
})

input_username.addEventListener("blur",()=>{
    checkUsername()
})

input_email.addEventListener("blur",()=>{
    checkEmail()
})

input_password.addEventListener("blur",()=>{
    checkPassword()
})

input_confirmPassword.addEventListener("blur",()=>{
    checkConfirmPassword()
})

//Checar o username
const checkUsername = ()=>{
    const username = input_username.value
    if(username === ""){
        errorInput(input_username,"Preencha o nome de usuario")
    }else{
        input_username.parentElement.classList.remove("error")
    }
}

const checkEmail = ()=>{
    const email = input_email.value
    if(email === ""){
        errorInput(input_email,"Preencha o email")
    }else{
        input_email.parentElement.classList.remove("error")
    }
}

const checkPassword = ()=>{
    const password = input_password.value
    if(password === ""){
        errorInput(input_password,"A senha e obrigatoria")
    }else if(password.length < 8){
        errorInput(input_password,"A senha deve ser maior que 8 caracteres")
    }
    else{
        input_password.parentElement.classList.remove("error")
    }
}

const checkConfirmPassword = ()=>{
    const password = input_confirmPassword.value
    if(password === ""){
        errorInput(input_confirmPassword,"A senha e obrigatoria")
    }else if(password.length < 8){
        errorInput(input_confirmPassword,"A senha deve ser maior que 8 caracteres")
    }else if(password !== input_password.value){
        errorInput(input_confirmPassword,"As senhas tem que ser iguais")
    }
    else{
        input_confirmPassword.parentElement.classList.remove("error")
    }
}

const checkForm = ()=>{
    const formItems = [...document.querySelectorAll(".form-content")]
    const isValid = formItems.every((item)=>{
        return item.className === "form-content"
    })
    return isValid
}


//Erro no input
const errorInput = (input,message)=>{
    const formItem = input.parentElement
    formItem.classList.add("error")
    const textMessage =formItem.querySelector("a")

    textMessage.innerText = message
}