import leia = require('readline-sync');
import Stack = require('./Stack');

const pilha = new Stack<string> ();

pilha.push('Renan');
pilha.push('Vivian');
pilha.push('Erick');
// pilha.push(leia.question("Digite um nome: "));

pilha.printStack();

console.log('\n');

// remove o elemento
pilha.pop();

pilha.printStack();

console.log('\nTamanho da pilha: ', pilha.count());

let busca = 'Erick';
busca.toLowerCase();

console.log('\nO Erick está na pilha: ', pilha.contains(busca));

