import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './produto.entity'; 
import { DestinacaoInvalidaException, NomeInvalidoException, PrazoInvalidoException, TaxaRentabilidadeInvalidaException } from 'src/exceptions';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  validarNome(nome: string): void {
    if (nome.length > 32) {
      throw new NomeInvalidoException();
    }
  }

  validarDestinacao(destinacao: string): void {
    if (destinacao.length > 180) {
      throw new DestinacaoInvalidaException();
    }
  }

  validarTaxaRentabilidade(taxaRentabilidade: number): void {
    if (!Number.isInteger(taxaRentabilidade) || taxaRentabilidade < 1 || taxaRentabilidade > 20) {
      throw new TaxaRentabilidadeInvalidaException();
    }
  }

  validarPrazo(prazo: number): void {
    if (!Number.isInteger(prazo) || prazo < 0 || prazo > 48) {
      throw new PrazoInvalidoException();
    }
  }
  
  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find({
      order: { id: 'ASC' },
    })
  }

  async create(produto: Produto): Promise<Produto> {
    this.validarPrazo(produto.prazo);
    return this.produtoRepository.save(produto);
  }
  
  async findOne(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOneBy({id: id})
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    return produto;
  }
}
