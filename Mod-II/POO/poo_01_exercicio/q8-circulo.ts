/*Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que
calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor
ao raio e exiba a área e o perímetro chamando os dois métodos definidos.*/

import prompt from 'prompt-sync'
const input = prompt()

class Circulo {
    raio: number = 0

    //area = pi * (r **2)
    calcularArea() : number{
        return (this.raio) ** 2 * 3.14 
    }

    //perimetro = 2 * pi * r
    calcularPerimetro() : number{
        return this.raio * 2 * 3.14
    }
}

let circulo : Circulo = new Circulo()
circulo.raio = Number(input("Raio: "))

console.log("1 - Área do círculo")
console.log("2 - Perímetro do círculo")
const option = Number(input(">> "))

switch (option) {
    case 1 :
        console.log(circulo.calcularArea())
        break
    case 2 : 
        console.log(circulo.calcularPerimetro())
        break
    default :
        console.log("Opção inválida")
}