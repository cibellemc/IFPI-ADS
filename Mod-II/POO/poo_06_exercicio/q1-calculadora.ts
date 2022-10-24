export class Calculadora{
    private operando1: number
    private operando2: number

    constructor(o1: number, o2:number){
        this.operando1 = o1
        this.operando2 = o2
    }

    soma(): number{
        return this.operando1 + this.operando2
    }
    
    subtracao():number{
        return this.operando1 - this.operando2
    }

    multiplicacao(): number{
        return this.operando1 * this.operando2
    }

    divisao(): number{
        return this.operando1 / this.operando2
    }

    get operandoUm(){
        return this.operando1
    }
    
    get operandoDois(){
        return this.operando2
    }
}

function main (){
    let c : Calculadora = new Calculadora(1,2)
    console.log(c.soma())
    console.log(c.subtracao())
    console.log(c.multiplicacao())
    console.log(c.divisao())
    console.log(c.operandoUm); //com get nao precisa botar ()
}
