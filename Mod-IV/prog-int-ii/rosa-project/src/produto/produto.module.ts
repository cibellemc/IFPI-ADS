import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto.entity'; 
import { ProdutoController } from './produto.controller'; 
import { ProdutoService } from './produto.service'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Produto]), // importar entidade
  ],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
