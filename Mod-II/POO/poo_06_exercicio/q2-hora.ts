import prompt from 'prompt-sync'
const input = prompt()

class Hora{
    private hora: number
    private minuto: number
    private segundo: number

    constructor(h: number, m : number, s: number){
        this.hora = h
        this.minuto = m
        this.segundo = s
    }

    lerHora():number{
        return this.hora
    }

    lerMinutos():number{
        return this.minuto
    }

    lerSegundos(): string{
        return this.segundo <= 10 ? `0${this.segundo}` : `${this.segundo}`
    }

    horario(){
        return (`${this.lerHora()}:${this.lerMinutos()}:${this.lerSegundos()}`)
    }
}

let relogio : Hora = new Hora(10,37,1)
console.log(relogio.horario())