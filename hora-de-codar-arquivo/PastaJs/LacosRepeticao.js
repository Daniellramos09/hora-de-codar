

var numeroContagem = Number(prompt("Digite o numero da contagem: "))
for (var i = numeroContagem; i > 0; i--) {
    alert(i)
}
alert("EXPLOSAO !")


var valor1 = Number(prompt("Digite o primerio valor: "))
var valor2 = Number(prompt("Digite o segundo valor: "))

while (valor2 <= 0) {
    valor2 = Number(prompt("Valor inválido! Digite um valor novamente: "))
}
alert("divisão: " + (valor1 / valor2))



var soma = 0
var quantidade = 0
for (var i = 15; i <= 100; i++) {
    soma += i
    quantidade++

}
var media = soma / quantidade

alert(media)



var inicio = Number(prompt("Digite o menor número:")); // ex: 50
var fim = Number(prompt("Digite o maior número:"));

var soma1 = 0

var totalNumeros = 0

for (var i = 0; i <= fim; i++) {
    soma1 = i++; //isso aqui vai pegar o valor dentro do I e somar 
    totalNumeros++; // esse aqui vai acumular os pontos
}

var media = soma1 / totalNumeros;
alert("Media: " + media)










var nota1 = Number(prompt("Digite numero 1: "))
var nota2 = Number(prompt("Digite numero 2:"))

var media = (nota1 + nota2) / 2;



var decicao = String(prompt("Quer ver a média de outro aluno? S/N: "))

if (decicao === "S" || decicao === "s") {
    nota1 = Number(prompt("Digite numero 1: "))
    nota2 = Number(prompt("Digite numero 2:"))

    media = (nota1 + nota2) / 2;

    if (media > 9.5) {
        alert("Sua média é: " + media + ". Está aprovado!")
    }
    else {
        alert("reprovado")
    }
}
else {
    alert("Programa finalizado!")
}







let meusNumeros = [];
soma = 0;
for (var i = 0; i < 6; i++) {

    var number = Number(prompt("Digite um numero de 0 a 10:"))

    soma += number
}

alert("media: " + soma / 6)


var N = Number(prompt("Digite um valor inteiro: "))

for (var i = 1; i <= N; i++) {
    alert(i)
}



for (var i = 0; i < 110; i++) {
    if (i > 100) {
        alert(i)
    }
}



let N1 = [];
var dentro = 0
var fora = 0
for (var i = 0; i < 10; i++) {
    N1 = Number(prompt("Digite algum valor: "))


    if (N1 > 24 && N1 < 42) {
        dentro++
    }

    if (N1 < 24 && N1 > 42) {
        fora++
    }


}

alert("Quantidade de numeros que estão entre 24 a 42: " + dentro)
alert("Quantidade de numeros que estão fora entre 24 a 42: " + fora)

















