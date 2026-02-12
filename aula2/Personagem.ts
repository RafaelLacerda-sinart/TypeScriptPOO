//nome, energia, vida, ataque, defesa

export class Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ) { }

    status(): void {
        console.log("Guerreiro: ");
        console.log("Nome ", this.nome);
        console.log("Energia ", this.energia.toFixed(2));
        console.log("Ataque ", this.ataque.toFixed(2));
        console.log("Vida ", this.vida);
        console.log("Defesa ", this.defesa.toFixed(2));
    }

    treinarataque(): void {
        this.ataque += Math.random() * 7
        this.energia += Math.random() * 10
        if (this.defesa > 100) {
            this.defesa = 0
        }
    }


    treinardefesa(): void {
        this.defesa += Math.random() * 5
        this.energia += Math.random() * 10
        if (this.defesa > 100) {
            this.defesa = 0
        }

    }

    descansar(tempo: number): void {
        this.energia += tempo * Math.random() * 10
        if (this.energia > 100) {
            this.energia = 100
        }
    }

    batalhar(): number {
        let desgaste: number = Math.random() * 100
        this.energia -= desgaste
        return desgaste
    }

    isDead(): boolean {
        return this.energia < 0
    }

}
