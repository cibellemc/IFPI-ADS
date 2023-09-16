import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaModule } from './pessoa/pessoa.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './pessoa/entities/pessoa.entity';

@Module({
 imports: [PessoaModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    port: 5432,
    host: process.env.HOSTNAME,
    username: process.env.USERNAME, 
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: [Pessoa],
    synchronize: true,
  })
],
 controllers: [AppController],
 providers: [AppService],
})
export class AppModule { }
