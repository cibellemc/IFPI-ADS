const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000

// Importar a classe Microblog
const { Post, Microblog } = require('./build/postagem.js');

// Criar uma instância de Microblog
const microblog = new Microblog();


const post1 = new Post(1, "Primeiro post", 10);
const post2 = new Post(2, "Segundo post", 5);
const post3 = new Post(3, "Terceiro post", 2);
const post4 = new Post(1, "Quarto post", 2);

microblog.create(post1);
microblog.create(post2);
microblog.create(post3);
microblog.create(post4)

// Endpoint para obter todas as postagens
app.get('/posts', (req, res) => {
    const posts = microblog.retrieveAll();
    res.json(posts);
});

// Endpoint para obter uma postagem específica por ID
app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = microblog.retrieve(id);

  if (post === -1) {
    res.status(404).json({ message: 'Post not found' });
  } else {
    res.json(post);
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});