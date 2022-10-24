import { Conta, Person } from "../poo_04_exercicio/codigo_aula_banco";
import { Banco } from "./q1-banco";

function main(){
    let c4: Conta = new Conta("4", 100, new Person("D"))
    let c5: Conta = new Conta("5", 300, new Person("E"))
    let c6: Conta = new Conta("6", 300, new Person("F"))
    let c7: Conta = new Conta("7", 0, new Person("F"))
    
    let b: Banco = new Banco()
    
    b.inserir(c4)
    b.inserir(c5)
    b.inserir(c5)
    b.inserir(c6)
    b.inserir(c7)
    
    b.transfeir("5", "60", 150)
    
    console.log("Saldo da conta c4: R$" +c4.Saldo.toFixed(2))
    console.log("Saldo da conta c5: R$" + c5.Saldo.toFixed(2))
    console.log(`O valor total armazanado no banco é R$${b.dinheiroNoBanco().toFixed(2)}`)
    console.log(`A média de saldos no banco é R$${b.mediaDeSaldos().toFixed(2)}`)
    
    }
    
    main()