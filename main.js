 var butt = document.getElementsByName('butt')
 butt.onclick = function(){
    alert(caguei);
 }

function soma(num1,num2){
    return num1 + num2;
}

console.log(soma(5,3));

function quadrado(lado){
    return lado**2;
}
console.log(quadrado(6));

let media = function(num1,num2,num3){
    return (num1+num2+num3)/3;
}
console.log(media(1,2,3));