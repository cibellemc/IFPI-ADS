"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microblog = exports.Post = void 0;
class Post {
    constructor(id, text, likes) {
        this.id = id;
        this.text = text;
        this.likes = likes;
    }
}
exports.Post = Post;
class Microblog {
    constructor() {
        this.posts = [];
    }
    create(post) {
        this.posts.push(post);
    }
    retrieve(id) {
        for (let i = 0; i < this.posts.length; i++) {
            if (id == this.posts[i].id) {
                return id;
            }
        }
        return -1;
    }
    delete(id) {
        // se encontrar o post, vai dar splice no index do array onde atende a condição de ter o id passado pelo user
        if (this.retrieve(id) != -1) {
            this.posts.splice(this.posts.findIndex((post) => post.id === id), 1);
        }
    }
    update(p) {
        if (this.retrieve(p.id) != -1) {
            for (let i = 0; i < this.posts.length; i++) {
                if (this.posts[i].id == p.id) {
                    this.posts[i] = p;
                }
            }
        }
    }
    // como eu tava fazendo manual, quando res.json() do get era chamado, incluia caracteres de escape p/ deixar o JSON válido, o que criava vários \n aleatórios
    retrieveAll() {
        return this.posts;
    }
}
exports.Microblog = Microblog;
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
