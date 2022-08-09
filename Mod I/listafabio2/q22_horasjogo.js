import {input,print} from '../io_utils.js'

function main(){

    const iniciojogo = input('Horário de início do jogo. (Em horas e min. Ex: 16h30): ')
    const fimjogo = input('Horário de fim do jogo. (Em horas e min. Ex: 18h): ')

    const [horasexatas0,minutos0] = iniciojogo.split('h').map(Number)
    const [horasexatas1,minutos1] = fimjogo.split('h').map(Number)
    
    function duracaodejogo (h1,m1,h0,m0){

        let duracaohoras,duracaomin=0

        if ((Math.abs(h1-h0))>=0&&(Math.abs(h1-h0))<=24){ 

            if (h1-h0==0){
                if (m0>m1){
                    duracaomin = Math.abs(m1-m0) 
                    return (`O jogo durou ${duracaomin}min`)
                } else {
                        duracaomin = Math.abs(m1-m0)
                        return (`O jogo durou ${duracaomin}min`)
                    } 

            } else if (h1<h0){
                if (m0-m1==0){
                    duracaohoras = 24-Math.abs(h1-h0)
                    return (`O jogo durou ${duracaohoras}h${duracaomin}min`)
                } else {
                    duracaohoras = 24-Math.abs(h1-h0)
                    duracaomin = 60-Math.abs(m1-m0)  
                    return (`O jogo durou ${duracaohoras}h${duracaomin}min`)
                    }
                    
            } else if (h1-h0!=0){
                if (m1-m0!=0){
                    if (m0>m1){
                        duracaohoras = Math.abs(h1-h0)-1
                        duracaomin = 60-Math.abs(m1-m0)
                        return (`O jogo durou ${duracaohoras}h${duracaomin}min`)
                    } else {
                        duracaohoras = Math.abs(h1-h0)
                        duracaomin = Math.abs(m1-m0)
                        return (`O jogo durou ${duracaohoras}h${duracaomin}min`)
                    }
                } else  duracaohoras = Math.abs(h1-h0)
                    return (`O jogo durou ${duracaohoras}h`)
            }
        } else return ('A duração máxima do jogo é 24 horas.')
    }
    print(duracaodejogo(horasexatas1,minutos1,horasexatas0,minutos0))
}
main()