import prompt from 'prompt-sync'
const input = prompt()

function main(){
    
    const n = Number(input('Número: '))
    
    for (let i=1; i<=n;i++){
        console.log(i)
    }

}
main()