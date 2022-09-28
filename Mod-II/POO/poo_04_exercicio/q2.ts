/*Ainda sobre a classe do exemplo anterior, considere o código abaixo:
let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);
Adicione o construtor que aceite um parâmetro inteiro e faça a inicialização do atributo
quantReservas.*/

import prompt from 'prompt-sync'
const input = prompt()

class Hotel {
    quantReservas : number;
    constructor(inicio: number){
        this.quantReservas = inicio
    }
    adicionarReserva(novasReservas : number) : void {
    this.quantReservas += novasReservas
    }
}

const reservasFeitas = Number(input("Quantidade de quartos já reservados no hotel: "))
let hotelA : Hotel = new Hotel(reservasFeitas)

const reservasNovas = Number(input("Quantidade de novas reservas: "))
hotelA.adicionarReserva(reservasNovas)

console.log(`Há ${hotelA.quantReservas} quartos reservados no Hotel A.`);
