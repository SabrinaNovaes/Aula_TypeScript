/* Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, 
que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. 
Em seguida, faça o que se pede:
Mostre na tela todos os elementos da Collection Set. 
Veja o exemplo abaixo:
*/

import readline = require('readline-sync');

const numeros: Set<number> = new Set<number> ();

/* Digita 10 numeros e ignora os números iguais, imprimido somente os números não repetidos
for (let i = 0; i < 10; i ++) {
    numeros.add(readline.questionInt('Digite um numero: '));
} */

//Digita até que o tamanho do Set(10), seja atingido, se repetir numeros continuar pedindo até preencher 
while (numeros.size < 10) {
    const num = readline.questionInt('Digite um numero: ');
    numeros.add(num);
}

console.log(numeros)