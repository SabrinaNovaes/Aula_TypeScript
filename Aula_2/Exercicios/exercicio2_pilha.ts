/*Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, 
para organizar a retirada de livros de uma pilha. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
2: Listar todos os livros da Pilha
3: Retirar um livro da pilha 
0: O programa deve ser finalizado. 
Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia. */

import readline = require("readline-sync");
import Stack = require("../Stack");

// 1 - Menu
// 2 - adicionar / listar / retirar
// 3 - finalizar

const pilha = new Stack<string>();

let opcao;

while (opcao != 0) {
  console.log("------------------------------------------------------");
  console.log("--------------------- Livraria -----------------------");
  console.log("------------------------------------------------------");
  console.log("---------------- Escolha uma opção -------------------");
  console.log("------------------------------------------------------\n");

  console.log("  | 1 - Adicionar Livro  | 2 - Listar Livros |");
  console.log("  | 3 - Retirar Livro    | 0 - Sair          |\n");

  opcao = readline.questionInt("Escolha uma opcao de 1 a 0: ", {
    limitMessage: "Digite uma opcao valida! ",
  });

  switch (opcao) {
    case 1:
      pilha.push(readline.question("\nDigite o nome do Livro: "));
      console.log("\nLivros");
      pilha.printStack();
      console.log("\nLivro adicionado!\n");
      break;

    case 2:
      if (pilha.isEmpty()) {
        console.log("\nA Pilha está vazia!\n");
      } else {
        console.log("\nLivros");
        pilha.printStack();
        console.log("\nPilha de Livros!\n");
      }
      break;

    case 3:
      if (pilha.isEmpty()) {
        console.log("\nA pilha está vazia!\n");
      } else {
        pilha.pop();
        console.log("\nPILHA");
        pilha.printStack();
        console.log("\nUm Livro foi retirado da pilha!\n");
      }
      break;

    case 0:
      if (!pilha.isEmpty()) {
        console.log("\nAinda há livros na pilha\n");
      } else {
        console.log("\nPrograma finalizado!");
        opcao = 0;
      }
      break;

    default:
      console.log("Escolha uma opcao valida"!);
  }
}
