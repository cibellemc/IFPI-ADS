import { input,print } from "../io_utils.js";
function main(){

    const senha = input('Informe sua senha. (Ex: s e n h a): ')
    const [n1,n2,n3,n4,n5] = senha.split(' ').map(Number)

    function verificarsenha(a,b,c,d,e){
        if (senha.length>9){
            return ('Acesso negado. Tente novamente')
        } else {
            if (n1!=1){
                return ('Acesso negado. Tente novamente')
            } else {
                if (n2!=2){
                    return ('Acesso negado. Tente novamente')
                } else {
                    if (n3!=3){
                        return ('Acesso negado. Tente novamente')
                    } else {
                        if (n4!=4){
                            return ('Acesso negado. Tente novamente')
                        } else {
                            if (n5!=5){
                                return ('Acesso negado. Tente novamente')
                            } else return ('Acesso permitido.')
                        }
                    }
                }
            }
        }
    }

print(verificarsenha(n1,n2,n3,n4,n5))
}
main()