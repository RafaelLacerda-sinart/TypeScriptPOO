import { Priest } from "./Priest";
import { Warrior } from "./Warrior";
import { Mage } from "./Mage";
import { Personagem } from "./Personagem";

let mage: Personagem = new Mage("Angelo mage");
let warrior: Personagem = new Warrior("Angelo warrior");
let priest: Personagem = new Priest("Angelo priest");


const personagens: Personagem[] = []
personagens.push(mage)
personagens.push(priest)


personagens.forEach((p) => console.log(p.atacar()))

