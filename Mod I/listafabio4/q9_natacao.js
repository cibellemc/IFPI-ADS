
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    //Ler número da prova e quantidade de  nadadores
    let [nprova,qtdnadadores] = (input('N° da prova e quantidade de nadadores (1 15): ')).split(' ').map(Number)
    let nome,classificacao,tempo,clube
    let pontosa = 0
    let pontosb = 0
    
    //Flag quando nprova=0 && qtdnadadores=0
       while (!(nprova === 0 && qtdnadadores === 0)){
           //para cada nadador pedir nome,classificacao,tempo,clube(a ou b)
           //o que importa é so classificação e clube
           //1° 9 pt 2° 6 pt 3° 4 pt 4° 3
            for(let i = 1; i <= qtdnadadores; i++){
                nome = (input('Nome: '))
                classificacao = Number(input('Classificção (somente numeros): '))
                tempo = Number(input('Tempo: (0.70) '))
                clube = (input('Clube: (a ou b): '))

                if(clube === 'a'){
                    if(classificacao === 1){
                        pontosa += 9
                    } else if (classificacao === 2){
                        pontosa += 6
                    }else if (classificacao === 3){
                        pontosa += 4
                    }else{
                        pontosa += 3
                    }
                    
                } else if (clube === 'b') {
                    if(classificacao === 1){
                        pontosb += 9
                    } else if (classificacao === 2){
                        pontosb += 6
                    }else if (classificacao === 3){
                        pontosb += 4
                    }else{
                        pontosb += 3
                    }
                } else{
                    console.log('Clube inválido.')
                }

            }
            console.log(`${pontosa}`)
            console.log(`${pontosb}`)

            [nprova,qtdnadadores] = (input('N° da prova e quantidade de nadadores (1 15): ')).split(' ').map(Number)

        }
}
main()