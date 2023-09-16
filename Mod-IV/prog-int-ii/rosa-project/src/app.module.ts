import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { ProdutoModule } from './produto/produto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto/produto.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ProdutoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: process.env.HOSTNAME,
      username: process.env.USERNAME, 
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [Produto],
      synchronize: true,
    }),
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}