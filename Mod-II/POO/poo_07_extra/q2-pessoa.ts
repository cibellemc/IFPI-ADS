class Pesoa {
    private _nome: string
    private _sobrenome: string

    constructor(nome: string, sobrenome: string) {
        this._nome = nome
        this._sobrenome = sobrenome
    }

    get nome(): string {
        return this._nome
    }
   
    get sobrenome(): string {
        return this._sobrenome
    }

    get nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }
}

class Funcionario extends Pesoa {
    private _matricula: string
    private _salario: number

    constructor(nome: string, sobrenome: string, matricula: string, salario: number) {
        super(nome, sobrenome)
        this._matricula = matricula
        this._salario = salario
    }

    get matricula(): string {
        return this._matricula
    }
    
    get salario(): number {
        return this._salario
    }

    calcularSalarioPrimeiraParcela(): number {
        return this.salario * 0.6
    }
    
    calcularSalarioSegundaParcela(): number {
        return this.salario * 0.4
    }
}

class Professor extends Funcionario {
    private _titulacao: string

    constructor(nome: string, sobrenome: string, matricula: string, salario: number, titulacao: string) {
        super(nome, sobrenome, matricula, salario)
        this._titulacao = titulacao
    }

    calcularSalarioPrimeiraParcela(): number {
        return this.salario
    }
    
    calcularSalarioSegundaParcela(): number {
        return 0
    }

    saudacao(): string {
        return `${this._titulacao} ${this.nomeCompleto}`
    }
}

let pessoa: Pesoa = new Pesoa('Michel', 'Ângelo')
console.log(pessoa.nomeCompleto);

let funcionario: Funcionario = new Funcionario('Marcos', 'Vinícius', '1', 20000)
let professor: Professor = new Professor('Marcos', 'Vinícius', '1', 20000, 'Senpai')

console.log(professor.saudacao())
