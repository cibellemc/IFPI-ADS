import { Controller, Get, Post, Body, Render, Redirect } from '@nestjs/common';
import { ProdutoService } from './produto.service'; 
import { Produto } from './produto.entity'; 

@Controller()
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}
  
  @Get('/listar')
  @Render('lista')
  async listarProdutos(): Promise<{ produtos: Produto[] }> {
    const produtos = await this.produtoService.findAll();
    return { produtos };
  }
  
  @Post('/add') // rota - adicionar produtos
  @Redirect('/listar')
  async adicionarProduto(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.create(produto);
  }
}
