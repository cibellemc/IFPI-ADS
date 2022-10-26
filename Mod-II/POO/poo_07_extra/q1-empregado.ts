class Empregado{
    private _salario : number = 500
    calcularSalario(): number{
        return this._salario
    }

}

class Diarista extends Empregado {
    calcularSalario(): number {
        return this.calcularSalario() / 30
    }
}

class Horista extends Diarista {
    calcularSalario(): number {
        return this.calcularSalario() / 24
    }
}