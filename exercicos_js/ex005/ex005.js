function medir(){
    const maxVel = 80
    let veiculo = document.getElementById("velocidadeAtual").value
    let multa = document.getElementById("situacao")

    if(veiculo > maxVel){
        multa.innerHTML = "Pegue uma multa de 200tão"
    }else{
        multa.innerHTML = "Boa man"
    }
}
