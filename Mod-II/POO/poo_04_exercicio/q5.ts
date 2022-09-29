/*Crie uma classe chamada Saudacao que:
a. Contenha um atributo chamado texto e outro chamado destinatario, ambos
String;
b. Crie um construtor que inicializa os dois atributos;
c. Crie um método obterSaudacao() que retorne a concatenação dos dois
atributos. Ex: "Bom dia, João";
d. Instancie uma classe Saudacao e teste seu método obterSaudacao().*/

class Saudacao{
    texto: string
    destinatario: string

    constructor(t: string, d: string){
        this.texto = t
        this.destinatario = d
    }

    obterSaudaca(){
        return this.texto + this.destinatario
    }
}

let s1 : Saudacao = new Saudacao("Bom dia,", "Cibelle.")
console.log(s1.obterSaudaca());
