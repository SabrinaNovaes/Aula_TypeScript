import leia from "readline-sync";

let opcao: number;
let num1, num2: number;

do {
  console.log("***************************************************************");
  console.log("          | 1 - Soma          | 2 - Subtração |");
  console.log("          | 3 - Multiplicação | 4 - Divisão   |");
  console.log("          | 0 - Sair          |");
  console.log("***************************************************************");

  opcao = leia.questionInt("Digite a operacao: ");

  if (opcao === 0) {
    sobre();
    process.exit(0); // Para tudo, encerra o loop
  }

  switch (opcao) {
    case 1:
        [num1, num2] = numeros(); // usando a desestruturação
        console.log(`${num1} + ${num2} = ${somar(num1, num2)}`);
    break;
1
    case 2:
        [num1, num2] = numeros();
        console.log(`${num1} - ${num2} = ${subtrair(num1, num2)}`);
    break;

    case 3:
        [num1, num2] = numeros();
        console.log(`${num1} x ${num2} = ${multiplicar(num1, num2)}`);
    break; 

    case 4: 
        [num1, num2] = numeros();
        console.log(`${num1} / ${num2} = ${dividir(num1, num2)}`);
    break;

    default: 
        console.log('Operação inválida!');
  }

} while (true);

function numeros(): [number, number] { //desestruturação
    const num1 = leia.questionFloat('Digite o primeiro numero: ');
    const num2 = leia.questionFloat('Digite o segundo numero: ');
    return [num1, num2];
}

function somar(num1: number, num2: number): number {
  return num1 + num2;
}

function subtrair(num1: number, num2: number): number {
  return num1 - num2;
}

function multiplicar(num1: number, num2: number): number {
  return num1 * num2;
}

function dividir(num1: number, num2: number): number {
  return num1 / num2;
}

function sobre(): void {
    console.log('Programa desenvolvido por Sabrina!');
}