// Classe Personagem
// Attrs= Nome, Vida, Energia, Ataque, Defesa

class Personagem {
    constructor (
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number,
    ){}
}

let ci: Personagem = new Personagem ("Cibelle", 100, 20, 40, 60)
console.log("person :>> ", ci)

/*
class Personagem{ // o que um personagem precisa ter
    nome: string = ''
    energia: number = 0
    vida: number = 0
    ataque: number = 0
    defesa: number = 0

    // no construtor pode especificar como atributos serao inicializados (valor padrao)
    // constructor() {} -> padrao
    // só pode ser chamado uma vez pro objeto (na criação)

    pode receber um argumento, para guardar usa this
        constructor(nome: string) {
            this.energia = 50 
            this.ataque = 50
            this.nome = nome} 
            
    constructor() {
        this.energia = 50 
        this.ataque = 50
    }
}

// tipos tradicionais e primitivos se inicializam com atribuição
// para criar um objeto deve-se criar uma instância (aloca memória com new)

let ci : Personagem = new Personagem()
ci.nome = "Cibelle Maciel"
ci.vida = 7
ci.energia = 4
ci.defesa = 10
ci.ataque = 10
console.log("person 1 :>> ", ci)

// pode ser criado "direto"
let kaic : Personagem = new Personagem()
kaic.nome = "Kaic Isaac"
kaic.vida = 7
kaic.energia = 4
kaic.defesa = 10
kaic.ataque = 10
console.log("person 2 :>> ", kaic)
*/
