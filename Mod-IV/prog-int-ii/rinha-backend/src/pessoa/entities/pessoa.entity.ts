import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pessoa {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'nome', type: 'varchar', length: 100, nullable: false  })
    nome: string;

    @Column({ name: 'apelido', type: 'varchar', length: 32, nullable: false, unique: true })
    apelido: string;
    
    @Column({ name: 'nascimento', type: 'date', nullable: false })
    nascimento: Date

    @Column({ name: 'stack', type: 'varchar', length: 32, array: true, nullable: true })
    stack: string[];    
}
