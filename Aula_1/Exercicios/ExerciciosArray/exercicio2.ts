/*Escreva um programa para criar uma Collection Array do tipo number, 
inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, 
que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array,
 exiba na tela a posição deste número na Collection. 
 Caso o número não seja encontrado, 
o programa deverá exibir na tela a mensagem: 
O número NN não foi encontrado!
*/

import leia = require('readline-sync');

const numeros: Array<number> = new Array<number>();

numeros.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const numero = leia.questionInt('Digite um numero: ');

const existe = numeros.includes(numero);

if (existe) {
    const posicao = numeros.indexOf(numero);
    console.log(`O número ${numero} existe na posição: ${posicao}`);
} else {
    console.log(`O número ${numero} não foi encontrado!`);
}