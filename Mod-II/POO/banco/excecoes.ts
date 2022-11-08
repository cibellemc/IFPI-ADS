class AplicacaoErro extends Error{
    constructor(message: string){
        super(message)
    }
}

class SaldoInsuficiente extends AplicacaoErro{
    constructor(message: string){
        super(message)
    }
}
class ContaNaoEncontrada extends AplicacaoErro{
    constructor(message: string){
        super(message)
    }
}
class ValorInvalidoError extends AplicacaoErro{
    constructor(message: string){
        super(message)
    }
}

class PoupancaInvalidaError extends Error{
    constructor(message: string){
        super(message)
    }
}

export {AplicacaoErro, SaldoInsuficiente, ContaNaoEncontrada, ValorInvalidoError, PoupancaInvalidaError}