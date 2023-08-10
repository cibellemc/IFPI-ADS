// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.model';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Use 'postgres' para PostgreSQL
      host: 'localhost',
      port: 5432, // Porta padrão do PostgreSQL
      username: 'postgres',
      password: '01111971',
      database: 'banco',
      entities: [User],
      synchronize: true, // Sincroniza automaticamente as tabelas com o código (para ambiente de desenvolvimento)
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
