function balada(){
    const nome = "Paulo Vitor"
    let nomeU = document.getElementById("nomeUsuario").value
    let saudacao = document.getElementById("saudacao")
    
    if(nomeU == nome){
        saudacao.innerHTML = "Bem-vindo, mestre"
    }else{
        saudacao.innerHTML = "Você não é meu mestre"
    }
}