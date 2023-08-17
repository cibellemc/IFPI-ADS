import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  status: string;

  @Column()
  destinacao: string;

  @Column('decimal', { precision: 10, scale: 2 })
  taxa_rentabilidade: number;

  @Column('int')
  prazo: number;

  @Column('decimal', { precision: 10, scale: 2 })
  taxa_administracao: number;
}
