class Jogador{
    forca : number
    nivel : number
    pontosAtuais: number

    constructor(f: number, n: number, p: number){
        this.forca = f
        this.nivel = n
        this.pontosAtuais = p
    }

    calcularAtaque(): number{
        return this.forca * this.nivel
    }

    atacar(adversario : Jogador): void{
        if (adversario.estaVivo()){
           adversario.pontosAtuais -= this.calcularAtaque()
        }
    }

    estaVivo(): boolean{
        return this.pontosAtuais > 0
    }

    toString(): string{
        return(`
        Força: ${this.forca}
        Nível: ${this.nivel}
        Pontos atuais: ${this.pontosAtuais}`);
        
    }
}

let j1 : Jogador = new Jogador(150, 3, 100)
let j2 : Jogador = new Jogador(300, 6, 200)

j1.toString()
console.log(j1.calcularAtaque())
j2.atacar(j1)
console.log(j1.estaVivo())
console.log(j2.estaVivo())
j2.toString()