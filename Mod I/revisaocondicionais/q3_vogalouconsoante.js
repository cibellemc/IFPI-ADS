import { input,print } from "../io_utils.js";

function main(){
    const letra = pedirinfo('Letra: ') 
    const vogais = 'aeiou'
    //console.log(ehvogal(letra,vogais))
    console.log(vogalouconsoante(letra,vogais))
}

function vogalouconsoante(letra,vogais){
    if(ehvogal(letra,vogais)){
        return('é vogal')
    } else{
        return('é consoante')
    }
}

function ehvogal(letra,vogais){
    for (let vogal of vogais){
        if (vogal===letra){
            return true
        }
    }  return false
}
    
function pedirinfo(txt){
    const info = input(txt)
    return info
        
}



main()