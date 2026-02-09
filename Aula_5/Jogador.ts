import { Corredor } from './Corredor';
import { Pessoa } from './Pessoas';

export class Jogador extends Pessoa implements Corredor {

    constructor (nome: string) {
        super(nome);
    }
    public aquecer(): void {
        console.log('Aquecendo antes de correr...');
    }
    public correr(): void {
        console.log('correr...');
    }

    public cansar(): void {
        console.log('Cansou, correu demais!');
    }
    public dormir(): void {
        console.log('Descansou!');
    }
    
}

// Boas praticas colocar o I antes do nome do arquivo para interface ex: INadador