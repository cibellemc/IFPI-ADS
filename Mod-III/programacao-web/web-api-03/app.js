"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_1 = require("./posts");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/posts', (req, res) => {
    res.json(posts_1.posts);
});
app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts_1.posts.find((p) => p.id == postId);
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
});
app.post('/posts', (req, res) => {
    const { title, text, date, likes } = req.body;
    const newPost = { id: posts_1.posts.length + 1, title, text, date, likes };
    posts_1.posts.push(newPost);
    res.status(201).json(newPost);
});
app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, text, date, likes } = req.body;
    const postIndex = posts_1.posts.findIndex((p) => p.id == postId);
    if (postIndex == -1) {
        return res.status(404).json({ error: 'Post not found' });
    }
    const updatedPost = { id: postId, title, text, date, likes };
    posts_1.posts[postIndex] = updatedPost;
    res.json(updatedPost);
});
app.patch('/posts/:id/like', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts_1.posts.findIndex((p) => p.id === postId);
    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }
    posts_1.posts[postIndex].likes += 1;
    res.json(posts_1.posts[postIndex]);
});
app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts_1.posts.findIndex((p) => p.id == postId);
    if (postIndex == -1) {
        return res.status(404).json({ error: 'Post not found' });
    }
    const deletedPost = posts_1.posts.splice(postIndex, 1)[0];
    res.json(deletedPost);
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
