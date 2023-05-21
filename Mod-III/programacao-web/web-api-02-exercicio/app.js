const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000

// Importar a classe Microblog
const { Post, Microblog } = require('./build/postagem.js');

// Criar uma instância de Microblog
const microblog = new Microblog();

/*const post1 = new Post(1, "Primeiro post", 10);
const post2 = new Post(2, "Segundo post", 5);
const post3 = new Post(3, "Terceiro post", 2);
const post4 = new Post(4, "Quarto post", 2);

microblog.create(post1);
microblog.create(post2);
microblog.create(post3);
microblog.create(post4)*/

// Endpoint para obter todas as postagens
app.get('/posts', (req, res) => {
    const posts = microblog.retrieveAll();
    res.json(posts);
})

// Endpoint para obter uma postagem específica por ID
app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const post = microblog.retrieve(id)

  if (post === -1) {
    res.status(404).json()
  } else {
    const onePost = microblog.posts.filter(post => post.id === id);
    res.json(onePost)
  }
})

app.delete('/posts/:id', (req, res) =>{
  const id = parseInt(req.params.id)
  const post = microblog.retrieve(id)

  if (post === -1) {
    res.status(404).json()
  } else {
    microblog.delete(id)
    res.status(204).json()
  }
})

app.post('/posts', (req, res) =>{
  const { text } = req.body;

  const id = Date.now()

  const post = new Post(id, text, 0)
  microblog.create(post);

  res.status(201).json(post)
})

app.put('/posts/:id', (req, res) =>{
  const id = parseInt(req.params.id)
  const post = microblog.retrieve(id)
  
  if (post === -1) {
    res.status(404).json()
  } else {
    const { text, likes } = req.body;
    const onePost = microblog.posts.filter(post => post.id === id);

    onePost[0].text = text;
    onePost[0].likes = likes;
    microblog.update(onePost[0]);
    
    res.status(200).json()
  }
})

app.patch('/posts/:id', (req, res) =>{
  const id = parseInt(req.params.id)
  const post = microblog.retrieve(id)
  
  if (post === -1) {
    res.status(404).json()
  } else {
    const { text, likes } = req.body;
    const onePost = microblog.posts.filter(post => post.id === id);

    onePost[0].text = text;
    onePost[0].likes = likes;
    microblog.update(onePost[0]);
    
    res.status(200).json()
  }
})

app.patch('/posts/:id/like', (req, res) =>{
  const id = parseInt(req.params.id)
  const post = microblog.retrieve(id)
  
  if (post === -1) {
    res.status(404).json()
  } else {
    const onePost = microblog.posts.filter(post => post.id === id);

    onePost[0].likes++
    microblog.update(onePost[0]);
    
    res.status(200).json()
  }
})

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});