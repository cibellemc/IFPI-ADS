import { Module } from '@nestjs/common';
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
    /*host: "localhost",
    username: "postgres", 
    password: "",
    database: "test",*/
    entities: [Pessoa],
    synchronize: true,
  })
],
 controllers: [],
 providers: [],
})
export class AppModule { }
