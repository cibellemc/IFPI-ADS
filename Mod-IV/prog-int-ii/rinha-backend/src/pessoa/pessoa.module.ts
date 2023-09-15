import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { Pessoa } from './entities/pessoa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa])],
    controllers: [PessoaController],
  providers: [PessoaService],
})
export class PessoaModule {}
