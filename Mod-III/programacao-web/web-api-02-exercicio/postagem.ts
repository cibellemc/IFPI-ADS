class Post {
    id: number
    text: string
    likes: number

    constructor(id: number, text: string, likes: number) {
        this.id = id;
        this.text = text;
        this.likes = likes

    }
}

class Microblog {
    posts: Post[] = []

    create(post: Post){
        this.posts.push(post)
    }

    retrieve(id: number){
        for (let i = 0; i < this.posts.length; i++) {
            if (id == this.posts[i].id) {
                return id
            }
        }
        return -1
    }

    delete(p: Post) {
        // se encontrar o post, vai dar splice no index do array onde atende a condição de ter o id passado pelo user
        if (this.retrieve(p.id) != -1) {
            this.posts.splice(this.posts.findIndex(post => post.id === p.id), 1);
        }
    }

    update(p: Post){
        if (this.retrieve(p.id) != -1) {
            for (let i = 0; i < this.posts.length; i++) {
                if (this.posts[i].id == p.id) {
                    this.posts[i] = p
                }
            }
        }
    }

    retrieveAll(): string {
        let postsJSON = "[";
      
        this.posts.forEach((post, index) => {
          postsJSON += `{
            "id": "${post.id}",
            "text": "${post.text}",
            "likes": "${post.likes}"
          }`
      
          if (index !== this.posts.length - 1) {
            postsJSON += ","
          }
        });
      
        postsJSON += "]";
      
        return postsJSON;
      }
      
}