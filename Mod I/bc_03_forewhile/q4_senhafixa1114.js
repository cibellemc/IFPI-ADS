import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let senha = Number(input('Senha: '))
    
while (senha!==2002){
    console.log('Senha Invalida')
    senha = Number(input('Senha: '))
}
console.log('Acesso Permitido')
}
main()

//-------------bee
function main(){
    //let senha = Number(input('Senha: '))
    let cont = 0
    let senha = Number(lines[cont++])
    
while (senha!==2002){
    console.log('Senha Invalida')
    //senha = Number(input('Senha: '))
    senha = Number(lines[cont++])
}
console.log('Acesso Permitido')
}
main()