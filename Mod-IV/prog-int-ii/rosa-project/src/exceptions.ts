// src/exceptions/nome-invalido.exception.ts
import { BadRequestException } from '@nestjs/common';

export class NomeInvalidoException extends BadRequestException {
  constructor() {
    super('Nome deve ter até 32 caracteres.');
  }
}

export class DestinacaoInvalidaException extends BadRequestException {
    constructor() {
      super('Destinação deve ter até 180 caracteres.');
    }
  }

  export class TaxaRentabilidadeInvalidaException extends BadRequestException {
    constructor() {
      super('Taxa de rentabilidade deve ser um inteiro entre 1 e 20%.');
    }
  }
  
  export class PrazoInvalidoException extends BadRequestException {
    constructor() {
      super('Prazo deve ser um inteiro entre 0 e 48.');
    }
  }
  