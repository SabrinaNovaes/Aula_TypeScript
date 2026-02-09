import { Atleta } from "./Atleta";
import { Jogador } from "./Jogador";
import { Triatleta } from "./Triatleta";

//const atleta = new Atleta('Coco');

// atleta.visualizar();
// atleta.cansar();

const triatleta = new Triatleta('João');

triatleta.visualizar();

const jogador = new Jogador('Aleatorio');

jogador.visualizar();
jogador.aquecer();
jogador.cansar();
