import {input,print} from './io_utils.js'
function main(){
const palavra = input('Palavra: ')
for (let unidade of palavra){
    console.log(unidade)
}
const letrasnecessarias = input('Letras: ')
 for (let letra of letrasnecessarias){
    console.log(letra)
}
if (unidade===letra){
    console.log(unidade,letra)
} else{
    console.log('nao e igual')
}


    /*if(letrasiguais(unidade,letrasnecessarias)){
        console.log('True')
        } else {
        console.log('False')
    }
}


function letrasiguais(palavra,letrasnecessarias){
    for (let letra of letrasnecessarias){
        if (unidade===letra){
        return true
        } else {
        return false
        }
    }
}*/
}
main()