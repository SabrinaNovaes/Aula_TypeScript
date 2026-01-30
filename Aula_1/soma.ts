import leia = require('readline-sync');

let num1, num2: number;

let soma: number;
// qualquerDado = true / "" , number
// let qualquerDado = any; // any é um tipo de dado que aceitar qualquer tipo de dado.

num1 = leia.questionInt('Digite o primeiro numero: ')
num2 = leia.questionInt('Digite o segundo numero: ');

soma = num1 + num2;

console.log(`${num1} + ${num2} = ${soma}`);


