import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { PessoaDto } from './dto/create-pessoa.dto';

@Controller('pessoas')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}
  
  @Get()
  findAll() {
    return this.pessoaService.findAll();
  }

  @Get()
  find(@Query('t') termo: string) {
    return this.pessoaService.findTerm(termo);
  }

  @Get('/contagem-pessoas')
  countPeople(): Promise<number> {
    return this.pessoaService.countPeople();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.pessoaService.findOne(id);
}

  @Post()
  create(@Body() createPessoaDto: PessoaDto) {
    return this.pessoaService.create(createPessoaDto);
  }
  
}
