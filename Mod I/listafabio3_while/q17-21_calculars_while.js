import prompt from 'prompt-sync'
const input = prompt()

function main(){

    menu()

    const option = Number(input('Opção: '))
    if (option === 1){
        console.log(calcular_s())  
    } else if (option === 2){
        console.log(divisores_diminuem())
    } else if (option === 3){
        console.log(dividendo_alternado())
    } else if(option === 4){
        console.log(soma_alternada())
    } else if (option === 5){
        console.log(dividendo_salto2())
    }
}

function calcular_s(){

    const N = Number(input('Número: '))
    let cont = 2
    let s = 1
    while (cont <= N){
        s += 1/cont
        cont++
    }
    return(`Valor de S = ${s.toFixed(3)}`)
}

function divisores_diminuem(){

    const N = Number(input('Número: '))
    let cont = N
    let divisor = 1
    let s = 0
    while (cont>=1){
        s += divisor/cont
        divisor++
        cont--
    }
    return (`Valor de S = ${s.toFixed(2)}`)
}

function dividendo_alternado(){

    const N = Number(input('Número: '))
    let cont = 1
    let s = 0
    let alternado = N
    while (cont<=N){
        if (cont%2!=0){
            s+=cont/alternado
        } else {
            s-=alternado/cont
        }
        cont++
        alternado--
    }
    return (`Valor de S = ${s.toFixed(2)}`)    
}

function soma_alternada(){

    const N = Number(input('Número: '))
    let cont = 1
    let s = 0
    while (cont<=N){
        if (cont%2!=0){
            s+=1/cont
        } else {
            s -= 1/cont
        }
        cont++
    }
    return (`Valor de S = ${s.toFixed(2)}`)
}

function dividendo_salto2(){

    let dividendo = 3   
    let cont = 2
    let s = 1
    while (cont<=50){
        s += dividendo/cont
        dividendo+=2
        cont++
    }
    return (`Valor de S = ${s.toFixed(2)}`)
}

function menu(){
    
    console.log('1 - Soma das divisões sucessivas até 1/N')
    console.log('2 - Soma das divisões sucessivas até numerador N')
    console.log('3 - Soma das divisões com denominador alternado')
    console.log('4 - Soma das divisões sucessivas até denominador N')
    console.log('5 - Soma das divisões sucessivas até 99/50\n')
}
main()