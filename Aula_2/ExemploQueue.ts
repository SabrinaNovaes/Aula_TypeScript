import leia = require('readline-sync');
import Queue = require('./queue');

const fila = new Queue<string> ();

fila.enqueue('Renan');
fila.enqueue('Vivian');
fila.enqueue('Erick');
fila.enqueue(leia.question('Digite um nome: '));

fila.printQueue();

fila.dequeue();

console.log('\n')

fila.printQueue();

console.log('Tamanho da fila: ', fila.count());

console.log('Erick está na fila? ', fila.contains('Erick'));

let busca = 'Erick';
busca.toLowerCase;

console.log('O Erick está na fila?', fila.contains(busca));



