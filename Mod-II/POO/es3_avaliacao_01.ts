interface Defensivel{
    estaEliminado(): boolean
    defenderAtaque(valorAtaque : number): void
}

class JaEliminadoException extends Error{
    constructor(message: string){
        super(message)
    }
}

class Guerreiro implements Defensivel{

    constructor(private _id: number,
    private _descricao: string,
    private _forcaAtaque: number,
    private _life: number = 10){}

    estaEliminado(): boolean{ // Em guerreiro: deve retornar true caso o seu life esteja zerado.
        return this._life <= 0
    }

    defenderAtaque(valorAtaque : number):number{ // Em um guerreiro deve subtrair o valor do ataque diretamente do seu atributo life;
        return this._life -= valorAtaque
    }

    atacar(defensivel: Defensivel): void{ // Um guerreiro possui um método chamado atacar que recebe um “Defensivel” e chama o método defensivel.defenderAtaque(this.forcaAtaque).

        if(defensivel.estaEliminado()){ // Lance uma exceção do tipo JaEliminadoException caso o método atacar seja aplicado a um Defensivel já eliminado.
            throw new JaEliminadoException("Guerreiro já eliminado.")
        }
        defensivel.defenderAtaque(this._forcaAtaque)
    }
}

class BaseMilitar implements Defensivel{

    constructor(private _id: number,
    private _localizacaoX: number,
    private _localizacaoY: number,
    private _percentualDano = 0){}

    estaEliminado(): boolean{ // Em base militar: deve retornar true caso o % de dano esteja maior ou igual a 90%.
        return this._percentualDano >= 0.9
    }

    defenderAtaque(valorAtaque : number): void{ // Em uma base militar aumenta do seu percentual de danos com o valor do ataque passado como parâmetro.
        this._percentualDano += valorAtaque
    }

}

class CenarioDeBatalha{
    avaliar(exercito1: Defensivel[], exercito2: Defensivel[]){
        let abatidos1: number = 0  
        let abatidos2: number = 0  
            
        for(let i = 0; i < exercito1.length; i++){
            if(exercito1[i].estaEliminado()){
                abatidos1++
            }
        }

        for(let i = 0; i < exercito1.length; i++){
            if(exercito2[i].estaEliminado()){
                abatidos2++
            }
         }
    }
}
