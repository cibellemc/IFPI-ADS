class Produto{
private identificador: string
private descricao: string
private qtdEstoque: number
private valorUnitario: number

constructor(identificador: string, descricao: string, qtdEstoque: number, valorUnitario: number){
    this.identificador = identificador
    this.descricao = descricao
    this.qtdEstoque = qtdEstoque
    this.valorUnitario = valorUnitario
}

repor(qtdAcrescimo: number): void{
    this.qtdEstoque += qtdAcrescimo
}

darBaixa(qtdDecrescimo: number): void{
    this.qtdEstoque -= qtdDecrescimo
}
}

class ProdutoPerecivel extends Produto{
    dataValidade: Date

    constructor(identificador: string, descricao: string, 
        qtdEstoque: number, valorUnitario: number, dataValidade: Date){
        super(identificador, descricao, qtdEstoque, valorUnitario)
        this.dataValidade = dataValidade
    }

    vencido(): boolean{
        let d: Date = new Date()
        return d>this.dataValidade 
    }
}