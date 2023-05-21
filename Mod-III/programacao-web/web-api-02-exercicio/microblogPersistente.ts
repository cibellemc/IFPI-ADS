
// instalar dependências: npm install pg
import { Pool } from 'pg';
// como é ts, só aceitou ts
import { Post } from './postagem';

class MicroblogPersistente {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'microblog',
      password: '01111971',
      port: 5432,
    });
  }

  // antes de tudo precisou a criação do database e da tabela posts
  // obs: não  colocar primary key
  async create(post: Post): Promise<void> {
    const query = 'INSERT INTO posts (id, text, likes) VALUES ($1, $2, $3)';
    const values = [post.id, post.text, post.likes];

    try {
      await this.pool.query(query, values);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  async retrieveAll(): Promise<Post[]> {
    const query = 'SELECT * FROM posts';

    try {
      const result = await this.pool.query(query);
      return result.rows;
    } catch (error) {
      return [];
    }
  }

/* precisa revisão 
  async retrieve(id: number): Promise<Post | null> {
    const query = 'SELECT * FROM posts WHERE id = $1';
    const values = [id];

    try {
      const result = await this.pool.query(query, values);
      if (result.rows.length > 0) {
        const { id, text, likes } = result.rows[0];
        return new Post(id, text, likes);
      }
      return null;
    } catch (error) {
      console.error('Error retrieving post:', error);
      return null;
    }
  }

  async update(post: Post): Promise<void> {
    const query = 'UPDATE posts SET text = $1, likes = $2 WHERE id = $3';
    const values = [post.text, post.likes, post.id];

    try {
      await this.pool.query(query, values);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  }

  async delete(id: number): Promise<void> {
    const query = 'DELETE FROM posts WHERE id = $1';
    const values = [id];

    try {
      await this.pool.query(query, values);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
}
*/

}

export { MicroblogPersistente };
