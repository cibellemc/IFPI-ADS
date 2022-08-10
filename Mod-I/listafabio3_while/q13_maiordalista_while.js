import prompt from 'prompt-sync'
const input = prompt()
function main(){
    
    const numrep = Number(input('Quantidade de repeticões: '))
    let maior = -99999
    let i = 1
    
    while (i<=numrep){
        let num = Number(input(`${i}° numero: `))
        if(num>maior){
            maior = num
        }
        i++
    }
    console.log(`Maior: ${maior}`)

}
main()