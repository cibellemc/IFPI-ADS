import { Pessoa } from "../entities/pessoa.entity";

export class PessoaDto {
    id: string;
    nome: string;
    apelido: string;
    nascimento: string; 
    stack: string[] | null; 

    constructor(pessoa: Pessoa) {
        this.id = pessoa.id;
        this.nome = pessoa.nome;
        this.apelido = pessoa.apelido;
        this.nascimento = pessoa.nascimento.toISOString().split('T')[0]; // formato AAAA-MM-DD
        this.stack = pessoa.stack || null; 
    }
}
    
