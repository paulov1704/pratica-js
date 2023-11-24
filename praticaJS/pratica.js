var num1 = document.getElementById('number01').value
var num2 = document.getElementById('number02').value
var num3 = document.getElementById('number03').value
var res = document.getElementById('resultado')


function comparar(num1){
    if(num1 >= 5){
        document.body.style.background = 'red'
    }else{
        document.body.style.background = 'blue'
    }
    
}


