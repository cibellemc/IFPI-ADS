import prompt from 'prompt-sync'
const input = prompt()

function main(){
    
    const repeticao = Number(input('Número de casos: '))
    let count = 0

    while (count<repeticao){

        let numero =  Number(input(`${count+1} número: `))
        let leds_necessarias = qtd_leds(numero)
        console.log(leds_necessarias)
        count++
    }

}
function qtd_leds(num){

    let leds_total = 0
    const num_string = String(num)

    for (let i of num_string){

        if (i === '1') {
            leds_total += 2

        }else if(i === '2' || i === '3' || i === '5'){
            leds_total += 5
    
        }else if (i === '4'){
            leds_total += 4
    
        }else if (i === '6' || i === '9' || i === '0'){
            leds_total += 6
    
        }else if (i === '7'){
            leds_total += 3
    
        }else if (i === '8'){
            leds_total += 7
        }
    }

    return (`${leds_total} leds`)

}
main()