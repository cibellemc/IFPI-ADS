import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const x = Number(input('X: '))
    let y = Number(input('Y: '))
    let z = Number(input('Z: '))

       while (y+z!=x){
            y = z
            z = Number(input('Novo numero: '))
        }
        console.log('Fim.')
        console.log(`${y}+${z}=${x}`)
}
main()