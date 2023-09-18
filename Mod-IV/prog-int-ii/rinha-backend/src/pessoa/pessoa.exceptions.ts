import { BadRequestException } from '@nestjs/common';
import { ConflictException } from '@nestjs/common';

export class TamanhoInvalidoException extends BadRequestException {
  constructor(fieldName: string, maxLength: number) {
    super(`${fieldName} deve ter no máximo ${maxLength} caracteres.`);
  }
}

export class ApelidoDuplicadoException extends ConflictException {
  constructor() {
    super('O apelido já está em uso.');
  }
}

export class CampoNuloException extends BadRequestException {
  constructor(fieldName: string) {
    super(`${fieldName} não pode ser nulo.`);
  }
}
