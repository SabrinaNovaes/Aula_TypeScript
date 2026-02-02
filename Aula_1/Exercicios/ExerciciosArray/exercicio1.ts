/*
Escreva um programa para criar uma Collection Array de Objetos do tipo string. 
O programa deverá solir ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. 
Em seguida, faça o que se pede:
Mostre na tela todas as cores adicionadas. 
Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
*/

import leia = require('readline-sync');

const cores: Array<string> = new Array<string>();

// Entrada de dados pelo console
for (let i = 0; i < 5; i ++) {
    const entrada = (leia.question('Digite uma cor: ').trim());
    const cor = entrada.charAt(0).toUpperCase() + entrada.slice(1).toLowerCase();
    cores.push(cor);
}

console.table(cores.sort());



