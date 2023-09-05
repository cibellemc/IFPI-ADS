import { Controller, Get, Post, Body, Render, Redirect, Param, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { ProdutoService } from './produto.service'; 
import { Produto } from './produto.entity'; 

@Controller("produtos")
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}
  
  @Get('/')
  //@Render('lista')
  async listarProdutos(): Promise<{ produtos: Produto[] }> {
    const produtos = await this.produtoService.findAll();
    return { produtos };
  }

  @Post('/add') // rota - adicionar produtos
  //@Redirect('/produtos')
  async adicionarProduto(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.create(produto);
  }

  @Post('/delete/:id')
  //@Redirect('/produtos')
    async removerProduto(@Param('id') id: number): Promise<void> {
      const produtoExclusao = await this.produtoService.findOne(id);
      
      if (!produtoExclusao) {
        throw new NotFoundException('Produto não encontrado');
      }

      await this.produtoService.remove(id);
      throw new HttpException('Produto excluído com sucesso', HttpStatus.NO_CONTENT);
    }

  
  @Post('/mudar-status/:id')
  //@Redirect('/produtos')
  async mudarStatusProduto(@Param('id') id: number): Promise<void> {
    const produtoStatus = await this.produtoService.findOne(id);

    if (!produtoStatus) {
      throw new NotFoundException('Produto não encontrado');
    }
    
    await this.produtoService.mudarStatusProduto(id);
    throw new HttpException('Status do produto alterado com sucesso', HttpStatus.NO_CONTENT);
  }

}
