import { input,print } from "../io_utils.js";
function main(){
    const inicio1 = print("---- PRIMEIRO PROFESSOR ----")
    const profum = input('Nome, horas trabalhadas e salário  por hora. (Ex: José 5 60): ')
    const separador = profum.split(' ')
    const nome1 = separador[0] 
    const horas1 = Number(separador[1])
    const dinheiro1 = Number(separador[2])

    const inicio2 = print("---- SEGUNDO PROFESSOR ----")
    const profdois = input('Nome, horas trabalhadas e salário  por hora. (Ex: José 5 60): ')
    const separador2 = profdois.split(' ')
    const nome2 = separador2[0] 
    const horas2 = Number(separador2[1])
    const dinheiro2 = Number(separador2[2])

    function calcularsalario(n1,h1,s1,n2,h2,s2){
        if ((h1*s1)>(h2*s2)){
            return (`${n1} tem o maior salario.`)
        } else return (`${n2} tem o maior salario.`)
        

    }


  
console.log(calcularsalario(nome1,horas1,dinheiro1,nome2,horas2,dinheiro2))

}
main()