import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { ProdutoModule } from './produto/produto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto/produto.entity';

@Module({
  imports: [ProdutoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '01111971',
      database: 'test',
      entities: [Produto],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}