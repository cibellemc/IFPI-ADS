import *as fs from 'fs'
import prompt from "prompt-sync";
//const input = prompt()

function main(){
    const frase = fs.readFileSync('frases.txt', 'utf-8').split('\n')
    let novafrase = ''
    let count = 0
    
    for (let palavra of frase){

        for (let letra of palavra){
            
            
            if (eh_espaco(letra)){
                novafrase += letra
                
            } else {
                
                if (count % 2 === 0){
                    novafrase += letra.toUpperCase()
    
                } else {
                    novafrase += letra.toLowerCase()
    
                }
                
                count++
                
            } 
        }
        console.log(novafrase)
        novafrase = ''
        count = 0
    }
    }

function eh_espaco(letra){
    return (letra.charCodeAt()===32)
}
main()