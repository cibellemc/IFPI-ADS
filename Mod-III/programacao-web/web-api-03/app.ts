import express, { Request, Response } from 'express'
import cors from 'cors'
import { Pool } from 'pg'

const pool = new Pool({
  user: 'postgres',
  password: '01111971',
  host: 'localhost',
  database: 'social_media',
  port: 5432, 
})

const app = express()
const port = 3000
app.use(cors())

app.use(express.json())

app.get('/posts', async (req: Request, res: Response) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM posts')
    const posts = result.rows

    client.release()

    res.json(posts)

  } catch (error) {
    console.error('Error executing SQL query', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Rota para obter um post específico pelo ID
app.get('/posts/:id', async (req: Request, res: Response) => {
  const postId: number = parseInt(req.params.id)

  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM posts WHERE id = $1', [postId])
    const post = result.rows[0]

    client.release()

    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }

    res.json(post)

  } catch (error) {
    console.error('Erro ao buscar o post no banco de dados', error)
    res.status(500).json({ error: 'Erro ao buscar o post no banco de dados' })
  }
})


app.post('/posts', async (req, res) => {
  try {
    const { title, text, likes } = req.body

    const query = 'INSERT INTO posts (title, text, likes, date) VALUES ($1, $2, $3, NOW()) RETURNING *'
    const values = [title, text, likes]

    const result = await pool.query(query, values)
    const newPost = result.rows[0]

    res.status(201).json(newPost)

  } catch (error) {
    console.error('Erro ao criar nova postagem:', error)
    res.status(500).json({ message: 'Erro ao criar nova postagem' })
  }
})


// Rota para atualizar um post pelo ID
app.put('/posts/:id', async (req: Request, res: Response) => {
  const postId: number = parseInt(req.params.id)
  const { title, text, date, likes } = req.body

  try {
    const client = await pool.connect()
    const result = await client.query(
      'UPDATE posts SET title = $1, text = $2, date = $3, likes = $4 WHERE id = $5 RETURNING *',
      [title, text, date, likes, postId]
    )

    const updatedPost = result.rows[0]
    client.release()

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' })
    }

    res.json(updatedPost)

  } catch (error) {
    console.error('Erro ao atualizar o post no banco de dados', error)
    res.status(500).json({ error: 'Erro ao atualizar o post no banco de dados' })
  }
})

app.get('/posts/:id/comments', async (req, res) => {
  const postId: number = parseInt(req.params.id)

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM comments WHERE post_id = $1', [postId]);
    const comments = result.rows;
    client.release();

    res.json(comments);
  } catch (error) {
    console.error('Error retrieving comments from the database', error);
    res.status(500).json({ error: 'Error retrieving comments from the database' });
  }
});

app.post('/posts/:id/comments', async (req, res) => {
  try {
    const postId: number = parseInt(req.params.id)
    const { author, content } = req.body;

    const query = 'INSERT INTO comments (post_id, author, content, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *';
    const values = [postId, author, content];

    const result = await pool.query(query, values);
    const newComment = result.rows[0];

    res.status(201).json(newComment);

  } catch (error) {
    console.error('Erro ao criar novo comentário:', error);
    res.status(500).json({ message: 'Erro ao criar novo comentário' });
  }
})

// Rota para incrementar os likes de um post pelo ID
app.patch('/posts/:id/like', async (req, res) => {
  const postId = parseInt(req.params.id)

  try {
    const client = await pool.connect()
    const result = await client.query('UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *', [postId])
    const updatedPost = result.rows[0]

    client.release()

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' })
    }

    res.json(updatedPost)

  } catch (error) {
    console.error('Erro ao incrementar os likes do post no banco de dados', error)
    res.status(500).json({ error: 'Erro ao incrementar os likes do post no banco de dados' })
  }
})

// Rota para excluir um post pelo ID
app.delete('/posts/:id', async (req: Request, res: Response) => {
  const postId: number = parseInt(req.params.id)

  try {
    const client = await pool.connect()
    const result = await client.query('DELETE FROM posts WHERE id = $1 RETURNING *', [postId])
    const deletedPost = result.rows[0]

    client.release()

    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' })
    }

    res.json(deletedPost)
    
  } catch (error) {
    console.error('Erro ao excluir o post no banco de dados', error)
    res.status(500).json({ error: 'Erro ao excluir o post no banco de dados' })
  }
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})