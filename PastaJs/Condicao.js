
var valorA = Number(prompt("Digite o valor de x: "));
var valorB = Number(prompt("Digite o valor de y: "));
var valorC = Number(prompt("Digite o valor de z: "));

if (valorA > valorB) {
    alert("x é maior");
    alert("y é menor");
} else {
    alert("y é maior");
    alert("x é menor");
}


if (valorA > 0) {
   alert("positivo");
} else if (valorA < 0) {
   alert("negativo");
} else {
    alert("zero");
}


if (valorA > valorB && valorA > valorC) {
    alert(valorA);
} else if (valorB > valorC) {
    alert(valorB);
} else {
    alert(valorC);
}


console.log("---");
if (valorA < valorB && valorA < valorC) {
    alert(valorB + valorC);
} 
else if (valorB < valorA && valorB < valorC) {
    alert(valorA + valorC);
} 
else {
   alert(valorA + valorB);
}


var nota1 = Number(prompt("Digite numero 1: "));
var nota2 = Number(prompt("Digite numero 2: "));
var nota3 = Number(prompt("Digite numero 3: "));
var nota4 = Number(prompt("Digite numero 4: "));
var nota5 = Number(prompt("Digite numero 5: "));
var nota6 = Number(prompt("Digite numero 6: "));

alert("Valores informados: " + nota1 + "-" + nota2 + "-" + nota3 + "-" + nota4 + "-" + nota5 + "-" + nota6);
alert("A média é: " + (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6);


var listaNumeros = [];

listaNumeros.push(Number(prompt("Digite numero 1 para a lista: ")));
listaNumeros.push(Number(prompt("Digite numero 2 para a lista: ")));
listaNumeros.push(Number(prompt("Digite numero 3 para a lista: ")));
listaNumeros.push(Number(prompt("Digite numero 4 para a lista: ")));

var primeiroElemento = listaNumeros[0];
var ultimoElemento = listaNumeros[listaNumeros.length - 1];
var maiorValor = Math.max(...listaNumeros);
var menorValor = Math.min(...listaNumeros);

alert("Primeiro da lista: " + primeiroElemento);
alert("Último da lista: " + ultimoElemento);
alert("Maior da lista: " + maiorValor);
alert("Menor da lista: " + menorValor);


var item01 = Number(prompt("Digite o 1º número para soma restrita: "));
var item02 = Number(prompt("Digite o 2º número para soma restrita: "));
var item03 = Number(prompt("Digite o 3º número para soma restrita: "));
var item04 = Number(prompt("Digite o 4º número para soma restrita: "));
var item05 = Number(prompt("Digite o 5º número para soma restrita: "));
var item06 = Number(prompt("Digite o 6º número para soma restrita: "));

var somaRestrita = 0;
if (item01 < 72) { somaRestrita += item01; }
if (item02 < 72) { somaRestrita += item02; }
if (item03 < 72) { somaRestrita += item03; }
if (item04 < 72) { somaRestrita += item04; }
if (item05 < 72) { somaRestrita += item05; }
if (item06 < 72) { somaRestrita += item06; }

alert("Valores informados: " + item01 + "-" + item02 + "-" + item03 + "-" + item04 + "-" + item05 + "-" + item06);
alert("A soma dos menores que 72 é: " + somaRestrita);


var dado1 = Number(prompt("Digite nota 1 (entre 0 e 10): "));
var dado2 = Number(prompt("Digite nota 2 (entre 0 e 10): "));
var dado3 = Number(prompt("Digite nota 3 (entre 0 e 10): "));
var dado4 = Number(prompt("Digite nota 4 (entre 0 e 10): "));

if ((dado1 > 0 && dado1 < 10) && (dado2 > 0 && dado2 < 10) && (dado3 > 0 && dado3 < 10) && (dado4 > 0 && dado4 < 10)) {
    var mediaValidada = (dado1 + dado2 + dado3 + dado4) / 4;
    
    if (mediaValidada > 5) {
        alert("Você passou no teste! Média: " + mediaValidada);
    } else {
        alert("Tente novamente! Média: " + mediaValidada);
    }
} else {
    alert("Um ou mais números digitados estão fora do limite permitido (0 a 10).");
}


var anoNasc = Number(prompt("Digite seu ano de nascimento: "));
var idadeCalculada = 2026 - anoNasc;

if (idadeCalculada >= 16) {
    alert("Você está apto a exercer o direito do voto - " + idadeCalculada + " anos.");
} else {
    alert("Você não está apto a votar - " + idadeCalculada + " anos.");
}
