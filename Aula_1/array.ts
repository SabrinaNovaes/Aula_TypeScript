import leia = require('readline-sync');

//Array é uma classe que recebe qualquer tipo de dados, 
//mas é necessário especificar qual clase <number>
//Array é um objeto então ele precisa ser construido (new Array) e os parenteses especifica que é um metodo
const num: Array<number> = new Array<number>(); // tem que especificar o tipo

num.push(leia.questionInt('Digite um numero: '));
num.push(1, 2, 3, 4, 5);
num.push(5);

//console.table(num);

for(let numero of num) {
    console.log(numero);
}

// Verifica se o número existe no objeto
console.log('O número 5 existe: ', num.includes(5));

// Verifica o index do elemento
console.log('O indice do numero 7: ', num.indexOf(7));

// Deletar elemento
num.splice(num.indexOf(5), 1); 
// ,1) informa o numero de elementos que vc ques apagar depois do index




