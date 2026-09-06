var x = 10;
var y = 20;
var z = 30;

if (x > y) {
    console.log("x é maior")
    console.log("y é menor")

}
else {
    console.log("y é maior")
     console.log("x é menor")
}


if (x % 2 == 0) {
    console.log("positivo")
}
else {
    console.log("negativo")
}

if (x > y && x > z) {
    console.log(x)
}
else if (y > x && y > z) {
    console.log(y)
}
else {
    console.log(z)
}

console.log("---")
if (x > y && x > z && y > x) {
    console.log(x + y)
}
else if (y > x && y > z && z > x) {
    console.log(y + z)
}
else {
    console.log(z + x)
}


var num1 = Number(prompt("Digite numero 1: "))
var num2 = Number(prompt("Digite numero 2: "))
var num3 = Number(prompt("Digite numero 3: "))
var num4 = Number(prompt("Digite numero 4: "))
var num5 = Number(prompt("Digite numero 5: "))
var num6 = Number(prompt("Digite numero 6: "))

alert(num1 + "-" + num2  + "-" + num3  + "-" + num4  + "-" + num5  + "-" + num6)

alert("A média é: " + (num1 + num2 + num3 + num4 + num5 + num6) / 6 )


//2.6. Leia 4 valores diferentes e informe apenas o primeiro, o último e o maior deles.

 var numeros = [];

 numeros.push(prompt("Digite numero 1: "))
 numeros.push(prompt("Digite numero 2: "))
 numeros.push(prompt("Digite numero 3: "))
 numeros.push(prompt("Digite numero 4: "))

 var primeiro = [0];
 var ultimo = [numeros.length - 1];
 // var maior = Math.max(...numeros)
 var menor = Math.min(...numeros)

 alert(primeiro)
 alert(ultimo)
 alert(maior)
 alert(menor)
 






var num1 = Number(prompt("Digite algum numero: "))
var num2 = Number(prompt("Digite algum numero: "))

var num3 = Number(prompt("Digite algum numero: "))

var num4 = Number(prompt("Digite algum numero: "))

var num5 = Number(prompt("Digite algum numero: "))

var num6 = Number(prompt("Digite algum numero: "))

var sum = 0
if(num1 < 72){
    sum += num1
}
if( num2 < 72){
    sum += num2
}
if( num3 < 72){
    sum += num3
}
if( num4 < 72){
    sum += num4
}
if( num5 < 72){
    sum += num5
}
if(num6 < 72) {
    sum += num6
}

alert(sum)



var num1 = Number(prompt("Digite algum numero: "))
var num2 = Number(prompt("Digite algum numero: "))

var num3 = Number(prompt("Digite algum numero: "))

var num4 = Number(prompt("Digite algum numero: "))

sum = 0;
if( num1 > 0 && num1 < 10){
    sum += num1
}
if( num2 > 0 && num2 < 10){
    sum += num2
}
if( num3 > 0 && num3 < 10){
    sum += num3
}
if( num4 > 0 && num4 < 10){
    sum += num4
}

var media = sum / 4

if (media > 5){
    alert("Você passou no teste! ")
}
else{
    alert("tente novamente!")
}

//TESTE


var num6 = Number(prompt("Digite seu ano de nascimento: "))
if(2026 - num6 >= 16){
    var idade = 2026 - num6 
    alert("Você está apto a exercer o direito do voto -" + idade)
}
else{
    
    alert("Você não está apto a votar -" + idade)
}

