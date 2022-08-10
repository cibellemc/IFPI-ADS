import { input } from "../io_utils.js";

function main(){
    const data = input('Data (Ex: 31/07/2040): ')
    const [dia,mes,ano] = data.split('/').map(Number)
    let verificador

    function verificardata (d,m,a){
        if (a%4==0 && m==2 && d<=29) {
            verificador= ('Data válida.')

        } else if (a%4==0 && m==2 && d>29){
            verificador= ('Data inválida.')

        } else if (d==0||m==0||a==0||m>12||d>31){
            verificador = ('Data inválida.')

        } else verificador=('Data válida')
        return verificador
    }  
console.log(verificardata(dia,mes,ano))
}
main()