import { Repository } from 'typeorm';
import { Status } from './produto.entity'; 
import { Produto } from './produto.entity'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
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
    if ( /*!(Number.isInteger(taxaRentabilidade)) || */ taxaRentabilidade < 1 || taxaRentabilidade > 20) {
      throw new TaxaRentabilidadeInvalidaException();
    }
  }

  validarPrazo(prazo: number): void {
    if (/*!(Number.isInteger(prazo)) || */ prazo < 0 || prazo > 48) {
      throw new PrazoInvalidoException();
    }
  }
  
  validarProduto(produto: Produto): void {
    this.validarNome(produto.nome);
    this.validarDestinacao(produto.destinacao);
    this.validarTaxaRentabilidade(produto.taxa_rentabilidade);
    this.validarPrazo(produto.prazo);
  }

  async create(produto: Produto): Promise<Produto> {
      this.validarProduto(produto);
      return this.produtoRepository.save(produto);
  }

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find({
      order: { id: 'ASC' },
    })
  }
  
  async findOne(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOneBy({id: id})
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    return produto;
  }

  async remove(id: number): Promise<void> {
    const produto = await this.produtoRepository.findOneBy({id: id})
    
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }  
    
    await this.produtoRepository.remove(produto);
  }

  async mudarStatusProduto(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOneBy({id: id})
  
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
  
    produto.status = produto.status === Status.DISPONIVEL ? Status.INDISPONIVEL : Status.DISPONIVEL;
  
    return this.produtoRepository.save(produto);
  }
}