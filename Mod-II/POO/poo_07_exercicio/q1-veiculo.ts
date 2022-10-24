class Veiculo { 
    placa: String; 
    ano: number; 

    constructor(placa: string, ano: number){
        this.placa = placa
        this.ano = ano
    }
}

class Carro extends Veiculo { 
    modelo: string; 

    constructor(placa: string, ano: number, modelo: string){
        super(placa, ano)
        this.modelo = modelo

    }
}
    
class CarroEletrico extends Carro { 
    autonomiaBateria: number; 

    constructor(placa: string, ano: number, modelo: string, autBateria: number){
        super(placa, ano, modelo)
        this.autonomiaBateria = autBateria

    }
}

// let carroEq : CarroEletrico = new CarroEletrico('abc', 2022, 'x', 100)
