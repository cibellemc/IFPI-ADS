import { input,print } from "../io_utils.js";
function main(){

const lados = input('Informe a medida dos 3 lados do triângulo. (Ex: 12 18 14): ')
const [v1,v2,v3] = lados.split(' ').map(Number)


function temhipotenusa(a,b,c){
    let maior,cateto1,cateto2
    if (a>b&&a>c){
    maior=a
    cateto1= b
    cateto2=c
    }else if (b>a&&b>c){
        maior=b
        cateto1=a
        cateto2=c
    } else {
        maior=c
        cateto1=a
        cateto2=b
    }

    if (cateto1**2+cateto2**2===maior**2){
        return(`${cateto1} e ${cateto2} são catetos. \n${maior} é a hipotenusa.`)
    } return (`O triângulo não possui hipotenusa.`)
}


print(temhipotenusa(v1,v2,v3))
}
main()