// Estudo de condições js
// Testes usando o terminal

var idade = 67
if(idade < 16){
    console.log('Não vota')
}else if(idade < 18 || idade > 65){
    console.log('Voto opcional')
}else {
    console.log('Voto obrigatório')
}