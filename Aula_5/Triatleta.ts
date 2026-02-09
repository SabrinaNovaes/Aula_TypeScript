import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoas";

export class Triatleta extends Pessoa implements Ciclista, Corredor, Nadador {

    public aquecer(): void {
        console.log('Aquecendo o corpo');
    }

    public cansar(): void {
        console.log('Cansou, correu demais!');
    }

    public dormir(): void {
        console.log('Descansar!');
    }

    public pedalar(): void {
        console.log("Pedalando na bicicleta");
    }

    public correr(): void {
        console.log("Correndo");
    }

    public nadar(): void {
        console.log("Nadando");
    }
}
