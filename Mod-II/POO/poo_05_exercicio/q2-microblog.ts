class Postagem{
    id: number
    texto: string
    quantidadeCurtidas: number

    constructor(i: number, t: string, q: number){
        this.id = i
        this.texto = t
        this.quantidadeCurtidas = q
    }

    curtir(qtdLikes: number): void{
        this.quantidadeCurtidas += qtdLikes
    }

    toString(): void{
        console.log("-------- n e w  p o s t --------")
        switch (this.quantidadeCurtidas) {

            case 1:
                console.log(`${this.texto}
${this.quantidadeCurtidas} curtida.`)
                break

            default:
                console.log(`${this.texto}
${this.quantidadeCurtidas} curtidas.`)

        }
    }
}

class Microblog{
    postagens : Postagem[] = []

    novaPostagem(p: Postagem){
        this.postagens.push(p)
    }

    excluirPostagem(i: number){
        if (this.buscarPost(i) != -1){
            for (let j = i; j < this.postagens.length; j++){
                this.postagens[j] = this.postagens[j+1]
            }
        }
        this.postagens.pop()
    }

    buscarPost(i: number): number{
        for (let postagem of this.postagens){ // para cada postagem no array de postagens
            if (postagem.id == i){
                return i
            }
        } return -1
    }

    maisCurtida(): void {
        let liked: Postagem = this.postagens[0]
        let i = 3
        /*for (let i = 0; i < this.postagens.length; i++){
            if (this.postagens[i+1].quantidadeCurtidas >liked.quantidadeCurtidas ){
                liked = this.postagens[i+1]
            }
        }*/
        console.log(liked.quantidadeCurtidas)
        console.log(this.postagens[i].quantidadeCurtidas)
        console.log(this.postagens[i+1].quantidadeCurtidas)
        //liked.toString()
    }

}

function m(){

    let postagem1 : Postagem = new Postagem(1, "Testando código!! :)", 0)
    let postagem2 : Postagem = new Postagem(2, "Acabei de conhecer o método Math.max!! DAORAA", 0)
    let postagem3 : Postagem = new Postagem(3, "Tenho até 22h pra terminar!! SOS", 0)
    let postagem4 : Postagem = new Postagem(4, "Preciso implementar um if pra não permitir postagem com id igual", 0)
    let postagem5 : Postagem = new Postagem(5, "#typescript", 0)

    let blog : Microblog = new Microblog()

    blog.novaPostagem(postagem1)
    blog.novaPostagem(postagem2)
    blog.novaPostagem(postagem3)
    blog.novaPostagem(postagem4)
    blog.novaPostagem(postagem5)

    postagem1.curtir(5)
    postagem2.curtir(3)
    postagem3.curtir(0)
    postagem4.curtir(1)

    /*console.log(postagem1.quantidadeCurtidas)
    console.log(postagem2.quantidadeCurtidas)
    console.log(postagem3.quantidadeCurtidas)
    console.log(postagem4.quantidadeCurtidas)*/

    blog.maisCurtida()
}
m()
