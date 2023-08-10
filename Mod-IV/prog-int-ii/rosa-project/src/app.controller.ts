import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  hello(@Query('nome') nome = 'usuário'){
    const dados_usuario = { 
      nome,
      qtd_letras: nome.length,
    }
    return dados_usuario
  }
}
