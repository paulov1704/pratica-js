function balada(){
    let idade = document.getElementById("idade").value
    let entrada = document.getElementById("entrada")

    if(idade >= 18){
        entrada.innerHTML = "Entrada permitida"
    }else{
        entrada.innerHTML = "Você não tem idade o suficiente"
    }

}