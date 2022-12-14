/*Crie uma classe chamada Triangulo que:
a. Possua 3 atributos inteiros representando os lados;
b. Crie um método que retorna true se os lados formarem um triângulo de
acordo com a regra: |b-c| < a < b+c;
c. Crie 3 métodos: ehIsoceles(), ehEquilatero() e ehEscaleto() que retorne
verdadeiro caso o triângulo seja um dos tipos relacionados ao nome do
método. Eles devem chamar antes de tudo, o método da questão b. e
retornar false se esse método já retornar false também;
d. Instancie classes Triangulo de diferentes lados e seus métodos.*/

import prompt from 'prompt-sync'
const input = prompt()

class Triangulo{
    a: number 
    b: number 
    c: number 

    constructor(a: number, b:number, c: number){
        this.a = 0
        this.b = 0
        this.c = 0
    }

    ehTriangulo(): boolean{
        return Math.abs(this.b-this.c) < this.a && this.a < this.b+this.c
    }

    ehEquilatero(): boolean{
        return this.a === this.b && this.a === this.c
    }

    ehEscaleno(): boolean{
        return this.a !== this.b && this.a !== this.c
    }

    ehIsoceles(): boolean{
        return (this.ehTriangulo() && !this.ehEquilatero() && !this.ehEscaleno())
    }
}

function main(){
    console.log("Lados do triângulo separados por espaço (Ex: 7 4 9)");
    let lados = (input("> ")).split(" ").map(Number)

    let novoTriangulo : Triangulo = new Triangulo(lados[0], lados[1], lados[2])
    
    menu()
    let option = Number(input("> "))

    operacoes(option,novoTriangulo)
   
    /*let eq : Triangulo = new Triangulo()
    let es : Triangulo = new Triangulo()
    let is : Triangulo = new Triangulo()
    let a : Triangulo = new Triangulo()

    console.log(eq.ehTriangulo(7,7,7))*/

}

function operacoes(option: number, novoTriangulo: Triangulo){
    let lados: number[]
    while (option !== 6){

        if (option == 0 ){
            console.log(novoTriangulo.a)
            let wait = input("press <enter> to continue...\n")
            menu()

        } else if (option == 5){
            lados = (input("> ")).split(" ").map(Number)
            let espera = input("press <enter> to continue...\n")
            menu()

        } else if (novoTriangulo.ehTriangulo()){

            switch (option){
                case 1:
                    if(novoTriangulo.ehTriangulo()){
                        console.log("Os lados formam um triângulo!")
                    } else{
                        console.log("Os lados não atendem as condições de existência de um triângulo!")
                    }
                    let w = input("press <enter> to continue...\n")
                    menu()
                    break

                case 2:
                    if(novoTriangulo.ehEquilatero()){
                        console.log("Triângulo equilátero!")
                    } else{
                        console.log("Não é equilátero!")
                    }
                    let a = input("press <enter> to continue...\n")
                    menu()
                    break

                case 3:
                    if(novoTriangulo.ehIsoceles()){
                        console.log("Triângulo isósceles!")
                    } else{
                        console.log("Não é isósceles!") 
                    }
                    let i = input("press <enter> to continue...\n")
                    menu()
                    break

                case 4:
                    if(novoTriangulo.ehEscaleno()){
                        console.log("Triângulo escaleno!")
                    } else{
                        console.log("Não é escaleno!")
                    }
                    let t = input("press <enter> to continue...\n")
                    menu()
                    break

                default:
                    console.log("Ops.. Algo de errado aconteceu!")
            }
            
        } else {
            console.log("Não é um triângulo")
            let espera = input("press <enter> to continue...\n")
            menu()
        }

        option = Number(input("> "))

    }
}

function menu(){
    console.clear()
    console.log("----------- OPERAÇÕES COM TRIÂNGULOS -----------");
    console.log("0 - Exibir lados");
    console.log("1 - Verificar se as medidas formam um triângulo ");
    console.log("2 - Verificar se é um triângulo equilátero ");
    console.log("3 - Verificar se é um triângulo isósceles");
    console.log("4 - Verificar se é um triângulo escaleno");
    console.log("5 - Definir novas medidas");
    console.log("6 - Sair");
}


main()