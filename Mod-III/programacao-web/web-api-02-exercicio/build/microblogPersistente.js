"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicroblogPersistente = void 0;
// instalar dependências: npm install pg
const pg_1 = require("pg");
class MicroblogPersistente {
    constructor() {
        this.pool = new pg_1.Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'microblog',
            password: '01111971',
            port: 5432,
        });
    }
    // antes de tudo precisou a criação do database e da tabela posts
    // obs: não  colocar primary key
    create(post) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'INSERT INTO posts (id, text, likes) VALUES ($1, $2, $3)';
            const values = [post.id, post.text, post.likes];
            try {
                yield this.pool.query(query, values);
            }
            catch (error) {
                console.error('Error creating post:', error);
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM posts';
            try {
                const result = yield this.pool.query(query);
                return result.rows;
            }
            catch (error) {
                return [];
            }
        });
    }
}
exports.MicroblogPersistente = MicroblogPersistente;
