//https://www.youtube.com/watch?v=oQPYxhqoH1o

class Empresa {
    readonly nome: string
    private readonly colaboradores: Colaborador[] = []
    protected readonly cnpj : string

    constructor (nome: string, cnpj: string){
        this.nome = nome
        this.cnpj = cnpj
    }

    addColab(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador)
    }

    mostrarColab() : void {
        for (let i = 0; i < this.colaboradores.length; i++){
            console.log(this.colaboradores[i]);
        }
    }
}

class Colaborador{
    constructor(readonly nome: string, readonly sobrenome: string){}
    // forma "contrata", já declara, recebe valores e inicializa
}

const colab1 = new Colaborador("Cibelle", "Maciel")
const colab2 = new Colaborador("Tais", "Souza")
const colab3 = new Colaborador("Neymar", "Junior")

const empresa1 = new Empresa("SoS", "11112-88888")
empresa1.addColab(colab1)
empresa1.addColab(colab2)
empresa1.addColab({nome: "Edgar", sobrenome: "Brito"}) // também é possível, partindo da ideia que tem as mesmas chaves de um objeto

console.log(empresa1)
empresa1.mostrarColab()
