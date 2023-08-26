import { Controller, Get, Post, Body, Render, Redirect, Param, NotFoundException } from '@nestjs/common';
import { ProdutoService } from './produto.service'; 
import { Produto } from './produto.entity'; 

@Controller("produtos")
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}
  
  @Get('/')
  @Render('lista')
  async listarProdutos(): Promise<{ produtos: Produto[] }> {
    const produtos = await this.produtoService.findAll();
    return { produtos };
  }
    
  /*@Get('editar/:id')
  @Render('edicao')
  async editar(@Param('id') id: number): Promise<Produto> {
    const produto = await this.produtoService.findOne(id)    
    return produto 
  }*/

  @Post('/add') // rota - adicionar produtos
  @Redirect('/produtos')
  async adicionarProduto(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.create(produto);
  }

  /*@Post('/editar/:id')
  @Redirect('/produtos')
  async editarProduto(@Param('id') id: number, @Body() produto: Produto): Promise<Produto> {
    // Primeiro, você precisa buscar o produto atual no banco de dados
    const produtoAtual = await this.produtoService.findOne(id);
  
    if (!produtoAtual) {
      throw new NotFoundException('Produto não encontrado');
    }
  
    // Atualize os campos relevantes do produto com os novos dados
    produtoAtual.nome = produto.nome;
    produtoAtual.status = produto.status;
    produtoAtual.destinacao = produto.destinacao;
    produtoAtual.taxa_rentabilidade = produto.taxa_rentabilidade;
    produtoAtual.prazo = produto.prazo;
    produtoAtual.taxa_administracao = produto.taxa_administracao;
  
    // Salve o produto atualizado no banco de dados
    return this.produtoService.create(produtoAtual);
  }*/
  
  @Post('/delete/:id')
  @Redirect('/produtos')
    async removerProduto(@Param('id') id: number): Promise<void> {
      const produtoExclusao = await this.produtoService.findOne(id);
      
      if (!produtoExclusao) {
        throw new NotFoundException('Produto não encontrado');
      }

      await this.produtoService.remove(id);
    }

  
  @Post('/mudar-status/:id')
  @Redirect('/produtos')
  async mudarStatusProduto(@Param('id') id: number): Promise<void> {
    const produtoStatus = await this.produtoService.findOne(id);

    if (!produtoStatus) {
      throw new NotFoundException('Produto não encontrado');
    }
    
    await this.produtoService.mudarStatusProduto(id);
  }

}
