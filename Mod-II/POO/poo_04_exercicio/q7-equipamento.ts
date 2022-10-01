/* Uma classe Equipamento com:
a. um atributo ligado (tipo boolean)
b. dois métodos liga() e desliga(). O método liga torna o atributo ligado true e
o método desliga torna o atributo ligado false.
c. Crie um método chamado inverte(), que muda o status atual (se ligado,
desliga...se desligado, liga)
d. Crie um método que estaLigado() que retorna o valor do atributo ligado
e. Altere o comportamento dos métodos liga para caso o equipamento já
esteja ligado, não ligue novamente. Faça o mesmo com o método desligar.
f. Instancie uma classe Equipamento e teste todos os seus métodos.*/

class Equipamento{
    ligado: boolean

    constructor(){
        this.ligado = false
    }

    liga(): void{
        //this.ligado? console.log("Já está ligado") : this.ligado = true
        if(!this.ligado){
            this.ligado = true
        } 
    }

    desliga(): void{
        //!this.ligado? console.log("Já está desligado") : this.ligado = false
        if(this.ligado){
            this.ligado = false
        } 
    }

    inverte(): void{
        this.ligado? this.desliga() : this.liga()
        /*if(this.ligado ){
            this.ligado = false
        } else {
            this.ligado = true
        }*/
    }

    estaLigado(){
        return this.ligado
    }
}

let lampada : Equipamento = new Equipamento()
console.log("Lâmpada ligada? " + lampada.estaLigado())
lampada.liga()
console.log("Lâmpada ligada? " +lampada.estaLigado())
lampada.desliga()
console.log("Lâmpada ligada? " +lampada.estaLigado())
lampada.desliga()
console.log("Lâmpada ligada? " +lampada.estaLigado())
lampada.inverte()
console.log("Lâmpada ligada? " +lampada.estaLigado())
lampada.liga()
console.log("Lâmpada ligada? " +lampada.estaLigado())
lampada.desliga()
console.log("Lâmpada ligada? " +lampada.estaLigado())