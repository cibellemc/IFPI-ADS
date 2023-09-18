import { Injectable } from '@nestjs/common';
import { PessoaDto } from './dto/create-pessoa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity';
import { Repository } from 'typeorm';
import { ApelidoDuplicadoException, CampoNuloException, TamanhoInvalidoException } from './pessoa.exceptions';

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(Pessoa) 
    private pessoaRepository: Repository<Pessoa>,
    ){}
    
    async existeApelidoDuplicado(apelido: string): Promise<boolean> {
      const pessoaComApelido = await this.pessoaRepository.findOneBy({ apelido });

      return !!pessoaComApelido;
    }
    
    async validarCamposPessoa(pessoaDto: PessoaDto): Promise<void> {
      const campos = [
        { nome: 'nome', tamanhoMaximo: 100 },
        { nome: 'apelido', tamanhoMaximo: 32 },
        { nome: 'nascimento' },
      ];
      
      for (const campo of campos) {
        const valor = pessoaDto[campo.nome];
        if (valor === undefined || valor === null) {
          throw new CampoNuloException(campo.nome);
        }
        
        if (campo.tamanhoMaximo && valor.length > campo.tamanhoMaximo) {
          throw new TamanhoInvalidoException(campo.nome, campo.tamanhoMaximo);
        }
      }
    }
    
    async create(createPessoaDto: PessoaDto): Promise<Pessoa> {
      await this.validarCamposPessoa(createPessoaDto);
      
      if (await this.existeApelidoDuplicado(createPessoaDto.apelido)) {
        throw new ApelidoDuplicadoException();
      }
      
      const pessoa = new Pessoa();
      pessoa.nome = createPessoaDto.nome;
      pessoa.apelido = createPessoaDto.apelido;
      pessoa.nascimento = new Date(createPessoaDto.nascimento);
      pessoa.stack = createPessoaDto.stack;
      
      return await this.pessoaRepository.save(pessoa);
    }

  async findAll():  Promise<Pessoa[]>{
    return await this.pessoaRepository.find();  
  }

  async countPeople() {
    return await this.pessoaRepository.count();  
  }  

  async findOne(id: string): Promise<Pessoa | undefined> {
    return await this.pessoaRepository.findOneBy({id: id});
  }

  async findTerm(termo: string): Promise<Pessoa[]> {
    // `createQueryBuilder` do TypeORM - consulta personalizada
    const pessoas = await this.pessoaRepository
      .createQueryBuilder('pessoa')
      .where('pessoa.nome LIKE :termo', { termo: `%${termo}%` })
      .orWhere('pessoa.apelido LIKE :termo', { termo: `%${termo}%` })
      .orWhere('TO_CHAR(pessoa.nascimento, \'YYYY-MM-DD\') LIKE :termo', { termo: `%${termo}%` })
      .orWhere('(:termo = ANY(pessoa.stack))', { termo })
      .getMany();
  
    return pessoas;
  } 
}
