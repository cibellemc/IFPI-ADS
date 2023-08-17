import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

interface Produto {
  nome: string
  status: string
  destinacao: string
  taxa_rentabilidade: number
  prazo: number
  taxa_administracao: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('form')
  inicio(){
    return
  }
}