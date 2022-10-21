export class Postagem{
    id: number
    texto: string
    quantidadeCurtidas: number

    constructor(i: number, t: string, q: number){
        this.id = i
        this.texto = t
        this.quantidadeCurtidas = q
    }

    curtir(): void{
        this.quantidadeCurtidas ++
    }

    toString(): string{
        switch (this.quantidadeCurtidas) {

            case 1:
                return(`Post #${this.id}
${this.texto}
${this.quantidadeCurtidas} curtida.`)

            default:
                return(`Post #${this.id}
${this.texto}
${this.quantidadeCurtidas} curtidas.`)

        }
    }
}

export class Microblog{
    postagens : Postagem[] = []

    novaPostagem(p: Postagem){
        this.postagens.push(p)
    }

    excluirPostagem(id: number){
        let indice = this.buscarPostPorID(id)
        if (indice != -1){
            for (let j = indice; j < this.postagens.length - 1; j++){
                this.postagens[j] = this.postagens[j+1] 
                this.postagens[j].id = j
                
            }
        }
        this.postagens.pop()
    }
    
    buscarPostPorID(i: number): number{ // buscar 1 retorna a posição em que o elemento esta - útil para curtir
        let index = 0
        for (let postagem of this.postagens){ // para cada postagem no array de postagens
            if (postagem.id == i){ 
                return index
            } else{
                index++ //retornar a posição, pois fica melhor no curtir
            }
        } return -1
        } 

    /*buscaPostRetornaId(i: number): number{ // buscar 2 retorna o id - útil para excluir por id
        for (let postagem of this.postagens){ // para cada postagem no array de postagens
            if (postagem.id == i){ 
                return i 
            }
        } return -1
    }*/

    maisCurtida(): Postagem[] {
        let liked: Postagem = this.postagens[0]
        for (let i = 0; i < this.postagens.length - 1; i++){ //tava dando erro pq esqueci o -1
            if ((this.postagens[i+1]).quantidadeCurtidas > liked.quantidadeCurtidas){
                liked = this.postagens[i+1]
            }
        }
        return [liked] 
    }

    curtirPost(indice: number): void{
        let posicao = this.buscarPostPorID(indice) 
        if (posicao != null){
            this.postagens[posicao].curtir() //indice -1 porque 
        }
    }

    toString(): void{
        let redesocial = ""
        this.postagens.forEach(element => {
            redesocial += `\n${element.toString()}\n`
        });
        console.log(redesocial)
    }

}

