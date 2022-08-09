import prompt from 'prompt-sync'
const input = prompt()

function main(){
    
    let menor,maior
    let soma = 0
    let sequencia = []
    let [m,n] = input('').split(' ').map(Number)

    /*problemas dessa versap:
    1) como n ha valor anterior, o while vai ser executado antes para
    Ex: 7 5 faz e depois ve se é possivel continuar. No caso 0 1,
    executa e como não é mais !=0, para "atrasado"
    2) inteiros e para qd for 0, aqui não levo em conta inteiros*/ 
    while (!(m <= 0 || n <= 0)){
        
        if (m>n){
            maior = m
            menor = n
        } else {
            maior = n
            menor = m
        }
        
        for (let i = menor; i <= maior; i++){
            sequencia.push(i)
            soma += i
        }
        //join transforma array em string
        console.log(`${sequencia.join(' ')} Sum=${soma}`)
        soma = 0
        sequencia = []
        let entrada = input('').split(' ').map(Number)
        m = entrada[0]
        n = entrada[1]
    }
}
main()

//--------------- bee

        /*function main(){
            //versao professor 
            let [m, n] = input('M N: ').split(' ').map(Number)
            let menor, maior
                let saida, entrada
                let soma
            
                while (!(m <= 0 || n <= 0)){
                    saida = ''
                    soma = 0
                    if (m > n){
                        maior = m
                        menor = n
                    }else{
                        maior = n
                        menor = m
                    }
                    
                    while (menor <= maior){
                        soma += menor
                        saida = saida + `${menor} `
                        menor++
                    }
            
                    console.log(`${saida}Sum=${soma}`)
            
                    //colocando aqui no final, o M N pedido fora vai ser testado dentro do while
                    //se estivesse em cima, so o segundo, no caso esse, seria realizado 
                    entrada = input('M N: ').split(' ').map(Number)
                    m = entrada[0]
                    n = entrada[1]
                }
        
        }
        
        main()*/