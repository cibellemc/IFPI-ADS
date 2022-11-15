export class Person {
    private _nome: string;
    constructor(nome: string) {
        this._nome = nome;
    }

    get nome(){
        return this._nome
    }
}
