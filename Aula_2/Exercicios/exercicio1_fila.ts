/*
Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string,
para organizar uma fila por ordem de chegada dos Clientes de um Banco. 
O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila 
0: O programa deve ser finalizado. 
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.
*/
import readline = require('readline-sync');
import Queue = require('../queue');

// 1 - Criar uma fila
// 2 - Menu de 4 opções
// 3 - mostrar fila vazia

let fila = new Queue<string>();

let opcao;

while (opcao != 0) {
  console.log('----------------------------------------------------');
  console.log('-------------------- Bank Gen ----------------------');
  console.log('----------------------------------------------------');
  console.log('-------------- Escolha uma operação ----------------');
  console.log('----------------------------------------------------\n');

  console.log('  | 1 - Adicionar Cliente | 2 - Listar Clientes |');
  console.log('  | 3 - Chamar Cliente    | 0 - Finalizar fila  |\n');

  opcao = readline.questionInt('Escolha uma opcao de 1 a 0: ', {
    limitMessage: 'Digite uma opcao valida! ',
  });

  switch (opcao) {
    case 1:
      fila.enqueue(readline.question('\nDigite o nome do Cliente: '));
      console.log('\nFILA');
      fila.printQueue();
      console.log('\nCliente adicionado!\n');
      break;

    case 2:
      if (fila.isEmpty()) {
        console.log('\nA fila está vazia!\n');
      } else {
        console.log('\nFILA');
        fila.printQueue();
        console.log('\nLista de clientes na fila!\n')
      }
      break;

    case 3:
      if (fila.isEmpty()) {
        console.log('\nA fila está vazia!\n');
      } else {
        fila.dequeue();
        console.log('\nFILA');
        fila.printQueue();
        console.log('\nCliente foi chamado!\n')
      }
      break;

    case 0:
      if (!fila.isEmpty()) {
        console.log('\nAinda há clientes na fila\n');
      } else {
        console.log('\nPrograma finalizado!');
        opcao = 0;
      }
      break;
    
    default: 
      console.log('Escolha uma opcao valida!');
  }
}
