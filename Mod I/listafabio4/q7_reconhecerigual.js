import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const x = Number(input('X: '))
    let y = Number(input('Y: '))

       while (y!=x){
        y = Number(input('Y: '))
        }
        console.log('Fim.')
}
main()