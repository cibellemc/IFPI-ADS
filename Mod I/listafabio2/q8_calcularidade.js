import { input } from "../io_utils.js";

function main(){

    const datanascimento = input('Data de nascimento (Ex: 11/12/2003): ')
    const [dianasc,mesnasc,anonasc] = datanascimento.split('/').map(Number)

    const diadehoje = input('Data de hoje (Ex:15/05/2022): ')
    const [dia,mes,ano] = diadehoje.split('/').map(Number)
    
    let anos

    function calcularidade (d1, d2, m1, m2, a1, a2){

        if (d1==d2 && m1==m2){
            anos = a2-a1
        }else if (m1>m2){
            anos = (a2-a1)-1
        }else  {
            anos = a2-a1
        }
        return anos
    }

console.log('Idade: ', calcularidade(dianasc,dia,mesnasc,mes,anonasc,ano))
}
main()