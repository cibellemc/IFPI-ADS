import express, { Request, Response } from 'express';
import { posts, Post } from './posts';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());

app.get('/posts', (req: Request, res: Response) => {
  res.json(posts);
});

app.get('/posts/:id', (req: Request, res: Response) => {
  const postId: number = parseInt(req.params.id);
  const post: Post | undefined = posts.find((p) => p.id == postId);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  res.json(post);
});

app.post('/posts', (req: Request, res: Response) => {
  const { title, text, date, likes }: Post = req.body;
  const newPost: Post = { id: posts.length + 1, title, text, date, likes };

  posts.push(newPost);

  res.status(201).json(newPost);
});

app.put('/posts/:id', (req: Request, res: Response) => {
  const postId: number = parseInt(req.params.id);
  const { title, text, date, likes }: Post = req.body;
  const postIndex: number = posts.findIndex((p) => p.id == postId);

  if (postIndex == -1) {
    return res.status(404).json({ error: 'Post not found' });
  }

  const updatedPost: Post = { id: postId, title, text, date, likes };
  posts[postIndex] = updatedPost;

  res.json(updatedPost);
});

app.patch('/posts/:id/like', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }

  posts[postIndex].likes += 1;

  res.json(posts[postIndex]);
});


app.delete('/posts/:id', (req: Request, res: Response) => {
  const postId: number = parseInt(req.params.id);
  const postIndex: number = posts.findIndex((p) => p.id == postId);

  if (postIndex == -1) {
    return res.status(404).json({ error: 'Post not found' });
  }

  const deletedPost: Post = posts.splice(postIndex, 1)[0];

  res.json(deletedPost);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});