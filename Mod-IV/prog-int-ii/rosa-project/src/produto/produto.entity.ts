import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum Status {
  DISPONIVEL = 'Disponível',
  INDISPONIVEL = 'Indisponível',
}

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 32})
  nome: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.DISPONIVEL, 
  })
  status: Status;

  @Column({length: 180})
  destinacao: string;

  @Column('int')
  taxa_rentabilidade: number;

  @Column('int')
  prazo: number;

  @Column('decimal', { precision: 10, scale: 2 })
  taxa_administracao: number;

  @Column({ type: 'date'})
  vencimento: Date;
}
