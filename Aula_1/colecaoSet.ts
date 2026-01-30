import leia = require('readline-sync')

const cores: Set<string> = new Set<string>()

// Coleção Set não aceita dados repetidos, bom para usernames
cores.add(leia.question('Digite uma cor: ')) // entrada de dados pelo terminal
cores.add('Azul')
cores.add('rosa')
cores.add('rosa') // não repete a cor

console.table(cores);

// Verifica se o elemento existe
console.log('A cor verde existe? ', cores.has('verde'));

// Deletar o elemento
cores.delete('Azul');

console.table(cores);

for (let cor of cores) {
    console.log(cor)
}

// Set não tem indice, então não podemos usar indexOf