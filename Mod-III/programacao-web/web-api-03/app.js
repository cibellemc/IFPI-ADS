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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    password: '01111971',
    host: 'localhost',
    database: 'social_media',
    port: 5432,
});
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/posts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield pool.connect();
        const result = yield client.query('SELECT * FROM posts');
        const posts = result.rows;
        client.release();
        res.json(posts);
    }
    catch (error) {
        console.error('Error executing SQL query', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// Rota para obter um post específico pelo ID
app.get('/posts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postId = parseInt(req.params.id);
    try {
        const client = yield pool.connect();
        const result = yield client.query('SELECT * FROM posts WHERE id = $1', [postId]);
        const post = result.rows[0];
        client.release();
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json(post);
    }
    catch (error) {
        console.error('Erro ao buscar o post no banco de dados', error);
        res.status(500).json({ error: 'Erro ao buscar o post no banco de dados' });
    }
}));
const moment_1 = __importDefault(require("moment")); // Importe o Moment.js
app.post('/posts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, text, likes } = req.body;
        const currentDate = (0, moment_1.default)().format('YYYY-MM-DD HH:mm:ss'); // Obtenha a data e hora corrente
        const query = 'INSERT INTO posts (title, text, likes, date) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [title, text, likes, currentDate];
        const result = yield pool.query(query, values);
        const newPost = result.rows[0];
        res.status(201).json(newPost);
    }
    catch (error) {
        console.error('Erro ao criar nova postagem:', error);
        res.status(500).json({ message: 'Erro ao criar nova postagem' });
    }
}));
// Rota para atualizar um post pelo ID
app.put('/posts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postId = parseInt(req.params.id);
    const { title, text, date, likes } = req.body;
    try {
        const client = yield pool.connect();
        const result = yield client.query('UPDATE posts SET title = $1, text = $2, date = $3, likes = $4 WHERE id = $5 RETURNING *', [title, text, date, likes, postId]);
        const updatedPost = result.rows[0];
        client.release();
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json(updatedPost);
    }
    catch (error) {
        console.error('Erro ao atualizar o post no banco de dados', error);
        res.status(500).json({ error: 'Erro ao atualizar o post no banco de dados' });
    }
}));
// Rota para incrementar os likes de um post pelo ID
app.patch('/posts/:id/like', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postId = parseInt(req.params.id);
    try {
        const client = yield pool.connect();
        const result = yield client.query('UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *', [postId]);
        const updatedPost = result.rows[0];
        client.release();
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json(updatedPost);
    }
    catch (error) {
        console.error('Erro ao incrementar os likes do post no banco de dados', error);
        res.status(500).json({ error: 'Erro ao incrementar os likes do post no banco de dados' });
    }
}));
// Rota para excluir um post pelo ID
app.delete('/posts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postId = parseInt(req.params.id);
    try {
        const client = yield pool.connect();
        const result = yield client.query('DELETE FROM posts WHERE id = $1 RETURNING *', [postId]);
        const deletedPost = result.rows[0];
        client.release();
        if (!deletedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json(deletedPost);
    }
    catch (error) {
        console.error('Erro ao excluir o post no banco de dados', error);
        res.status(500).json({ error: 'Erro ao excluir o post no banco de dados' });
    }
}));
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
