export class Post {
    id: number
    text: string
    likes: number

    constructor(id: number, text: string, likes: number) {
        this.id = id;
        this.text = text;
        this.likes = likes
    }
}

export class Microblog {
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

    delete(id: number) {
        // se encontrar o post, vai dar splice no index do array onde atende a condição de ter o id passado pelo user
        if (this.retrieve(id) != -1) {
            this.posts.splice(this.posts.findIndex((post: Post) => post.id === id), 1);
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

    // como eu tava fazendo manual, quando res.json() do get era chamado, incluia caracteres de escape p/ deixar o JSON válido, o que criava vários \n aleatórios
    retrieveAll(): Post[] {
        return this.posts;
    }
}

/* testes

const microblog = new Microblog();

const post1 = new Post(1, "Primeiro post", 10);
const post2 = new Post(2, "Segundo post", 5);
const post3 = new Post(3, "Terceiro post", 2);
const post4 = new Post(1, "Quarto post", 2);

microblog.create(post1);
microblog.create(post2);
microblog.create(post3);
console.log(microblog.retrieveAll())

microblog.delete(2)
console.log("\nDepois da suposta exclusão");
console.log(microblog.retrieveAll())

microblog.update(post4)
console.log("\nDepois da suposta substituição");
console.log(microblog.retrieveAll())

microblog.delete(3)
console.log(microblog.retrieveAll())
*/