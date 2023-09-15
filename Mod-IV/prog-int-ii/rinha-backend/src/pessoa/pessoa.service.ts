import { Injectable } from '@nestjs/common';
import { PessoaDto } from './dto/create-pessoa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity';
import { Repository } from 'typeorm';
import { Like } from 'typeorm';

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(Pessoa) // Use o repositório da entidade Pessoa
    private pessoaRepository: Repository<Pessoa>,
  ) {}

  async create(createPessoaDto: PessoaDto): Promise<Pessoa> {
    const pessoa = new Pessoa();
    pessoa.name = createPessoaDto.name;
    pessoa.apelido = createPessoaDto.apelido;
    pessoa.nascimento = new Date(createPessoaDto.nascimento);
    pessoa.stack = createPessoaDto.stack;

    return await this.pessoaRepository.save(pessoa);
  }

  async countPeople() {
    return await this.pessoaRepository.count();  
  }  

  async findOne(id: string): Promise<Pessoa | undefined> {
    return await this.pessoaRepository.findOneBy({id: id});
  }

  async findTerm(termo: string): Promise<Pessoa[]> {
    // Use o método `createQueryBuilder` do TypeORM para fazer uma consulta personalizada
    const pessoas = await this.pessoaRepository
      .createQueryBuilder('pessoa')
      .where('pessoa.name LIKE :termo', { termo: `%${termo}%` })
      .orWhere('pessoa.apelido LIKE :termo', { termo: `%${termo}%` })
      .orWhere('TO_CHAR(pessoa.nascimento, \'YYYY-MM-DD\') LIKE :termo', { termo: `%${termo}%` })
      .orWhere('(:termo = ANY(pessoa.stack))', { termo })
      .getMany();
  
    return pessoas;
  }
  
}
