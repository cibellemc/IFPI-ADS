import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const repeticao = Number(input('N° de vezes: '))
    
    let rato = 0
    let sapo = 0
    let coelho = 0
    let total = 0
    let cont  = 1
    
    while (cont<=repeticao){

        let animals =  input('').split(' ')
        let quantidade = Number(animals[0])
        let animal = animals[1]
        
        if(animal ==='R'){
            rato += quantidade
        } else if(animal ==='S'){
            sapo += quantidade
            
        } else if(animal ==='C'){
            coelho += quantidade
            
        }
        total = rato+coelho+sapo
        cont++
    }

    let percoel = ((coelho/total)*100).toFixed(2)
    let perrato = ((rato/total)*100).toFixed(2)
    let  persapo = ((sapo/total)*100).toFixed(2)
    
    console.log(`Total: ${total}`)
    console.log(`Total de coelhos:${coelho}\nTotal de ratos: ${rato}\nTotal de sapos:${sapo}`)
    console.log(`Percentual de coelhos: ${percoel} %\nPercentual de ratos: ${perrato} %\nPercentual de sapos: ${persapo} %`)

}
main()

//--------------------- bee
function main(){
    const repeticao = Number(lines[0])
    
    let rato = 0
    let sapo = 0
    let coelho = 0
    let total = 0
    let cont  = 1
    
    while (cont<=repeticao){
        let animals =  (lines[cont]).split(' ')
        let quantidade = Number(animals[0])
        let animal = animals[1]
        
        if(animal==='R'){
            rato += quantidade
        } else if(animal==='S'){
            sapo += quantidade
        } else {
            coelho += quantidade
        }
        
        total = rato+coelho+sapo
        
        cont++
    }
    let percoel = ((coelho/total)*100).toFixed(2)
    let perrato = ((rato/total)*100).toFixed(2)
    let  persapo = ((sapo/total)*100).toFixed(2)
    
    console.log(`Total: ${total} cobaias`)
    console.log(`Total de coelhos: ${coelho}\nTotal de ratos: ${rato}\nTotal de sapos: ${sapo}`)
    console.log(`Percentual de coelhos: ${percoel} %\nPercentual de ratos: ${perrato} %\nPercentual de sapos: ${persapo} %`)

}
main()