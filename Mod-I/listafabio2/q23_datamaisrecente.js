import {input,print} from '../io_utils.js'
function main(){
    const data1 = input('1° data (Ex: 19/04/2022): ')
    const [dia1,mes1,ano1] =data1.split('/').map(Number)

    const data2 = input('2° data (Ex: 20/04/2022): ')
    const [dia2,mes2,ano2] =data2.split('/').map(Number)

    function comparardatas (a1,a2,m1,m2,d1,d2,dt1,dt2){
        let datamaisrecente
        if (a1>a2){
            datamaisrecente = dt1
        } else if (a2>a1) {
        datamaisrecente 
        return datamaisrecente
        } else 
            if (m1>m2){
            datamaisrecente = dt1
            } else if (m2>m1) {
            datamaisrecente = dt2
            } else 
                if (d1>d2){
                    datamaisrecente = dt1
                } else datamaisrecente = dt2
    return datamaisrecente
        
    }
    print(`A data mais recente é`, comparardatas(ano1,ano2,mes1,mes2,dia1,dia2,data1,data2))

}
main()