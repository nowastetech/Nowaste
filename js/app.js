
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

function logar(){

    var login = document.getElementById('Email').value
    var senha = document.getElementById('Senha').value

    if(login == "admin" && senha == "admin"){
        alert(sucesso)
        location.href = "inicio.html"
    }else{
        alert('Usuario ou senha incorretos')
    }
}