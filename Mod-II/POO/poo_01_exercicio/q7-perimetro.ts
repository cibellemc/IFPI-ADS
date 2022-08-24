/* Considerando o exemplo da classe Retangulo dos slides, implemente um método
adicional chamado que calcule o perímetro do retângulo e altere a classe
TestaRetangulo para exibir o cálculo do perímetro.*/

import prompt from 'prompt-sync'
const input = prompt()

class Retangulo {
    l1: number = 0
    l2: number = 0

    calcularArea(): number {
        return this.l1 * this.l2
    }

    calcularPerimetro(): number {
        return this.l1 * 2 + this.l2 * 2
    }
}

let retang : Retangulo = new Retangulo()
retang.l1 = Number(input("Lado 1: "))
retang.l2 = Number(input("Lado 2: "))

console.log("1 - Área do retângulo")
console.log("2 - Perímetro do retângulo")
const option = Number(input(">> "))

switch (option) {
    case 1 :
        console.log(retang.calcularArea())
        break
    case 2 : 
        console.log(retang.calcularPerimetro())
        break
    default :
        console.log("Opção inválida")
}