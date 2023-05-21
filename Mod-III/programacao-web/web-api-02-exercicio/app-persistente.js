const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000

const { MicroblogPersistente } = require('./build/microblogPersistente');

app.get('/posts', async (req, res) => {
    try {
      const microblog = new MicroblogPersistente()
      const posts = await microblog.retrieveAll();
  
      res.json(posts);
    } catch (error) {
      res.status(404).json()
    }
});

app.get('/posts/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const microblog = new MicroblogPersistente();
        const post = await microblog.retrieve(postId);
        
        if (!post) {
            res.status(404).json();
        } else {
            res.json(post);
        }
    } catch (error) {
        res.status(404).json();
    }
});

/* precisa revisão 
  app.post('/posts', async (req, res) => {
    const { text } = req.body;
    try {
      const microblog = new MicroblogPersistente();
      const createdPost = await microblog.create(text);
  
      res.status(201).json(createdPost);
    } catch (error) {

        res.status(500).json({ error: 'Erro ao criar o post' });
    }
  });
  
  app.put('/posts/:id', async (req, res) => {
    const postId = req.params.id;
    const { text, likes } = req.body;
    try {
      const microblog = new MicroblogPersistente();
      const updatedPost = await microblog.update(postId, text, likes);
  
      if (!updatedPost) {
        res.status(404).json({ error: 'Post não encontrado' });
      } else {
        res.status(200).json(updatedPost);
      }
    } catch (error) {
      console.error('Erro ao atualizar o post:', error);
      res.status(500).json({ error: 'Erro ao atualizar o post' });
    }
  });
  
  app.delete('/posts/:id', async (req, res) => {
    const postId = req.params.id;
    try {
      const microblog = new MicroblogPersistente();
      const deletedPost = await microblog.delete(postId);
  
      if (!deletedPost) {
        res.status(404).json({ error: 'Post não encontrado' });
      } else {
        res.status(200).json({ message: 'Post excluído com sucesso' });
      }
    } catch (error) {
      console.error('Erro ao excluir o post:', error);
      res.status(500).json({ error: 'Erro ao excluir o post' });
    }
});
  */

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});