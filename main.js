 var butt = document.getElementsByName('butt')
function gay(){
    alert('caguei');
 }

function soma(num1,num2){
    return num1 + num2;
}

console.log(soma(5,3));

function quadrado(lado){
    return lado**2;
}
console.log(quadrado(6));
let media = parseInt(prompt('qual o 1º dos 3 numeros para achar a media?'));
let media1 = parseInt(prompt('qual o 2º dos 3 numeros para achar a media?'));
let media2 = parseInt(prompt('qual o 3º dos 3 numeros para achar a media?'));
let medias = function(num1,num2,num3){
    return (num1+num2+num3)/3;
}
console.log(medias());