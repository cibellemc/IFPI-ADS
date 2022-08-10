
import {print, input} from '../io_utils.js'
function main(){
    const num = input('Informe 2 números. (Ex: 7 9): ')
    const [num1,num2] = num.split(' ').map(Number)

    function restodiv(n1,n2){
    let paridaden1,paridaden2,quadradon1,quadradon2
    
    const resto = n1%n2

    //7%2
    if (resto == 1){
        return  (`Resto 1. \n${n1}+${n2}+${resto} = ` +(n1+n2+resto))

    //26%3
    } else if (resto == 2){
        if (n1%2==0){
            paridaden1 = (`par`)
        } else paridaden1 =(`ímpar`)

        if (n2%2==0){
            paridaden2 = (`par`)
        } else paridaden2 =(`ímpar`) 
        return (`Resto 2. \n${n1} é ${paridaden1} \n${n2} é ${paridaden2}.`)

    //23%5
    } else if (resto==3){
        return  (`Resto 3. \n(${n1}+${n2})*${n1} = ` +(n1+n2)*n1)

    } else if (resto==4){
        if (n2!=0){
        return (`Resto 4. \n(${n1}+${n2})/${n2} = ` +(n1+n2)/n2)
        } else {
        return ('Divisão inválida')
        }

    //60%20
    }  else {
        quadradon1 = n1*n1
        quadradon2 = n2*n2
        return (`Resto ${resto}. \nO quadrado de ${n1} é ${quadradon1}. \nO quadrado de ${n2} é ${quadradon2}. `)
    }

       
    }

print(restodiv(num1,num2))

}
main()