import { Personagem } from "./Personagem";
import prompt from "prompt-sync";


let person: Personagem = new Personagem("Sansa Stark", 100, 40, 20, 20);

let teclado = prompt();
let option: number = 0;

while (option != 9 || person.isDead()) {
    console.log("+========= Personagem =============+");
    console.log("|1. Treinar ataque                 |");
    console.log("|2. Treinar defesa                 |");
    console.log("|3. Descansar                      |");
    console.log("|4. Entrar em batalha              |");
    console.log("|5. Mostrar atributos              |");
    console.log("|9. Sair                           |");
    console.log("+==================================+");

    option = +teclado("Escolha uma ação: ");

    switch (option) {
        case 1:
            person.treinarataque()
            person.status()
            break;
        case 2:
            person.treinardefesa()
            person.status()
            break;
        case 3:
            let horas: number = +teclado("Digite o numero de Horas para descansar: ")
            person.descansar(horas)
            person.status()
            break;
        case 4:
            let rest: number = person.batalhar()
            console.log(`Está batalha custou ${rest} de energia`);
            person.status()
            break;
        case 5:
            person.status()
            break;
        case 9:
            break;
        default:
            break;
    }
}