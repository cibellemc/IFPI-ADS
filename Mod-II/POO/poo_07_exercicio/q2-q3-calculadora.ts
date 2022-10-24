import { Calculadora } from "../poo_06_exercicio/q1-calculadora";

// link do código importado: https://github.com/cibellemc/IFPI-ADS/blob/main/Mod-II/POO/poo_06_exercicio/q1-calculadora.ts

let c1: Calculadora = new Calculadora(7,8) // questao 2 - testar método soma
console.log(c1.soma())

class CalculadoraCientifica extends Calculadora{ // questao 3: letra a - herança de Calculadora
    exponenciar(){
        return this.operandoUm ** this. operandoDois
    }
}

let c2: CalculadoraCientifica = new CalculadoraCientifica(2,0) //questao 3: letra b - herança de Calculadora
console.log(c2.exponenciar());

// questão 3: letra c - Necessária criação de método get para os dois operadores