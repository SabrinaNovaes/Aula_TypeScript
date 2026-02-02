import leia = require('readline-sync');


const participantes: Map<number, string> = new Map<number, string> ();

participantes.set(1, "Ana");
participantes.set(2, "Samuel"),
participantes.set(3, "Leonardo"),
participantes.set(4, "Camila");

for (let [matricula, nome] of participantes) {
    console.table(`Matricula: ${matricula} - Nome: ${nome}`)
}

// Procura um elemento pela chave
console.log('Existe a matricula 2? ', participantes.has(2));

// Procurar um elemento pelo valor, Converte para Array para poder achar 
console.log('Existe o participante Ana? ', Array.from(participantes.values()).includes("Ana"));

//.startWith() -> pega do começo 
//.endsWith() -> pega do final

for (let matricula of participantes.keys()) {
    console.log(matricula);
}

//Procura um valor com base na chave
console.log('Quaal é o nome do aluno com a mmatricula 3?', participantes.get(3));

participantes.delete(3);

console.table(participantes);