import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum Status {
  DISPONIVEL = 'Disponível',
  INDISPONIVEL = 'Indisponível',
}

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: "Nome do produto",
    example: "Produto A",
    minLength: 1,
    maxLength: 32,
  })
  @Column({length: 32})
  nome: string;

  @ApiProperty({
    description: "Status do produto",
    enum: Status,
    default: Status.DISPONIVEL,
  })
  @Column({
    type: 'enum',
    enum: Status,
    default: Status.DISPONIVEL, 
  })
  status: Status;

  @ApiProperty({
    description: "Destinação do produto",
    example: "Destino do Produto A",
    minLength: 1,
    maxLength: 180,
  })
  @Column({length: 180})
  destinacao: string;

  @ApiProperty({
    description: "Taxa de rentabilidade do produto",
    minimum: 1,
    maximum: 20,
    type: 'integer',
  })
  @Column('int')
  taxa_rentabilidade: number;

  @ApiProperty({
    description: "Prazo do produto em meses",
    minimum: 0,
    maximum: 48,
    type: 'integer',
  })
  @Column('int')
  prazo: number;

  @ApiProperty({
    description: "Taxa de administração do produto",
    minimum: 0.01,
    maximum: 100.00,
    type: 'number',
    format: 'decimal',
  })
  @Column('decimal', { precision: 10, scale: 2 })
  taxa_administracao: number;

  @ApiProperty({
    description: "Data de vencimento do produto",
    type: 'string',
    format: 'date',
  })
  @Column({ type: 'date'})
  vencimento: Date;
}
