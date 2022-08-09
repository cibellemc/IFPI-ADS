import { input,print } from "../io_utils.js";
function main(){

    const data1 = input('Data de hoje (Ex: 19/04/2022): ')
    const [dia1,mes1,ano1] =data1.split('/').map(Number)

    const data2 = input('Data do seu nascimento (Ex: 20/04/2004): ')
    const [dia2,mes2,ano2] =data2.split('/').map(Number)

    function idade(a1,a2,m1,m2,d1,d2){
    let anos = a1-a2
    let meses = Math.abs(m1-m2)
    let dias = Math.abs(d1-d2)

    if (m2>m1){
        anos-=1
        meses=12-meses
    } else if (meses==0)  {
        if (dias!=0){
            anos-=1
            dias=30-dias
            }
    }
    return (`Idade: ${anos} anos, ${meses} meses e ${dias} dias. `)
}


print(idade(ano1,ano2,mes1,mes2,dia1,dia2)) 

}
main()

