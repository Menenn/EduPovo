var logado = false;
var logins = [];

if(JSON.parse(localStorage.getItem("logins")) != null){
    logins = JSON.parse(localStorage.getItem("logins"));
    console.log(logins);
}

var login;
checkLogin();
function checkLogin(){
    if(JSON.parse(localStorage.getItem("logado") != null)){
        if(JSON.parse(localStorage.getItem("logado")).isLogado){
            logado = true;
        }else{
            logado = false;
        }
    }else{
        logado = false;
    }

    if(logado != true && document.getElementById("registroNome") == null){
        console.log(window.location.href);
        //window.open("login.html", "_self");
        location.href = "login.html";
    }
    console.log("Rodando a consulta de login cada vez que recarregar a página, logado:" + logado);

}

function registrar(){
    //verificações
    var registroNome = document.getElementById("registroNome").value;
    var registroEmail = document.getElementById("registroEmail").value;
    var registroSenha = document.getElementById("registroSenha").value;

    if(logins != null){
        logins.forEach(element => {
            if(registroEmail == element.Email){
                alert("E-mail já cadastrado!");
                document.getElementById("registroEmail").value = "";
                return;
            }
        });
    }

    if(registroNome.length < 2){
        alert("O Nome deve ser preenchido corretamente!");
        document.getElementById("registroNome").value = "";
        return;
    }

    if(registroEmail.length < 5){
        alert("Insira um e-mail válido!");
        document.getElementById("registroEmail").value = "";
        return;
    }

    if(registroSenha.length < 5){
        alert("A senha deve ser maior que 5 dígitos!");
        document.getElementById("registroSenha").value = "";
        return;
    }

    var addarray = { Nome: registroNome, Email: registroEmail, Senha: registroSenha}

    logins.push(addarray);
    localStorage.setItem("logins", JSON.stringify(logins));
    console.log(logins);
}

function login(){
    var loginEmail = document.getElementById("loginEmail").value;
    var loginSenha = document.getElementById("loginSenha").value;

    console.log("Login: " + loginEmail + "\nSenha: " + loginSenha)
    if(logins != null){
        console.log("Entrou nos logins");
        logins.forEach(element => {
            console.log("Entrou no foreach");
            if(loginEmail == element.Email){
                console.log("Check 1 de login");
                if(loginSenha == element.Senha){
                    console.log("Check 2 de login");
                    var InfoLogin = { Nome: element.Nome, Email: element.Email, isLogado: true}
                    logado = localStorage.setItem("logado", JSON.stringify(InfoLogin));
                    //window.open("login.html");
                    location.href = "index.html";
                    return;
                }
            }
        });
    }
}

function changeNav(id){
    if(document.getElementById(id).style.display != "block"){
        document.getElementById(id).style.display = "block";
    }else{
        document.getElementById(id).style.display = "none";
    }
}