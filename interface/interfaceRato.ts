export default interface Rato {
    nome: string
    idade: number | string
    fugir() : void

}

class Jerry implements Rato {
    nome: string 
    idade: number | string

    constructor(n: string, i: number | string){
        this.nome = n
        this.idade = i
    }

    fugir(){
        console.log("Corre");
    }
}

let r = new Jerry("Jerry", "2 anos")
console.log(r.nome);
console.log(r.idade);
