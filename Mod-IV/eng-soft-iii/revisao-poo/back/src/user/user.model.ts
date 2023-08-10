// src/user/user.model.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  /*@Column()
  tipoConta: string;

  @Column({ nullable: true }) // Permite que o campo seja nulo se não for necessário
  limiteChequeEspecial: number;

  @Column({ nullable: true }) // Permite que o campo seja nulo se não for necessário
  taxaRendimento: number;*/
}
